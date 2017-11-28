'use strict'

// REQUERIMIENTO DE MODULOS

var express =  require('express');

//CONFIGURACIONES

// Creación del servidor web con express
var server = express();

// PETICIONES

// Cuando exista una petición en el servidor  
server.get('/',function(req,res){
	res.send('Hola mundo');
});

// INICIAR SERVIDOR

// Se corre el servidor en el puerto 8000
server.listen(8000, function() {
	console.log('El servidor esta escuchando en el puerto '+ 8000)
});