const { DataTypes } = require("Sequelize"); // Importacion del componete para la definicon de tipos de tados en las tablas
const {sq} = require("../database/conexion.js"); //Importacion de la coneccion 

const Usuario = sq.define( //Defimimos el modelo de tabla usuario
    "usuario",
    {
        id_usuario: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: DataTypes.STRING,
        email:  DataTypes.STRING,
    },
    {
      tableName: "usuario",
      timestamps: false,
    }
  );
module.exports = {Usuario} //Importamos el modelo