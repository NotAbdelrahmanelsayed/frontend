let myP = document.querySelector("p");
let myDiv = document.querySelector("div.our-element");
myP.remove();

const beforeElement = document.createElement("div");
beforeElement.innerText = "Start";
beforeElement.dataset.value = "Start";
beforeElement.className = "start";
beforeElement.title = "Start Element";

myDiv.before(beforeElement);

const endElement = document.createElement("div");
endElement.innerText = "End";
endElement.dataset.value = "End";
endElement.className = "end";
endElement.title = "End Element";
myDiv.after(endElement);
