/**
 * LensCraft Photography Studio - Core Application Logic
 * Features:
 * - Theme management (Dark / Light) with localStorage persistence
 * - Sticky responsive navigation with mobile drawer
 * - Interactive Lightbox with prev/next keyboard & swipe navigation
 * - Global "Book a Session" Dispatch Modal (Direct WhatsApp / Direct Email / Online Form)
 * - Toast notification banner
 * - Central mailto builder linking to anzaaleem1804@gmail.com
 * - Direct WhatsApp inquiry builder linking to +92 3292450128
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initLightbox();
  initBookingChoiceModal();
  initHeroSlider();
  initCinematicSlider();
  initAtelierCarousel();
  initCrownHeroForm();
  initBespokeHeroConsole();
});

/* ----------------- Theme Switcher ----------------- */
function initTheme() {
  const savedTheme = localStorage.getItem('lenscraft_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcons(savedTheme);

  const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const target = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', target);
      localStorage.setItem('lenscraft_theme', target);
      updateThemeIcons(target);
      showToast('Switched to ' + target.toUpperCase() + ' mode');
    });
  });
}

function updateThemeIcons(theme) {
  const sunIcons = document.querySelectorAll('.icon-sun');
  const moonIcons = document.querySelectorAll('.icon-moon');
  
  if (theme === 'light') {
    sunIcons.forEach(icon => icon.style.display = 'none');
    moonIcons.forEach(icon => icon.style.display = 'block');
  } else {
    sunIcons.forEach(icon => icon.style.display = 'block');
    moonIcons.forEach(icon => icon.style.display = 'none');
  }
}

/* ----------------- Navigation ----------------- */
function initNavigation() {
  const navbar = document.querySelector('.navbar');
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isExpanded = navMenu.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Close on link click
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }
}

