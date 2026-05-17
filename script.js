// ========== PRODUITS ==========
const products = [
  {
    id: 'w1', name: 'TULIPE ROSE ', nameFr: 'TULIPE ROSE ',
    sub: 'AVEC UNE BAGUE CADEAU ', subFr: 'AVEC UNE BAGUE CADEAU',
    price: 99, original:120, promo: true,
    img: 'tuliperose.img/packtuliperose.webp',
    images: [
      'tuliperose.img/packtuliperose.webp',
      'tuliperose.img/rose.webp',
      'tuliperose.img/braclettuliperose.webp',
      'tuliperose.img/baguetuliperose.webp'
    ],
  },
  {
    id: 'w2', name: 'PACK VAN CLEEF NOIRE', nameFr: 'PACK VAN CLEEF NOIRE',
    sub: 'ENSSEMBLE MAGNIFIQUE ET ELEGANT', subFr: 'ENSSEMBLE MAGNIFIQUE ET ELEGANT',
    price: 99, original: null, promo: false,
    img: 'vancleefnoire/packvancleefnoire.webp',
    images: [
      'vancleefnoire/packvancleefnoire.webp',
      'vancleefnoire/colvancleefnoire.webp',
      'vancleefnoire/baguevancleefnoire.webp'
    ],
  },
  {
    id: 'w3', name: 'PACK ROUGE PRESSTIGE', nameFr: 'PACK ROUGE PRESSTIGE',
    sub: 'PACK DE PRESSTIGE ROUGE ET ELEGANT ', subFr: 'PACK DE PRESSTIGE ROUGE ET ELEGANT',
    price: 119, original: 150, promo: true,
    img: 'vancleefrouge/packvancleefrouge.webp',
    images: [
      'vancleefrouge/packvancleefrouge.webp',
      'vancleefrouge/bouclevancleefrouge.webp',
      'vancleefrouge/braceletvancleefrouge.webp',
      'vancleefrouge/colvancleefrouge.webp'
    ],
  },
  {
    id: 'w4', name: 'PACK OCEAN ROYAL', nameFr: 'PACK OCEAN ROYAL',
    sub: "Un pack incroyable qui fait ressentir l'âme de la mer.", subFr: "Un pack incroyable qui fait ressentir l'âme de la mer.",
    price: 129, original: null, promo: true,
    img: 'oceanroyal/packoceanroyal.webp',
    images: [
      'oceanroyal/coloceanroyal.webp',
      'oceanroyal/packoceanroyal.webp',
      'oceanroyal/boucleoceanroyal.webp',
    ],
  },
  {
    id: 'w5', name: 'GREEN LIFE', nameFr: 'GREEN LIFE',
    sub: '3 PIECES ADORABLES AVEC DES BOUCLES CADEAU', subFr: '3 PIECES ADORABLES AVEC DES BOUCLES CADEAU',
    price: 119, original: 150, promo: true,
    img: 'greenlife/packgreenlife.webp',
    images: [
      'greenlife/packgreenlife.webp',
      'greenlife/colgreenlife2.webp',
      'greenlife/couclegreenlife.webp',
      'greenlife/colbgreenlife.webp',
      'greenlife/colgreenlife.webp',
    ],
  },
  {
    id: 'w6', name: "PACK D'AMOUR", nameFr: "PACK D'AMOUR",
    sub: "Le Sertissement de l'amour", subFr: "Le Sertissement de l'amour",
    price: 119, original: null, promo: false,
    img: 'packdamour/packdamours.webp',
    images: [
      'packdamour/packdamour.webp',
      'packdamour/coldamour.webp',
      'packdamour/baguedamour.webp',
      'packdamour/boucledamour.webp',
      'packdamour/braceletdamour.webp',
    ],
  },
  {
    id: 'w7', name: 'BRACELET TULIPE BLEU ', nameFr: 'BRACELET TULIPE BLEU',
    sub: "Un bracelet incroyable qui fait sentir la délicatesse d'une fleur rare et la force d'un amour silencieux.", subFr: "Un bracelet incroyable qui fait sentir la délicatesse d'une fleur rare et la force d'un amour silencieux.",
    price: 99, original: null, promo: false,
    img: 'tulipebleu/tulipebleu.webp',
    images: [
      'tulipebleu/tulipebleu.webp',
      'tulipebleu/tulipebleu2.webp'
    ],
  },
  {
    id: 'w8', name: ' VAN CLEEF ROSE', nameFr: ' VAN CLEEF ROSE',
    sub: ' AVEC UNE CHEVILLE CADEAU', subFr: 'AVEC UNE CHEVILLE CADEAU',
    price: 99, original: 130, promo: true,
    img: 'vancleefrose/packvancleefrose.webp',
    images: [
      'vancleefrose/packvancleefrose.webp',
      'vancleefrose/khelkhalvancleefrose.webp',
      'vancleefrose/colvancleefrose.webp',
    ],
  },
  {
    id: 'w9', name: 'Trésor Doré✨', nameFr: 'Trésor Doré✨',
    sub: 'L’éclat doré qui révèle votre élégance naturelle.', subFr: 'L’éclat doré qui révèle votre élégance naturelle.',
    price: 159, original: null, promo: false,
    img: 'TresorDore/packtresored.webp',
    images: [
      'TresorDore/packtresored.webp',
      'TresorDore/packtresore.webp',
      'TresorDore/bracelettresor.webp',
      'TresorDore/baguetresor.webp'
    ],
  },
  {
    id: 'w10', name: 'PAPILLON', nameFr: 'PAPILLON',
    sub: "Un éclat délicat, inspiré par la beauté libre du papillon.", subFr: "Un éclat délicat, inspiré par la beauté libre du papillon.",
    price: 129, original: null, promo: false,
    img: 'papion/papion.webp',
    images: [
      'papion/packpapion.webp',
      'papion/papion.webp',
      'papion/bouclepapion.webp',
    ],
  },
  {
    id: 'w11', name: 'GOLDEN EDGE', nameFr: 'GOLDEN EDGE',
    sub: "POUR PLUS D'ELEGANCE ", subFr: "POUR PLUS D'ELEGANCE",
    price: 99, original: 130, promo: true,
    img: 'goldenedge/colgoldenedge.webp',
    images: [
      'goldenedge/colgoldenedge.webp',
      'goldenedge/packgoldenedge.webp',
      'goldenedge/bouclegoldenedge.webp'
    ],
  },
  {
    id: 'w12', name: ' PACK LUNE ', nameFr: 'PACK LUNE',
    sub: 'UNE TRES BELLE CHAINE DE MAIN AVEC UN TRES BEAU BRACELET DE LA LUNE ', subFr: 'UNE TRES BELLE CHAINE DE MAIN AVEC UN TRES BEAU BRACELET DE LA LUNE ',
    price: 139, original: 160, promo: true,
    img: 'lune/packlune.webp',
    images: [
      'lune/packlune.webp',
      'lune/packlunee.webp',
      'lune/braceletlune.webp',
    ],
  },
  {
    id: 'w13', name: "CHAINE D'ELEGANCE", nameFr: "CHAINE D'ELEGANCE",
    sub: "CHAINE POUR MAIN TRES ELEGANTE ", subFr: "CHAINE POUR MAIN TRES ELEGANTE ",
    price: 119, original: null, promo: false,
    img: 'chaine/chaine.webp',
    images: [
      'chaine/chaine.webp',
    ],
  },
   {
    id: 'w14', name: ' SWAN', nameFr: 'SWAN',
    sub: 'LE MEILLEUR CHOIX POUR UNE ELEGANTE', subFr: 'LE MEILLEUR CHOIX POUR UNE ELEGANTE',
    price: 129, original: null, promo: false,
    img: 'swan/packswan.webp',
    images: [
      'swan/packswan.webp',
      'swan/colswan.webp',
      'swan/chaineswan.webp',
      'swan/packswans.webp',
    ],
  },
];

