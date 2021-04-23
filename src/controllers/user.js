const { response, request } = require('express');

const userget = (req = request, res = response) => {
    res.json({
        msg: 'Api- Get'
    });
}

const userpost = (req, res) => {

    let body = req.body;

    res.json({
        msg: 'Api- Post',
        body
    })
}


let userput = (req, res) => {
    res.json({
        msg: 'Api- Put'
    })
}


let userdelete = (req, res) => {
    res.json({
        msg: 'Api- Delete'
    })
}

module.exports = {
    userget,
    userpost,
    userput,
    userdelete
}