import * as dotenv from 'dotenv';
dotenv.config();

module.exports = {
    port: process.env.PORT || 3000,
    db: {
        host: process.env.DB_HOST,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB,
    },
};