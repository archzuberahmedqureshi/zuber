// 

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const openIcon = document.querySelector('.open-icon');
const closeIcon = document.querySelector('.close-icon');
const dropdowns = document.querySelectorAll('.dropdown');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
  openIcon.style.display = menu.classList.contains('active') ? "none" : "inline-block";
  closeIcon.style.display = menu.classList.contains('active') ? "inline-block" : "none";
});

dropdowns.forEach(drop => {
  drop.addEventListener('click', () => {
    drop.classList.toggle('active');
  });
});


const slides = document.querySelectorAll('.slides img');
let index = 0;

function showNextSlide() {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}

setInterval(showNextSlide, 2000); // 4s auto fade





// feature hote js




// Image slider functionality - minimal JS only for image switching
const hotelImages = {
  1: [
   '/images/Residential/res1.jpeg',
   '/images/Residential/res2.jpeg',
   '/images/Residential/res3.jpeg',
   '/images/Residential/res4.jpeg',
   '/images/Residential/res5.jpeg',
  ],
  2: [
   '/images/Commercial/com1.jpeg',
    '/images/Commercial/com2.jpeg' ,
    '/images/Commercial/com3.jpeg'
  ],
  3: [
    "/images/Offices/office1.jpeg",
   " /images/Offices/off2.jpeg",
   " /images/Offices/off3.jpeg",
   " /images/Offices/off4.jpeg"
   ]
};

let currentImageIndex = { 1: 0, 2: 0 ,3: 0, 4: 0,5:0,6:0};

function setImage(hotelId, index) {
    if (!hotelImages[hotelId]) return;
    
    currentImageIndex[hotelId] = index;
    const mainImg = document.getElementById(`main-img-${hotelId}`);
    const thumbnails = document.querySelectorAll(`[onclick*="setImage(${hotelId}"]`);
    
    mainImg.src = hotelImages[hotelId][index];
    
    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

function changeImage(hotelId, direction) {
    if (!hotelImages[hotelId]) return;
    
    const totalImages = hotelImages[hotelId].length;
    const newIndex = (currentImageIndex[hotelId] + direction + totalImages) % totalImages;
    setImage(hotelId, newIndex);
}


// offer


// Countdown Timer (mm:ss)
let countdownTime = 15 * 60; // 15 minutes in seconds
const countdownEl = document.getElementById("countdown");

function updateCountdown() {
  const minutes = Math.floor(countdownTime / 60);
  const seconds = countdownTime % 60;
  countdownEl.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  if (countdownTime > 0) {
    countdownTime--;
  }
}

setInterval(updateCountdown, 1000);
updateCountdown();






