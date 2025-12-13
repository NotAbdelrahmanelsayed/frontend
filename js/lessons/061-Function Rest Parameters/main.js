function calc(...numbers) {
  console.log(Array.isArray(numbers));
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}

console.log(calc(10, 20, 30, 50, 20));
