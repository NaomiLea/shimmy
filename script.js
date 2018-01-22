var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');
var port = process.env.PORT || 8000;




app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false })); app.use(bodyParser.json());
/*var server = app.listen(process.env.PORT('port')|| 3000 , function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});*/

app.listen(port, function() {
    console.log("App is running on port " + port);
});

var smtpTransport = nodemailer.createTransport(smtpTransport({
  service: 'Gmail',
  auth: {
    user: 'naomikudren@gmail.com',
    pass: '###'
  }
}));

app.post('/send-email', function(req, res) {
    var mailOptions = {
        from: '"Naomi" <naomikudren@gmail.com>', // sender address
        to: "naomikudren@gmail.com", // list of receivers
        subject: 'Request ', // Subject line
        text: "From: " + req.body.from + " To: " + req.body.to + " Date: " + req.body.date + " Time: " + req.body.time // plaintext body

    };
		smtpTransport.sendMail(mailOptions, function(error, info) {
         if (error) {
             return console.log(error);
         }
         console.log('Message sent: ' + info.response);
     });

     res.redirect("/index.html");
 });
