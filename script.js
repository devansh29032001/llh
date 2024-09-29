const navbar = document.getElementById('nav');
let lastScrollTop = 0;

window.addEventListener('scroll', function () {
    // Get the current scroll position
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  
    if (scrollTop > lastScrollTop) {
        
        navbar.style.top = '-50px'; // 
    } else {
        
        navbar.style.top = '0';
    }

    
    lastScrollTop = scrollTop;
});

const responsehead = document.getElementById('responsiveheading');


let lastScrollTop2 = 0;


function showSidenav() {
    const sidenav = document.querySelector('#sidenav');
    sidenav.style.display = 'block'; 
  }
  
 
  function hideSidenav() {
    const sidenav = document.querySelector('#sidenav');
    sidenav.style.display = 'none'; 
  }
  
  
  function toggleIcon() {
    const menuIcon = document.querySelector('.menu-class');
    
    if (menuIcon.classList.contains('ri-align-justify')) {
      menuIcon.classList.remove('ri-align-justify'); 
      menuIcon.classList.add('ri-close-line'); 
    } else {
      menuIcon.classList.remove('ri-close-line'); 
      menuIcon.classList.add('ri-align-justify'); 
    }
  }
  
  
  function toggleSidenav() {
    const sidenav = document.querySelector('#sidenav');
    
    if (sidenav.style.display === 'block') {
      hideSidenav(); 
    } else {
      showSidenav(); 
    }
    
    toggleIcon(); 
  }
  
 
  function setupSidenavToggle() {
    const menuIcon = document.querySelector('.ri-align-justify');
    menuIcon.addEventListener('click', toggleSidenav); 
  }

  document.addEventListener('DOMContentLoaded', setupSidenavToggle);
  
