/* 
stop() -> stop loading the content
print()
focus()
scrollTo(x, y) -> go to the same position
scrollBy(x, y) keep scrolling by x, y.
*/

// let myNewWindow = window.open("https://google.com", "");
// let myDiv = document.querySelector("#my-div");
// myDiv.focus();

// window.scrollTo(5000, 5000);

window.scrollTo({
  left: 500,
  top: 200,
  behavior: "smooth",
});