// ========== VARIABLES GLOBALES ==========
let currentLang = localStorage.getItem('blluxury_lang') || 'en';
let currentProduct = null;
let musicPlaying = false;
let arStream = null;
let isDragging = false;
let dragStartX = 0, dragStartY = 0;
let jewelryX = 50, jewelryY = 50;
let audioElement = null;
let audioReady = false;

// ========== DÉBLOCAGE AUDIO ==========
document.addEventListener('click', function unlockAudio() {
  if (!audioReady) {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    gain.gain.value = 0.001;
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(0);
    osc.stop(0.001);
    ctx.close();
    audioReady = true;
    console.log('🔊 Audio débloqué');
  }
}, { once: true });

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavbar();
  initLang();
  initGoldParticles();
  initScrollReveal();
  initScrollTop();
  initViewerCounter();
  updateCartBadge();
  renderProducts();
  initCartPage();
  initFAQ();
  initStatsCounter();
  setDynamicIslandTime();
  initProductModal();
  initCustomCursor();
  initDiamondBackground();
  initCountdownTimer();
  initMusicToggle();
  initPageTransition();

  setTimeout(() => {
    const loader = document.querySelector('.hero-loading');
    if (loader) loader.remove();
  }, 2500);
});

// ========== CURSEUR DIAMANT ==========
function initCustomCursor() {
  const cursor = document.getElementById('customCursor');
  const dot = document.getElementById('cursorDot');
  if (!cursor || !dot) return;
  
  if (window.innerWidth <= 1000) {
    cursor.style.display = 'none';
    dot.style.display = 'none';
    document.body.style.cursor = 'auto';
    return;
  }

  let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX - 3}px, ${mouseY - 3}px)`;
  });

  function animate() {
    cursorX += (mouseX - cursorX) * 0.1;
    cursorY += (mouseY - cursorY) * 0.1;
    cursor.style.transform = `translate(${cursorX - 20}px, ${cursorY - 20}px)`;
    requestAnimationFrame(animate);
  }
  animate();
}

// ========== ARRIÈRE-PLAN DIAMANTS ==========
function initDiamondBackground() {
  const canvas = document.getElementById('diamondCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let diamonds = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  class Diamond {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 3 + 1;
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.speedY = (Math.random() - 0.5) * 0.3;
      this.rotation = Math.random() * Math.PI * 2;
      this.rotationSpeed = (Math.random() - 0.5) * 0.01;
      this.opacity = Math.random() * 0.3 + 0.1;
    }
    draw(ctx) {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);
      ctx.fillStyle = `rgba(212, 175, 55, ${this.opacity})`;
      ctx.beginPath();
      ctx.moveTo(0, -this.size);
      ctx.lineTo(this.size * 0.6, 0);
      ctx.lineTo(0, this.size);
      ctx.lineTo(-this.size * 0.6, 0);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      this.x += this.speedX;
      this.y += this.speedY;
      this.rotation += this.rotationSpeed;
      if (this.x < -10 || this.x > canvas.width + 10 || this.y < -10 || this.y > canvas.height + 10) {
        this.reset();
      }
    }
  }

  for (let i = 0; i < 80; i++) diamonds.push(new Diamond());

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    diamonds.forEach(d => d.draw(ctx));
    requestAnimationFrame(animate);
  }
  animate();
}

// ========== COMPTE À REBOURS ==========
function initCountdownTimer() {
  const timerEl = document.getElementById('countdownTimer');
  if (!timerEl) return;

  function updateTimer() {
    const now = new Date();
    const end = new Date(now);
    end.setHours(23, 59, 59, 999);
    if (end < now) end.setDate(end.getDate() + 1);
    const diff = end - now;
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    timerEl.textContent = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }
  updateTimer();
  setInterval(updateTimer, 1000);
}

// ========== MUSIQUE D'AMBIANCE (AUTO + CONTINUE SUR TOUTES LES PAGES) ==========
function initMusicToggle() {
  const btn = document.getElementById('musicToggle');
  if (!btn) return;

  // 🎵 Réutiliser l'audio existant (continue entre les pages)
  if (window.sharedAudio) {
    audioElement = window.sharedAudio;
  } else {
    audioElement = new Audio('audio/music.mp3'); // ← METTEZ VOTRE FICHIER ICI
    audioElement.loop = true;
    audioElement.volume = 0.3;
    window.sharedAudio = audioElement;
  }

  // 🔄 Restaurer l'état après changement de page
  const savedTime = sessionStorage.getItem('musicTime');
  const wasPlaying = sessionStorage.getItem('musicPlaying') === 'true';
  
  if (savedTime && audioElement) {
    audioElement.currentTime = parseFloat(savedTime);
  }
  
  if (wasPlaying && audioElement) {
    audioElement.play().catch(() => {});
    musicPlaying = true;
    if (btn) btn.classList.add('playing');
  }

  // 🖱️ Lancer la musique au premier clic sur la page (une seule fois)
  document.addEventListener('click', function startMusicOnClick() {
    if (!musicPlaying && audioElement) {
      audioElement.play().catch(() => {});
      musicPlaying = true;
      sessionStorage.setItem('musicPlaying', 'true');
      const btn = document.getElementById('musicToggle');
      if (btn) btn.classList.add('playing');
    }
    document.removeEventListener('click', startMusicOnClick);
  });

  // 🎵 Bouton ON/OFF
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (musicPlaying) {
      stopMusic();
    } else {
      startMusic();
    }
  });

  // 💾 Sauvegarder avant de quitter
  window.addEventListener('beforeunload', () => {
    if (audioElement) {
      sessionStorage.setItem('musicTime', audioElement.currentTime);
      sessionStorage.setItem('musicPlaying', musicPlaying);
    }
  });
}

function startMusic() {
  if (audioElement) {
    audioElement.play().catch(e => {
      console.log('Cliquez sur la page pour activer la musique');
    });
    musicPlaying = true;
    sessionStorage.setItem('musicPlaying', 'true');
    const btn = document.getElementById('musicToggle');
    if (btn) btn.classList.add('playing');
  }
}

function stopMusic() {
  if (audioElement) {
    audioElement.pause();
  }
  musicPlaying = false;
  sessionStorage.setItem('musicPlaying', 'false');
  const btn = document.getElementById('musicToggle');
  if (btn) btn.classList.remove('playing');
}

// ========== TRANSITION PAGE ==========
function initPageTransition() {
  const transition = document.createElement('div');
  transition.className = 'page-transition';
  document.body.appendChild(transition);

  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href !== '#' && !href.startsWith('tel:') && !href.startsWith('https://wa.me') && !href.startsWith('javascript:')) {
      if (link.hostname === window.location.hostname || href.startsWith('./') || href.startsWith('/') || href.endsWith('.html')) {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          transition.classList.add('active');
          // Ne plus arrêter la musique !
          setTimeout(() => { window.location.href = href; }, 400);
        });
      }
    }
  });

  window.addEventListener('pageshow', () => {
    transition.classList.remove('active');
  });
}

// ========== THÈME ==========
function initTheme() {
  const themeToggle = document.getElementById('themeToggle');
  if (!themeToggle) return;
  const saved = localStorage.getItem('blluxury_theme') || 'dark';
  document.body.classList.add(saved === 'light' ? 'light-mode' : 'dark-mode');
  themeToggle.addEventListener('click', () => {
    const isLight = document.body.classList.contains('light-mode');
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(isLight ? 'dark-mode' : 'light-mode');
    localStorage.setItem('blluxury_theme', isLight ? 'dark' : 'light');
  });
}

// ========== PARTICULES D'OR ==========
function initGoldParticles() {
  const container = document.getElementById('goldParticles');
  if (!container) return;
  for (let i = 0; i < 40; i++) {
    const p = document.createElement('div');
    p.classList.add('particle');
    const size = Math.random() * 5 + 2;
    p.style.width = size + 'px';
    p.style.height = size + 'px';
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDelay = Math.random() * 10 + 's';
    p.style.animationDuration = (Math.random() * 8 + 5) + 's';
    container.appendChild(p);
  }
}

// ========== SCROLL REVEAL ==========
function initScrollReveal() {
  const els = document.querySelectorAll('.glass-card, .stat-modern, .faq-item-modern, .product-card-modern, .instagram-widget');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => { el.classList.add('reveal'); observer.observe(el); });
}

// ========== SCROLL TOP ==========
function initScrollTop() {
  const btn = document.getElementById('scrollTopBtn');
  if (!btn) return;
  window.addEventListener('scroll', () => btn.classList.toggle('visible', window.scrollY > 300));
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ========== COMPTEUR VISITEURS ==========
function initViewerCounter() {
  const el = document.getElementById('viewerCount');
  if (!el) return;
  let viewers = Math.floor(Math.random() * 180) + 45;
  el.textContent = viewers;
  setInterval(() => {
    viewers += Math.random() > 0.7 ? Math.floor(Math.random() * 4) - 1 : 0;
    viewers = Math.max(12, Math.min(389, viewers));
    el.textContent = viewers;
  }, 10000);
}

// ========== NAVBAR ==========
function initNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 60));

  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }
}

// ========== LANGUE ==========
function initLang() {
  setLanguage(currentLang);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
    btn.addEventListener('click', () => {
      currentLang = btn.dataset.lang;
      localStorage.setItem('blluxury_lang', currentLang);
      setLanguage(currentLang);
      renderProducts();
      initCartPage();
      document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === currentLang));
    });
  });
}

function setLanguage(lang) {
  document.querySelectorAll('[data-lang-en]').forEach(el => {
    const text = el.getAttribute('data-lang-' + lang);
    if (text) el.textContent = text;
  });
  
  const placeholders = {
    phone: { fr: 'Numéro de téléphone', en: 'Phone number' },
    firstName: { fr: 'Prénom', en: 'First name' },
    lastName: { fr: 'Nom', en: 'Last name' },
    city: { fr: 'Ville', en: 'City' },
    address: { fr: 'Adresse', en: 'Address' }
  };
  
  for (const [id, texts] of Object.entries(placeholders)) {
    const el = document.getElementById(id);
    if (el) el.placeholder = texts[lang] || texts.en;
  }
}

// ========== AFFICHAGE PRODUITS (MODIFIÉ POUR "99 MAD") ==========
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  grid.innerHTML = products.map(p => `
    <div class="product-card-modern" data-product-id="${p.id}">
      <div class="product-img-modern">
        <img src="${p.img}" alt="${p.name}" loading="lazy">
      </div>
      <div class="product-info-modern">
        <div class="product-name-modern">${currentLang === 'fr' ? p.nameFr : p.name}</div>
        <div class="product-sub-modern">${currentLang === 'fr' ? p.subFr : p.sub}</div>
        <div class="product-price-modern">
          <span>${p.price.toLocaleString()}</span> MAD
          ${p.original ? '<span class="original">' + p.original.toLocaleString() + ' MAD</span>' : ''}
        </div>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.product-card-modern').forEach(card => {
    card.addEventListener('click', () => {
      const product = products.find(p => p.id === card.dataset.productId);
      if (product) openModal(product);
    });
  });
}

