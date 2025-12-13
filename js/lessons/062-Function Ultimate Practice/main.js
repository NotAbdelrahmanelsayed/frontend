function showDetials(
  user = "Unknown",
  age = "Unknown",
  rate = 0,
  show = "Yes",
  ...skills
) {
  document.write("<div>");
  document.write(`<h2>Welcom, ${user}</h2>`);
  document.write(`<p>Age: ${age}</p>`);
  document.write(`<p>Hour Rate: ${rate}$</p>`);
  if (show === "Yes") {
    if (skills.length > 0) {
      document.write(`<p>Skills: ${skills.join("-")}</p>`);
    } else {
      document.write(`<p>Skills: No skills.</p>`);
    }
  } else {
    document.write("<p>Skills is hidden</p>");
  }
  document.write("</div>");
}

showDetials("Abdelrahman", 25, 15, "No", "Python", "JS", "Vue.js");
