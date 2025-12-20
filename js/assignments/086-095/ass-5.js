let imgs = document.querySelectorAll("img");
console.log(imgs);

for (let i = 0; i < imgs.length; i++) {
  if (!imgs[i].alt) {
    imgs[i].setAttribute("alt", "Elzero New");
  } else {
    imgs[i].setAttribute("alt", "Old");
  }
}
