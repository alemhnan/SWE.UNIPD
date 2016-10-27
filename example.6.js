/*jshint node: true, -W032, newcap:false */
'use strict';

var Promise = require('bluebird');
var express = require('express');
var app = express();

var longJob = function(time, id, callback) {
    console.log('Start:   ' + id);

    setTimeout(function() {
        var result = 'Done:    ' + id;
        callback(null, result);
      }, time);

};

var longJobP = function (time, id) {
    var deferred = Promise.pending();
    longJob(time, id, function(err ,result){
        deferred.resolve(result);
    });
    return deferred.promise;
};


// http://127.0.0.1:3000/
app.get('/', function (req, res) {
	console.log('Hello World');
	return res.status(200).json({ data: 'Hello World' });
});

// http://127.0.0.1:3000/long/10000/ten
// http://127.0.0.1:3000/long/5000/five
app.get('/long/:ms/:id', function (req, res) {
	var ms = parseInt(req.params.ms);
	var id = req.params.id;

	return longJobP(ms, id)
	.then(function(myResult){
		console.log(myResult);

		var data = {
			myResult : myResult,
			ms       : ms,
			id       : id
		}
		return res.status(200).json(data);
	})
	.catch(function(err){
		return res.status(500).json({error: err});
	});

});


var server = app.listen(3000, function () {
	var port = server.address().port;
	console.log('Example app listening at http://127.0.0.1:%s', port);
});

