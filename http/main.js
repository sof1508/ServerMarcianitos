const express = require('express')
const http = express()

http.use(express.json());

// aeronave
http.use('/aeronave', require('./aeronave.js'));

// nave nodriza
http.use('/naveNodriza', require('./naveNodriza.js'));

// marciano
http.use('/marciano', require('./marciano.js'));

// revision
http.use('/revision', require('./revision.js'));

// historial
http.use('/historialMarciano', require('./historialMarciano.js'));