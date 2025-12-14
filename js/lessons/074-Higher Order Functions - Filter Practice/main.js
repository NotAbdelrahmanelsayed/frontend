// Filter Words More Than 4 Characters
let sentence = "I Love Foood Code Too Playing Much";

// let filtered = sentence
//   .split(" ")
//   .filter(function (word) {
//     return word.length <= 4;
//   })
//   .join(" ");

let filtered = sentence
  .split(" ")
  .filter((word) => word.length <= 4)
  .join(" ");
console.log(filtered);

// Example 2
let mix = "A13BS2ZX";

let filterAndMultiply = mix
  .split("")
  .filter(function (element) {
    return parseInt(element);
  })
  .map(function (element) {
    return element * element;
  })
  .join("");
console.log(filterAndMultiply);
