let db = require('../connection_db.js')
const x = {}

//Listar naves Nodrizas
x.get_naveNodriza = function() {
    return db.query('SELECT * FROM `nave nodriza` ', )
}

//Crear nave Nodriza
x.create_naveNodriza = function(id, nombre) {
    return db.query('INSERT INTO `nave nodriza` VALUES (?,?)', [
        id, nombre
    ])
}

module.exports = x