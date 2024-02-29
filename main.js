const linksReg = document.querySelector(".links-reg");
const openMenu = document.getElementById("hamburgericon");
const navLinks = document.querySelectorAll("#navLinks ul .link");

navLinks.forEach((links) => {
  links.addEventListener("click", (e) => {
    const link = e.currentTarget;
    link.nextElementSibling.classList.toggle("show");
  });
});

function removeMenu() {
  navLinks.forEach((link) => {
    link.nextElementSibling.classList.remove("show");
  });
}

function ScreenWidth() {
  if (screen.width >= 971 || openMenu.classList.contains("active")) {
    linksReg.style.display = "flex";
  } else {
    linksReg.style.display = "none";
  }
}
openMenu.onclick = () => {
  openMenu.classList.toggle("active");
  console.log(openMenu.classList.contains("active"));
  if (openMenu.classList.contains("active")) {
    linksReg.style.display = "flex";
    openMenu.src = "./images/icon-close.svg";
  } else {
    linksReg.style.display = "none";
    openMenu.src = "./images/icon-hamburger.svg";
  }
};
