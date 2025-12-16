console.log(this); // window object
console.log(this === window); // true

myVar = 100;

console.log(myVar); // 100
console.log(this.myVar); // 100

function sayHello() {
  console.log(this);
}

sayHello(); // window
console.log(sayHello() === this); // true

document.getElementById("cl").onclick = function () {
  console.log(this); // <button id="cl" data--h-bstatus="0OBSERVED">Click</button>
};

user = {
  age: 25,
  ageInDays: function () {
    console.log(this); // user object
    return this.age * 365; // like self in python
  },
};

console.log(user.ageInDays()); // age
