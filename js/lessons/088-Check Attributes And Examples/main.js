console.log(document.getElementsByTagName("p")[0].attributes);
let myP = document.getElementsByTagName("p")[0];

if (myP.hasAttribute("data-src")) {
  if (myP.getAttribute("data-src") === "") {
    myP.removeAttribute("data-src");
  } else {
    myP.setAttribute("data-src", "New Value");
  }
} else {
  console.log("not found");
}

if (myP.hasAttributes()) {
  console.log("Hass Attributes"); // has attributes
}

if (document.getElementsByTagName("div")[0].hasAttributes()) {
  console.log("Hass Attributes"); //
} else {
  console.log("div has no attributes"); // div has no attributes
}
