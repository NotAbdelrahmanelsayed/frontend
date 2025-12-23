let element = document.getElementById("my-div");
element.style.color = "red";
element.style.fontSize = "25px";
element.style.fontPalette = "Blue-Red-Green";
element.style.backgroundColor = "offwhite";

element.style.cssText = "font-weight: bold; color: green; opacity:0.76";
element.style.removeProperty("color"); // Removes the color
element.style.setProperty("font-size", "30px", "important"); // Set the propeort
