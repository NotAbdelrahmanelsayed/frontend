/*
  DOM [Get / Set Elements Content And Attributes]
  - innerHTML
  - textContent
  - Change Attributes Directly
  - Change Attributes With Methods
  --- getAttribute
  --- setAttribute

  Search
  - innerText
*/

let myElement = document.querySelector(".js");
console.log(myElement.innerHTML); // html -> js <span>div</span> &lt;span&gt;
console.log(myElement.textContent); // pure text -> js div <span>

myElement.innerHTML = "My Text from <span> main.js </span>";
myElement.textContent = "My Text from <span> main.js </span>";

document.images[0].src = "https://google.com";
document.images[0].alt = "alternate";

document.title = "Overwrite from main js";

let myLink = document.querySelector(".link");

console.log(myLink.getAttribute("class"));
console.log(myLink.getAttribute("href"));
console.log(myLink.getAttribute);

console.log(myLink.setAttribute("href", "twitter.com"));
console.log(myLink.setAttribute("title", "twitter"));
