const express = require('express')
const db = require('../model/revision.js')
const http = express.Router()

//Leer todas las revisiones
http.get('/', async function(req, res, next) {
    try {
        let datos = await db.get_revisiones()
        res.json(datos)
    } catch (error) {
        next(error)
    }
})

//Leer las revisiones de cierta aeronave
http.get('/revision/:idAeronave', async function(req, res, next) {
    try {
        let { idAeronave } = req.params;
        let datos = await db.get_revisionesAeronave(idAeronave)
        res.json(datos)
    } catch (error) {
        next(error)
    }
})

//Crear
// suponemos que tenemos req.body de id, nombreRevisor, idAeronave, fecha
http.post('/', async function(req, res, next) {
    try {
        let { id, nombreRevisor, fecha, idAeronave } = req.body;
        let datos = await db.create_revision(id, nombreRevisor, fecha, idAeronave)
        res.end()
    } catch (error) {
        next(error)
    }
})

module.exports = http