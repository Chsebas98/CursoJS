const { Router } = require('express');
const router = Router();
const { validToken } = require('../middlewars/validar-jwt');
//Lo que llega del controlador
const { catget, catgetId, catpost, catput, catdelete } = require('../controllers/categoria');


//Rutas
router.get('/', /* validToken, */ catget);

router.get('/:id', /* validToken, */ catgetId);

router.post('/', /* validRol, [check('correo', 'El correo no es valido verifique el campo').isEmail()], */
    catpost);

router.put('/:id', catput);

router.delete('/:id', catdelete);

module.exports = router;