const noop = () => { };

const sleep = (time) => {
  const stop = new Date().getTime();
  while (new Date().getTime() < stop + time) {
    noop();
  }
};

const longAdd = (a, b) => {
  console.log(`Thinking about:      ${a} + ${b}`);
  sleep(1000);
  console.log(`Done thinking about: ${a} + ${b}`);

  const sum = a + b;
  return sum;
};

const longMultiply = (a, b) => {
  console.log(`Thinking about:      ${a} * ${b}`);
  sleep(1000);
  console.log(`Done thinking about: ${a} * ${b}`);

  const sum = a * b;
  return sum;
};

const s = longAdd(2, 3);
console.log(s);

const p = longMultiply(4, s);
console.log(p);

