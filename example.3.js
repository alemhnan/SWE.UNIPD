const longAdd = (a, b, callback) => {
  console.log(`Thinking about:      ${a} + ${b}`);
  setTimeout(() => {
    console.log(`Done thinking about: ${a} + ${b}`);
    const sum = a + b;
    callback(null, sum);
  }, 1000);
};

const longMultiply = (a, b, callback) => {
  console.log(`Thinking about:      ${a} * ${b}`);
  setTimeout(() => {
    console.log(`Done thinking about: ${a} * ${b}`);
    const sum = a * b;
    callback(null, sum);
  }, 1000);
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
