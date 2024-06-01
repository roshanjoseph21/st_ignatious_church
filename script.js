// Function to close the navigation overlay
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// Wait for the document to be fully loaded
$(document).ready(() => {
  // Smooth scroll for all elements with class 'smoothScroll'
  $('.smoothScroll').on('click', function(event) {
      // Check if the clicked link's pathname and hostname match the current location
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          // Find the target element
          let target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // If the target element exists, animate the scroll
          if (target.length) {
              $('html, body').animate({
                  scrollTop: target.offset().top
              }, 1300); // The speed of the scroll in milliseconds
              return false;
          }
      }
  });

  // Initialize Owl Carousel
  $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      dots: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsive: {
          0: {
              items: 1
          },
          600: {
              items: 1
          },
          1000: {
              items: 1
          }
      }
  });

  // Attach event listeners to the menu buttons
  document.querySelector('.closebtn').addEventListener('click', closeNav);
});
