const express = require('express')
const http = express()
const port = 8000

//Leer
http.get('/', function(req, res) {
    res.send('Hello World!')
})

//Crear
http.post('/', function(req, res) {
    res.send('Got a POST request')
})

//Modificar
http.put('/user', function(req, res) {
    res.send('Got a PUT request at /user')
})

//Borrar
http.delete('/user', function(req, res) {
    res.send('Got a DELETE request at /user')
})

http.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})