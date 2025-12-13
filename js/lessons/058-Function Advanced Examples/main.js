console.log(typeof console.log); // function
console.log(typeof console); // object

function sayHello(userName, age) {
  if (age < 20) {
    console.log("App is not suitable for you.");
  } else {
    console.log(`Hello, ${userName}. your age is ${age}`);
  }
}

sayHello("Abdelrahman", 25);
sayHello("Omar", 26);
sayHello("Ahmed", 24);
sayHello("Ahmed", 18);

function generateYears(start, end, exclude) {
  for (let i = start; i <= end; i++) {
    if (i === exclude) {
      continue;
    }
    console.log(i);
  }
}

generateYears(2000, 2025, 2024);
