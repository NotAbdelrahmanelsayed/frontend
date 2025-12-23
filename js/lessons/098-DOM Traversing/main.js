/*
  DOM [Traversing]
  - nextSibling
  - previousSibling
  - nextElementSibling
  - previousElementSibling
  - parentElement
*/

let span = document.querySelector(".Two");
console.log(span.nextSibling);
console.log(span.nextElementSibling); // Ignore the comment and get the element after span

span.onclick = () => {
  //   span.parentElement.remove();
  span.parentElement.style.opacity = 0;
};
