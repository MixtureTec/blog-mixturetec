'use strict'

// VARIABLES 

var especialidad = 'servidor.html';

// REQUERIMIENTO DE MODULOS

var express =  require('express');
var swig = require('swig');

//CONFIGURACIONES

// Creación del servidor web con express
var server = express();

// Integracion del motor de templates swig
server.engine('html',swig.renderFile);
server.set('view engine', 'html');
server.set('views', __dirname + '/views');
swig.setDefaults({cache: false});

// Seteo de dirección de carpeta de archivos estaticos
server.use(express.static(__dirname + '/public'));

// PETICIONES

// Cuando exista una petición en el servidor  
server.get('/',function(req,res){
	res.render('main.html');
});

server.get('/tutorial/:nombre/',function(req,res){
	
	var nombre = req.params.nombre;
	console.log(nombre)
	if (nombre == 'arduino') {
		var tutorial = {
			titulo: "¿Qué es arduino?",
			tecnologia: 'electronica',
			archivo: 'arduino.html'	,
			logo: 'logo-arduino.png'
		};
		res.render('tutorial.html',  { tutorial:tutorial });	
	}else if(nombre == 'servidor') {
		var tutorial = {
			titulo: "Mi primer servidor web",
			tecnologia: 'web',
			archivo: 'servidor.html',
			logo: 'logo-node.png'	
		};
		res.render('tutorial.html',  { tutorial:tutorial });
	}
	
});


// INICIAR SERVIDOR

// Se corre el servidor en el puerto 8000
server.listen(8000, function() {
	console.log('El servidor esta escuchando en el puerto '+ 8000)
});