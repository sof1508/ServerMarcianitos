let query = require('../connection_db.js')
const x = {}

//Listar aeronaves
x.get_Aeronaves = function() {
    return query('SELECT * FROM aeronave', [])
}

//Crear aeronave
x.create_aeronave = function(id, nombre, max, nOrigen, nDestino) {
    return query('INSERT INTO aeronave VALUES (?,?,?,?,?)', [
        id, nombre, max, nOrigen, nDestino
    ])
}

module.exports = x