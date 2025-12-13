// // example 1 of nested function
// function sayMessage(fName, lName) {
//   let message = "Hello";

//   function concantMessage() {
//     message = `${message} ${fName} ${lName}`;
//   }
//   concantMessage();
//   return message;
// }

// // Example 2
// function sayMessage(fName, lName) {
//   let message = "Hello";

//   function concantMessage() {
//     return `${message} ${fName} ${lName}`;
//   }
//   return concantMessage();
// }
// console.log(sayMessage("Abdelrahman", "Elsayed"));

// Example 2
function sayMessage(fName, lName) {
  let message = "Hello";

  function concantMessage() {
    function getFullName() {
      return `${fName} ${lName}`;
    }
    return `${message} ${getFullName()}`;
  }
  return concantMessage();
}

console.log(sayMessage("Abdelrahman", "Elsayed"));
