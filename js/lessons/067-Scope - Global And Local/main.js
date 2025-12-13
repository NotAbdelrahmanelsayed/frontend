var a = 1;
let b = 2;

function showText() {
  var a = 10;
  let b = 20;
  console.log(`Function - from Local ${a}`);
  console.log(`Function - from Local ${b}`);
}

console.log(`from Global ${b}`);
console.log(`from Global ${a}`);

showText();
