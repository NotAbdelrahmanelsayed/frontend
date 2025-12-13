function ageInTime(theAge) {
  if (theAge < 10 || theAge > 100) {
    console.log("Age Out Of Range");
    return;
  }
  let months = theAge * 12;
  let days = months * 30;
  let hours = days * 24;
  let minutes = hours * 60;
  let seconds = minutes * 60;
  console.log(`Months => ${months}`);
  console.log(`Days => ${days}`);
  console.log(`Hours => ${hours}`);
  console.log(`Minutes => ${minutes}`);
  console.log(`Seconds => ${seconds}`);
}

// Needed Output
ageInTime(110); //
ageInTime(38); // Months Example => 456 Months
