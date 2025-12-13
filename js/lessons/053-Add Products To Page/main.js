let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
let colors = ["Red", "Green", "Black"];
let models = [2020, 2021];
let count = 5;

document.write(`<h1> Show ${count} Products</h1>`);

for (let i = 0; i < count; i++) {
  document.write(`<div>`);
  document.write(`<h3>[${i + 1}] ${products[i]}</h3>`);
  for (let j = 0; j < colors.length; j++) {
    document.write(`<p>${colors[j]}</p>`);
  }
  document.write(`</div>`);
  document.write(`<p>${colors.join("-")}</p>`);
}
