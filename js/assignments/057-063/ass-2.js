function calculate(firstNum, secondNum, operation) {
  if (!secondNum) {
    console.log(`Second Number Not Found`);
    return;
  }

  if (operation === "subtract") {
    console.log(firstNum - secondNum);
    return;
  } else if (operation === "multiply") {
    console.log(firstNum * secondNum);
    return;
  }
  console.log(firstNum + secondNum);
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600