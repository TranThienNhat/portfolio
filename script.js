// Initialize when DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS animation library
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });

  // Navbar scroll behavior
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Smooth scrolling for navbar links
  document.querySelectorAll('.nav-link, .navbar-brand, header .btn').forEach(link => {
    link.addEventListener('click', function(e) {
      if (this.hash !== '') {
        e.preventDefault();
        
        const hash = this.hash;
        const targetElement = document.querySelector(hash);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
          });
          
          // Add active class to current nav-link
          document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
          });
          this.classList.add('active');
        }
      }
    });
  });

  // Auto-collapse mobile navbar when clicking on a link
  const navLinks = document.querySelectorAll('.nav-link');
  const menuToggle = document.getElementById('navbarNav');
  const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false});
  
  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      if (window.innerWidth < 992) {
        bsCollapse.hide();
      }
    });
  });

  // Highlight current section in navbar
  window.addEventListener('scroll', function() {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 100) {
        current = section.getAttribute('id');
      }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });

  // Skill cards hover effect with random colors
  const skillItems = document.querySelectorAll('.skill-list li span');
  const colors = ['#0d6efd', '#20c997', '#fd7e14', '#dc3545', '#6610f2'];
  
  skillItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      this.style.color = randomColor;
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.color = '';
    });
  });

  // Handle name animation in header
  const headerTitle = document.querySelector('header h1');
  if (headerTitle) {
    headerTitle.style.opacity = '0';
    headerTitle.style.transform = 'translateY(-30px)';
    
    setTimeout(() => {
      headerTitle.style.opacity = '1';
      headerTitle.style.transform = 'translateY(0)';
      headerTitle.style.transition = 'opacity 1s ease, transform 1s ease';
    }, 500);
  }
});