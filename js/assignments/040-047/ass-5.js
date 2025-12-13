let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if (haystack.includes(needle)) {
  console.log("found");
}
if (haystack.indexOf(needle) >= 0) {
  console.log("found");
}
if (haystack.lastIndexOf(needle) >= 0) {
  console.log("found");
}
