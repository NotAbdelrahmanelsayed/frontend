let myFriends = ["Omar", "Ahmed", "Fetoh"];
let myNewFriends = ["Ali", "Eslam", "Dwidar"];
let schoolFriends = ["Mostafa", "Mohsen"];

let allFriends = myFriends.concat(myNewFriends, schoolFriends);
console.log(allFriends);

console.log(allFriends.join()); // default seperator is ","
console.log(allFriends.join(" "));
console.log(allFriends.join("-"));
