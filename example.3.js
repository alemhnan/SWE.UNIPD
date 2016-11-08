/**
 * Nota bene:
 * `The callback will likely not be invoked in precisely delay milliseconds.
 * Node.js makes no guarantees about the exact timing of when callbacks will fire,
 * nor of their ordering.
 * The callback will be called as close as possible to the time specified.`
 * Source: https://nodejs.org/api/timers.html#timers_settimeout_callback_delay_args
 **/

/**
 * One second addition, non-blocking using setTimeout()
 **/
const longAdd = (a, b, callback) => {
  console.log(`Thinking about:      ${a} + ${b}`);
  console.log('Non blocking sleep 3s');

  setTimeout(() => {
    console.log(`Done thinking about: ${a} + ${b}`);
    const sum = a + b;
    callback(null, sum);
  }, 3000);
};

/**
 * One second multiplication, non-blocking using setTimeout()
 **/
const longMultiply = (a, b, callback) => {
  console.log(`Thinking about:      ${a} * ${b}`);
  console.log('Non blocking sleep 1s');

  setTimeout(() => {
    console.log(`Done thinking about: ${a} * ${b}`);
    const sum = a * b;
    callback(null, sum);
  }, 1000);
};

console.log('--A--');

longAdd(2, 3, (err, sum) => {
  console.log(`Sum: ${sum}`);
});

console.log('--B--');

longMultiply(4, 5, (err, product) => {
  console.log(`Product: ${product}`);
});

console.log('--C--');

/**
  --A--
  Thinking about:      2 + 3
  Non blocking sleep 3s
  --B--
  Thinking about:      4 * 5
  Non blocking sleep 1s
  --C--
  Done thinking about: 4 * 5
  Product: 20
  Done thinking about: 2 + 3
  Sum: 5
 **/
