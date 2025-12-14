let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// let mapped = mix
//   .map(function (el) {
//     return typeof el === "number" ? "" : el;
//   })
//   .reduce(function (prev, cur) {
//     return prev + cur;
//   });
// console.log(mapped); // Elzero

let mapped = mix
  .map((el) => (isNaN(el) ? el : ""))
  .reduce((prev, cur) => prev + cur);
console.log(mapped); // Elzero
