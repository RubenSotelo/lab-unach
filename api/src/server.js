const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const config = require("./config");
const userRouter = require("./routes/userRouter");

const server = express();

//settings
server.set("port", config.development.server_port);

//MiddleWare
server.use(morgan("dev"));
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(express.static(config.development.server_static));

//Routes
server.use("/api/user", userRouter);
//server.use('/api/administrador', administradorURL)
//server.use('/api', authURL)

module.exports = server;
