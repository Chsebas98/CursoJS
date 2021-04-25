const { response, request } = require('express');


const catget = (req = request, res = response) => {
    res.json({
        msg: 'Cat-Get'
    })
}

const catgetId = (req = request, res = response) => {
    res.json({
        msg: 'Cat-Get'
    })
}

const catpost = (req = request, res = response) => {
    res.json({
        msg: 'Cat-Post'
    })
}

const catput = (req = request, res = response) => {
    res.json({
        msg: 'Cat-Put'
    })
}

const catdelete = (req = request, res = response) => {
    res.json({
        msg: 'Cat-Delete'
    })
}


module.exports = {
    catget,
    catgetId,
    catpost,
    catput,
    catdelete
}