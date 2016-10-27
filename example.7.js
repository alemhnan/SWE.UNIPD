// https://ponyfoo.com/articles/understanding-javascript-async-await
const Promise = require('bluebird');

const longJob = (time, id, callback) => {
  console.log(`Start:   ${id}`);

  setTimeout(() => {
    const result = `Done:    ${id}`;
    callback(null, result);
  }, time);
};

// const longJobLongP = (time, id) => {
//   return new Promise((resolve, reject) => {
//     longJob(time, id, (err, result) => {
//       if (err) {
//         return reject(err);
//       }
//       return resolve(result);
//     });
//   });
// };

const longJobP = (time, id) =>
  new Promise((resolve, reject) => {
    longJob(time, id, (err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(result);
    });
  });


console.log('--A--');


Promise.resolve()

  .then((myResult) => {
    console.log(myResult);
    return longJobP(1000, 'ONE');
  })

  .then((myResult) => {
    console.log(myResult);
    return longJobP(2000, 'TWO');
  })


  .then((myResult) => {
    console.log(myResult);
  })

  .catch((err) => {
    console.log(err);
  });

console.log('--B--');
