// const DBConfig = {
//     HOST: process.env.DB_RAILWAY_HOST || 'containers-us-west-150.railway.app',
//     USER: process.env.DB_RAILWAY_USERNAME || 'root',
//     PASSWORD: process.env.DB_RAILWAY_PASSWORD || 'OUN6iePSwOn8eHUI9OAz',
//     PORT: process.env.DB_RAILWAY_PORT ? parseInt(process.env.DB_RAILWAY_PORT) : 8051,
//     DB_RAILWAY_NAME: process.env.DB_RAILWAY_NAME || 'railway'
// };

const DBConfig = {
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USERNAME,
    PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME
};


module.exports = DBConfig;
