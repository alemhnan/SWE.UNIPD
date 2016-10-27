/*jshint node: true, -W032 */
'use strict';


var longJob = function(time, id, callback) {
    console.log('Start:   ' + id);

    setTimeout(function() {
        var result = 'Done:    ' + id;
        callback(null, result);
      }, time);

};

console.log('--A--');

longJob(1000, 'ONE', function(err, myResult){
    console.log(myResult);

    longJob(2000, 'TWO', function(err, anotherResult){
        console.log(anotherResult);
    });

});


console.log('--B--');

longJob(2000, 'TWO', function(err, myResult){
    console.log(myResult);

    longJob(1000, 'ONE', function(err, anotherResult){
        console.log(anotherResult);
    });

});



console.log('--C--');
