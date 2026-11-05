/**
 * LensCraft Photography Studio - AI Studio Assistant
 * Functionality:
 * 1. Friendly time-based greeting (Good morning / afternoon / evening)
 * 2. Onboarding gate: First asks for visitor ID (Name, Phone Number, Email) before beginning chat
 * 3. Dedicated photography assistant: answers strictly about services, packages, and bookings
 * 4. Contact provider: If user says they want to contact or reach out, provides direct studio details:
 *    - Email: anzaaleem1804@gmail.com
 *    - Phone/WhatsApp: +92 3292450128
 *    - Studio Location: Highline Creative District
 */

(function initChatbot() {
  document.addEventListener('DOMContentLoaded', () => {
    buildChatbotDOM();
  });
})();

let clientProfile = null;

function getTimeGreeting() {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return "Good morning";
  if (hour >= 12 && hour < 17) return "Good afternoon";
  return "Good evening";
}

function buildChatbotDOM() {
  if (document.getElementById('lenscraftChatbot')) return;

  // Toggle button
  const toggleBtn = document.createElement('button');
  toggleBtn.id = 'chatbotToggleBtn';
  toggleBtn.className = 'chatbot-toggle-btn';
  toggleBtn.setAttribute('aria-label', 'Chat with LensCraft Studio AI');
  toggleBtn.innerHTML = `
    <span class="chatbot-badge-ping"></span>
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  `;

  // Window container
  const chatWindow = document.createElement('div');
  chatWindow.id = 'lenscraftChatbot';
  chatWindow.className = 'chatbot-window';
  chatWindow.innerHTML = `
    <div class="chatbot-header">
      <div class="chatbot-header-info">
        <div class="chatbot-avatar">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
            <circle cx="12" cy="13" r="4"></circle>
          </svg>
        </div>
        <div class="chatbot-title">
          <h4>LensCraft Studio AI</h4>
          <span>Online & Ready</span>
        </div>
      </div>
      <button class="chatbot-close-btn" id="chatbotCloseBtn" aria-label="Close Chat">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>

    <div class="chatbot-body" id="chatbotBody">
      <!-- Conversation injected here -->
    </div>

    <div class="chatbot-footer" id="chatbotFooter" style="display:none;">
      <input type="text" id="chatbotInput" placeholder="Ask about our photography services..." autocomplete="off">
      <button class="chatbot-send-btn" id="chatbotSendBtn" aria-label="Send">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
      </button>
    </div>
  `;

  document.body.appendChild(toggleBtn);
  document.body.appendChild(chatWindow);

  // Load existing profile from localStorage if any
  const savedProfile = localStorage.getItem('lenscraft_chat_client');
  if (savedProfile) {
    try {
      clientProfile = JSON.parse(savedProfile);
    } catch (e) {
      clientProfile = null;
    }
  }

  // Toggle events
  toggleBtn.addEventListener('click', () => {
    chatWindow.classList.toggle('open');
    if (chatWindow.classList.contains('open')) {
      const body = document.getElementById('chatbotBody');
      if (body.children.length === 0) {
        initChatSession();
      }
    }
  });

  document.getElementById('chatbotCloseBtn').addEventListener('click', () => {
    chatWindow.classList.remove('open');
  });

  // Footer Send Events
  const sendBtn = document.getElementById('chatbotSendBtn');
  const chatInput = document.getElementById('chatbotInput');

  function handleSend() {
    const text = chatInput.value.trim();
    if (!text) return;
    chatInput.value = '';
    appendMessage(text, 'user');
    respondToUser(text);
  }

  sendBtn.addEventListener('click', handleSend);
  chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleSend();
  });
}

function initChatSession() {
  const greeting = getTimeGreeting();

  if (!clientProfile) {
    // Stage 1: Greet and ask for ID (Name, Number, Email)
    appendMessage(
      `${greeting}! Welcome to **LensCraft Photography Studio**.\n\n` +
      `Before we discuss our specialized photography disciplines and packages, please introduce yourself with your contact details below:`,
      'bot'
    );
    renderIdIntakeForm();
  } else {
    // Already identified
    appendMessage(
      `${greeting}, **${clientProfile.name}**! Glad to assist you again. What photography service or package can I help you explore today?`,
      'bot'
    );
    showServiceSuggestions();
    document.getElementById('chatbotFooter').style.display = 'flex';
  }
}

