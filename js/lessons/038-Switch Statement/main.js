/*
  Switch Statement
  switch(expression) {
    Case 1:
      // Code Block
      break;
    Case 2:
      // Code Block
      break;
    Default:
      // Code Block
  }
  - Default Ordering
  - Multiple Match
  - ===
*/

// let day = 0;
let day = 2;

switch (day) {
  case 0:
    console.log("Saturday");
    break;

  case 1:
    console.log("Sunday");
    break;

  case 3:
  case 2:
    console.log("Monday");
    break;
  default:
    console.log("Unknown Day");
}
