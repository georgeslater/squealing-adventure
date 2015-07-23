var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');
app.set('view engine', 'jade');

app.get('/', function(req, res){

	res.render('index');
});

app.get('/wideos', function(req, res){

	var request = require('request');

	request('https://www.googleapis.com/youtube/v3/search?part=snippet&q=center+game+chess&maxResults=20&key=AIzaSyANGVK67lCzjdZjTwJciKkuI2f1XJBKPfA', function(error, response, body){

		res.send(body);
	});
});

app.listen(3000);