document.addEventListener('DOMContentLoaded', () => {
  // Navigation
  const pages = document.querySelectorAll('.page');
  const navLinks = document.querySelectorAll('.nav-link');
  const btnStartReading = document.getElementById('btn-start-reading');
  const btnBackToTop = document.getElementById('btn-back-to-top');
  const logo = document.getElementById('logo');

  function showPage(pageId) {
    pages.forEach(p => {
      if (p.id === `page-${pageId}`) {
        p.classList.remove('hidden');
        p.classList.add('fade-in');
      } else {
        p.classList.add('hidden');
        p.classList.remove('fade-in');
      }
    });
    navLinks.forEach(link => {
      if (link.dataset.page === pageId) {
        link.classList.add('text-yellow-400');
      } else {
        link.classList.remove('text-yellow-400');
      }
    });
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const page = link.dataset.page;
      showPage(page);
    });
  });

  btnStartReading.addEventListener('click', () => {
    showPage('guide');
  });

  btnBackToTop.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  });

  logo.addEventListener('click', () => {
    showPage('home');
  });

  // Hero modal data
  const heroesData = {
    1: {
      name: 'Arden',
      role: 'Tank',
      image: 'https://i.imgur.com/1Xq6Q0
