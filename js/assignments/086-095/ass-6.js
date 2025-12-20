let results = document.querySelector(".results");
document.forms[0][3].onclick = (e) => {
  e.preventDefault();
  let nElements = +document.querySelector("[name='elements']").value;
  let type = document.querySelector("[name='type']").value;
  let text = document.querySelector("[name='texts']").value;
  results.replaceChildren();
  for (let i = 0; i < nElements; i++) {
    let element = document.createElement(type);
    element.id = `id-${i + 1}`;
    element.className = "box";
    element.title = "Element";
    element.textContent = text;
    results.appendChild(element);
  }
};
