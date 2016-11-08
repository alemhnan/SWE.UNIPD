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
  console.log('Passive sleep 2s');

  setTimeout(() => {
    console.log(`Done thinking about: ${a} + ${b}`);
    const sum = a + b;
    callback(null, sum);
  }, 2000);
};

/**
 * One second multiplication, non-blocking using setTimeout()
 **/
const longMultiply = (a, b, callback) => {
  console.log(`Thinking about:      ${a} * ${b}`);
  console.log('Passive sleep 2s');

  setTimeout(() => {
    console.log(`Done thinking about: ${a} * ${b}`);
    const sum = a * b;
    callback(null, sum);
  }, 2000);
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

/**
 * --A--
 * Thinking about:      2 + 3
 * Passive sleep 2s
 * --B--
 * Thinking about:      4 * 5
 * Passive sleep 2s
 * --C--
 * Done thinking about: 2 + 3
 * 5
 * Done thinking about: 4 * 5
 * 20
 **/
