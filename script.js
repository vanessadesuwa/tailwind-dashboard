const closeOverlay = document.getElementById("overlay-icon");
const openOverlay = document.getElementById("hamburger-icon");
const sideBar = document.querySelector(".overlay-wrapper");
const dropdownIcon = document.querySelector(".drop-down");
const miniMenu = document.querySelector(".mini-menu");
const overLay = document.querySelector(".overlay");

openOverlay.addEventListener("click", () => {
  sideBar.classList.toggle("display");
});

closeOverlay.addEventListener("click", () => {
  sideBar.classList.remove("display");
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) {
    sideBar.classList.remove("display");
  }
});

overLay.addEventListener("click", () => {
  sideBar.classList.remove("display");
});

dropdownIcon.addEventListener("click", () => {
  miniMenu.classList.toggle("display");
  console.log(miniMenu);
});
