// https://github.com/airbnb/javascript

// Es6 Arrow Function Sintax
const lol = (message) => message;

// AirBnB GuideStyle not allow reassing value for parameter. Only Function for this work.
const twoTimes = (num) => num * 2;

const showA = (b) => {
  twoTimes(b);
  return b;
};

const objQlq = {
  // Es6 Shorthand Function
  hello() {
    console.log('Hello');
  },

};

console.log(lol('lol'));
console.log(showA(1));
objQlq.hello();
