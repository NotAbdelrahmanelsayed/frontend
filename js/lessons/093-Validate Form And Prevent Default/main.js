let userInput = document.querySelector("[name='username']");
let userAge = document.querySelector("[name='age']");

document.links[0].onclick = function (event) {
  console.log(event);
  event.preventDefault();
};

document.forms[0].onsubmit = function (e) {
  let useraVlid = false;
  let ageValid = false;

  if (userInput.value !== "" && userInput.value.length <= 10) {
    useraVlid = true;
  }

  if (userAge.value !== "") {
    ageValid = true;
  }

  if (useraVlid === false || ageValid === false) {
    e.preventDefault();
  }
};
