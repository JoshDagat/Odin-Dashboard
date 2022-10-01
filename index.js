const menu = document.querySelector(".menu");
const sidebar = document.querySelector(".sidebar");
const close = document.querySelector(".btn-close");

menu.addEventListener("click", () => {
  sidebar.classList.add("open");
})

close.addEventListener("click", () => {
  sidebar.classList.remove("open");
})