// ========== MODAL PRODUIT ==========
let modalCarouselIndex = 0;

function initProductModal() {
  const modal = document.getElementById('productModal');
  const closeBtn = document.getElementById('closeModal');
  
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (modal) modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

  const arClose = document.getElementById('arCloseBtn');
  if (arClose) arClose.addEventListener('click', () => {
    stopAR();
    switchView('image');
  });

  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', () => switchView(btn.dataset.view));
  });

  const addBtn = document.getElementById('modalAddToCartBtn');
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      if (currentProduct) {
        addToCart(currentProduct.id);
        closeModal();
      }
    });
  }

  const playBtn = document.getElementById('play360Btn');
  if (playBtn) {
    playBtn.addEventListener('click', toggleVideo360);
  }

  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');
  if (prevBtn) prevBtn.addEventListener('click', () => navigateCarousel(-1));
  if (nextBtn) nextBtn.addEventListener('click', () => navigateCarousel(1));

  // ========== ZOOM FIXÉ : listeners isolés sur le container uniquement ==========
  const zoomContainer = document.getElementById('zoomContainer');
  const zoomLens = document.getElementById('zoomLens');
  const mainImg = document.getElementById('modalMainImg');

  if (zoomContainer && zoomLens && mainImg) {
    zoomContainer.addEventListener('mousemove', (e) => {
      const rect = zoomContainer.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      zoomLens.style.left = x + 'px';
      zoomLens.style.top = y + 'px';
      zoomLens.style.opacity = '1';
      const scaleX = mainImg.naturalWidth / rect.width;
      const scaleY = mainImg.naturalHeight / rect.height;
      const bgX = -(x * scaleX - 50);
      const bgY = -(y * scaleY - 50);
      mainImg.style.transformOrigin = `${(x / rect.width) * 100}% ${(y / rect.height) * 100}%`;
      mainImg.style.transform = 'scale(2)';
    });

    zoomContainer.addEventListener('mouseleave', () => {
      zoomLens.style.opacity = '0';
      mainImg.style.transform = 'scale(1)';
      mainImg.style.transformOrigin = 'center center';
    });

    // Bloquer la propagation pour éviter que le curseur diamant interfère
    zoomContainer.addEventListener('mousemove', (e) => e.stopPropagation(), true);
  }
}

