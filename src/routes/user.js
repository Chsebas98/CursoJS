const { Router } = require('express');
const router = Router();
//Import controllers
const { userget, userpost, userput, userdelete } = require('../controllers/user');

//Rutas
router.get('/', userget);

router.post('/', userpost);

router.put('/', userput);

router.delete('/', userdelete);



module.exports = router;