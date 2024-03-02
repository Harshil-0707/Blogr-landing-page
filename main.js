const linksReg = document.querySelector(".links-reg1");
const openMenu = document.getElementById("hamburgericon");

function ScreenWidth() {
  if (screen.width < 971 && openMenu.classList.contains("active")) {
    linksReg.style.display = "block";
  } else {
    linksReg.style.display = "none";
  }
}

function openMenuOnClick() {
  openMenu.classList.toggle("active");
  if (openMenu.classList.contains("active")) {
    linksReg.style.display = "block";
    openMenu.src = "./images/icon-close.svg";
  } else {
    linksReg.style.display = "none";
    openMenu.src = "./images/icon-hamburger.svg";
  }
}
