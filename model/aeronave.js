let db = require('../connection_db.js')

//Listar aeronaves
export function get_Aeronaves() {
    return db.query('SELECT * FROM aeronave', [

    ])
}

//Crear aeronave
export function create_aeronave(id, nombre, nOrigen, nDestino) {
    return db.query('INSERT INTO aeronave VALUES (?,?,?,?)', [
        id, nombre, nOrigen, nDestino
    ])
}