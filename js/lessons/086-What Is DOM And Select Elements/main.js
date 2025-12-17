/*
  DOM
  - What Is DOM
  - DOM Selectors
  --- Find Element By ID
  --- Find Element By Tag Name
  --- Find Element By Class Name
  --- Find Element By CSS Selectors
  --- Find Element By Collection
  ------ title
  ------ body
  ------ images
  ------ forms
  ------ links
*/

let myIdElement = document.getElementById("my-div");
let myTagElement = document.getElementsByTagName("p");
let myClassElement = document.getElementsByClassName("my-span");
let myQueryElement = document.querySelector(".my-span");
let myQueryAll = document.querySelectorAll(".my-span");

console.log(myIdElement);
console.log(myTagElement[0]);
console.log(myClassElement);
console.log(myQueryElement);
console.log(myQueryAll);

// ---
console.log(document.title);
console.log(document.body); // body
console.log(document.forms[0].one);
console.log(document.links[0].href);
