let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
let x = arr1.pop();
let f = arr2[arr1.length];
allArrs = allArrs.concat(f, x, arr2.pop()).join("").toLowerCase();
console.log(allArrs); // fxy