function renderIdIntakeForm() {
  const body = document.getElementById('chatbotBody');
  const formCard = document.createElement('div');
  formCard.className = 'chatbot-id-form';
  formCard.id = 'chatIdForm';
  formCard.innerHTML = `
    <div style="font-weight:600; color:var(--accent-gold); font-size:0.88rem;">Step 1: Your Contact Identification</div>
    <input type="text" id="chatName" placeholder="Your Full Name *" required>
    <input type="tel" id="chatPhone" placeholder="Your Phone Number *" required>
    <input type="email" id="chatEmail" placeholder="Your Email Address *" required>
    <button type="button" class="btn btn-primary btn-sm" id="chatStartBtn" style="margin-top:0.3rem;">Start Chat</button>
  `;
  body.appendChild(formCard);
  body.scrollTop = body.scrollHeight;

  document.getElementById('chatStartBtn').addEventListener('click', () => {
    const nameVal = document.getElementById('chatName').value.trim();
    const phoneVal = document.getElementById('chatPhone').value.trim();
    const emailVal = document.getElementById('chatEmail').value.trim();

    if (!nameVal || !phoneVal || !emailVal) {
      showToast("Please provide your name, phone number, and email to continue.");
      return;
    }

    clientProfile = {
      name: nameVal,
      phone: phoneVal,
      email: emailVal,
      identifiedAt: new Date().toISOString()
    };

    localStorage.setItem('lenscraft_chat_client', JSON.stringify(clientProfile));
    formCard.remove();

    appendMessage(`Name: ${nameVal}\nPhone: ${phoneVal}\nEmail: ${emailVal}`, 'user');

    const greeting = getTimeGreeting();
    appendMessage(
      `Thank you, **${nameVal}**! ${greeting}.\n\n` +
      `I am programmed to assist you exclusively with LensCraft's **8 Photography Services**, **Custom Packages**, and **Direct Studio Bookings**.\n\n` +
      `What would you like to explore?`,
      'bot'
    );

    document.getElementById('chatbotFooter').style.display = 'flex';
    showServiceSuggestions();
  });
}

function showServiceSuggestions() {
  const body = document.getElementById('chatbotBody');
  const wrap = document.createElement('div');
  wrap.className = 'chat-suggestions';
  wrap.innerHTML = `
    <button class="chat-suggestion-chip" onclick="handleChipClick('Tell me about Wedding Photography')">Wedding</button>
    <button class="chat-suggestion-chip" onclick="handleChipClick('Portrait & Personal Branding')">Portraits</button>
    <button class="chat-suggestion-chip" onclick="handleChipClick('Fashion & Model Photography')">Fashion</button>
    <button class="chat-suggestion-chip" onclick="handleChipClick('Corporate & Events')">Corporate</button>
    <button class="chat-suggestion-chip" onclick="handleChipClick('Product & E-Commerce')">Product</button>
    <button class="chat-suggestion-chip" onclick="handleChipClick('What are your packages & prices?')">Pricing</button>
    <button class="chat-suggestion-chip" onclick="handleChipClick('I want to contact the studio')">Contact Details</button>
  `;
  body.appendChild(wrap);
  body.scrollTop = body.scrollHeight;
}

window.handleChipClick = function(text) {
  appendMessage(text, 'user');
  respondToUser(text);
};

function appendMessage(text, sender = 'bot') {
  const body = document.getElementById('chatbotBody');
  const bubble = document.createElement('div');
  bubble.className = `chat-bubble ${sender}`;

  // Simple Markdown parsing for bold and links
  let formatted = text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br>');

  bubble.innerHTML = formatted;
  body.appendChild(bubble);
  body.scrollTop = body.scrollHeight;
}

