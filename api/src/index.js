const KeycloakBearerStrategy = require('passport-keycloak-bearer');
const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const passport = require('passport');


const app = express();
app.use(cors());

const keycloakServerUrl = process.env.KEYCLOAK_SERVER_URL || 'http://localhost/keycloak/';
const options = {
  realm: 'student-chatbot',
  url: keycloakServerUrl,
  name: 'keycloak',
};

const keycloakStrategy = new KeycloakBearerStrategy(options, (jwtPayload, done) => {
  // console.log('STANDARD ----------------->>>>> ss ');
  // console.log(jwtPayload);
  const user = {
    username: jwtPayload.preferred_username,
    groups: jwtPayload.student-chatbot_groups,
  };
  return done(null, user);
});


const port = process.env.PORT || 3010;
app.use(bodyParser.json({ limit: '50mb' }));


const corsOrigin = process.env.CORS_ORIGIN || '*';
console.log('Configured CORS ORIGIN: ' + corsOrigin);

app.use(function cors(req, res, next) {
  res.set('Access-Control-Allow-Origin', corsOrigin);
  res.set('Access-Control-Allow-Credentials', true);
  res.set('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
  res.set('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Content-Type');
  res.set('Content-Security-Policy', "frame-ancestors 'none'");
  res.set('Access-Control-Max-Age', '86400');
  res.set('X-Frame-Options', 'SAMEORIGIN');
  res.set('Cache-Control', 'no-cache, no-store');
  res.set('Vary', 'Origin');
  next();
});

app.use(passport.initialize());
passport.use(keycloakStrategy);

app.use('/messages', require('./messages/router'));

const server = http.Server(app);

const start = () => {
    server.listen(port, () => {
      console.log('app on listening on ' + port);
    });
};


module.exports = { app, start };
