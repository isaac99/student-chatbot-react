const express = require('express');
const bodyParser = require('body-parser');
const { queryDatabase } = require('./queries');

var jsonParser = bodyParser.json({ limit: '50mb', extended: true });
const router = express.Router();


router.get('/stuff', jsonParser, async function (req, res) {
    const { client_id, browser } = req.query;
    const response = await queryDatabase();
    res.json({ response: response });
  });

  module.exports = router;