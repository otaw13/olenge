document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menuButton");
  const sidebar = document.getElementById("sidebar");
  const close = document.getElementById("close");

  close.addEventListener("click", function () {
    sidebar.classList.remove("translate-x-0");
    sidebar.classList.toggle("translate-x-100");
  });
  menuButton.addEventListener("click", function () {
    sidebar.classList.toggle("translate-x-0");
  });
});