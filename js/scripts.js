/* Scroll to element using href */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/* Scroll to top */
document.getElementById('home-button').addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector('#hero').scrollIntoView({
        behavior: 'smooth'
    });
});

/* Hero element scroll down arrow */
document.getElementById('scroll-arrow').addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth'
    });
});

/* Changes header once past the hero */
document.addEventListener('scroll', function () {
    var heroHeight = document.getElementById('hero').offsetHeight;
    var headerElement = document.querySelector('header');

    var offset = 2; // Allows header to appear when arrow is clicked
    
    var headerLinks = document.querySelectorAll('header nav ul li a');
    
    if (window.scrollY > heroHeight - offset) {
        headerLinks.forEach(link => link.classList.add('scrolled'));
        headerElement.classList.add('scrolled');
    } else {
        headerLinks.forEach(link => link.classList.remove('scrolled'));
        headerElement.classList.remove('scrolled');
    }
});