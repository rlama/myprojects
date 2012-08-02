var app = require('http').createServer(handler)
var io = require('socket.io').listen(app);

app.listen(8080);

// routing
//app.get('/', function (req, res) {
//  res.sendfile(__dirname + '/index.html');
//});


function handler(req, res){

	req.readFile(_dirname - '/index.html'),
	
	function (err, data){
	
		res.writeHead(500);
		return res.end('Error loading index.html');
	}
		
	res.writeHead(200);
	res.end(data);

}

io.sockets.on('connection', function (socket) {

	socket.on('clientconnects', function(datas){ 
		
		socket.broadcast.emit('newplayer', datas);

	});

});
