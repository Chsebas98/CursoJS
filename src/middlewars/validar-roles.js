const { request, response } = require('express');
const User = require('../models/user');
const { validationResult } = require('express-validator');

const validUser = async(req = request, res = response) => {
    const id = req.header('id');
    const user = await User.findById(id);
    if (!user) {
        return res.status(400).json({
            msg: 'No existe el usuario'
        })
    }
    try {
        /* const user = await User.findById(id); */
        if (user.rol == "ADMIN_ROL") {
            return res.status(200).json({
                msg: 'ADMIN',
                user
            })
        }
        res.status(200).json({
            msg: 'CLIENTE',
            user
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            msg: 'Usuario incorrecto (tipo)'
        })
    }

}

module.exports = {
    validUser
};