const {Tipo, Usuario} = require("../modules/models"); //Importacion de los modelos a utilizar

async function crearUser(req, res) { //parametos de funcionametio request y respose
    try {
        const { nombre, email, tipo } = req.body; //estracion de los datos mandados desde el cliente
        const emailNuevo = email.toUpperCase(); //pasamos a mayusculas nuestro correo
        const tipoSelec = await Tipo.findOne({attributes:["id_tipo"], where: {nombre:tipo}}); 
        const id_tipo = tipoSelec.dataValues.id_tipo;
        const userNew = await Usuario.create({"nombre":nombre, "email":emailNuevo, "id_tipo":id_tipo}); //realizamos la consulta de insersion 
        res.json(userNew); //mandamos como respuesta el valor insertado en nuestra base de datos 
    } catch (error) {
        return res.status(500).json({ Error: error.message }); //mandamos un error si se encientra algun tipo de conflicto en la insersion
    }
}

async function userSelec(req, res) {
    try {
        const { email } = req.params;
        const emailNuevo = email.toUpperCase();
        const user = await Usuario.findOne({where: {email:emailNuevo}, include: {
                association: 'tipo',
                attributes:['nombre'],
                required: true,
            }
        });
        console.log(user);
        res.json(user);
    } catch (error) {
        return res.status(500).json({ Error: error.message });
    }
}

async function admins(req, res) {
    try {
        const users = await Usuario.findAll({
            attributes:["id_usuario", "nombre", "email"], include: {
                association: 'tipo',
                attributes:["nombre"],
                where: {nombre:"ADMINISTRADOR"}
            },
        });
        return users.length === 0? res.json({error: "Ningun Administrador registrado"}): res.json(users);
    } catch (error) {
        return res.status(500).json({ Error: error.message });
    }   
}

async function profesores(req, res) {
    try {
        const users = await Usuario.findAll({
            attributes:["id_usuario", "nombre", "email"], include: {
                association: 'tipo',
                attributes:["nombre"],
                where: {nombre:"PROFESOR"}
            },
        });
        return users.length === 0? res.json({error: "Ningun Profesor registrado"}): res.json(users);
    } catch (error) {
        return res.status(500).json({ Error: error.message });
    }  
}

async function alumnos(req, res) {
    try {
        const users = await Usuario.findAll({
            attributes:["id_usuario", "nombre", "email"], include: {
                association: 'tipo',
                attributes:["nombre"],
                where: {nombre:"ALUMNO"}
            },
        });
        return users.length === 0? res.json({error: "Ningun Alumno registrado"}): res.json(users);
    } catch (error) {
        return res.status(500).json({ Error: error.message });
    }  
}


module.exports = { userSelec, crearUser, admins, profesores, alumnos}