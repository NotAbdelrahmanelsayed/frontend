let price = 0;

console.log(`the price is ${price || 200}`); // 200 if price is falsy value
console.log(`the price is ${price ?? 200}`); // nullish
