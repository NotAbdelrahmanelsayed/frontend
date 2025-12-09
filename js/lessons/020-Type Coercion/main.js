let a = "10";
let b = 20;
let c = true;

console.log(a + b); //1020

console.log(+a + b); //30

console.log(a - b); // -10 it's not reasonable to subtract number from string

console.log("" - 2); // 0 - 2 = -2

console.log(a + b + c); // 1020true - c converted to string bcause of the concatenation is started from strings
console.log(+a + b + c); // 31 
