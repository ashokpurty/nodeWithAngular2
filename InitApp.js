var express = require('express'),
app = express(),
port = process.env.PORT || 8585;

var employee = require('./Models/NodeWebApiModel'),
bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());

var routes = require('./routes/NodeWebApiRoute'); //importing route
routes(app); 

app.listen(port);

console.log('Node RESRFul api started in port: ' + port);