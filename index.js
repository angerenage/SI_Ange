var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

const io_client = require("socket.io-client");
var state = "0";

const socket = io_client("https://localhost/", {
  reconnectionDelayMax: 10000
});

app.get("/", function(req, res) {
	res.send(state.toString());
	if (typeof req.query['message'] !== 'undefined') {
		io.emit('M5stack', req.query['message']);
		console.log(req.query['message']);
	}
});

io.on('connection', function(socket){
    socket.on('message', function(message){
		console.log("message : " + message);
		if (message.split('=')[0] == "State") {
			state = message.split('=')[1];
		}
	});
});

http.listen(3000);