// variables

const menuBtn = document.querySelector(".hamburger");
const menuImg = document.querySelector(".portrait");
const navBar = document.querySelector(".nav-bar");
const nav = document.querySelector(".nav");
const navItem = document.querySelectorAll(".nav-item");

// boolean
let menuShow = false;

menuBtn.addEventListener("click", toggle);

function toggle() {
  if (!menuShow) {
    menuBtn.classList.add("close");
    menuImg.classList.add("show");
    navBar.classList.add("show");
    nav.classList.add("show");
    navItem.forEach((item) => item.classList.add("show"));

    menuShow = true;
  } else {
    menuBtn.classList.remove("close");
    menuImg.classList.remove("show");
    navBar.classList.remove("show");
    nav.classList.remove("show");
    navItem.forEach((item) => item.classList.remove("show"));

    menuShow = false;
  }
}
