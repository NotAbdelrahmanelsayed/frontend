user = new Object();

console.log(user);

user.age = 25;
user["country"] = "Egypt";

console.log(user);

user.age = 20;
console.log(user);

user.sayHello = function () {
  return `Hello`;
};

console.log(user.sayHello());
