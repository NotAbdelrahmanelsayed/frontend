/*
  - forEach
  --- method executes a provided function once for each array element.

  Syntax forEach(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array - The Current Array

  Note
  - Doesnt Return Anything [Undefined]
  - Break Will Not Break The Loop
*/

let allLis = document.querySelectorAll("ul li");
let allDivs = document.querySelectorAll(".content div");
console.log(allLis);

allLis.forEach(function (ele) {
  ele.onclick = function () {
    // Remove active class from all elements
    allLis.forEach(function (ele) {
      ele.classList.remove("active");
    });
    // add active class to this element (clicked on element)
    this.classList.add("active");
    // Hide all divs
    allDivs.forEach(function (ele) {
      ele.style.display = "none";
    });
  };
});
