let db = require('../connection_db.js')

//Listar naves Nodrizas
function get_naveNodriza() {
    return db.query('SELECT * FROM `nave nodriza` ', )
}

//Crear nave Nodriza
function create_naveNodriza(id, nombre) {
    return db.query('INSERT INTO `nave nodriza` VALUES (?,?)', [
        id, nombre
    ])
}