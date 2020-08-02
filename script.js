// Code for carousel inspired by 
// sitepoint.com/make-a-simple-javascript-slideshow-without-jquery/


  window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

var slides = document.getElementsByClassName("CarouselPics");
var totalItems = slides.length;
var currentSlide = 0;
var newCurrent = null;
// Autoscroll for carousel pictures
var slideInterval = setInterval(nextSlide,7000);

function nextSlide(){
  // Moves forward by one through list of CarouselPics
  slides[currentSlide].className = 'CarouselPics';
  newCurrent = (currentSlide+1)
  // If function tries to move forward beyond the end of the list of pics, moves to beginning.
  if (newCurrent > totalItems - 1) {
      newCurrent = 0
      currentSlide = newCurrent;
  } else {
      currentSlide = newCurrent
  }
  slides[currentSlide].className = 'CarouselPics active';
} 

function prevSlide(){
  // Moves backwards by one through list of CarouselPics
  slides[currentSlide].className = 'CarouselPics';
  newCurrent = (currentSlide-1)
  // if function tries to move backward beyond the beginning of the list of pic, moves to end.
  if (newCurrent < 0) {
      newCurrent = totalItems - 1
      currentSlide = newCurrent;
  } else {
      currentSlide = newCurrent
  }
  slides[currentSlide].className = 'CarouselPics active';
}

// Binding event listeners to the forwards and backward buttons
document.getElementById('CarouselButtonRight').addEventListener('click', nextSlide)
document.getElementById('CarouselButtonLeft').addEventListener('click', prevSlide)