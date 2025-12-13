let myFriends = ["Ahmed", "Omar", "Fetoh", ["Mohamed", "Eslam"]];
console.log(`Hello, ${myFriends[0]}`);
console.log(`Hello, ${myFriends[2]}`);
console.log(myFriends[4]); // undefined
console.log(myFriends[3][1]);

// Edit array's data
console.log(`before edit ${myFriends[1]}`);
myFriends[1] = "Not Omar";
console.log(`after edit ${myFriends[1]}`);

console.log(Array.isArray(myFriends));
