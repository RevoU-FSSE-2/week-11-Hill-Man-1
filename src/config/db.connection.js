const mysql = require('mysql2/promise');
const  DBConfig = require('./db.config');
require('dotenv').config;

const poolConfig = {
    url: DBConfig.DB_URL,
    database: DBConfig.DB_NAME,
    host: DBConfig.HOST,
    password: DBConfig.PASSWORD,
    user: DBConfig.USER,
    port: DBConfig.PORT
};

module.exports = mysql.createPool(poolConfig);
