const { response, request } = require('express');
const Cat = require('../models/categoria');
const { validationResult } = require('express-validator');

const catget = async(req = request, res = response) => {
    const id = req.params.id;
    const cats = await Cat.find({ usuario: id, estado: true });
    res.json({
        msg: 'Cat-Get',
        cats
    })
}

const catgetId = async(req = request, res = response) => {
    const id = req.params.id;
    const cats = await Cat.findById(id);
    console.log(cats);
    res.json({
        msg: 'Cat-GetById',
        cats
    })
}

const catpost = async(req = request, res = response) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors
        });
    }
    const id = req.params.id;
    const usuario = id;
    const { nombre, estado } = req.body;
    const cats = new Cat({ nombre, estado, usuario })
        /* console.log(cats); */
        //Categoria existe
    const catexist = await Cat.findOne({ nombre });
    if (catexist) {
        res.status(400).json({
            msg: 'Categoria existente en bd'
        })
    }

    //Guardado en bd
    cats.save();
    res.json({
        msg: 'Cat-Post',
        catexist,
        cats

    })
}

const catput = async(req = request, res = response) => {
    const id = req.params.id;
    let { nombre } = req.body;
    const cats = await Cat.findByIdAndUpdate(id, { nombre });
    res.json({
        msg: 'Cat-Put',
        id,
        cats
    })
}

const catdelete = async(req = request, res = response) => {
    const id = req.params.id;
    const cats = await Cat.findByIdAndUpdate(id, { estado: false });
    res.json({
        msg: 'Cat-Delete',
        cats
    })
}


module.exports = {
    catget,
    catgetId,
    catpost,
    catput,
    catdelete
}