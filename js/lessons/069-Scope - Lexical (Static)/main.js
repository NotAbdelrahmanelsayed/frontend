let a = 100;
function parent() {
  let a = 10;
  function child() {
    // let a = 20; // if not available print the parent's a or global
    console.log(`From Child - ${a}`);
    // console.log(`From Child - ${b}`); // is not defined
    function grandChilde() {
      let b = -100;
      console.log(`From grand - ${a}`);
      console.log(`From grand - ${b}`);
    }
    grandChilde();
  }
  child();
}

parent();
