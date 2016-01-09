/**
 * The Weather API
 * Uses weather-js NPM package to fetch weather
 * @author Paul P. <paul@paul-resume.com>
 */
var express = require('express');
var router = express.Router();
var weather = require('weather-js');

/**
 * Fetch weather data for specific location
 * @param {string} wloc - The name of the city
 */
router.get('/:wloc', function(req, res, next){
	weather.find({search: req.params.wloc, degreeType: 'C'}, function(err, result){
		if(err) res.send(err);
		res.send(result);
	});
});

module.exports = router;