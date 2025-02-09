document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById("menu-toggle");
    const mobileNav = document.getElementById("mobile-nav");

    menuButton.addEventListener("click", function() {
        mobileNav.classList.toggle("active");
    });
});
