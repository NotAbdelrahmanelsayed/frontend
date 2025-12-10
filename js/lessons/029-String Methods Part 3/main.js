/*
  String Methods
  - substring(Start [Mand], End [Opt] Not Including End)
  --- Start > End Will Swap
  --- Start < 0 It Start From 0
  --- Use Length To Get Last Character
  - substr(Start [Mand], Characters To Extract)
  --- Start >= Length = ""
  --- Negative Start From End
  - includes(Value [Mand], Start [Opt] Default 0) [ES6]
  - startsWith(Value [Mand], Start [Opt] Default 0) [ES6]
  - endsWith(Value [Mand], Length [Opt] Default Full Length) [ES6]
*/

let a = "Abdelrahman Mohamed Elsayed";

console.log(a.length);
console.log(a.substring(3, 12)); // elrahman
console.log(a.substring(12, 3)); // elrahman
console.log(a.substring(-10)); // Abdelrahman Mohamed Elsayed
console.log(a.substring(28)); // empty string
console.log(a.substring(a.length - 1)); // last character

console.log(a.includes("Moh")); // False
console.log(a.includes("moh")); // False

console.log(a.startsWith("A")); // true
console.log(a.startsWith("A", 3)); // false

console.log(a.endsWith("d")); // true
console.log(a.endsWith("d", 3)); // true
