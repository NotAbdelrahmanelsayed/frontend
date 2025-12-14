let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// reversedNums = numsAndStrings
//   .filter(function (value) {
//     return !isNaN(value);
//   })
//   .map(function (value) {
//     return -value;
//   });

// console.log(reversedNums);

reversedNums = numsAndStrings.filter((v) => !isNaN(v)).map((v) => -v);
console.log(reversedNums);