/* ----------------- Global Booking Choice Modal ----------------- */
function initBookingChoiceModal() {
  let modal = document.getElementById('bookingChoiceModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'bookingChoiceModal';
    modal.className = 'booking-choice-modal';
    modal.innerHTML = `
      <div class="booking-choice-card">
        <button class="booking-choice-close" id="choiceModalCloseBtn" aria-label="Close modal">&times;</button>
        <span class="gold-subtitle">LensCraft Private Studio</span>
        <h3 style="font-family: var(--font-heading); font-size: 1.6rem; margin-top: 0.35rem; color: var(--text-main);">How Would You Like to Connect?</h3>
        <p style="font-size: 0.9rem; color: var(--text-muted); margin-top: 0.4rem;">
          Connect directly via WhatsApp with our lead photographer or send an email inquiry to book your exclusive session.
        </p>

        <div class="choice-options-grid">
          <!-- WhatsApp Option -->
          <a href="https://wa.me/923292450128?text=Hello%20LensCraft%20Studio%2C%20I%20would%20like%20to%20inquire%20about%20booking%20a%20photography%20session." 
             target="_blank" rel="noopener noreferrer" class="choice-option-btn choice-whatsapp">
            <div class="choice-icon-wrap" style="background: rgba(37, 211, 102, 0.15); color: #25D366;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 2C6.495 2 2 6.494 2 12.03c0 1.97.57 3.81 1.558 5.372L2 22l4.783-1.523A9.972 9.972 0 0 0 12.031 22C17.568 22 22 17.506 22 12.03 22 6.494 17.568 2 12.031 2zm5.79 14.195c-.244.685-1.22 1.258-1.706 1.334-.488.077-1.127.143-3.642-.897-3.218-1.33-5.285-4.606-5.446-4.821-.16-.215-1.306-1.74-1.306-3.32 0-1.579.827-2.357 1.12-2.678.293-.322.64-.403.854-.403.214 0 .428.002.614.012.198.01.464-.075.727.557.273.655.932 2.274 1.015 2.441.083.167.138.363.028.58-.11.218-.166.353-.327.546-.162.193-.342.43-.488.578-.162.164-.33.342-.142.665.188.322.836 1.378 1.795 2.233 1.233 1.1 2.273 1.442 2.595 1.603.322.162.51.137.7-.082.19-.22.812-.947 1.028-1.272.215-.325.432-.27.727-.162.296.108 1.875.885 2.197 1.046.322.161.536.241.615.375.078.134.078.777-.166 1.462z"/>
              </svg>
            </div>
            <div>
              <strong style="display: block; font-size: 1rem; color: var(--text-main);">Chat on WhatsApp</strong>
              <span style="font-size: 0.8rem; color: var(--text-muted);">Instant response • +92 3292450128</span>
            </div>
          </a>

          <!-- Email Option -->
          <a href="mailto:anzaaleem1804@gmail.com?subject=Booking%20Inquiry%20-%20LensCraft%20Photography%20Studio&body=Hello%20LensCraft%20Studio%20Team%2C%0A%0AI%20would%20like%20to%20inquire%20about%20booking%20a%20photography%20session.%0A%0AName%3A%20%0APhone%3A%20%0AService%2FPackage%3A%20%0APreferred%20Date%3A%20%0A%0AThank%20you!" 
             class="choice-option-btn choice-email">
            <div class="choice-icon-wrap" style="background: rgba(212, 175, 55, 0.15); color: var(--accent-gold);">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div>
              <strong style="display: block; font-size: 1rem; color: var(--text-main);">Email Studio Direct</strong>
              <span style="font-size: 0.8rem; color: var(--text-muted);">anzaaleem1804@gmail.com</span>
            </div>
          </a>

          <!-- Online Detailed Form Option -->
          <a href="booking.html" class="choice-option-btn choice-form">
            <div class="choice-icon-wrap" style="background: rgba(255, 255, 255, 0.08); color: var(--text-main);">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
            <div>
              <strong style="display: block; font-size: 1rem; color: var(--text-main);">Full Custom Booking Form</strong>
              <span style="font-size: 0.8rem; color: var(--text-muted);">Select date, package & custom specifications</span>
            </div>
          </a>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  const closeBtn = document.getElementById('choiceModalCloseBtn');
  closeBtn?.addEventListener('click', closeBookingChoiceModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeBookingChoiceModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeBookingChoiceModal();
    }
  });

  // Attach to all "Book a Session" buttons across any page (except when already on booking.html form submit)
  const isBookingPage = window.location.pathname.endsWith('booking.html');
  const bookBtns = document.querySelectorAll('a[href="booking.html"], button.btn-book-session, a.btn-book-session');
  bookBtns.forEach(btn => {
    // If we are on booking.html, let internal anchor/links behave naturally, but for navbar "Book a Session" offer choice
    btn.addEventListener('click', (e) => {
      // If button is inside navbar or hero, trigger the modal popup
      if (btn.classList.contains('btn') || btn.closest('.nav-container') || btn.closest('.hero-btns') || btn.closest('.package-card')) {
        e.preventDefault();
        openBookingChoiceModal();
      }
    });
  });
}

function openBookingChoiceModal() {
  const modal = document.getElementById('bookingChoiceModal');
  if (modal) {
    modal.classList.add('open');
  }
}

function closeBookingChoiceModal() {
  const modal = document.getElementById('bookingChoiceModal');
  if (modal) {
    modal.classList.remove('open');
  }
}

/* ----------------- Reusable Lightbox ----------------- */
let activeLightboxItems = [];
let currentLightboxIndex = 0;

function initLightbox() {
  let lightbox = document.getElementById('lenscraftLightbox');
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.id = 'lenscraftLightbox';
    lightbox.className = 'lightbox-modal';
    lightbox.innerHTML = `
      <button class="lightbox-close" id="lightboxCloseBtn" aria-label="Close Lightbox">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      <button class="lightbox-nav-btn lightbox-prev" id="lightboxPrevBtn" aria-label="Previous Photo">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <button class="lightbox-nav-btn lightbox-next" id="lightboxNextBtn" aria-label="Next Photo">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
      <div class="lightbox-content">
        <div class="lightbox-img-wrapper">
          <img src="" alt="" class="lightbox-img" id="lightboxImg">
        </div>
        <div class="lightbox-info">
          <h3 id="lightboxTitle"></h3>
          <p id="lightboxDesc"></p>
        </div>
      </div>
    `;
    document.body.appendChild(lightbox);
  }

  const closeBtn = document.getElementById('lightboxCloseBtn');
  const prevBtn = document.getElementById('lightboxPrevBtn');
  const nextBtn = document.getElementById('lightboxNextBtn');

  closeBtn?.addEventListener('click', closeLightbox);
  prevBtn?.addEventListener('click', showPrevLightbox);
  nextBtn?.addEventListener('click', showNextLightbox);

  // Close on outer backdrop click
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrevLightbox();
    if (e.key === 'ArrowRight') showNextLightbox();
  });
}

function openLightbox(itemsList, startIndex) {
  activeLightboxItems = itemsList;
  currentLightboxIndex = startIndex;
  renderLightboxSlide();
  const lightbox = document.getElementById('lenscraftLightbox');
  if (lightbox) {
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeLightbox() {
  const lightbox = document.getElementById('lenscraftLightbox');
  if (lightbox) {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function showPrevLightbox() {
  if (!activeLightboxItems.length) return;
  currentLightboxIndex = (currentLightboxIndex - 1 + activeLightboxItems.length) % activeLightboxItems.length;
  renderLightboxSlide();
}

function showNextLightbox() {
  if (!activeLightboxItems.length) return;
  currentLightboxIndex = (currentLightboxIndex + 1) % activeLightboxItems.length;
  renderLightboxSlide();
}

function renderLightboxSlide() {
  const item = activeLightboxItems[currentLightboxIndex];
  if (!item) return;
  const img = document.getElementById('lightboxImg');
  const title = document.getElementById('lightboxTitle');
  const desc = document.getElementById('lightboxDesc');
  
  if (img) {
    img.src = item.image;
    img.alt = item.title;
  }
  if (title) title.textContent = `${item.title} (${currentLightboxIndex + 1}/${activeLightboxItems.length})`;
  if (desc) desc.textContent = item.description || item.categoryLabel;
}

/* ----------------- Toast Alerts ----------------- */
function showToast(message, duration = 3500) {
  let toast = document.getElementById('lenscraftToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'lenscraftToast';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d4af37" stroke-width="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${message}</span>
  `;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, duration);
}

