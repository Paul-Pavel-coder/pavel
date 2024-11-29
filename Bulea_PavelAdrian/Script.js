let currentImageIndex = 0;
const images = document.querySelectorAll('.resources-info .images-container img');
const slideshowContainer = document.querySelector('.resources-info .images-container');

// Funcția pentru a ascunde toate imaginile
function hideAllImages() {
    images.forEach(img => {
        img.style.opacity = '0';
    });
}

// Funcția pentru a arăta imaginea activă
function showImage(index) {
    hideAllImages();
    images[index].style.opacity = '1'; 
}

// Afișăm toate imaginile vizibile inițial
images.forEach(img => {
    img.style.opacity = '1';
});

// Funcția pentru a începe slideshow-ul la dublu-click
document.getElementById('monitorizare-resurse').addEventListener('dblclick', function() {
    
    images[0].style.opacity = '1';
    images[1].style.opacity = '0';
    images[2].style.opacity = '0';

    // Pornim slideshow-ul
    let interval = setInterval(function() {
        // Începem cu imaginea din stânga și trecem pe următoarea
        currentImageIndex = (currentImageIndex + 1) % images.length; // Mergem la următoarea imagine
        showImage(currentImageIndex);
    }, 3000); // Schimbă imaginea la fiecare 3 secunde

    // Oprește slideshow-ul după 15 secunde și resetează imaginile la starea inițială
    setTimeout(function() {
        clearInterval(interval);
        // Restabilim opacitatea tuturor imaginilor pentru a le arăta din nou
        images.forEach(img => {
            img.style.opacity = '1';
        });
    }, 15000); // 15 secunde de slideshow
});
