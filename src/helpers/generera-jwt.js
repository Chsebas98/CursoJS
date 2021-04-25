const jwt = require('jsonwebtoken')

const genToken = (uid = '') => {
    return new Promise((resolve, reject) => {
        const payload = { uid };

        jwt.sign(payload, 'e$tEM1$3(R37Pû►l1cK3&Xd', {
            expiresIn: '8h'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('No se pudo generar el token');
            } else {
                resolve(token);
            }
        });
    })
}

module.exports = genToken;