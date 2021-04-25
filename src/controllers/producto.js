const { response, request } = require('express');


const pdget = (req = request, res = response) => {
    res.json({
        msg: 'Producto-Get'
    })
}

const pdgetId = (req = request, res = response) => {
    res.json({
        msg: 'Producto-GetId'
    })
}

const pdpost = (req = request, res = response) => {
    res.json({
        msg: 'Producto-Post'
    })
}

const pdput = (req = request, res = response) => {
    res.json({
        msg: 'Producto-Put'
    })
}

const pddelete = (req = request, res = response) => {
    res.json({
        msg: 'Producto-Delete'
    })
}

module.exports = {
    pdget,
    pdgetId,
    pdpost,
    pdput,
    pddelete
}