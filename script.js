const navbar = document.getElementById('nav');

// Set up a variable to store the last scroll position
let lastScrollTop = 0;

// Add a scroll event listener to the window
window.addEventListener('scroll', function () {
    // Get the current scroll position
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Check if the user is scrolling down or up
    if (scrollTop > lastScrollTop) {
        // User is scrolling down - hide the navbar
        navbar.style.top = '-50px'; // Adjust this value depending on your navbar's height
    } else {
        // User is scrolling up - show the navbar
        navbar.style.top = '0';
    }

    // Update the last scroll position to the current one
    lastScrollTop = scrollTop;
});

const responsehead = document.getElementById('responsiveheading');

// Set up a variable to store the last scroll position
let lastScrollTop2 = 0;

// Add a scroll event listener to the window

// Function to show the sidenav
function showSidenav() {
    const sidenav = document.querySelector('#sidenav');
    sidenav.style.display = 'block'; // Show sidenav
  }
  
  // Function to hide the sidenav
  function hideSidenav() {
    const sidenav = document.querySelector('#sidenav');
    sidenav.style.display = 'none'; // Hide sidenav
  }
  
  // Function to toggle the icon between menu and close
  function toggleIcon() {
    const menuIcon = document.querySelector('.menu-class');
    
    if (menuIcon.classList.contains('ri-align-justify')) {
      menuIcon.classList.remove('ri-align-justify'); // Remove menu icon class
      menuIcon.classList.add('ri-close-line'); // Add close icon class
    } else {
      menuIcon.classList.remove('ri-close-line'); // Remove close icon class
      menuIcon.classList.add('ri-align-justify'); // Add menu icon class
    }
  }
  
  // Function to toggle the sidenav visibility and icon
  function toggleSidenav() {
    const sidenav = document.querySelector('#sidenav');
    
    if (sidenav.style.display === 'block') {
      hideSidenav(); // Hide sidenav if visible
    } else {
      showSidenav(); // Show sidenav if hidden
    }
    
    toggleIcon(); // Toggle the icon after changing sidenav visibility
  }
  
  // Function to attach event listener to the icon
  function setupSidenavToggle() {
    const menuIcon = document.querySelector('.ri-align-justify');
    menuIcon.addEventListener('click', toggleSidenav); // Attach toggle function to icon click
  }
  

// Get the button element
let scrollToTopBtn = document.getElementById("scrollToTopBtn");

// When the user scrolls down 100px from the top, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block"; // Show button
    } else {
        scrollToTopBtn.style.display = "none"; // Hide button
    }
}

// When the user clicks the button, scroll to the top
scrollToTopBtn.addEventListener("click", function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});

  
  // Initialize when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', setupSidenavToggle);
  