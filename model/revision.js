let db = require('../connection_db.js')

//Listar revisiones de cierta Aeronave
export function get_revisionesAeronave(idAeronave) {
    return db.query('SELECT revision.ID, revision.Fecha, `historial marciano`.Marciano FROM revision, `historial marciano` WHERE revision.AeronaveRevisada = ? AND `historial marciano`.Revision = revision.ID', [
        idAeronave
    ])
}

//Listar revisiones 
export function get_revisiones() {
    return db.query('SELECT revision.ID, revision.AeronaveRevisada, revision.Fecha, `historial marciano`.Marciano FROM revision, `historial marciano` WHERE revision.AeronaveRevisada = ? AND `historial marciano`.Revision = revision.ID', [

    ])
}

//Crear revision
export function create_revision(id, nombreRevisor, idAeronave, fecha) {
    return db.query('INSERT INTO revision VALUES (?,?,?,?)', [
        id, nombreRevisor, fecha, idAeronave
    ])
}