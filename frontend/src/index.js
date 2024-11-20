import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { KeycloakProvider } from 'keycloak-react-web';
import Keycloak from 'keycloak-js';
import { useState, useEffect } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));

const isLocalhost =
  window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
const isInContainer = window.location.port === '';

const keycloakUri = !isLocalhost
  ? `${window.location.protocol}//${window.location.hostname}/keycloak/`
  : isInContainer
  ? 'http://localhost/keycloak/'
  : 'http://localhost/keycloak/';


const settings = {
  url: keycloakUri,
  realm: 'student-chatbot',
  clientId: 'student-chatbot',
};
export const authInstance = new Keycloak(settings);


const AppWrapper = () => {
  const [isAuthenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    authInstance.onReady = () => {
      setAuthenticated(authInstance.authenticated);
    };
  }, []);

  return (
    <KeycloakProvider client={authInstance}>
      <React.StrictMode>
        <App authenticated={isAuthenticated} authInstance={authInstance} />
      </React.StrictMode>
    </KeycloakProvider>
  );
};

root.render(<AppWrapper />);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
