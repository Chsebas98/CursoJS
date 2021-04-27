const { Router } = require('express');
const router = Router();
const { validToken } = require('../middlewars/validar-jwt');
//Lo que llega del controlador
const { catget, catgetId, catpost, catput, catdelete } = require('../controllers/categoria');


//Rutas
router.get('/:id', validToken, catget);

router.get('/buscar/:id', validToken, catgetId); //categoria por Id

router.post('/:id', [validToken], catpost);

router.put('/:id', validToken, catput);

router.delete('/:id', validToken, catdelete);

module.exports = router;