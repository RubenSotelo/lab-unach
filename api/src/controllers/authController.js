const {Usuario} = require("../modules/models")


async function authUser(req, res) {
    try {
        const {email} = req.body;
        const emailNuevo = email.toUpperCase(); 
        const user = await Usuario.findOne({where: {email:emailNuevo}, include: [{
                association: 'tipo',
                attributes:['nombre'],
                required: true
            }]
        });
        return user == null ? res.json(false) : res.json(true);
    } catch (error) {
        return null;
    }
}

module.exports = {authUser}