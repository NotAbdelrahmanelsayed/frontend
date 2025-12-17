for (let i = 1; i <= 100; i++) {
  let divElement = document.createElement("div");

  // Create class
  divElement.className = `product ${i}`;

  let myHead = document.createElement("h3");
  let myParagraph = document.createElement("p");

  // Create text
  myHead.textContent = `Product title ${i}`;
  myParagraph.textContent = `This is the product Description ${i}`;

  document.body.appendChild(divElement);
  divElement.appendChild(myHead);
  divElement.appendChild(myParagraph);
}
