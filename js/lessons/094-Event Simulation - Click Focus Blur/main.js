let one = document.querySelector(".one");

window.onload = () => {
  one.focus();
};

one.onblur = () => {
  document.links[0].click();
};
