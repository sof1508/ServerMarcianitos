let db = require('../connection_db.js')

//Listar marcianos en una aeronave
export function get_marcianosAeronave(idAeronave) {
    return db.query('SELECT * FROM marciano WHERE naveAbordo = ?', [
        idAeronave
    ])
}

//Crear marciano
export function create_marciano(id, nombre, idAeronave) {
    return db.query('INSERT INTO marciano VALUES (?,?,?)', [
        id, nombre, idAeronave
    ])
}

//Set marciano en una aeronave
export function set_marcianosAeronave(id, idAeronave) {
    return db.query('UPDATE marciano set naveAbordo = ? WHERE ID = ?', [
        idAeronave, id
    ])
}
/*
//Subir marciano en una aeronave
export function subir_marcianosAeronave(id, idAeronave) {
    return db.query('UPDATE marciano set naveAbordo = ? WHERE ID = ?', [
        idAeronave, id
    ])
}

//Bajar marciano en una aeronave
export function bajar_marcianosAeronave(id) {
    return db.query('UPDATE marciano set naveAbordo = null WHERE ID = ?', [
        id
    ])
}*/