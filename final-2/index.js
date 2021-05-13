const body = document.querySelector("body");

window.addEventListener("load", () => {
  body.classList.add("visible");
});

particlesJS.load("particles-js", "particlesjs-config.json");

const dark_light = document.querySelector(".dark-light");

dark_light.addEventListener("click", (event) => {
  body.classList.toggle("dark-mode");
});
