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