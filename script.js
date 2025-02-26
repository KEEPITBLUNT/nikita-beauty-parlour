
    // Scroll Effect for Blur Navbar
window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Mobile Menu Toggle (Now Working!)
document.getElementById("mobile-menu").addEventListener("click", function () {
    document.getElementById("nav-links").classList.toggle("active");
});
////////////
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let index = 0;
const totalSlides = slides.length;

// Function to move the slider
function moveSlider() {
    slider.style.transform = `translateX(-${index * 100}%)`;
}

// Next Slide
nextBtn.addEventListener('click', () => {
    index = (index + 1) % totalSlides;
    moveSlider();
});

// Previous Slide
prevBtn.addEventListener('click', () => {
    index = (index - 1 + totalSlides) % totalSlides;
    moveSlider();
});

// Auto Slide
setInterval(() => {
    index = (index + 1) % totalSlides;
    moveSlider();
}, 3000); // Change every 3 seconds

// Swipe Gesture for Mobile
let startX = 0;

slider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

slider.addEventListener('touchend', (e) => {
    let endX = e.changedTouches[0].clientX;
    if (startX > endX + 50) {
        index = (index + 1) % totalSlides;
    } else if (startX < endX - 50) {
        index = (index - 1 + totalSlides) % totalSlides;
    }
    moveSlider();
});

    $(document).ready(function () {
        $("a").on("click", function (event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $("html, body").animate(
                    {
                        scrollTop: $(hash).offset().top
                    },
                    800 /* Scroll Speed */
                );
            }
        });
    });

