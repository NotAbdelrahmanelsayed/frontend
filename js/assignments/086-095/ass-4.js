let two = document.querySelector(".one");
let contentTwo = two.textContent;
let titleTwo = two.title;

let one = document.querySelector(".two");
let contentOne = one.textContent;
let titleOne = one.title;

two.textContent = contentOne;
two.title = titleOne;

one.textContent = contentTwo;
one.title = titleTwo;

one.append(
  document.getElementsByClassName("one").length +
    document.getElementsByClassName("two").length
);

console.log(one);
console.log(two);
