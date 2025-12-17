/*
  DOM [Events]
  - Use Events On HTML
  - Use Events On JS
  --- onclick
  --- oncontextmenu
  --- onmouseenter
  --- onmouseleave

  --- onload
  --- onscroll
  --- onresize

  --- onfocus
  --- onblur
  --- onsubmit
*/
let style = document.createElement("style");
style.append("body {height: 5000px;}");
document.head.appendChild(style);

let myButton = document.getElementsByTagName("button")[0];
console.log(myButton);

myButton.onclick = function () {
  console.log("Clicked");
};

// On Mouse's Right Click
myButton.oncontextmenu = function () {
  console.log("Clicked");
};

// On Mouse hover
myButton.onmouseenter = function () {
  console.log("Clicked");
};

myButton.onmouseleave = function () {
  console.log("leaved");
};

window.onscroll = function () {
  console.log("scrolled");
};

window.onresize = function () {
  console.log("resized");
};
