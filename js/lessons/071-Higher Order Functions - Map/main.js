/*
  Higher Order Functions
  ---> is a function that accepts functions as parameters and/or returns a function.

  - Map
  --- method creates a new array
  --- populated with the results of calling a provided function on every element
  --- in the calling array.

  Syntax map(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array

  Notes
  - Map Return A New Array

  Examples
  - Anonymous Function
  - Named Function

*/
let myNums = [1, 2, 3, 4, 5, 6];
let newArray = [];

for (i of myNums) {
  newArray.push(i + i);
}

console.log(newArray);

// // Same with map
// let addSelf = myNums.map(function (value, index, array) {
//   //   return value + value;
// //   console.log(`value => ${value}`);
// //   console.log(`index => ${index}`);
// //   console.log(`array => ${array}`);
//   return value + value;
// });

// console.log(addSelf);

let addSelf = myNums.map((value) => value + value);
console.log(addSelf);

function addition(element) {
  return element + element + element;
}

// map using a defined function
let add = myNums.map(addition);
console.log(add);
