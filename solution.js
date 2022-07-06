let numOne = 35;
let numTwo = 67;

console.log(
  (numOne >= 40 && numOne <= 60) || (numTwo >= 70 && numTwo <= 100)
    ? true
    : false
);

let specificNum = 10;
// console.log(specificNum < 19 ? specificNum - 19 : (19 - specificNum) * 3);
console.log(specificNum < 19 ? 19 - specificNum : (specificNum - 19) * 3);

console.log(
  numOne === 50 || numTwo === 50 || numOne + numTwo === 50 ? true : false
);
