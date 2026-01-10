let body = document.querySelector("body").children;

Array.from(body).forEach((element) => {
  element.addEventListener("click", () => {
    console.log("This is Element", element.tagName);
  });
});
