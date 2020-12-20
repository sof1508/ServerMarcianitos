let query = require('../connection_db.js')
const x = {}

//Listar 
x.get_marcianosAeronave = function(idMarciano) {
    return query('SELECT Marciano as idMarciano, Revision as idRevision FROM `historial marciano` WHERE Marciano = ?', [
        idMarciano
    ])
}

//Listar 
x.get_marcianosRevision = function(idRevision) {
    return query('SELECT Marciano as idMarciano, Revision as idRevision FROM `historial marciano` WHERE Revision = ?', [
        idRevision
    ])
}

//Crear historial marciano
x.create_marcianoHistorial = function(idMarciano, idRevision) {
    return query('INSERT INTO `historial marciano` VALUES (?,?)', [
        idMarciano, idRevision
    ])
}

module.exports = x