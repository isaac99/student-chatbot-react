const { executeQuery } = require('../db_utils/db_utils');


const MESSAGES_TABLE = 'messages';

module.exports.selectMessagesFromDb = async () => {
    const query = `SELECT * FROM ${MESSAGES_TABLE}`;

    const messages = await executeQuery(query);

    console.log('Messages:', messages);

    return messages;
}


module.exports.saveMessageToDb = (messageText, teacherId, studentName) => {
    console.log(`Saving message: ${messageText} for ${studentName} from teacher ${teacherId}`);

    const values = [teacherId, studentName, messageText];

    const query = `INSERT INTO ${MESSAGES_TABLE}(teacher_id, student_name, message_text) VALUES($1, $2, $3)`;

    executeQuery(query, values);
}