/* ----------------- Direct Mailto Helper ----------------- */
function createDirectEmailLink(details) {
  const targetEmail = "anzaaleem1804@gmail.com";
  const subject = encodeURIComponent(`Photography Booking Inquiry: ${details.service || 'Studio Session'} - ${details.name || 'Client'}`);
  
  let body = `Dear LensCraft Photography Studio Team,\n\n`;
  body += `I would like to inquire/book a photography session with your studio. Here are my session details:\n\n`;
  body += `• Full Name: ${details.name || 'N/A'}\n`;
  body += `• Email: ${details.email || 'N/A'}\n`;
  body += `• Phone: ${details.phone || 'N/A'}\n`;
  body += `• Selected Service: ${details.service || 'N/A'}\n`;
  body += `• Selected Package: ${details.package || 'N/A'}\n`;
  body += `• Preferred Date: ${details.date || 'Flexible'}\n`;
  body += `• Preferred Time: ${details.time || 'Flexible'}\n`;
  body += `• Preferred Location: ${details.location || 'Studio'}\n`;
  body += `• Estimated Budget: ${details.budget || 'Standard rates'}\n\n`;
  body += `Additional Requirements / Message:\n${details.message || 'None'}\n\n`;
  body += `Thank you,\n${details.name || 'Client'}`;

  return `mailto:${targetEmail}?subject=${subject}&body=${encodeURIComponent(body)}`;
}

