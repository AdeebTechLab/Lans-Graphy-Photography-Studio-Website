# LensCraft — Photography Studio Portfolio Website

An elegant, modern, and fully responsive website developed for **LensCraft Photography Studio**. The platform showcases the studio's portfolio, photography services, transparent pricing packages, photographer backgrounds, and an interactive session booking flow.

---

## 🌟 Key Highlights & Design Decisions

1. **Brand Identity & Typography Theory**:
   - **Display / Headers**: *Cormorant Garamond* (Fine-art serif conveying timeless romance, luxury, and editorial prestige).
   - **Body & UI**: *Plus Jakarta Sans* (Clean, hyper-legible geometric modern sans-serif).
   - **Color Harmony**: Deep charcoal (`#0d0f12`), warm parchment (`#faf9f6`), subtle champagne gold accents (`#c5a880`), and delicate borders (`rgba(197, 168, 128, 0.35)`).
   - **Zero Negative Margin Bleed**: Designed to eliminate awkward lateral white gaps or horizontal overscroll across mobile, tablet, and ultra-wide screens.

2. **Template-Driven Uniform Ratio Portfolio**:
   - Every photograph across categories adheres strictly to uniform card sizing and aspect ratios (`4:3` template format), ensuring balanced visual rhythm and effortless image swapping.
   - Categorized across **Wedding**, **Portrait**, **Fashion**, **Event**, **Product**, and **Nature/Lifestyle**.
   - Features zero-reload instant filtering, hover depth elevations, and an interactive **Lightbox** with previous/next controls, image counter, and keyboard shortcuts (`←`, `→`, `Esc`).
   - Includes an elegant empty state fallback when no images match a filter.

3. **Direct Contact Routing & Booking Automation**:
   - All booking reservations, custom package selections, and contact submissions automatically pre-populate and route to:
     - **Email**: `anzaaleem122@gmail.com`
     - **Phone / WhatsApp**: `+92 3292450128`
   - Validates required fields, inputs, and formats before generating clean email dispatches and persisting appointments in `localStorage` for demo continuity.

4. **Dual Theme Architecture**:
   - Built-in Dark and Light mode toggle persisted across sessions via `localStorage`.

---

## 📁 Project Architecture

```text
lenscraft/
├── index.html          # Home landing page with Hero, Featured Work, Services, Packages, Testimonials
├── about.html          # Studio heritage, philosophy, photographer profiles, behind-the-scenes
├── portfolio.html      # Category-filtered 4:3 template gallery with interactive Lightbox
├── services.html       # 8 dedicated photography disciplines with workflow breakdown
├── packages.html       # Transparent Basic ($299), Standard ($599), and Premium ($1,199) tiers & FAQ accordion
├── booking.html        # Comprehensive booking inquiry form with instant confirmation & email routing
├── contact.html        # Studio contact details, Google Map preview, and direct message sender
├── css/
│   ├── style.css       # Core variables, color palettes, reset, typography, navbar, footer, lightbox
│   └── components.css  # Component styles (hero, cards, badges, forms, accordions, testimonials)
├── js/
│   ├── data.js         # Central data source for portfolio items, services, packages, team, FAQs
│   └── app.js          # Theme switcher, navbar scroll states, modal lightbox, notifications, mailto helper
└── README.md           # Documentation, setup guide, and review
```

---

## 🚀 Setup & Launch Instructions

This project is built with vanilla **HTML5**, **CSS3**, and modern **JavaScript (ES6+)** with zero external npm dependencies or heavy build requirements.

### Option 1: Direct Browser Launch
Simply double-click or open any of the HTML files (starting with `index.html`) in your browser (Google Chrome, Edge, Safari, Firefox).

### Option 2: Local Static Server (VS Code / Python / npx)
- **VS Code**: Right-click `index.html` and select **"Open with Live Server"**.
- **Python**:
  ```bash
  python -m http.server 8080
  ```
- **Node.js**:
  ```bash
  npx serve .
  ```
Navigate to `http://localhost:8080` or the indicated port.

---

## 📋 Evaluation Criteria & Feature Checklist

- [x] **Home Page**: Hero section, Selected Work grid, Services Overview, Studio Preview, Packages Preview, Testimonials, CTA, and complete Footer.
- [x] **About Page**: Mission, philosophy, 3 photographer bios, studio stats, and behind-the-scenes photography.
- [x] **Portfolio Page**: 6 required categories, uniform 4:3 image cards, instant category filtering without page reload, lightbox modal with prev/next navigation, and graceful empty state.
- [x] **Services Page**: 8 distinct services (Wedding, Pre-Wedding, Portrait, Fashion, Corporate, Product, Family, Maternity) with direct inquiry CTA links.
- [x] **Packages Page**: Basic ($299), Standard ($599), Premium ($1,199) with full side-by-side comparison matrix and interactive FAQ accordion.
- [x] **Booking Page**: Validated intake (Name, Email, Phone, Service, Date, Time, Location, Package, Budget, Message) with demo `localStorage` log and direct mailto linking to `anzaaleem122@gmail.com`.
- [x] **Contact Page**: Features studio email `anzaaleem122@gmail.com`, phone `+92 3292450128`, business hours, validated form, and interactive map placeholder.
- [x] **Design & UI/UX**: Fluid typography, dark/light theme toggle, zero lateral whitespace, and accessible focus states.

---
© 2026 LensCraft Photography Studio. All rights reserved.
