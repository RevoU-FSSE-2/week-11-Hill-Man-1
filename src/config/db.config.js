const DBConfig = {
    HOST: process.env.DB_RAILWAY_HOST || 'containers-us-west-37.railway.app',
    USER: process.env.DB_RAILWAY_USER || 'root',
    PASSWORD: process.env.DB_RAILWAY_PASSWORD || '8WiXCEM1TfaJKPKPYbnW',
    PORT: process.env.DB_RAILWAY_PORT ? parseInt(process.env.DB_RAILWAY_PORT) : 8051,
    DB_RAILWAY_NAME: process.env.DB_RAILWAY_NAME || 'railway'
};

module.exports = DBConfig;
