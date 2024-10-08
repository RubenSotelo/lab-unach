const {Usuario} = require('./user')
const {Tipo} = require('./tipo')

Tipo.hasOne(Usuario, {foreignKey: 'id_tipo'});
Usuario.belongsTo(Tipo, {foreignKey: "id_tipo"});

module.exports = {Tipo, Usuario}