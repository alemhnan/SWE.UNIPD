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
  setTimeout(() => {
    console.log(`Done thinking about: ${a} + ${b}`);
    const sum = a + b;
    callback(null, sum);
  }, 1000);
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

console.log('--A--');

Promise.resolve()
  .then(() => longAddP(2, 3))
  .then(result => longMultiplyP(result, 4))
  .then(result => console.log(result));

console.log('--B--');

/**
 * --A--
 * --B--
 * Thinking about:      2 + 3
 * Done thinking about: 2 + 3
 * Thinking about:      5 * 4
 * Done thinking about: 5 * 4
 * 20
 **/
