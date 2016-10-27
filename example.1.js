/*jshint node: true, -W032 */
'use strict';

function sleep(time) {
    var stop = new Date().getTime();
    while(new Date().getTime() < stop + time) {
        ;
    }
};

var longJob = function(time, id) {
    console.log('Start:   ' + id);
    sleep(time);
    var result = 'Done:    ' + id;
    return result;
};


console.log('--A--');

var anotherResult = longJob(2000, 'TWO');
console.log(anotherResult);

console.log('--B--');

var myResult = longJob(1000, 'ONE');
console.log(myResult);

console.log('--C--');