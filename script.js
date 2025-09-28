const closeOverlay = document.getElementById("overlay-icon");
const openOverlay = document.getElementById("hamburger-icon");
const sideBar = document.querySelector(".overlay-wrapper");
const dropdownIcon = document.querySelector(".drop-down");
const miniMenu = document.querySelector(".mini-menu");

openOverlay.addEventListener("click", () => {
  sideBar.classList.toggle("display");
});

closeOverlay.addEventListener("click", () => {
  sideBar.classList.toggle("display");
});

dropdownIcon.addEventListener("click", () => {
  miniMenu.classList.toggle("display");
  console.log(miniMenu);
});
