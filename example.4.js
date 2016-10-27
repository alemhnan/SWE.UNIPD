const longJob = (time, id, callback) => {
  console.log(`Start:   ${id}`);

  setTimeout(() => {
    const result = `Done:    ${id}`;
    callback(null, result);
  }, time);
};

console.log('--A--');

longJob(1000, 'ONE', (errOne, myResult) => {
  console.log(myResult);

  longJob(2000, 'TWO', (errTwo, anotherResult) => {
    console.log(anotherResult);
  });
});


console.log('--B--');

longJob(2000, 'TWO', (errOne, myResult) => {
  console.log(myResult);

  longJob(1000, 'ONE', (errTwo, anotherResult) => {
    console.log(anotherResult);
  });
});


console.log('--C--');
