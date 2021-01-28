var app = require('express')();				//Importation de librairies (express pour le serveur web)
var http = require('http').Server(app);
var io = require('socket.io')(http);			//Importation de Socket.io

const io_client = require("socket.io-client");		//Création du client Socket.io
var state = "0";					//Définition de l'état de la variable

const socket = io_client("http://localhost/", {
  reconnectionDelayMax: 10000
});

app.get("/", function(req, res) {				//S'exécute lorsqu'une requette est effectuée à la racine du serveur
	res.send(state.toString());				//Répondre en envoyant la valeur de la variable State
	if (typeof req.query['request'] !== 'undefined') {	//Vérifie si le paramètre request existe
		io.emit('M5stack', req.query['request']);	//Envoie le message du M5stack à tous les 'abonnés'
		console.log(req.query['request']);		//Écrit dans la console
	}
});

io.on('connection', function(socket){				//S'exécute lorsqu'un client se connecte au serveur Socket.io
    socket.on('message', function(message){			//S'exécute lorsque le serveur reçoit une requette sur la 'fréquence' message
		console.log("message : " + message);		//Écrit dans la console
		if (message.split('=')[0] == "State") {		//Vérifie que la commande est valide
			state = message.split('=')[1];		//Mise à jour de la variable State
		}
	});
});

http.listen(3000);	//Écoute localhost sur le port 3000
