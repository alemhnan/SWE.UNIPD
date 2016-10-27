const noop = () => { };

const sleep = (time) => {
  const stop = new Date().getTime();
  while (new Date().getTime() < stop + time) {
    noop();
  }
};

const longJob = (time, id) => {
  console.log(`Start:   ${id}`);
  sleep(time);
  const result = `Done:    ${id}`;
  return result;
};


console.log('--A--');

const anotherResult = longJob(2000, 'TWO');
console.log(anotherResult);

console.log('--B--');

const myResult = longJob(1000, 'ONE');
console.log(myResult);

console.log('--C--');
