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
			url: 'arduino',
			titulo: "¿Qué es arduino?",
			tecnologia: 'electronica',
			tag: 'que_es_arduino',
			main_archivo: './tutoriales/arduino/que_es_arduino.html', 
			sub_archivos: [
				{
					titulo: '¿Por qué usar Arduino?',
					tag: 'por_que_usar_arduino',
					archivo: './tutoriales/arduino/por_que_usar_arduino.html',
					tecnologia: 'electronica',
				},
				{
					titulo: '¿Qué se puede hacer con Arduino?',
					tag: 'que_se_puede_hacer_con_arduino',
					archivo: './tutoriales/arduino/que_se_puede_hacer_con_arduino.html',
					tecnologia: 'electronica',
				},
			],			
			logo: 'logo-arduino.png',
		};
		res.render('tutorial.html',  { tutorial:tutorial });	
	}else if(nombre == 'servidor') {
		var tutorial = {
			titulo: "Mi primer servidor web",
			tecnologia: 'web',
			archivo: ['servidor.html'],
			logo: 'logo-node.png',	
		};
		res.render('tutorial.html',  { tutorial:tutorial });
	}
	
});


// INICIAR SERVIDOR

// Se corre el servidor en el puerto 8000
server.listen(8000, function() {
	console.log('El servidor esta escuchando en el puerto '+ 8000)
});