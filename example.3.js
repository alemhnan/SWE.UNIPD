const longJob = (time, id, callback) => {
  console.log(`Start:   ${id}`);

  setTimeout(() => {
    const result = `Done:    ${id}`;
    callback(null, result);
  }, time);
};

console.log('--A--');

longJob(2000, 'TWO', (err, anotherResult) => {
  console.log(anotherResult);
});

console.log('--B--');

longJob(1000, 'ONE', (err, myResult) => {
  console.log(myResult);
});

console.log('--C--');

