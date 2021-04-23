const mongoose = require('mongoose');

const dbconnect = async() => {
    try {
        await mongoose.connect('mongodb://localhost:27017/dbcurso', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Conexión a bd exitosa')
    } catch (error) {
        console.log('Sin conexion bd');
        console.log(error);
    }

}

module.exports = dbconnect;