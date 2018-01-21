var express = require('express');
var app = express();
var server = require('http').createServer(app);
var storage = [];

// Sets the static file folders
app.use("/js", express.static(__dirname + "/js"));
app.use("/css", express.static(__dirname + "/css"));

// Send & response function

// set port
var port = (process.env.PORT || 9000);
server.listen(port, function() {
	console.log('Server is running...');
});


app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
	console.log("Page requested");
});



// All other paths result in 404
app.get('*', function(req, res) {
	res.status(404).end();
	// .sendFile(__dirname + '/404.html');
});


var nodemailer = require('nodemailer');

var router = express.Router();
app.use('/sayHello', router);
router.post('/', handleSayHello); // handle the route at yourdomain.com/sayHello

function handleSayHello(req, res) {
    // Not the movie transporter!
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'naomikudren@gmail.com', // Your email id
            pass: '#######' // Your password
        }
    });
    ...
    ...
    ...
}
