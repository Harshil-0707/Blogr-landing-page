const linksReg = document.querySelector(".links-reg");
const openMenu = document.getElementById("hamburgericon");
const navLinks = document.querySelectorAll("#navLinks ul .link");

navLinks.forEach((links) => {
  links.addEventListener("click", (e) => {
    const link = e.currentTarget;
    link.nextElementSibling.classList.toggle("show");
  });
});

function ScreenWidth() {
  screen.width >= 971 || openMenu.classList.contains("active")
    ? (linksReg.style.display = "flex")
    : (linksReg.style.display = "none");
}

function MenuClick() {
  openMenu.classList.toggle("active");
  if (openMenu.classList.contains("active")) {
    linksReg.style.display = "flex";
    openMenu.src = "./images/icon-close.svg";
  } else {
    linksReg.style.display = "none";
    openMenu.src = "./images/icon-hamburger.svg";
  }
}
