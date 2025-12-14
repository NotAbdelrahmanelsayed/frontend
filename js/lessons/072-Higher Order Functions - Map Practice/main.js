/*
  Map
  - Swap Cases
  - Inverted Numbers
  - Ignore Boolean Value
*/

let swappingCases = "elZERo";
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ignoreNumbers = "Elz123er4o";

let swap = swappingCases
  .split("")
  .map(function swap(char) {
    return char.toLowerCase() === char
      ? char.toUpperCase()
      : char.toLowerCase();
  })
  .join("");

console.log(swap);

// let inverted = invertedNumbers.map(function invert(n) {
//   return -n;
// });

let inverted = invertedNumbers.map((inv = (n) => -n));
console.log(inverted);

// let ignore = ignoreNumbers
//   .split("")
//   .map(function ign(n) {
//     // condition ? True : False
//     return parseInt(n) ? "" : n;
//   })
//   .join("");

let ignore = ignoreNumbers
  .split("")
  .map((ign = (n) => (parseInt(n) ? "" : n)))
  .join("");

console.log(ignore);
