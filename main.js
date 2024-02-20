const navLinks = document.querySelectorAll("#navLinks ul .link");

// navLinks.onclick = () => {
//   product.nextElementSibling.classList.toggle("show");
// };

navLinks.forEach((links) => {
  links.addEventListener("click", (e) => {
    const link = e.currentTarget;
    link.nextElementSibling.classList.toggle("show");
  });
});
