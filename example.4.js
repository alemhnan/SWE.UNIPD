const longAdd = (a, b, callback) => {
  console.log(`Thinking about:      ${a} + ${b}`);
  setTimeout(() => {
    console.log(`Done thinking about: ${a} + ${b}`);
    const sum = a + b;
    callback(null, sum);
  }, 2000);
};

const longMultiply = (a, b, callback) => {
  console.log(`Thinking about:      ${a} * ${b}`);
  setTimeout(() => {
    console.log(`Done thinking about: ${a} * ${b}`);
    const sum = a * b;
    callback(null, sum);
  }, 2000);
};

console.log('--A--');

longAdd(2, 3, (errOne, resultOne) => {
  console.log(resultOne);

  longMultiply(resultOne, 4, (errTwo, resultTwo) => {
    console.log(resultTwo);
  });
});

console.log('--B--');
