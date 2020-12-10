let db = require('../connection_db.js')
const x = {}

//Listar revisiones de cierta Aeronave
x.get_revisionesAeronave = function(idAeronave) {
    return db.query('SELECT revision.ID, revision.Fecha, `historial marciano`.Marciano FROM revision, `historial marciano` WHERE revision.AeronaveRevisada = ? AND `historial marciano`.Revision = revision.ID', [
        idAeronave
    ])
}

//Listar revisiones 
x.get_revisiones = function() {
    return db.query('SELECT revision.ID, revision.AeronaveRevisada, revision.Fecha, `historial marciano`.Marciano FROM revision, `historial marciano` WHERE revision.AeronaveRevisada = ? AND `historial marciano`.Revision = revision.ID', [

    ])
}

//Crear revision
x.create_revision = function(id, nombreRevisor, idAeronave, fecha) {
    return db.query('INSERT INTO revision VALUES (?,?,?,?)', [
        id, nombreRevisor, fecha, idAeronave
    ])
}

module.exports = x