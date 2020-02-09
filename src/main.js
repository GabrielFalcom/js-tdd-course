const a = 3;
console.log(a);

// Es6 Function Sintax
const lol = (message) => message;

// AirBnB GuideStyle not allow reassing value for parameter. Only Function for this work.
const twoTimes = (num) => num * 2;

const showA = (b) => {
  twoTimes(b);
  return b;
};

console.log(lol('lol'));
console.log(showA(1))
