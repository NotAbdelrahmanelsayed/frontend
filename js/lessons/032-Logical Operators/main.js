/*
  Logical Operators
  - ! Not
  - && And
  - || Or
*/

console.log(!true); // false
console.log(10 == "10"); // true
console.log(!(10 == "10")); // false

console.log(10 == 10 && 10 > 8 && 10 <= 12); // true
console.log(10 == 10 && 10 > 8 && 10 >= 1e6); // false

console.log(10 > 8 || 20 > 50); // true