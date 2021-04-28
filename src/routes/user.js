const { Router } = require('express');
const { check } = require('express-validator')
const router = Router();
//Import controllers
const { userget, userpost, userput, userdelete } = require('../controllers/user');
const { validToken } = require('../middlewars/validar-jwt');
const { validAdRol } = require('../middlewars/validar-roles');

//Rutas
router.get('/', validToken, userget);

router.post('/', [check('correo', 'El correo no es valido verifique el campo').isEmail()],
    userpost);

router.put('/:id', [validToken], userput);

router.delete('/:id:rol', [validToken, validAdRol], userdelete);



module.exports = router;