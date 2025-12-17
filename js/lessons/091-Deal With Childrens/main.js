let myElement = document.querySelector("div");

console.log(myElement);
console.log(myElement.children); // Only Elements p/span
console.log(myElement.children[0]); // <p></p>
console.log(myElement.childNodes); // text, p, text, span, comment ..etc

console.log(myElement.firstChild); // first child however it's type
console.log(myElement.lastChild); // lsat child however it's type

console.log(myElement.firstElementChild); // first element
console.log(myElement.lastElementChild); // last element
