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

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Event listeners untuk navigasi
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      showPage(link.dataset.page);
    });
  });

  if (btnStartReading) {
    btnStartReading.addEventListener('click', () => showPage('guide'));
  }

  if (btnBackToTop) {
    btnBackToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  if (logo) {
    logo.addEventListener('click', () => showPage('home'));
  }

  // Hero modal data
  const heroesData = {
    1: {
      name: 'Arden',
      role: 'Tank',
      image: 'https://i.imgur.com/1Xq6Q0B.png',
      description: 'Arden adalah tank kuat dengan kemampuan crowd control tinggi.'
    },
    2: {
      name: 'Luna',
      role: 'Mage',
      image: 'https://i.imgur.com/7Q9Xq6B.png',
      description: 'Luna adalah mage dengan serangan area besar dan scaling magic tinggi.'
    },
    3: {
      name: 'Sylas',
      role: 'Assassin',
      image: 'https://i.imgur.com/3Xq6Q0C.png',
      description: 'Sylas adalah assassin gesit yang bisa membunuh target dengan cepat.'
    },
    4: {
      name: 'Mira',
      role: 'Support',
      image: 'https://i.imgur.com/5Xq6Q0D.png',
      description: 'Mira memberikan heal dan buff untuk menjaga tim tetap hidup.'
    }
  };

  // Hero modal elements
  const heroCards = document.querySelectorAll('.hero-card');
  const heroModal = document.getElementById('hero-modal');
  const heroModalContent = document.getElementById('hero-modal-content');
  const heroModalClose = document.getElementById('hero-modal-close');

  heroCards.forEach(card => {
    card.addEventListener('click', () => {
      const heroId = card.dataset.hero;
      const hero = heroesData[heroId];

      heroModalContent.innerHTML = `
        <div class="text-center">
          <img src="${hero.image}" alt="${hero.name}" class="mx-auto w-32 h-32 object-contain mb-4" />
          <h3 class="text-2xl font-bold text-yellow-400 mb-2">${hero.name}</h3>
          <p class="italic text-blue-400 mb-4">${hero.role}</p>
          <p class="text-gray-300">${hero.description}</p>
        </div>
      `;

      heroModal.classList.remove('hidden');
    });
  });

  if (heroModalClose) {
    heroModalClose.addEventListener('click', () => {
      heroModal.classList.add('hidden');
    });
  }

  // Tutup modal saat klik background
  if (heroModal) {
    heroModal.addEventListener('click', e => {
      if (e.target === heroModal) {
        heroModal.classList.add('hidden');
      }
    });
  }
});