function closeModal() {
  const modal = document.getElementById('productModal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
  stopAR();
  const video360 = document.getElementById('video360');
  if (video360) video360.pause();
  currentProduct = null;
}

function openModal(product) {
  currentProduct = product;
  modalCarouselIndex = 0;
  const modal = document.getElementById('productModal');
  if (!modal) return;

  document.getElementById('modalProductName').textContent = currentLang === 'fr' ? product.nameFr : product.name;
  document.getElementById('modalProductSub').textContent = currentLang === 'fr' ? product.subFr : product.sub;
  document.getElementById('modalProductPrice').innerHTML = 
    product.price.toLocaleString() + ' MAD' +
    (product.original ? ' <span class="original">' + product.original.toLocaleString() + ' MAD</span>' : '');

  const mainImg = document.getElementById('modalMainImg');
  mainImg.src = product.images[0];

  const track = document.getElementById('carouselTrack');
  if (track) {
    track.innerHTML = product.images.map((img, i) => 
      '<img src="' + img + '" data-index="' + i + '" loading="lazy" alt="Product image ' + (i+1) + '">'
    ).join('');
    track.querySelectorAll('img').forEach(img => {
      img.addEventListener('click', () => {
        modalCarouselIndex = parseInt(img.dataset.index);
        mainImg.src = product.images[modalCarouselIndex];
      });
    });
  }

  const video360 = document.getElementById('video360');
  if (video360 && product.video360) {
    video360.querySelector('source').src = product.video360;
    video360.load();
  }

  const arImg = document.getElementById('arJewelryImg');
  if (arImg) arImg.src = product.arImage || product.img;

  const whatsBtn = document.querySelector('.share-btn[data-platform="whatsapp"]');
  if (whatsBtn) {
    whatsBtn.onclick = () => {
      const text = encodeURIComponent('✨ ' + product.name + ' on BLluxury! ✨');
      window.open('https://wa.me/?text=' + text, '_blank');
    };
  }
  const instaBtn = document.querySelector('.share-btn[data-platform="instagram"]');
  if (instaBtn) {
    instaBtn.onclick = () => alert('📸 Screenshot and share on Instagram! Tag @b.l_luxury ✨');
  }

  switchView('image');
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function navigateCarousel(direction) {
  if (!currentProduct) return;
  modalCarouselIndex = (modalCarouselIndex + direction + currentProduct.images.length) % currentProduct.images.length;
  const mainImg = document.getElementById('modalMainImg');
  if (mainImg) mainImg.src = currentProduct.images[modalCarouselIndex];
}

function toggleVideo360() {
  const video = document.getElementById('video360');
  const btn = document.getElementById('play360Btn');
  if (!video || !btn) return;
  
  if (video.paused) {
    video.play();
    btn.innerHTML = '<i class="fa-solid fa-pause"></i>';
  } else {
    video.pause();
    btn.innerHTML = '<i class="fa-solid fa-play"></i>';
  }
}

function switchView(view) {
  const zoomContainer = document.getElementById('zoomContainer');
  const video360Container = document.getElementById('video360Container');
  const arContainer = document.getElementById('arContainer');
  const imageCarousel = document.getElementById('imageCarousel');

  if (zoomContainer) zoomContainer.classList.add('hidden');
  if (video360Container) video360Container.classList.add('hidden');
  if (arContainer) arContainer.classList.add('hidden');
  if (imageCarousel) imageCarousel.classList.remove('hidden');

  document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
  const activeBtn = document.querySelector('.view-btn[data-view="' + view + '"]');
  if (activeBtn) activeBtn.classList.add('active');

  stopAR();

  if (view === 'image') {
    if (zoomContainer) zoomContainer.classList.remove('hidden');
  } else if (view === 'video360') {
    if (video360Container) {
      video360Container.classList.remove('hidden');
      if (imageCarousel) imageCarousel.classList.add('hidden');
      const video = document.getElementById('video360');
      if (video) video.play().catch(() => {});
    }
  } else if (view === 'ar') {
    if (arContainer) {
      arContainer.classList.remove('hidden');
      if (imageCarousel) imageCarousel.classList.add('hidden');
      startAR();
    }
  }
}

// ========== ESSAI VIRTUEL AR ==========
async function startAR() {
  const video = document.getElementById('arVideo');
  const canvas = document.getElementById('arCanvas');
  if (!video || !canvas) return;

  try {
    arStream = await navigator.mediaDevices.getUserMedia({ 
      video: { facingMode: 'user', width: { ideal: 640 }, height: { ideal: 480 } } 
    });
    video.srcObject = arStream;
    await video.play();

    canvas.width = 640;
    canvas.height = 480;
    const ctx = canvas.getContext('2d');

    function drawFrame() {
      if (!arStream) return;
      ctx.save();
      ctx.translate(canvas.width, 0);
      ctx.scale(-1, 1);
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      ctx.restore();
      requestAnimationFrame(drawFrame);
    }
    drawFrame();
    initARDrag();

  } catch (e) {
    console.log('AR Error:', e.message);
    alert('Camera access needed for virtual try-on. Please allow camera permissions.');
  }
}

function stopAR() {
  if (arStream) {
    arStream.getTracks().forEach(track => track.stop());
    arStream = null;
  }
  const video = document.getElementById('arVideo');
  if (video) video.srcObject = null;
}

function initARDrag() {
  const jewelry = document.getElementById('arJewelry');
  if (!jewelry) return;

  jewelry.style.left = '50%';
  jewelry.style.top = '50%';
  jewelryX = 50;
  jewelryY = 50;

  const container = document.getElementById('arContainer');
  if (!container) return;

  jewelry.addEventListener('touchstart', (e) => {
    isDragging = true;
    const touch = e.touches[0];
    dragStartX = touch.clientX;
    dragStartY = touch.clientY;
    e.preventDefault();
  }, { passive: false });

  document.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const rect = container.getBoundingClientRect();
    const dx = touch.clientX - dragStartX;
    const dy = touch.clientY - dragStartY;
    jewelryX = Math.max(10, Math.min(90, 50 + (dx / rect.width) * 100));
    jewelryY = Math.max(10, Math.min(90, 50 + (dy / rect.height) * 100));
    jewelry.style.left = jewelryX + '%';
    jewelry.style.top = jewelryY + '%';
  });

  document.addEventListener('touchend', () => { isDragging = false; });

  jewelry.addEventListener('mousedown', (e) => {
    isDragging = true;
    dragStartX = e.clientX;
    dragStartY = e.clientY;
    e.preventDefault();
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const rect = container.getBoundingClientRect();
    const dx = e.clientX - dragStartX;
    const dy = e.clientY - dragStartY;
    jewelryX = Math.max(10, Math.min(90, 50 + (dx / rect.width) * 100));
    jewelryY = Math.max(10, Math.min(90, 50 + (dy / rect.height) * 100));
    jewelry.style.left = jewelryX + '%';
    jewelry.style.top = jewelryY + '%';
  });

  document.addEventListener('mouseup', () => { isDragging = false; });
}

