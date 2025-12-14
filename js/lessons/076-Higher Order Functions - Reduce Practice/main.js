let theBiggest = [
  "Bla",
  "Propaganda",
  "Other",
  "AAA",
  "Battery",
  "Test",
  "Propaganda_Two",
];

let add = theBiggest.reduce(function (acc, curr, index, array) {
  // acc -> first element
  // curr -> element next to acc
  // index -> the index of the curr
  //   console.log(`acc -> ${acc}`);
  //   console.log(`curr -> ${curr}`);
  //   console.log(`index -> ${index}`);
  //   console.log("###");
  // condition ? true : false
  return acc.length > curr.length ? acc : curr;
}); // 5 is the initial value (defalut -> 0)

console.log(add);

let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

let finalStrin = removeChars
  .filter(function (char) {
    return !char.startsWith("@");
  })
  .reduce(function (acc, curr) {
    return acc + curr;
  });

console.log(finalStrin);
