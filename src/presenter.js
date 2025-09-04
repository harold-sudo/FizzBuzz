import secuencia from "./secuencia.js";

const first = document.querySelector("#primer-numero");
const form = document.querySelector("#fizzbuzz-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const n = first.value;
  div.innerHTML = "<p>" + secuencia(n) + "</p>";
});