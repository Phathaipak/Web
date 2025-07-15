// scripts.js

document.addEventListener('DOMContentLoaded', () => {
  // Hamburger menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('nav ul');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('open');
    // Update aria-expanded for accessibility
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !expanded);
  });

  // Close menu when clicking on a nav link (for mobile)
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
    });
  });

  // Header shadow on scroll
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if(window.scrollY > 50){
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Simple auto sliding news carousel
  const carouselInner = document.querySelector('.news-carousel-inner');
  const newsItems = document.querySelectorAll('.news-item');
  let currentIndex = 0;
  const totalItems = newsItems.length;
  const slideWidth = newsItems[0].clientWidth + 15; // width + gap

  function slideNews() {
    currentIndex = (currentIndex + 1) % totalItems;
    carouselInner.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
  }
  let carouselInterval = setInterval(slideNews, 4000);

  // Pause carousel on hover
  const newsCarousel = document.querySelector('.news-carousel');
  newsCarousel.addEventListener('mouseenter', () => clearInterval(carouselInterval));
  newsCarousel.addEventListener('mouseleave', () => carouselInterval = setInterval(slideNews, 4000));

  // Scroll reveal for sections
  const sections = document.querySelectorAll('section');
  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    sections.forEach(section => {
      const top = section.getBoundingClientRect().top;
      if(top < windowHeight - 100){
        section.classList.add('visible');
      }
    });
  }
  revealOnScroll();
  window.addEventListener('scroll', revealOnScroll);
});
