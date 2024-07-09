// toogle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika tombol hamburger menu di klik
document.querySelector("#menu-hamburger").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};
// toogle class aktif untuk cart menu
const cartButton = document.querySelector("#shopping-button");
const cartMenu = document.querySelector(".shopping-cart");

cartButton.onclick = (e) => {
  cartMenu.classList.toggle("active");
  e.preventDefault();
};

// toogle class active untuk search menu
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-btn").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// klik di luar element
const hm = document.querySelector("#menu-hamburger");
const sb = document.querySelector("#search-btn");
const cb = document.querySelector("#shopping-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!cb.contains(e.target) && !cartMenu.contains(e.target)) {
    cartMenu.classList.remove("active");
  }
});

// modal box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-btn");
const closeItemDetailModal = document.querySelector(".close-icon");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

closeItemDetailModal.onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// klik dimanapun untuk tutup modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
