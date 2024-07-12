// scripts.js

const menu = document.querySelector('.sidebar');

function openNav() {
    menu.style.left = '0';
}

function closeNav() {
    menu.style.left = '-100%';
}



let currentIndex = 0;

function showNextImage() {
    const carouselImages = document.querySelector('.carousel-images');
    const images = document.querySelectorAll('.carousel-images img');
    currentIndex = (currentIndex + 1) % images.length;
    const offset = -currentIndex * images[0].clientWidth;
    carouselImages.style.transform = `translateX(${offset}px)`;
}

setInterval(showNextImage, 3000); // Cambia la imagen cada 3 segundos

// Inicio.js

document.getElementById('toggleDarkMode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const icon = this.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});
