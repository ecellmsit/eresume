console.log("rajat logged");

const hamburger = document.querySelector(".square");

const nav = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("slide");
});