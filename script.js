const slides = document.querySelectorAll('.slide');

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiceClases();
        slide.classList.add('active');
    });
}

function clearActiceClases() {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
}