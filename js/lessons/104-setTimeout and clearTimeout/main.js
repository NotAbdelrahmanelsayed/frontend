setTimeout(() => {
  console.log("message");
}, 3000);

// setTimeout(sayMsg(userName), 3000); // will print the output without waiting 3 seconds.
let timeHandler = setTimeout(sayMsg, 3000); // will use the timeout

function sayMsg() {
  console.log(`I'm  message`);
}

let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  clearTimeout(timeHandler);
});
