let currentImageIndex = 0;
const images = ["./images/hero-img.png", "./images/hero-img-2.jpg"];
const heroImg = document.querySelector(".hero-img");

function showPreviousImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  updateHeroImage("slide-right");
}

function showNextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  updateHeroImage("slide-left");
}

function updateHeroImage(animationClass) {
  heroImg.classList.add(animationClass); // Add animation class
  setTimeout(() => {
    heroImg.src = images[currentImageIndex]; // Change the image source after the animation completes
    heroImg.classList.remove(animationClass); // Remove animation class
  }, 500); // Adjust the delay as needed for the animation duration
}

// Automatically transition to the next image every 2 seconds
setInterval(showNextImage, 5000);

let sidebarOpenBtn = document.querySelector("#sidebar-btn");
let sidebar = document.querySelector(".sidebar");
let sidebarCloseBtn = document.querySelector("#sidebar-close-btn");

sidebarOpenBtn.onclick = function () {
  sidebar.classList.toggle("active");
};

sidebarCloseBtn.onclick = function () {
  sidebar.classList.remove("active");
};
