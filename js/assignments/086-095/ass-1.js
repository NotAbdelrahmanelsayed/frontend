let s1 = document.querySelector(".element");
console.log(`s1`, s1);

let s2 = document.querySelector("#elzero");
console.log(`s2`, s2);

let s3 = document.querySelector("div");
console.log(`s3`, s3);

let s4 = document.querySelector("[name='js']");
console.log(`s4`, s4);

let s5 = document.querySelectorAll("div");
console.log(`s5[0]`, s5[0]);

let s6 = document.getElementsByName("js");
console.log(`s6[0]`, s6[0]);

let s7 = document.getElementById("elzero");
console.log(`s7`, s7);

let s8 = document.getElementsByClassName("element");
console.log(`s8[0]`, s8[0]);

let s9 = document.getElementsByTagName("div");
console.log(`s9[0]`, s9[0]);

let s10 = document.querySelectorAll(".element");
console.log(`s10[0]`, s10[0]);

let s11 = document.querySelectorAll("[name='js']");
console.log(`s11[0]`, s11[0]);

let s12 = document.querySelectorAll("#elzero");
console.log(`s12[0]`, s12[0]);

let body = document.body.children;

let s13;
let s14;
let s15;
for (let i = 0; i < body.length; i++) {
  if (body[i].matches(".element")) {
    s13 = body[i];
  }
  if (body[i].closest("[name='js']")) {
    s14 = body[i];
  }

  if (body[i].matches("#elzero")) {
    s15 = body[i];
  }
}
console.log(`s13`, s13);
console.log(`s14`, s14);
console.log(`s15`, s15);
