const express= require ("express");
require ('dotenv/config');
const { db }= require ("./config/db.connection");
const bodyParser= require ("body-parser");
const authRouter = require ("./routes/auth-routes");
const adminRouter = require ("./routes/admin-routes");
const librarianRouter = require ("./routes/librarian-routes");
const userRouter = require ("./routes/user-routes");
const { Redis }= require ("ioredis");
const { JWT_SIGN }= require ("./config/jwt"); 
const OpenApiValidator= require ('express-openapi-validator');
const yaml= require ('yaml');
const  swaggerUi = require ('swagger-ui-express');
const fs = require('fs');



const app = express();
const port = process.env.DB_RAILWAY_PORT || 8051;

app.use(bodyParser.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(yaml.parse(fs.readFileSync('./doc/openapi.yaml', 'utf8'))))
app.use(OpenApiValidator.middleware({ 
    apiSpec: 'doc/openapi.yaml'
}))

app.use('/auth', authRouter);
app.use('/admin', adminRouter);
app.use('/librarian', librarianRouter);
app.use('/user', userRouter);

(async () => {
    try {
        await db.connect();
        console.log("MySQL successfully connected");
    } catch (err) {
        console.error("Error connecting to MySQL:", err);
    }
});

app.listen(port, () => { 
    console.log(`Server is running on port ${port}`);
});
