/**
 * No operation
 **/
const noop = () => { };

/**
 * Active sleep
 * For demonstration purposes only
 **/
const sleep = (time) => {
  console.log(`Blocking sleep ${time / 1000}s`);
  const stop = new Date().getTime();
  while (new Date().getTime() < stop + time) {
    noop();
  }
};

/**
 * One second addition, blocking
 **/
const longAdd = (a, b) => {
  console.log(`Thinking about:      ${a} + ${b}`);
  sleep(3000);
  console.log(`Done thinking about: ${a} + ${b}`);

  const sum = a + b;
  return sum;
};

/**
 * One second multiplication, blocking
 **/
const longMultiply = (a, b) => {
  console.log(`Thinking about:      ${a} * ${b}`);
  sleep(1000);
  console.log(`Done thinking about: ${a} * ${b}`);

  const sum = a * b;
  return sum;
};

console.log('--A--');

const sum = longAdd(2, 3);
console.log(`Sum: ${sum}`);

console.log('--B--');

const product = longMultiply(4, sum);
console.log(`Product: ${product}`);

console.log('--C--');

/**
  --A--
  Thinking about:      2 + 3
  Blocking sleep 3s
  Done thinking about: 2 + 3
  Sum: 5
  --B--
  Thinking about:      4 * 5
  Blocking sleep 1s
  Done thinking about: 4 * 5
  Product: 20
  --C--
 **/
