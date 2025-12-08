/*
  Var
  - Redeclare (Yes)
  - Access Before Declare (Undefined)
  - Variable Scope Drama [Added To Window] ()
  - Block Or Scope Function

  Let
  - Redeclare (No => Error)
  - Access Before Declare (Error)
  - Variable Scope Drama ()
  - Block Or Scope Function

  Const
  - Redeclare (No => Error)
  - Access Before Declare (Error)
  - Variable Scope Drama ()
  - Block Or Scope Function
*/

var a = 1;
var a = 2; // Redeclare the variable name.
console.log(a);

// Raise an error
// let a = 1;
// let a = 2;

// Raise an error
// const a = 1;
// const a = 2;

/* 
main.js:24 Uncaught ReferenceError: Cannot access 'c' before initialization
    at main.js:24:13
*/
console.log(c);
let c = 2;
