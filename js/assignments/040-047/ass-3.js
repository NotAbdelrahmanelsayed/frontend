let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [].concat(
  arrTwo.pop(),
  arrOne.sort().reverse(),
  arrTwo.sort().reverse()
);

// Write One Single Line Of Code

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]
