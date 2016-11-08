/**
 * Nota bene:
 * `the next tick queue is completely drained on each pass of the event
 * loop before additional I/O is processed. As a result, recursively setting
 * nextTick callbacks will block any I/O from happening,
 * just like a while(true); loop`.
 * Source: https://nodejs.org/api/process.html#process_process_nexttick_callback_args
 **/

/**
 * No operation
 */
const noop = () => { };

/**
 * Active sleep
 * Only for demonstrative purpose
 */
const sleep = (time) => {
  console.log(`Active sleep ${time / 1000}s`);
  const stop = new Date().getTime();
  while (new Date().getTime() < stop + time) {
    noop();
  }
};

/**
 * One second addition, non-blocking using process.next()
 **/
const longAdd = (a, b, callback) => {
  console.log(`Thinking about:      ${a} + ${b}`);

  process.nextTick(() => {
    sleep(2000);
    console.log(`Done thinking about: ${a} + ${b}`);
    const sum = a + b;
    callback(null, sum);
  });
};

/**
 * One second multiplication, non-blocking using process.next()
 **/
const longMultiply = (a, b, callback) => {
  console.log(`Thinking about:      ${a} * ${b}`);

  process.nextTick(() => {
    sleep(2000);
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

/**
 * --A--
 * Thinking about:      2 + 3
 * --B--
 * Thinking about:      4 * 5
 * --C--
 * Active sleep 2s
 * Done thinking about: 2 + 3
 * 5
 * Active sleep 2s
 * Done thinking about: 4 * 5
 * 20
 **/
