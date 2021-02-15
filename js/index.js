var icono = document.querySelector("#menu");
var container = document.querySelector("#mobile");

icono.addEventListener("click", () => {
  if (container.classList.contains("show")) {
    container.classList.remove("show");
  } else {
    container.classList.add("show");
  }
});