function respondToUser(query) {
  const q = query.toLowerCase();
  const greeting = getTimeGreeting();

  // Contact intent check
  if (q.includes('contact') || q.includes('reach') || q.includes('call') || q.includes('email') || q.includes('address') || q.includes('phone') || q.includes('whatsapp') || q.includes('location')) {
    setTimeout(() => {
      appendMessage(
        `${greeting}! You can reach the studio directly through any of our channels:\n\n` +
        `• **Email**: <a href="mailto:anzaaleem1804@gmail.com">anzaaleem1804@gmail.com</a>\n` +
        `• **Call / WhatsApp**: <a href="tel:+923292450128">+92 3292450128</a>\n` +
        `• **Studio Address**: Studio 402, Highline Creative District, Lahore / Islamabad\n` +
        `• **Hours**: Mon - Sat: 9:00 AM - 7:00 PM (Sundays by appointment)\n\n` +
        `Would you like to <a href="booking.html">Book an Appointment Online</a>?`,
        'bot'
      );
    }, 450);
    return;
  }

  // Wedding
  if (q.includes('wedding') || q.includes('bridal') || q.includes('marriage')) {
    setTimeout(() => {
      appendMessage(
        `💍 **Wedding & Engagement Photography**\n\n` +
        `We provide fine-art, documentary-style wedding storytelling capturing both emotional vows and candid celebrations.\n\n` +
        `• Full-day coverage with lead master photographers\n` +
        `• Engagement & pre-wedding shoots included\n` +
        `• High-resolution edited gallery + Italian keepsake album\n\n` +
        `Explore packages on our <a href="packages.html">Packages Page</a> or <a href="booking.html?service=Wedding%20Photography">Book Wedding Session</a>.`,
        'bot'
      );
    }, 450);
    return;
  }

  // Portrait
  if (q.includes('portrait') || q.includes('headshot') || q.includes('branding')) {
    setTimeout(() => {
      appendMessage(
        `👤 **Portrait & Personal Branding**\n\n` +
        `Designed for executives, artists, and creative professionals seeking magnetic personal imagery.\n\n` +
        `• In-studio or curated location setups\n` +
        `• Professional skin retouching & chiaroscuro lighting\n` +
        `• Commercial & LinkedIn press kit delivery\n\n` +
        `Ready to elevate your profile? <a href="booking.html?service=Portrait%20and%20Personal%20Branding%20Photography">Book a Portrait Session</a>.`,
        'bot'
      );
    }, 450);
    return;
  }

  // Fashion
  if (q.includes('fashion') || q.includes('model') || q.includes('lookbook')) {
    setTimeout(() => {
      appendMessage(
        `✨ **Fashion & Model Photography**\n\n` +
        `High-impact editorial spreads for designers, apparel brands, and agency model portfolios.\n\n` +
        `• Tethered shooting for live on-set review\n` +
        `• Creative moodboards & styling consultation\n` +
        `• High-end color grading and texture preservation\n\n` +
        `Check our <a href="portfolio.html?cat=fashion">Fashion Portfolio</a> or <a href="booking.html">Inquire Dates</a>.`,
        'bot'
      );
    }, 450);
    return;
  }

  // Corporate / Events
  if (q.includes('corporate') || q.includes('event') || q.includes('gala') || q.includes('summit')) {
    setTimeout(() => {
      appendMessage(
        `🏛️ **Corporate & Event Photography**\n\n` +
        `Dynamic coverage of summits, galas, award dinners, and product launches.\n\n` +
        `• Multi-photographer coverage\n` +
        `• Next-day PR highlight delivery\n` +
        `• Keynote speaker & candid networking shots\n\n` +
        `Let us cover your company event: <a href="booking.html?service=Corporate%20and%20Event%20Photography">Submit Event Brief</a>.`,
        'bot'
      );
    }, 450);
    return;
  }

  // Product
  if (q.includes('product') || q.includes('ecommerce') || q.includes('commercial')) {
    setTimeout(() => {
      appendMessage(
        `📦 **Product & E-Commerce Photography**\n\n` +
        `Macro-sharp studio hero imagery, 360-degree spins, and lifestyle product staging calibrated for Amazon, Shopify, and luxury catalogs.\n\n` +
        `• Pure white background + styled environmental sets\n` +
        `• True-to-life color calibration\n` +
        `• Batch delivery pricing options\n\n` +
        `<a href="booking.html?service=Product%20and%20E-commerce%20Photography">Book Product Session</a>.`,
        'bot'
      );
    }, 450);
    return;
  }

  // Packages & Pricing
  if (q.includes('package') || q.includes('price') || q.includes('cost') || q.includes('rate')) {
    setTimeout(() => {
      appendMessage(
        `🏷️ **LensCraft Pricing Tiers**\n\n` +
        `• **Basic ($299)**: 1.5 Hours session, 25 high-res edited photos, 1 location.\n` +
        `• **Standard ($599)**: 4 Hours session, 65 edited photos, 2 locations, priority editing.\n` +
        `• **Premium ($1,199)**: Full day 8 hours, 150+ master photos, drone aerial coverage, 30-page Italian album.\n\n` +
        `Compare details on our <a href="packages.html">Packages & Pricing Page</a>.`,
        'bot'
      );
    }, 450);
    return;
  }

  // Default Fallback
  setTimeout(() => {
    appendMessage(
      `${greeting}! As LensCraft's studio assistant, I specialize in discussing our **Photography Services** (Wedding, Portrait, Fashion, Event, Product, Family) and **Pricing Packages**.\n\n` +
      `If you need direct assistance from our photographer team, please contact us:\n` +
      `• **Email**: <a href="mailto:anzaaleem1804@gmail.com">anzaaleem1804@gmail.com</a>\n` +
      `• **Phone**: <a href="tel:+923292450128">+92 3292450128</a>\n\n` +
      `How can we craft your next shoot?`,
      'bot'
    );
  }, 450);
}