// ========== PANIER ==========
function getCart() {
  try {
    return JSON.parse(localStorage.getItem('blluxury_cart') || '[]');
  } catch(e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem('blluxury_cart', JSON.stringify(cart));
  updateCartBadge();
  // Re-render cart page only if we're on the cart page
  if (document.getElementById('cartItemsList')) {
    initCartPage();
  }
}

// ========== SON ADD TO CART ==========
function playAddToCartSound() {
  if (!audioReady) {
    console.log('⏳ Audio pas encore débloqué');
    return;
  }
  
  try {
    const AC = window.AudioContext || window.webkitAudioContext;
    const ctx = new AC();
    
    // 🔔 POP
    const o1 = ctx.createOscillator();
    const g1 = ctx.createGain();
    o1.connect(g1);
    g1.connect(ctx.destination);
    o1.type = 'sine';
    o1.frequency.value = 800;
    o1.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.1);
    g1.gain.value = 0.3;
    g1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
    o1.start();
    o1.stop(ctx.currentTime + 0.15);
    
    // ✨ CHIME
    const o2 = ctx.createOscillator();
    const g2 = ctx.createGain();
    o2.connect(g2);
    g2.connect(ctx.destination);
    o2.type = 'triangle';
    o2.frequency.value = 660;
    o2.frequency.setValueAtTime(880, ctx.currentTime + 0.12);
    g2.gain.value = 0.001;
    g2.gain.linearRampToValueAtTime(0.2, ctx.currentTime + 0.1);
    g2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
    o2.start(ctx.currentTime + 0.08);
    o2.stop(ctx.currentTime + 0.35);
    
    setTimeout(() => ctx.close(), 400);
  } catch(e) {
    console.log('Erreur audio:', e);
  }
}

