document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".sidebar");
    const menuBtn = document.querySelector(".menu-btn");

    menuBtn.addEventListener("click", function () {
        sidebar.classList.toggle("open");
    });
});
