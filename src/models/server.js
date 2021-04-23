const express = require('express')
const cors = require('cors');
const dbconnect = require('../config/database/config');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        //middlewares
        this.middlewares();
        //Rutas
        this.routes();
        //Base de datos
        this.bdconexion();
    }


    /* ------------------------------------------------
    --------------------METODOS------------------------
    ---------------------------------------------------*/

    async bdconexion() {
        await dbconnect();
    }

    middlewares() {
        //CORS
        this.app.use(cors());

        //Permitir q el body obtenga desde json
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/usuarios', require('../routes/user'));
        this.app.use('/auth', require('../routes/auth'));
    }

    //Puerto de escucha
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor en puerto', this.port);
        });
    }
}

module.exports = Server;