// ========== VOIX ==========
function speak(text, lang) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = lang === 'fr' ? 'fr-FR' : 'en-US';
  u.rate = 0.9;
  u.pitch = 1.1;
  u.volume = 0.8;
  window.speechSynthesis.speak(u);
}

// ========== ANIMATION BADGE ==========
function animateCartBadge() {
  const badges = document.querySelectorAll('#cartBadge');
  badges.forEach(b => {
    b.style.animation = 'none';
    b.offsetHeight;
    b.style.animation = 'cartBadgePop 0.5s ease';
  });
}

// ========== ADD TO CART ==========
function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  const cart = getCart();
  const existing = cart.find(i => i.id === id);

  if (existing) {
    existing.qty = (existing.qty || 1) + 1;
  } else {
    cart.push({ 
      id: product.id, 
      name: product.name, 
      nameFr: product.nameFr,
      price: product.price, 
      img: product.img, 
      qty: 1 
    });
  }

  saveCart(cart);
  
  // 🔊 SON IMMÉDIAT
  playAddToCartSound();
  
  // 🗣️ VOIX
  speak(currentLang === 'fr' ? 'Ajouté au panier' : 'Added to cart', currentLang);
  
  // 📱 TOAST
  showToast(currentLang === 'fr' ? '✓ Ajouté au panier !' : '✓ Added to cart!');
  
  // 🏷️ ANIMATION BADGE
  animateCartBadge();
}

