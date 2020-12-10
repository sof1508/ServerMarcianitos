let db = require('../connection_db.js')
const x = {}

//Listar aeronaves
x.get_Aeronaves = function() {
    return db.query('SELECT * FROM aeronave', [

    ])
}

//Crear aeronave
x.create_aeronave = function(id, nombre, nOrigen, nDestino) {
    return db.query('INSERT INTO aeronave VALUES (?,?,?,?)', [
        id, nombre, nOrigen, nDestino
    ])
}

module.exports = x