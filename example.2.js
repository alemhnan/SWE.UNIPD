/*jshint node: true, -W032 */
'use strict';


function sleep(time) {
    var stop = new Date().getTime();
    while(new Date().getTime() < stop + time) {
        ;
    }
}


var longJob = function(time, id, callback) {
    console.log('Start:   ' + id);

    process.nextTick(function() {
        sleep(time);
        var result = 'Done:    ' + id;
        callback(null, result);
    });

};

console.log('--A--');

longJob(2000, 'TWO', function(err, anotherResult){
    console.log(anotherResult);
});

console.log('--B--');

longJob(1000, 'ONE', function(err, myResult){
    console.log(myResult);
});

console.log('--C--');

