// // Set interval is repeatable
// setInterval(sayHello, 1000);

// function sayHello() {
//   console.log("Hello");
// }

let div = document.querySelector(".count"); // <div> 60 </div>
counter = setInterval(countdown, 1000); // every second div.inner -= 1

function countdown() {
  div.innerHTML -= 1;
  if (div.innerHTML === "0") {
    clearInterval(counter);
  }
}