function removeFromCart(id) {
  saveCart(getCart().filter(i => i.id !== id));
}

function updateQuantity(id, delta) {
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if (item) {
    item.qty = Math.max(1, (item.qty || 1) + delta);
    saveCart(cart);
  }
}

function updateCartBadge() {
  const total = getCart().reduce((sum, item) => sum + (item.qty || 1), 0);
  document.querySelectorAll('#cartBadge').forEach(badge => {
    badge.textContent = total;
    badge.style.display = total > 0 ? 'flex' : 'none';
  });
}

function initCartPage() {
  const list = document.getElementById('cartItemsList');
  const empty = document.getElementById('cartEmpty');
  const summary = document.getElementById('cartSummary');
  const form = document.getElementById('cartForm');

  if (!list) return;

  const cart = getCart();

  if (cart.length === 0) {
    if (list) list.innerHTML = '';
    if (empty) empty.classList.remove('hidden');
    if (summary) summary.classList.add('hidden');
    if (form) form.classList.add('hidden');
    return;
  }

  if (empty) empty.classList.add('hidden');
  if (summary) summary.classList.remove('hidden');
  if (form) form.classList.remove('hidden');

  let total = 0;
  list.innerHTML = cart.map(item => {
    const itemTotal = item.price * (item.qty || 1);
    total += itemTotal;
    return `
      <div class="cart-item">
        <img class="cart-item-img" src="${item.img}" alt="${item.name}" loading="lazy">
        <div class="cart-item-details">
          <div class="cart-item-name">${currentLang === 'fr' ? (item.nameFr || item.name) : item.name}</div>
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="window.updateQuantity('${item.id}', -1)">−</button>
            <span>${item.qty || 1}</span>
            <button class="qty-btn" onclick="window.updateQuantity('${item.id}', 1)">+</button>
          </div>
          <span class="cart-item-remove" onclick="window.removeFromCart('${item.id}')">
            ✕ ${currentLang === 'fr' ? 'Supprimer' : 'Remove'}
          </span>
        </div>
        <div class="cart-item-price">${itemTotal.toLocaleString()} MAD</div>
      </div>
    `;
  }).join('');

  const subtotalEl = document.getElementById('cartSubtotal');
  const totalEl = document.getElementById('cartTotal');
  if (subtotalEl) subtotalEl.textContent = total.toLocaleString() + ' MAD';
  if (totalEl) totalEl.textContent = total.toLocaleString() + ' MAD';

  const orderBtn = document.getElementById('orderBtn');
  if (orderBtn) {
    orderBtn.onclick = orderViaWhatsApp;
  }
}

