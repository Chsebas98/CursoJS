const { response, request } = require('express');
const Produ = require('../models/producto');
const Cat = require('../models/categoria');
const { validationResult } = require('express-validator');
const User = require('../models/user');

const pdget = async(req = request, res = response) => {
    const id = req.params.id;
    const prod = await Produ.find({ usuario: id, disponible: true });
    res.json({
        msg: 'Producto-Get',
        prod
    })
}

const pdgetId = async(req = request, res = response) => {
    const id = req.params.id;
    const prod = await Produ.findById(id);
    /* console.log(cats); */
    res.json({
        msg: 'Producto-GetId',
        prod
    })
}

const pdpost = async(req = request, res = response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors
        });
    }
    //Recibo id de usuario ADMIN O CLIENTE
    const id = req.params.id;

    //Validar q sea Admin
    const user = await User.findById(id);
    if (user.rol == "ADMIN_ROL") {
        res.status(200).json({
            msg: 'ADMIN',
        })
    }

    const usuario = id;
    //Lo que recibo del body
    const { nombre, precio, description, categoria, disponible } = req.body;
    const cate = await Cat.findOne({ nombre: categoria });
    if (!cate) {
        res.status(400).json({
            msg: 'Categoria no existente en bd'
        })
    }

    //Lo que se guarda en bd
    const prod = new Produ({ nombre, usuario, precio, categoria, description, disponible });

    //Producto existente
    const prodexist = await Produ.findOne({ nombre });
    if (prodexist) {
        res.status(400).json({
            msg: 'Producto ya existe en bd'
        })
    }
    //Guardado en bd
    prod.save();
    res.json({
        msg: 'Producto-Post',
        categoria,
        prodexist,
        user,
        prod
    })
}

const pdput = async(req = request, res = response) => {
    const id = req.params.id;
    let { nombre, precio, description, categoria } = req.body;
    //Categoria a editar exista
    const cate = await Cat.findOne({ nombre: categoria });
    if (!cate) {
        return res.status(400).json({
            msg: 'Categoria no existente en bd'
        })
    }
    const prod = await Produ.findByIdAndUpdate(id, { nombre, precio, description, categoria });
    res.json({
        msg: 'Producto-Put',
        prod
    })
}

const pddelete = async(req = request, res = response) => {
    const id = req.params.id;
    const prod = await Produ.findByIdAndUpdate(id, { disponible: false });
    res.json({
        msg: 'Producto-Delete',
        prod
    })
}

module.exports = {
    pdget,
    pdgetId,
    pdpost,
    pdput,
    pddelete
}