let menuIcon = document.querySelector("#menu-icon");
let navToogle = document.querySelector(".loop");
let header = document.querySelector("#header");

menuIcon.addEventListener("click", function () {
  header.classList.toggle("background");
  navToogle.classList.toggle("show");
});
