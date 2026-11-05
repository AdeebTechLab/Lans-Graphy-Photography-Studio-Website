/**
 * LensCraft Photography Studio - Core Application Logic
 * Features:
 * - Theme management (Dark / Light) with localStorage persistence
 * - Sticky responsive navigation with mobile drawer
 * - Interactive Lightbox with prev/next keyboard & swipe navigation
 * - Reusable dynamic UI renderers (Navbar, Footer, Contact info)
 * - Toast notification banner
 * - Central mailto builder linking to anzaaleem1804@gmail.com
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initLightbox();
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
      showToast(`Switched to ${target.toUpperCase()} mode`);
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
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c5a880" stroke-width="2">
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
/**
 * As explicitly required:
 * When user submits booking/offer/package, it targets anzaaleem1804@gmail.com
 */
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
