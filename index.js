const menuToggle = document.querySelector('.menu-toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.menu-toggle('active');
    showcase.classList.menu-toggle('active');
})