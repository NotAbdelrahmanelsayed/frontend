/*
  DOM [Create Elements]
  - createElement
  - createComment
  - createTextNode
  - createAttribute
  - appendChild
*/

let myElement = document.createElement("div");
let myAttribute = document.createAttribute("data-custom");
let myText = document.createTextNode("Product One");
let myComment = document.createComment("This is a div from main.js");

myElement.className = "product";
myElement.setAttributeNode(myAttribute);
myElement.setAttribute("data-test", "Testing");

// Append comment to element
myElement.appendChild(myComment);

// Append text to element
myElement.appendChild(myText);

// Append Element to Body
document.body.appendChild(myElement);

console.log(myElement);
