// Smooth scroll for navigation
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Fade-in animation on scroll
const fadeElements = document.querySelectorAll('.fade-up');

window.addEventListener('scroll', () => {
  fadeElements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (position < windowHeight - 50) {
      el.classList.add('show');
    }
  });
});