var app = require('express')();				//Importatoin des librairies (express pour le serveur web)
var http = require('http').Server(app);			//Paramètrage d'express
var io = require('socket.io')(http);			//Importation de Socket.io

const io_client = require("socket.io-client");		//Création du client Socket.io
var state = "0";					//Définition de la variabke state

const socket = io_client("https://localhost/", {	//Définition des paramètres pour socket.io
  reconnectionDelayMax: 10000
});

app.get("/", function(req, res) {				//S'éxécute lorsque une requette est éfectué a la racine du serveur
	res.send(state.toString());				//Repond en envoyant la valeur de la variable state
	if (typeof req.query['message'] !== 'undefined') {	//Vérifis si le paramètre message existe
		io.emit('M5stack', req.query['message']);	//Envoie le message de l'arduino a tout les 'abonnées'
		console.log(req.query['message']);		//Ecrit dans la console
	}
});

io.on('connection', function(socket){				//S'éxéute lorsque un client se connecte au serveur Socket.io
    socket.on('message', function(message){			//s'éxécute lorsque le serveur ressois un message sur la 'fréquence' message
		console.log("message : " + message);		//Ecrit dans la console
		if (message.split('=')[0] == "State") {		//Vérifit que la commande est valide
			state = message.split('=')[1];		//Mis a jour de la variable state
		}
	});
});

http.listen(3000);	//Ecoute localhost sur le port 3000
