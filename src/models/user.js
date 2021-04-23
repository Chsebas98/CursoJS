const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre requerido'],
    },
    correo: {
        type: String,
        required: [true, 'Correo requerido'],
        unique: true
    },
    password: {
        type: String
    },
    estado: {
        type: Boolean,
        default: true
    }
})


module.exports = model('users', userSchema)