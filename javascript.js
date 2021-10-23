///création d'un bouton pour gérer le dark mode

const dark = document.querySelector("#dark");
const light = document.querySelector("#light");
const couleurFond = document.querySelector("body");

dark.addEventListener("click", () => {
  couleurFond.style.backgroundColor = "black";
  dark.style.visibility = "hidden";
  light.style.visibility = "visible";
});

light.addEventListener("click", () => {
  couleurFond.style.backgroundColor = "rgba(254, 205, 81)";
  dark.style.visibility = "visible";
  light.style.visibility = "hidden";
});
