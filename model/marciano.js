let db = require('../connection_db.js')

//Listar marcianos en una aeronave
function get_marcianosAeronave(idAeronave) {
    return db.query('SELECT * FROM marciano WHERE naveAbordo = ?', [
        idAeronave
    ])
}

//Crear marciano
function create_marciano(id, nombre) {
    return db.query('INSERT INTO marciano(ID,Nombre) VALUES (?,?)', [
        id, nombre
    ])
}

//Subir marciano en una aeronave
function subir_marcianosAeronave(id, idAeronave) {
    return db.query('UPDATE marciano set naveAbordo = ? WHERE ID = ?', [
        idAeronave, id
    ])
}


//Bajar marciano en una aeronave
function bajar_marcianosAeronave(id) {
    return db.query('UPDATE marciano set naveAbordo = null WHERE ID = ?', [
        id
    ])
}