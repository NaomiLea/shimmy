var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');



app.set('port', 3000);

app.use(express.static(path.join(__dirname, 'public')));

var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});

var smtpTransport = nodemailer.createTransport(smtpTransport({
  service: 'Gmail',
  auth: {
    user: 'naomikudren@gmail.com',
    pass: '######'
  }
}));

app.post('/send-email', function(req, res) {
    var mailOptions = {
        from: '"Naomi" <naomikudren@gmail.com>', // sender address
        to: "naomikudren@gmail.com", // list of receivers
        subject: 'Register to girl.Code ', // Subject line
        text: 'Follow this link to register to girl.Code ', // plaintext body
        html: '<b>Register to girl.Code</b> <p>Sign up to join at www.amaze.co.uk/girlCode</p>' // html body
    };
		smtpTransport.sendMail(mailOptions, function(error, info) {
         if (error) {
             return console.log(error);
         }
         console.log('Message sent: ' + info.response);
     });

     res.redirect("/index.html");
 });
