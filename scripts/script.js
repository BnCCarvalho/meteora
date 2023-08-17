const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const searchBar = document.querySelector('.search-bar');
const searchBarMobile = document.querySelector('.search-bar-mobile');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        searchBar.style.display = 'flex';
        searchBarMobile.style.display = 'none';
    } else {
        searchBar.style.display = 'none';
        searchBarMobile.style.display = 'flex';
    }
});
