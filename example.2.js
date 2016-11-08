const noop = () => { };

const sleep = (time) => {
  const stop = new Date().getTime();
  while (new Date().getTime() < stop + time) {
    noop();
  }
};

const longAdd = (a, b, callback) => {
  console.log(`Thinking about:      ${a} + ${b}`);
  process.nextTick(() => {
    sleep(1000);
    console.log(`Done thinking about: ${a} + ${b}`);
    const sum = a + b;
    callback(null, sum);
  });
};

const longMultiply = (a, b, callback) => {
  console.log(`Thinking about:      ${a} * ${b}`);
  process.nextTick(() => {
    sleep(1000);
    console.log(`Done thinking about: ${a} * ${b}`);
    const sum = a * b;
    callback(null, sum);
  });
};

console.log('--A--');

longAdd(2, 3, (err, result) => {
  console.log(result);
});

console.log('--B--');

longMultiply(4, 5, (err, result) => {
  console.log(result);
});

console.log('--C--');
