/*
  Conditional (Ternary) Operator
*/

let theName = "Mona";
let theGender = "Female";
let theAge = 20;

// Condition ? if True: If flase

theGender == "Male" ? console.log("Mr") : console.log("Mrs");
let result = theGender == "Male" ? "Mr" : "Mrs";

console.log(`Hello ${result} ${theName}`);

theAge < 20
  ? console.log(20)
  : theAge > 20 && theAge < 60
  ? console.log("20 to 60")
  : theAge > 60
  ? console.log("Larger than 60")
  : "Unknown";
