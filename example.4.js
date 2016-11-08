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

longAdd(2, 3, (errOne, sum) => {
  console.log(`Sum: ${sum}`);

  console.log('--B--');

  longMultiply(sum, 4, (errTwo, product) => {
    console.log(`Product: ${product}`);
  });
});

console.log('--C--');

/**
  --A--
  Thinking about:      2 + 3
  Non blocking sleep 3s
  --C--
  Done thinking about: 2 + 3
  Sum: 5
  --B--
  Thinking about:      5 * 4
  Non blocking sleep 1s
  Done thinking about: 5 * 4
  Product: 20
 **/
