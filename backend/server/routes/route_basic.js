const express = require('express')
const app = express.Router()
const models_sos = require('../models/models_basic');

app.get('/RutinaSos', async (req, res) => {
    const { fecha } = req.query
    try {
        console.log('entro')
        const rutinas = await models_sos.RutinaModelBasicSos.find({ Date: fecha },{ _id: 0 })
        res.send(rutinas)
    } catch (error) {
        res.status(400).send({ error: { message: error.message } })
    }
})

module.exports = app