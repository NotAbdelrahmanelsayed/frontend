let calc = function (num1, num2) {
  return num1 + num2;
};
console.log(calc(1, 2));

document.getElementById("show").onclick = function () {
  console.log("Show");
};

setTimeout(() => {
  console.log("Good");
}, 2000);
