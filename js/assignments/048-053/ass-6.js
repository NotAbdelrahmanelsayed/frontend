let start = 0;
let swappedName = "elZerO";
let output = [];

for (start; start < swappedName.length; start++) {
  output.push(
    swappedName[start] === swappedName[start].toLowerCase()
      ? swappedName[start].toUpperCase()
      : swappedName[start].toLowerCase()
  );
}
console.log(output.join(""));
