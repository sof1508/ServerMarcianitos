const express = require('express')
const db = require('../model/aeronave.js')
const http = express.Router()

//Leer
http.get('/', async function(req, res, next) {
    try {
        let datos = await db.get_Aeronaves()
        res.json(datos)
    } catch (error) {
        next(error)
    }
})

//Crear
// suponemos que tenemos req.body de id, nombre, origen, destino
http.post('/', async function(req, res, next) {
    try {
        let { id, nombre, max, origen, destino } = req.body;
        let datos = await db.create_aeronave(id, nombre, max, origen, destino)
        res.end()
    } catch (error) {
        next(error)
    }
})

module.exports = http