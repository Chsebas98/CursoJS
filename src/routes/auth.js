const { Router } = require('express');
const { check } = require('express-validator');
const { login } = require('../controllers/auth');
const { existeRol } = require('../middlewars/validar-roles');
const router = Router();

router.post('/login', [check('correo', 'El correo no es valido verifique el campo').isEmail(),
    check('password', 'Contraseña no puede estar vacia').notEmpty(), existeRol
], login);


module.exports = router;