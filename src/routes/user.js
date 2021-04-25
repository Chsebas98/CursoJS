const { Router } = require('express');
const { check } = require('express-validator')
const router = Router();
//Import controllers
const { userget, userpost, userput, userdelete } = require('../controllers/user');
const { validToken } = require('../middlewars/validar-jwt');

//Rutas
router.get('/', validToken, userget);

router.post('/', /* validRol, */ [check('correo', 'El correo no es valido verifique el campo').isEmail()],
    userpost);

router.put('/:id', userput);

router.delete('/:id', userdelete);



module.exports = router;