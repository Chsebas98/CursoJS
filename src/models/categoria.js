const { Schema, model, SchemaTypes } = require('mongoose');

const catSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre requerido'],
    },
    estado: {
        type: Boolean,
        default: true
    },
    usuario: {
        type: SchemaTypes.ObjectId,
        ref: 'Usuario',
        required: true
    }
})

module.exports = model('categorias', catSchema);