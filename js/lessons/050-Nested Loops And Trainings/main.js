let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

let colors = ["Red", "Green", "Black"];

let models = [2020, 2021];

for (let i = 0; i < products.length; i++) {
  console.log("#".repeat(5));
  console.log(`#- ${products[i]}`);
  console.log("#".repeat(5));

  console.log("Colors: ");
  for (let j = 0; j < colors.length; j++) {
    console.log(`- ${colors[j]}`);
  }

  console.log("Models: ");
  for (let j = 0; j < models.length; j++) {
    console.log(`- ${models[j]}`);
  }
}
