let myvar = "country";

user = {
  theName: "Abdelrahman",
  "country of": "Egypt",
  country: "Egypt too",
};

console.log(user["theName"]); // Abdelrahman
console.log(user["country of"]); // Egypt
console.log(user["not in the object"]); // undefined
console.log(user.myvar); // undefined
console.log(user[myvar]); // Egypt too
