  document.addEventListener("DOMContentLoaded", function() {
    var carouselElement = document.getElementById('carouselExampleControls');

    // Function to update the caption text based on the active slide
    function updateCaption() {
      // Find the active carousel item
      var activeItem = carouselElement.querySelector('.carousel-item.active');
      // Get the caption text from the active item
      var captionText = activeItem.querySelector('.carousel-caption p').innerText;
      // Update the caption text below the carousel
      document.getElementById('carousel-caption-text').innerText = captionText;
    }

    // Initialize the caption with the text of the first slide
    updateCaption();

    // Listen for the 'slide.bs.carousel' event to update the caption when the slide changes
    carouselElement.addEventListener('slid.bs.carousel', updateCaption);
  });
