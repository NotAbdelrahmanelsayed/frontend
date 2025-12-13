let products = ["Keyboard", "Mouse", 120, "Pen", 31, 4132, "Pad", "Monitor"];

let colors = ["Red", "Green", "Black"];

let models = [2020, 2021];
mainloop: for (let i = 0; i < products.length; i++) {
  if (typeof products[i] == "number") {
    continue;
  }
  console.log(products[i]);
  if (products[i] == "Monitor") {
    break;
  }
  nestedloop: for (let j = 0; j < colors.length; j++) {
    console.log(`- ${colors[j]}`);
    if (colors[j] === "Green") {
      break mainloop;
    }
  }
}
