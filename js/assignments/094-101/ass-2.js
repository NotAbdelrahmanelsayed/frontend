const addInput = document.querySelector(".classes-to-add");
const removeInput = document.querySelector(".classes-to-remove");
const currentElement = document.querySelector(".current");
const classesContainer = document.querySelector(".classes-list div");

// Function to display classes
function updateClasses() {
  classesContainer.innerHTML = "";

  // Convert classList to array
  let classes = Array.from(currentElement.classList);

  if (classes.length === 0) {
    classesContainer.textContent = "No Classes To Show";
    return;
  }

  classes.sort();

  for (let cls of classes) {
    let span = document.createElement("span");
    span.textContent = cls;
    classesContainer.appendChild(span);
  }
}

// Add classes
addInput.addEventListener("blur", () => {
  if (!addInput.value.trim()) return;

  let values = addInput.value.toLowerCase().split(" ");

  for (let cls of values) {
    currentElement.classList.add(cls);
  }

  addInput.value = "";
  updateClasses();
});

// Remove classes
removeInput.addEventListener("blur", () => {
  if (!removeInput.value.trim()) return;

  let values = removeInput.value.toLowerCase().split(" ");

  for (let cls of values) {
    currentElement.classList.remove(cls);
  }

  removeInput.value = "";
  updateClasses();
});

updateClasses();
