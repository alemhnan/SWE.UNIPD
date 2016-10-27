const noop = () => { };

const sleep = (time) => {
  const stop = new Date().getTime();
  while (new Date().getTime() < stop + time) {
    noop();
  }
};

const longJob = (time, id, callback) => {
  console.log(`Start:   ${id}`);

  process.nextTick(() => {
    sleep(time);
    const result = `Done:    ${id}`;
    callback(null, result);
  });
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

