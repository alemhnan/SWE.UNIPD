/*jshint node: true, -W032, newcap:false */
'use strict';

var Promise = require('bluebird');

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

console.log('--A--');


Promise.resolve('')

.then(function(myResult){
    console.log(myResult);
    return longJobP(1000, 'ONE');
})

.then(function(myResult){
    console.log(myResult);
    return longJobP(2000, 'TWO');
})


.then(function(myResult){
    console.log(myResult);

})

.catch(function(err){
    console.log(err);

});

console.log('--B--');
