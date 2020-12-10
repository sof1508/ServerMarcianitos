let db = require('../connection_db.js')

//Listar revisiones Aeronave
function get_revisionesAeronave(idAeronave) {
    return db.query('SELECT * FROM marciano WHERE naveAbordo = ?', [
        idAeronave
    ])
}

//Listar revisiones 
function get_revisiones() {
    return db.query('SELECT * FROM marciano', [

    ])
}



//Crear marciano
function create_revision(id, nombre) {
    return db.query('INSERT INTO marciano(ID,Nombre) VALUES (?,?)', [
        id, nombre
    ])
}