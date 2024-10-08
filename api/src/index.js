const server = require('./server');
const {sq} = require("./database/conexion");

async function main() {
    await sq.sync({force: false});
    
    server.listen(server.get('port'), () =>{
        console.log('Servidor en el puerto ',server.get('port'));
    });
}

main()