const node7 = require('semver').satisfies('7.0.0', process.version);

const esStagingEnabled = (0 === process.execArgv.indexOf('--es_staging'));

if (false === node7 || false === esStagingEnabled) {
  console.log(`Node version: ${process.version}`);
  console.log(`Flag --es_staging: ${esStagingEnabled}`);
  throw new Error('This example requires Nodejs version 7 or above launched with --es_staging flag');
}

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

/**
 * Async/Await example.
 * Only avalaible in Nodejs version 7.0.0 or above AND enabled with flag --es_staging
 *
 * `Async/Await are features that allow an asynchronous, non-blocking method call
 * to be performed in a similar way to an ordinary synchronous method call.`
 * Source: https://en.wikipedia.org/wiki/Await
 */
const composition = async () => {
  console.log('--A--');
  const sum = await longAddP(2, 3);
  console.log(`Sum: ${sum}`);

  console.log('--B--');
  const product = await longMultiplyP(sum, 4);
  console.log(`Product: ${product}`);

  console.log('--C--');
  return product;
};

composition();
  // .then(result => console.log(result));


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
