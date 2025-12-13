function checkStatus(a, b, c) {
  let name, age, status;

  // Detect name
  if (typeof a === "string") name = a;
  else if (typeof b === "string") name = b;
  else name = c;

  // Detect age
  if (typeof a === "number") age = a;
  else if (typeof b === "number") age = b;
  else age = c;

  // Detect status
  if (typeof a === "boolean") status = a;
  else if (typeof b === "boolean") status = b;
  else status = c;

  // Print result
  if (status) {
    console.log(
      `Hello ${name}, Your Age Is ${age}, You Are Available For Hire`
    );
  } else {
    console.log(
      `Hello ${name}, Your Age Is ${age}, You Are Not Available For Hire`
    );
  }
}
