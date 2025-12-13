let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words.pop()[0].replace("E", "").replace("l", "").toUpperCase()); // ZERO
