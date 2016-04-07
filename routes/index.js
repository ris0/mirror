var https = require('https');
var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/directions', function(req, res, next) {

    https.get('https://maps.googleapis.com/maps/api/directions/json?origin=11361&destination=5%20Hanover%20Square,%20New%20York,%20NY%2010004&mode=transit&key=AIzaSyAANXryNsjBUv-uDDqn4U_4N-T40gq3ZLo', function(response) {

        var result = '';

        response.on('data', function(chunk) {
            result += chunk;
        });

        response.on('end', function() {
            res.json(result);
        });

        response.on('error', function(e) {
            console.log(e);
        });

    })

});

module.exports = router;

