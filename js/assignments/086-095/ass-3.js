let results = document.getElementsByClassName("result")[0];
let userInput = document.getElementsByTagName("input")[0];

getCurrency = (i) => {
  return results.textContent.split("=")[i];
};

userInput.addEventListener("input", () => {
  results.textContent = results.textContent.replace(
    getCurrency(0),
    `{${userInput.value}}`
  );
  results.textContent = results.textContent.replace(
    getCurrency(1),
    `{${(userInput.value * 15.6).toFixed(2)}}`
  );
});
