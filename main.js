const menuBtn = document.querySelectorAll(".menu-btn .menuBtn");
const navLinks = document.querySelectorAll("#navLinks ul .link");

// menuBtn.forEach((btn) => {
//   btn.addEventListener("click", (b) => {
//     b.currentTarget.classList.toggle("hide");
//   });
// });

navLinks.forEach((links) => {
  links.addEventListener("click", (e) => {
    const link = e.currentTarget;
    link.nextElementSibling.classList.toggle("show");
  });
});
