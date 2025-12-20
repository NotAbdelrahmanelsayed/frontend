imgs = document.querySelectorAll("img");

for (let i = 0; i < imgs.length; i++) {
  imgs[i].setAttribute("alt", "Elzero Logo");
  imgs[i].setAttribute(
    "src",
    "https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
  );
}
