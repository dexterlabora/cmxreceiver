/*
NodeJS CMX Receiver

A basic web service to accept CMX data from a Cisco Meraki network
- Accept a GET request from Meraki and respond with a validator
- Meraki will POST to server, if validated.
- POST will contain a secret, which can be verified by the server.
- JSON data will be in the req.body.data. This will be available in the cmxData function's data object.

-- This skeleton app will only place the data received on the console. It's up to the developer to use this how ever required

*/

// CHANGE THESE CONFIGURATIONS to match your requirements
var port = process.env.PORT || 1890;
var secret = process.env.SECRET || "enterYourSecret";
var validator = process.env.VALIDATOR || "enterYourValidator";

// All CMX JSON data will end up here. Send it to a database or whatever you fancy.
function cmxData(data){
	console.log("JSON Feed: "+JSON.stringify(data, null, 2));
};


//**********************************************************

// Express Server 
var express = require('express');
var app = express();
var bodyParser = require('body-parser')

// parse application/json
app.use(bodyParser.json())

//
app.get('/cmx', function (req, res) {
    console.log("Validator = "+validator);
    res.status(200).send(validator);
});

app.post('/cmx', function (req, res) {
    if(req.body.secret == secret){
        // DO SOMETHING WITH THE JSON
        console.log("Secret verified");
	cmxData(req.body);
    }else{
        console.log("Secret was invalid");
    }
  res.status(200);
});

// start server
console.log("CMX Receiver listening on port: "+port);
app.listen(port);
