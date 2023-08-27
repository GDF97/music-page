const btnOpen = document.querySelector(".btn-mobile-open");
const btnClose = document.querySelector(".btn-mobile-close");
const leftSidebar = document.querySelector(".left-sidebar");

btnOpen.addEventListener("click", () => {
  leftSidebar.classList.add("active");
});

btnClose.addEventListener("click", () => {
  leftSidebar.classList.remove("active");
});
