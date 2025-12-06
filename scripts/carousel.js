let slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");

  // Hide all slides initially
  for (let i = 0; i < slides.length; i++) {
	slides[i].style.display = "none";  
  }

  // Increment slide index
  slideIndex++;

  // If we reach the end of the slideshow, go back to the first slide
  if (slideIndex > slides.length) {
	slideIndex = 1;
  }

  // Show the current slide
  slides[slideIndex - 1].style.display = "block";

  // Set the slide show to advance automatically every 5 seconds (5000ms)
  setTimeout(showSlides, 5000);
}

// Call the function to start the slideshow
showSlides();