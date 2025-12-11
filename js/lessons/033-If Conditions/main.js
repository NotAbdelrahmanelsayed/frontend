/* 
- if
- else
- else if

keyowrd (condition)
*/

let price = 100;
discount = false;
let discountAmount = 30;
let country = "";

if (discount === true) {
  price -= discountAmount;
} else if (country === "Egypt") {
  price -= 40;
} else if (country == "Syria") {
  price -= 50;
} else {
  price -= 10;
}

console.log(price);
