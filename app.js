/**
 * Demo Weather App
 * This app displays weather for a few random locations in Europe
 */
var express = require('express');
var app = express();
var body = require('body-parser');
var weatherApi = require(__dirname + '/routes/weather.js');

/**
 * Add the necessary middleware
 */
if(process.env.NODE_ENV == undefined || process.env.NODE_ENV !== "production"){
	app.use(require('morgan')('combined', {}));
}
app.use(body.urlencoded({extended: false}));
app.use(body.json());
app.use(express.static(__dirname + '/public'));

/**
 * Weather API
 */
app.use('/weather', weatherApi);

/**
 * The weather app
 */
app.use('/' , function(req, res){
	res.sendFile(__dirname + '/views/index.html');
});

/**
 * Start the Express server
 */
app.listen(process.env.PORT || 3000, function(){
	console.log("Express server started !");
});