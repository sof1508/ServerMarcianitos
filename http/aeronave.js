const express = require('express')
const http = express()
const port = 8000

//Leer --- poner path del sitio web donde se realizará esta petición
http.get('/', function(req, res) {
    async function asyncCall() {
        console.log('calling');
        const result = await resolveAfter2Seconds();
        console.log(result);
        // expected output: "resolved"
    }
})

//Crear --- poner path del sitio web donde se realizará esta petición
http.post('/', function(req, res) {
    res.send('Got a POST request')
})

/*
//Modificar
http.put('/user', function(req, res) {
    res.send('Got a PUT request at /user')
})

//Borrar
http.delete('/user', function(req, res) {
    res.send('Got a DELETE request at /user')
})
*/

http.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})