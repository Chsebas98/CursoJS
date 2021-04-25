const { Router } = require('express');
const router = Router();
const { validToken } = require('../middlewars/validar-jwt');
//Lo que llega del controlador
const { pdget, pdgetId, pdpost, pdput, pddelete } = require('../controllers/producto')

//Rutas
router.get('/', /* validToken, */ pdget);

router.get('/:id', /* validToken, */ pdgetId);

router.post('/', /* validRol, [check('correo', 'El correo no es valido verifique el campo').isEmail()], */
    pdpost);

router.put('/:id', pdput);

router.delete('/:id', pddelete);

module.exports = router;