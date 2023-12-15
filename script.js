const boxes = document.querySelectorAll('.fade-in');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
};

const fadeInCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.classList.contains('is-visible')) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
      entry.target.classList.add('is-visible');
    } else {
      entry.target.style.opacity = 0;
      entry.target.style.transform = 'translateY(20px)';
      entry.target.classList.remove('is-visible');
    }
  });
};

const observer = new IntersectionObserver(fadeInCallback, options);

boxes.forEach(box => {
  observer.observe(box);
});


  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }