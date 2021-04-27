const { response, request } = require('express');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

const userget = async(req = request, res = response) => {
    // Validacion tipo de usuario
    const users = await User.find({ estado: true })
    res.json({
        msg: 'Api- Get',
        users
    });

}

const userpost = async(req = request, res = response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors
        });
    }
    const { nombre, correo, password, estado } = req.body;

    const user = new User({ nombre, correo, password, estado });

    //Enciptado de password
    const salt = bcrypt.genSaltSync(); //numero de vueltas q da para encriptar
    user.password = bcrypt.hashSync(password, salt);
    //Correo existe
    const mailexist = await User.findOne({ correo });
    if (mailexist) {
        res.status(400).json({
            msg: 'Usuario existente en bd'
        })
    }


    user.save();
    res.json({
        msg: 'Api- Post',
        mailexist,
        user
    })
}


let userput = async(req = request, res = response) => {
    const id = req.params.id;
    let { password, ...resto } = req.body; //se usa el resto para scara el password aparte

    const salt = bcrypt.genSaltSync(); //numero de vueltas q da para encriptar
    password = bcrypt.hashSync(password, salt)

    const user = await User.findByIdAndUpdate(id, resto);
    res.json({
        msg: 'Api- Put',
        id,
        user
    })
}


let userdelete = async(req = request, res = response) => {
    const id = req.params.id;
    const user = await User.findOneAndUpdate(id, { estado: false });
    res.json({
        msg: 'Api- Delete',
        user
    })
}

module.exports = {
    userget,
    userpost,
    userput,
    userdelete
}