/* ----------------- Direct WhatsApp Helper ----------------- */
function createDirectWhatsAppLink(details) {
  const phoneDigits = "923292450128";
  let msg = `*LensCraft Studio Booking Inquiry*\n\n`;
  msg += `• *Name:* ${details.name || 'Client'}\n`;
  msg += `• *Email:* ${details.email || 'N/A'}\n`;
  msg += `• *Phone:* ${details.phone || 'N/A'}\n`;
  msg += `• *Service:* ${details.service || 'Studio Session'}\n`;
  msg += `• *Package:* ${details.package || 'N/A'}\n`;
  msg += `• *Date:* ${details.date || 'Flexible'}\n`;
  msg += `• *Time:* ${details.time || 'Flexible'}\n`;
  msg += `• *Location:* ${details.location || 'Studio'}\n`;
  msg += `• *Budget:* ${details.budget || 'Standard rates'}\n\n`;
  if (details.message) {
    msg += `• *Message:* ${details.message}\n\n`;
  }
  msg += `Looking forward to your confirmation!`;
  return `https://wa.me/${phoneDigits}?text=` + encodeURIComponent(msg);
}


// Ensure no active element retains browser focus ring after mouse clicks
document.addEventListener('mouseup', (e) => {
  if (e.target && typeof e.target.blur === 'function') {
    e.target.blur();
  }
});

/* ----------------- Hero Showcase Interactive Slider ----------------- */
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.slider-dot');
  const prevBtn = document.getElementById('heroSlidePrev');
  const nextBtn = document.getElementById('heroSlideNext');
  
  if (!slides.length) return;
  
  let currentSlide = 0;
  let slideInterval = null;

  function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide]?.classList.remove('active');
    
    currentSlide = (index + slides.length) % slides.length;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide]?.classList.add('active');
  }

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function prevSlide() {
    goToSlide(currentSlide - 1);
  }

  prevBtn?.addEventListener('click', () => {
    prevSlide();
    resetInterval();
  });

  nextBtn?.addEventListener('click', () => {
    nextSlide();
    resetInterval();
  });

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const target = parseInt(dot.getAttribute('data-slide'), 10);
      if (!isNaN(target)) {
        goToSlide(target);
        resetInterval();
      }
    });
  });

  function startInterval() {
    slideInterval = setInterval(nextSlide, 5000);
  }

  function resetInterval() {
    clearInterval(slideInterval);
    startInterval();
  }

  startInterval();
}

/* ----------------- Fullscreen Cinematic Visual Showcase Controller ----------------- */
function initCinematicSlider() {
  const slides = document.querySelectorAll('.cinematic-slide');
  const pills = document.querySelectorAll('.cinematic-dot-pill');
  const prevBtn = document.getElementById('cinematicPrev');
  const nextBtn = document.getElementById('cinematicNext');
  
  if (!slides.length) return;
  
  let currentSlide = 0;
  let timer = null;

  function setSlide(index) {
    slides[currentSlide].classList.remove('active');
    pills[currentSlide]?.classList.remove('active');
    
    currentSlide = (index + slides.length) % slides.length;
    
    slides[currentSlide].classList.add('active');
    pills[currentSlide]?.classList.add('active');
  }

  function next() {
    setSlide(currentSlide + 1);
  }

  function prev() {
    setSlide(currentSlide - 1);
  }

  prevBtn?.addEventListener('click', () => {
    prev();
    restartTimer();
  });

  nextBtn?.addEventListener('click', () => {
    next();
    restartTimer();
  });

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      const target = parseInt(pill.getAttribute('data-slide'), 10);
      if (!isNaN(target)) {
        setSlide(target);
        restartTimer();
      }
    });
  });

  function startTimer() {
    timer = setInterval(next, 5000);
  }

  function restartTimer() {
    clearInterval(timer);
    startTimer();
  }

  startTimer();
}

