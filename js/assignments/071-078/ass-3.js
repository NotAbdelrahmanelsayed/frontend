let myArray = ["E", ["l", "z"], ["e", [[["r"]]]], "o"];

// flatArray = myArray.reduce(function red(prev, curr) {
//   return typeof curr == "string" ? prev + curr : prev + curr.reduce(red);
// });

flatArray = myArray.reduce(
  (red = (prev, curr) =>
    typeof curr == "string" ? prev + curr : prev + curr.reduce(red))
);

console.log(flatArray);
