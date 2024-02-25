const navLinks = document.querySelectorAll("#navLinks ul .link");
const openMenu = document.getElementById("hamburgericon");

navLinks.forEach((links) => {
  links.addEventListener("click", (e) => {
    const link = e.currentTarget;
    link.nextElementSibling.classList.toggle("show");
  });
});

openMenu.onclick = () => {
  openMenu.classList.toggle("active");
  if (openMenu.classList.contains("active")) {
    openMenu.src = "./images/icon-close.svg";
  } else {
    openMenu.src = "./images/icon-hamburger.svg";
  }
};