/* ----------------- Modern Luxury Visual Atelier Carousel Controller ----------------- */
function initAtelierCarousel() {
  const slides = document.querySelectorAll('.atelier-slide');
  const dots = document.querySelectorAll('.atelier-dot');
  const prevBtn = document.getElementById('atelierPrev');
  const nextBtn = document.getElementById('atelierNext');
  const counterNum = document.getElementById('atelierCurrentNum');
  
  if (!slides.length) return;
  
  let current = 0;
  let timer = null;

  function showSlide(index) {
    slides[current].classList.remove('active');
    dots[current]?.classList.remove('active');
    
    current = (index + slides.length) % slides.length;
    
    slides[current].classList.add('active');
    dots[current]?.classList.add('active');
    
    if (counterNum) {
      counterNum.textContent = String(current + 1).padStart(2, '0');
    }
  }

  function next() {
    showSlide(current + 1);
  }

  function prev() {
    showSlide(current - 1);
  }

  prevBtn?.addEventListener('click', () => {
    prev();
    reset();
  });

  nextBtn?.addEventListener('click', () => {
    next();
    reset();
  });

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.getAttribute('data-slide'), 10);
      if (!isNaN(idx)) {
        showSlide(idx);
        reset();
      }
    });
  });

  function start() {
    timer = setInterval(next, 5000);
  }

  function reset() {
    clearInterval(timer);
    start();
  }

  start();
}

/* ----------------- Crown Style Hero Quick WhatsApp Booking ----------------- */
function initCrownHeroForm() {
  const form = document.getElementById('crownHeroForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const loc = document.getElementById('heroLocationInput')?.value.trim() || 'Studio';
    const cat = document.getElementById('heroCategorySelect')?.value || 'Photography Session';
    const pkg = document.getElementById('heroPackageSelect')?.value || 'Standard';

    const phoneDigits = "923292450128";
    let msg = `*LensCraft Studio Quick Inquiry*\n\n`;
    msg += `• *Service/Category:* ${cat}\n`;
    msg += `• *Preferred Location:* ${loc}\n`;
    msg += `• *Package Choice:* ${pkg}\n\n`;
    msg += `Hello! I would like to check availability and book this session.`;

    const waUrl = `https://wa.me/${phoneDigits}?text=` + encodeURIComponent(msg);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  });
}

/* ----------------- Bespoke LensCraft Hero Console & Dynamic Background ----------------- */
function initBespokeHeroConsole() {
  const tabs = document.querySelectorAll('.console-tab-btn');
  const bgImg = document.getElementById('heroLiveImg');
  const form = document.getElementById('atelierHeroForm');
  
  let selectedCategory = "Wedding Stories";

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      selectedCategory = tab.getAttribute('data-cat') || 'Photography Session';
      const newImgSrc = tab.getAttribute('data-img');
      
      if (bgImg && newImgSrc) {
        bgImg.style.opacity = '0';
        setTimeout(() => {
          bgImg.src = newImgSrc;
          bgImg.style.opacity = '1';
        }, 250);
      }
    });
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const dateVal = document.getElementById('atelierDateInput')?.value || 'Flexible';
      const locVal = document.getElementById('atelierLocationInput')?.value.trim() || 'Studio';
      const pkgVal = document.getElementById('atelierPackageSelect')?.value || 'Standard';

      const phoneDigits = "923292450128";
      let msg = `*LensCraft Studio Private Session Inquiry*\n\n`;
      msg += `• *Category / Discipline:* ${selectedCategory}\n`;
      msg += `• *Preferred Date:* ${dateVal}\n`;
      msg += `• *Location / Venue:* ${locVal}\n`;
      msg += `• *Curated Package:* ${pkgVal}\n\n`;
      msg += `Hello! I would like to reserve this session with LensCraft Photography Studio.`;

      const waUrl = `https://wa.me/${phoneDigits}?text=` + encodeURIComponent(msg);
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    });
  }
}