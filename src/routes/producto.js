const { Router } = require('express');
const router = Router();
const { validToken } = require('../middlewars/validar-jwt');
//Lo que llega del controlador
const { pdget, pdgetId, pdpost, pdput, pddelete } = require('../controllers/producto')

//Rutas
router.get('/:id', validToken, pdget);

router.get('/buscar/:id', validToken, pdgetId);

router.post('/:id', validToken, /* validRol, [check('correo', 'El correo no es valido verifique el campo').isEmail()], */
    pdpost);

router.put('/:id', validToken, pdput);

router.delete('/:id', validToken, pddelete);

module.exports = router;