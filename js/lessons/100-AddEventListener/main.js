let myP = document.querySelector("p");

myP.addEventListener("click", () => {
  console.log("P is clicked1");
});

myP.addEventListener("click", () => {
  console.log("P is clicked2"); // Both are working
});

// myP.addEventListener("click", "Not an object"); // error

myP.addEventListener("click", () => {
  let newP = myP.cloneNode(true);
  newP.className = "clone";
  document.body.append(newP);
});

let cloned = document.querySelector(".clone");
// cloned.onclick = () => {
//   console.log("I'm cloned p");
// }; // error because cloned isn't created yet

document.addEventListener("click", (event) => {
  if (event.target.className === "clone") {
    console.log("I'm cloned p");
  }
  //   console.log(event.target); // the place you clicked on.
});
