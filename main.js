const linksReg = document.querySelector(".links-reg");
const openMenu = document.getElementById("hamburgericon");

function openMenuOnClick() {
  openMenu.classList.toggle("active");
  if (openMenu.classList.contains("active")) {
    linksReg.style.display = "flex";
    openMenu.src = "./images/icon-close.svg";
  } else {
    linksReg.style.display = "none";
    openMenu.src = "./images/icon-hamburger.svg";
  }
}
