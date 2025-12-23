let element = document.getElementById("my-div");
let elementP = document.getElementById("my-p");

element.before("Hello from js before"); // Add the string before the element
element.after("Hello from js after"); // Add the string after the element

element.before(elementP); // add the p element before the div

element.append("Hello From js append");
element.prepend("Hello From js Prepend");

element.remove(); // remove the element from the dom tree completely.
