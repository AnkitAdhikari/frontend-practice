"use strict";

const moreBtn = document.querySelector(".more");
const navMore__El = document.querySelector(".nav-more-container");
let sign = document.querySelector(".sign");

moreBtn.addEventListener("click", () => {
  navMore__El.classList.toggle("hidden");
  sign.textContent === "+"
    ? (sign.textContent = "-")
    : (sign.textContent = "+");
});
