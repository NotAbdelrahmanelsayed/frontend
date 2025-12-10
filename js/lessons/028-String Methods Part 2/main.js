/*
  String Methods
  - indexOf(Value [Mand], Start [Opt] 0)
  - lastIndexOf(Value [Mand], Start [Opt] Length)
  - slice(Start [Mand], End [Opt] Not Include End)
  - repeat(Times) [ES6]
  - split(Separator [Opt], Limit [Opt])
*/

let a = "abdelrahman mohamed elsayed";

console.log(a.indexOf("mohamed")); // 12
console.log(a.indexOf("mohamed", 13)); // -1 -> not found
console.log(a.indexOf("m")); // 7
console.log(a.lastIndexOf("m")); // 16
console.log(a.slice(5, 11)); // rahman
console.log(a.slice(-5)); // sayed
console.log(a.repeat(2)); // abdelrahman mohamed elsayedabdelrahman mohamed elsayed
console.log(a.split("")); // ['a', 'b', 'd', 'e', 'l', 'r', 'a', 'h', 'm', 'a', 'n', ' ', 'm', 'o', 'h', 'a', 'm', 'e', 'd', ' ', 'e', 'l', 's', 'a', 'y', 'e', 'd']
console.log(a.split(" ")); // ['abdelrahman', 'mohamed', 'elsayed']
console.log(a.split(" ")); // ['abdelrahman', 'mohamed', 'elsayed']
console.log(a.split(" ", 2)); //  ['abdelrahman', 'mohamed']
