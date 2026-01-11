let btn = document.querySelector("button");

window.addEventListener("scroll", () => {
  if (scrollY > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});

btn.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
