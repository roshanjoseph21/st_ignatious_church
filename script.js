// Function to open the navigation overlay
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

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
});

// Attach event listeners to the menu buttons
document.getElementById('openmenu').addEventListener('click', openNav);
document.querySelector('.closebtn').addEventListener('click', closeNav);
