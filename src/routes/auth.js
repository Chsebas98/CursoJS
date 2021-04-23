const { Router } = require('express');
const { check } = require('express-validator');
const { login } = require('../controllers/auth');
const router = Router();

router.post('/login', [check('correo', 'El correo no es valido verifique el campo').isEmail()], login);


module.exports = router;