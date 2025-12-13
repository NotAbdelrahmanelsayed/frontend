function sayHello(userName, age = "Unknown") {
  //   if (!age) {
  //     age = "Unknown";
  //   }
  //   age = age || "Unknown";

  console.log(`Hello, ${userName}, your age is ${age}`);
}

sayHello("Abdelrahman");
sayHello("Omar", 25);
sayHello("Ahmed");
