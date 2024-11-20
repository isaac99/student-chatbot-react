const pg = require('pg');
const { Client } = pg
 
const client = new Client({
  user: 'postgres',
  password: 'postgres',
  host: 'postgres1',
  port: 5432,
  database: 'student_database',
})

client.connect()


const executeQuery = async (query, queryParams) => {
    const res = await client.query(query, queryParams)
    return res.rows;
};

module.exports = { executeQuery };
