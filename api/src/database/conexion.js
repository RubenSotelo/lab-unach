const {Sequelize} = require("Sequelize"); //importacion de libreria para el uso de las Herramientas ORM
const env = require("../config");

const config = { //Importamos nuestas varibles de entorno como valores para para conexion a la base de datos
  database: env.development.database,
  username: env.development.username,
  password: env.development.password,
  host: env.development.host,
  dialect: "postgres", // definimos que tipo de gestor de base de datos vamos a tener la conexion
};

const sequelize = new Sequelize(config);// creamos la conexion a la base de datos 

sequelize.authenticate() //evaliamos si la comunicacion con la base detos a sido establesida correctamente 
  .then(() => {
    console.log("Conectado a la base de datos ");
  })
  .catch((err) => {
    console.log("No se conecto");
  });

module.exports = { sq: sequelize }; //exportamos nuesta conexion 
