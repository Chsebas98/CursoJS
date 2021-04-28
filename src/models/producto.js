const { Schema, model, SchemaTypes } = require('mongoose');

const pdSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre requerido'],
        unique: true
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
        type: SchemaTypes.String,
        required: [true, 'Categoria requerida'],
        ref: 'Cat'
    },
    description: {
        type: String,
        required: [true, 'Descripcion de producto requerida']
    },
    disponible: {
        type: Boolean,
        required: true,
        default: true
    }
});

module.exports = model('productos', pdSchema);