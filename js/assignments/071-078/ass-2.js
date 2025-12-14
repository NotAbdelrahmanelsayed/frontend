let myString = "EElllzzzzzzzeroo";

// fitleredString = myString
//   .split("")
//   .filter(function (value, index, array) {
//     return value !== array[index + 1];
//   })
//   .reduce(function (prev, cur) {
//     return prev + cur;
//   });
// console.log(fitleredString); // Elzero

fitleredString = myString
  .split("")
  .filter((vl, idx, arr) => vl !== arr[idx + 1])
  .reduce((prev, cur) => prev + cur);
console.log(fitleredString); // Elzero
