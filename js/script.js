// toogle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika tombol hamburger menu di klik
document.querySelector("#menu-hamburger").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav
const menuHamburger = document.querySelector("#menu-hamburger");

document.addEventListener("click", function (e) {
  if (!menuHamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
