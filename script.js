var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');

app.listen(process.env.PORT || 3000,function() {
    console.log("App is running" );
});




app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({ extended: false })); app.use(bodyParser.json());


/*app.listen(port, function() {
    console.log("App is running on port " + port);
});*/

var smtpTransport = nodemailer.createTransport(smtpTransport({
  service: 'Gmail',
  auth: {
    user: 'shimoniot.avraham@gmail.com',
    pass: 'naomiisbest'
  }
}));

app.post('/send-email', function(req, res) {
    var mailOptions = {
        from: '"Naomi" <naomikudren@gmail.com>', // sender address
        to: "shimoniot.avraham@gmail.com", // list of receivers
        subject: 'Request ', // Subject line
        text: "Name: " + req.body.name + "Phone: " + req.body.phone + " From: " + req.body.from + " To: " + req.body.to + " City: " + req.body.city + " Country: " + req.body.country + " Date: " + req.body.date + " Time: " + req.body.time // plaintext body

    };
		smtpTransport.sendMail(mailOptions, function(error, info) {
         if (error) {
             return console.log(error);
         }
         console.log('Message sent: ' + info.response);
     });

     res.redirect("/confirmation.html");
 });
