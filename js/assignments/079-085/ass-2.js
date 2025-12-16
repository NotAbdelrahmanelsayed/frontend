// Method One
// Create Your Object Here
objMethodOne = Object.assign({}, { property: "Method One" });
console.log(objMethodOne.property); // "Method One"

// Method Two
// Create Your Object Here
objMethodTwo = Object({
  property: "Method Two",
});
console.log(objMethodTwo.property); // "Method Two"

// // Method Three
// // Create Your Object Here
objMethodThree = Object.create({ property: "Method Three" });
console.log(objMethodThree.property); // "Method Three"

// // Method Four
// // Create Your Object Here
objMethodFour = new Object({
  property: "Method Four",
});
console.log(objMethodFour.property); // "Method Four"