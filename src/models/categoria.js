const { Schema, model, SchemaTypes } = require('mongoose');

const catSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre requerido'],
        unique: true
    },
    estado: {
        type: Boolean,
        default: true
    },
    usuario: {
        type: SchemaTypes.ObjectId,
        ref: 'User',
        required: true
    }
})

module.exports = model('categorias', catSchema);