/*
  - Filter
  --- method creates a new array
  --- with all elements that pass the test implemented by the provided function.

  Syntax filter(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array
*/

let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];
let numbers = [11, 12, 13, 14, 15, 16, 17];
// Test map Vs Filter

let addMap = numbers.map(function (num) {
  return num + num;
});

console.log(addMap);

let filterFriends = friends.filter(function (friend) {
  return friend.toLowerCase().startsWith("a"); // get elements if this condition is true
});

console.log(filterFriends); // Ahmed, Asmaa, Amgad

let evenNunmbers = numbers.filter(function (num) {
  return num % 2 === 0;
});

console.log(evenNunmbers);
