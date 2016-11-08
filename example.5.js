/**
 * `A promise represents the eventual result of an asynchronous operation.
 * The primary way of interacting with a promise is through its then method,
 * which registers callbacks to receive either a promise’s eventual value or
 * the reason why the promise cannot be fulfilled.`
 * Source: https://promisesaplus.com/
 **/

/**
 * Bluebird is the standard de facto library implementing the Promises/A++ spec.
 * `promises are about making asynchronous code retain most of the lost properties
 * of synchronous code such as flat indentation and one exception channel.`
 * Source: http://bluebirdjs.com/docs/anti-patterns.html#the-explicit-construction-anti-pattern
 **/
const Promise = require('bluebird');

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
 * Promisification of longAdd
 * We are using an anti-pattern for simplicity
 * http://bluebirdjs.com/docs/anti-patterns.html#the-explicit-construction-anti-pattern
 */
const longAddP = (a, b) =>
  new Promise((resolve, reject) => {
    longAdd(a, b, (err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(result);
    });
  });

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

/**
 * Promisification of longMultiply
 * We are using an anti-pattern for simplicity
 * http://bluebirdjs.com/docs/anti-patterns.html#the-explicit-construction-anti-pattern
 */
const longMultiplyP = (a, b) =>
  new Promise((resolve, reject) => {
    longMultiply(a, b, (err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(result);
    });
  });

Promise.resolve()

  .then(() => console.log('--A--'))

  .then(() => longAddP(2, 3))

  .then((sum) => {
    console.log(`Sum: ${sum}`);
    console.log('--B--');
    return longMultiplyP(sum, 4);
  })

  .then(product => console.log(`Product: ${product}`))

  .then(() => console.log('--C--'));

/**
  --A--
  Thinking about:      2 + 3
  Non blocking sleep 3s
  Done thinking about: 2 + 3
  Sum: 5
  --B--
  Thinking about:      5 * 4
  Non blocking sleep 1s
  Done thinking about: 5 * 4
  Product: 20
  --C--
 **/
