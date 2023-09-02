const mysql = require('mysql2/promise');
const  DBConfig = require('./db.config');
require('dotenv').config;

// const poolConfig = {
//     host: 'containers-us-west-37.railway.app',
//     user: 'root',
//     password: '8WiXCEM1TfaJKPKPYbnW',
//     port: 8051,
//     database: 'railway'
// };

const poolConfig = {
    host: DBConfig.HOST,
    user: DBConfig.USER,
    password: DBConfig.PASSWORD,
    database: DBConfig.DB_NAME
};

module.exports = mysql.createPool(poolConfig);
