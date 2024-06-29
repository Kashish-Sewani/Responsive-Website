document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const navbar = document.querySelector('.navbar');
    const navList = document.querySelector('.nav-list');
    const rightNav = document.querySelector('.rightNav');

    burger.addEventListener('click', () => {
        rightNav.classList.toggle('visibility-class-resp');
        navList.classList.toggle('visibility-class-resp');
        navbar.classList.toggle('h-nav-resp');
    });
});
