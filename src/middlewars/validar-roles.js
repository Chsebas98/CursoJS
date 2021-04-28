const { request, response } = require('express');
const User = require('../models/user');
const { validationResult } = require('express-validator');

//valido si es un rol existente
async function validUs(id) {

    let vid = await User.findOne({ rol });
    let resp = false;

    if (!vid) {
        /*         resp = true; */
    }

    if (vid !== 'USER_ROL' || 'ADMIN_ROL') {
        resp = true
    }
    /*     console.log(vid); */
    return resp;
}
//Valido si es Administrador
const validAdRol = async(req = request, res = response, next) => {
    const id = req.params.id;
    let resp = await validUs(id);
    console.log(resp);
    if (resp == true) {
        return res.status(400).json({
            msg: 'Usuario inválido'
        })
    }
    const usuario = await User.findById(id);
    /* console.log(usuario); */
    if (usuario.rol === 'ADMNI_ROL') {
        next()
    }
}

//Valido si es Usuario
const validUsRol = (req = request, res = response, next) => {
    const id = req.params.id;
    validUs(id);
}

module.exports = {
    validAdRol,
    validUsRol
};