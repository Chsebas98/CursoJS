const { Schema, model, SchemaTypes } = require('mongoose');

const pdSchema = new Schema({
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
    },
    precio: {
        type: Number,
        required: [true, 'Precio requerido'],
        default: 0
    },
    categoria: {
        type: SchemaTypes.ObjectId,
        required: [true, 'Categoria requerida'],
        ref: 'Categoria'
    }
});

module.exports = model('productos', pdSchema);