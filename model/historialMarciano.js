let db = require('../connection_db.js')

//Listar 
export function get_marcianosAeronave(idMarciano) {
    return db.query('SELECT * FROM `historial marciano` WHERE Marciano = ?', [
        idMarciano
    ])
}

//Listar 
export function get_marcianosRevision(idRevision) {
    return db.query('SELECT * FROM `historial marciano` WHERE Revision = ?', [
        idRevision
    ])
}

//Crear historial marciano
export function create_marciano(idMarciano, idRevision) {
    return db.query('INSERT INTO `historial marciano` VALUES (?,?)', [
        idMarciano, idRevision
    ])
}