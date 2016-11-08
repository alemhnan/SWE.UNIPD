const Promise = require('bluebird');

const longAdd = (a, b, callback) => {
  console.log(`Thinking about:      ${a} + ${b}`);
  setTimeout(() => {
    console.log(`Done thinking about: ${a} + ${b}`);
    const sum = a + b;
    callback(null, sum);
  }, 1000);
};

const longAddP = (a, b) =>
  new Promise((resolve, reject) => {
    longAdd(a, b, (err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(result);
    });
  });

const longMultiply = (a, b, callback) => {
  console.log(`Thinking about:      ${a} * ${b}`);
  setTimeout(() => {
    console.log(`Done thinking about: ${a} * ${b}`);
    const sum = a * b;
    callback(null, sum);
  }, 1000);
};

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
