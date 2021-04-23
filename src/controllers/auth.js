const { request, response } = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const genToken = require('../helpers/generera-jwt');

const login = async(req = request, res = response) => {

    const { correo, password } = req.body;

    try {
        //Verificar si el correo existe
        const user = await User.findOne({ correo });
        if (!user) {
            res.status(400).json({
                msg: 'Usuario o contraseña incorrecta (User)'
            })
        }
        //Verificar que el usuario este activo
        if (!user.estado) {
            res.status(400).json({
                msg: 'Usuario o contraseña incorrecta (Estado)'
            })
        }
        //Verificar q la clave sea correcta
        const validpass = bcrypt.compareSync(password, user.password);
        if (!validpass) {
            return res.status(400).json({
                msg: 'Usuario o contraseña incorrecta (Clave)'
            })
        }
        //Crear Token
        const token = await genToken(user.id);
        //Respuesta
        res.json({
            msg: 'Login exitoso',
            token,
            correo,
            password
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Error, problemas en el servidor hable con el admin'
        })
    }
}

module.exports = {
    login
}