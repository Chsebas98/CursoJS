const { Router } = require('express');
const { check } = require('express-validator')
const router = Router();
//Import controllers
const { userget, userpost, userput, userdelete } = require('../controllers/user');

//Rutas
router.get('/', userget);

router.post('/', [check('correo', 'El correo no es valido verifique el campo').isEmail()], userpost);

router.put('/:id', userput);

router.delete('/:id', userdelete);



module.exports = router;