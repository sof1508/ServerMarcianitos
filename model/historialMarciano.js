let db = require('../connection_db.js')
const x = {}

//Listar 
x.get_marcianosAeronave = function(idMarciano) {
    return db.query('SELECT * FROM `historial marciano` WHERE Marciano = ?', [
        idMarciano
    ])
}

//Listar 
x.get_marcianosRevision = function(idRevision) {
    return db.query('SELECT * FROM `historial marciano` WHERE Revision = ?', [
        idRevision
    ])
}

//Crear historial marciano
x.create_marcianoHistorial = function(idMarciano, idRevision) {
    return db.query('INSERT INTO `historial marciano` VALUES (?,?)', [
        idMarciano, idRevision
    ])
}