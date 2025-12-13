let myFriends = ["Ahmed", "Omar", "Fetoh", "Eslam", "Ahmed"];
console.log(myFriends);

// slice is not overwriting the array
console.log(myFriends.slice(2, 4));
console.log(myFriends.slice(-3)); // fetoh -> ahmed
console.log(myFriends.slice(2, -2)); // fetoh
console.log(myFriends);

console.log(myFriends.splice(0, 1, "Samir", "Maher")); // remove 1 from index 0 and add samir/maher
console.log(myFriends);
