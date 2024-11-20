const express = require('express');
const bodyParser = require('body-parser');
const { selectMessagesFromDb, saveMessageToDb } = require('./queries');

var jsonParser = bodyParser.json({ limit: '50mb', extended: true });
const router = express.Router();


router.get('/message-history', jsonParser, async function (req, res) {
    const { client_id, browser } = req.query;
    const response = await selectMessagesFromDb();
    res.json({ response: response });
});

router.post('/save-message', jsonParser, async function (req, res) {
  const { messageText, teacherId, studentName } = req.body;
  console.log('messageText: ', messageText);
  console.log('teacherId: ', teacherId);
  console.log('studentName: ', studentName);
  const response = await saveMessageToDb(messageText, teacherId, studentName);
  res.json({ response: response });

});

module.exports = router;