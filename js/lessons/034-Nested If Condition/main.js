let price = 100;
discount = false;
let discountAmount = 30;
let country = "Egypt";
let student = true;

if (discount === true) {
  price -= discountAmount;
} else if (country === "Egypt") {
  if (student) {
    price -= discountAmount + 30;
  } else {
    price -= discountAmount + 10;
  }
} else if (country == "Syria") {
  price -= discountAmount + 20;
} else {
  price -= 10;
}

console.log(price);
