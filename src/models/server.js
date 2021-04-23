const express = require('express')
const cors = require('cors')

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        //middlewares
        this.middlewares();
        //Rutas
        this.routes();
    }

    middlewares() {
        //CORS
        this.app.use(cors());

        //Permitir q el body obtenga desde json
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/usuarios', require('../routes/user'));
    }

    //Puerto de escucha
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor en puerto', this.port);
        });
    }
}

module.exports = Server;