function orderViaWhatsApp() {
  const cart = getCart();
  if (!cart.length) {
    showToast(currentLang === 'fr' ? 'Panier vide' : 'Cart is empty');
    return;
  }

  const firstName = (document.getElementById('firstName')?.value || '').trim();
  const lastName = (document.getElementById('lastName')?.value || '').trim();
  const city = (document.getElementById('city')?.value || '').trim();
  const address = (document.getElementById('address')?.value || '').trim();
  const phone = (document.getElementById('phone')?.value || '').trim();

  if (!firstName || !lastName || !city || !address || !phone) {
    showToast(currentLang === 'fr' ? 'Veuillez remplir tous les champs' : 'Please fill all fields');
    return;
  }

  const total = cart.reduce((sum, item) => sum + item.price * (item.qty || 1), 0);
  const itemsList = cart.map(i => `• ${i.name} x${i.qty || 1} = ${(i.price * (i.qty || 1)).toLocaleString()} MAD`).join('\n');
  const message = `🛍️ *BLluxury Order*\n\n👤 ${firstName} ${lastName}\n📍 ${city}\n🏠 ${address}\n📞 ${phone}\n\n✨ *Items:*\n${itemsList}\n\n💰 *Total: ${total.toLocaleString()} MAD*\n\nMerci! ✨`;

  window.open('https://wa.me/212656420994?text=' + encodeURIComponent(message), '_blank');
}

// ========== UTILITAIRES ==========
function showToast(msg) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => {
    if (toast.parentNode) toast.remove();
  }, 2500);
}

function initFAQ() {
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.faq-item-modern').classList.toggle('open');
    });
  });
}

function initStatsCounter() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count);
        if (isNaN(target)) return;
        let i = 0;
        const interval = setInterval(() => {
          i += Math.ceil(target / 50);
          if (i >= target) { el.textContent = target.toLocaleString(); clearInterval(interval); }
          else { el.textContent = i; }
        }, 30);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.stat-num[data-count]').forEach(s => observer.observe(s));
}

function setDynamicIslandTime() {
  const timeEl = document.getElementById('islandTime');
  if (!timeEl) return;
  const update = () => {
    const d = new Date();
    timeEl.textContent = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  update();
  setInterval(update, 1000);
}

// Exposer les fonctions globalement
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;
window.addToCart = addToCart;