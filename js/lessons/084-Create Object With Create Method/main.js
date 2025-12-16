user = {
  age: 25,
  ageInDays: function () {
    return this.age * 365; // user.age * 365
  },
};

console.log(user.age); // 25
console.log(user.ageInDays()); // age

let obj = Object.create({});

obj.a = 100;
console.log(obj);

copyObj = Object.create(user);

copyObj.age = 22; // overwrite the 25 to 22
console.log(copyObj); // {} and prototype of the user object
console.log(copyObj.age); // 23
console.log(copyObj.ageInDays()); // age in days
