const dotenv = require("dotenv");
dotenv.config();

module.exports = {
    development: {
        server_port: process.env.PORT,
        server_static: process.env.STATIC,
        //Env Postgres
        username: process.env.DBUSER,
        password: process.env.DBPASSWORD,
        database: process.env.DATABASE,
        host: process.env.DBHOST,
        dialect: "postgres"
    },
    test: {
        //Env Postgres
        username: process.env.DBUSER,
        password: process.env.DBPASSWORD,
        database: process.env.DATABASE,
        host: process.env.DBHOST,
        dialect: "postgres"
    },
    production: {
        //Env Postgres
        username: process.env.DBUSER,
        password: process.env.DBPASSWORD,
        database: process.env.DATABASE,
        host: process.env.DBHOST,
        dialect: "postgres"
    }
}