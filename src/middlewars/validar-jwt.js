const { request, response } = require('express')
const jwt = require('jsonwebtoken');

const validToken = (req = request, res = response, next) => {
    const token = req.header('x-token');
    if (!token) {
        return res.status(401).json({
            msg: 'No existe un token en la petición'
        });
    }
    try {
        jwt.verify(token, 'e$tEM1$3(R37Pû►l1cK3&Xd');
        console.log(token);
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            msg: 'Token no valido'
        });
    }

}

module.exports = {
    validToken
}