const { DataTypes } = require("Sequelize");
const {sq} = require("../database/conexion.js");

const Tipo = sq.define(
    "tipo",
    {
        id_tipo: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: DataTypes.STRING,
    },
    {
      tableName: "tipo",
      timestamps: false,
    }
  );

module.exports = {Tipo}