/**
 * No operation
 **/
const noop = () => { };

/**
 * Active sleep
 * Only for demonstrative purpose
 **/
const sleep = (time) => {
  console.log(`Active sleep ${time / 1000}s`);
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
  sleep(2000);
  console.log(`Done thinking about: ${a} + ${b}`);

  const sum = a + b;
  return sum;
};

/**
 * One second multiplication, blocking
 **/
const longMultiply = (a, b) => {
  console.log(`Thinking about:      ${a} * ${b}`);
  sleep(2000);
  console.log(`Done thinking about: ${a} * ${b}`);

  const sum = a * b;
  return sum;
};

const sum = longAdd(2, 3);
console.log(sum);

const product = longMultiply(4, sum);
console.log(product);

/**
 * Thinking about:      2 + 3
 * Active sleep 2s
 * Done thinking about: 2 + 3
 * 5
 * Thinking about:      4 * 5
 * Active sleep 2s
 * Done thinking about: 4 * 5
 * 20
 **/
