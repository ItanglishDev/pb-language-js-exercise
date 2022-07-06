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

console.log(
  (numOne > 0 && numTwo < 0) || (numOne < 0 && numTwo > 0) ? "Yes" : "No"
);

let stringNew = "today was a good day!";
console.log(stringNew.substring(0, 2) != "Py" ? stringNew : "Py" + stringNew);
// console.log(stringNew.substring(0, 2) == "Py");

let strToCut = "today";
console.log("exercise 6");
console.log(strToCut.substring(2) + strToCut + strToCut.substring(2));
console.log(strToCut.slice(2) + strToCut + strToCut.slice(2));
