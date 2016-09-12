/*
NodeJS CMX Receiver

A basic web service to accept CMX data from a Cisco Meraki network
- Accept a GET request from Meraki and respond with a validator
- Meraki will POST to server, if validated.
- POST will contain a secret, which can be verified by the server.
- JSON data will be in the req.body.data

-- This skeleton app will only place the data received on the console. It's up to the developer to use this how ever required

*/
var port = 1890;

var express = require('express');
var app = express();
var bodyParser = require('body-parser')

// parse application/json
app.use(bodyParser.json())

//
app.get('/cmx', function (req, res) {
    console.log("Validator = "+req.params.validator);
    res.status(200).send(req.validator);
});

app.post('/cmx', function (req, res) {
    var secret = "testing123";
    if(req.body.secret == secret){
        // DO SOMETHING WITH THE JSON
        console.log("JSON Feed: "+JSON.stringify(req.body, null, 2));
    }else{
        console.log("Secret was invalid");
    }
  res.status(200);
});

// start server
console.log("CMX Receiver listening on port: "+port);
app.listen(port);
