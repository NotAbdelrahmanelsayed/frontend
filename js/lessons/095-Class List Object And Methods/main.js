let element = document.getElementById("h1");

console.log(element.classList);
console.log(typeof element.classList); // object
console.log(element.classList.contains("one")); // true
console.log(element.classList.item(0)); // one -> the name of the first class
console.log(element.classList.item(10)); // null

element.onclick = () => {
  element.classList.add("add-one", "add-two");
  element.classList.remove("one", "two", "not-included");
  element.classList.toggle("Hello"); // remove if exists - add if not xD
  console.log(element);
};
