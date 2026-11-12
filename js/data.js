/**
 * LensCraft Photography Studio - Central Data Source
 * Curated high-resolution photography showcase
 * Using user's uploaded images from the images/ folder (Max 6 per category)
 */

const LENSCRAFT_DATA = {
  // Studio & Contact Information
  studioInfo: {
    name: "LensCraft Photography Studio",
    tagline: "Capturing Life's Most Timeless Masterpieces",
    email: "anzaaleem1804@gmail.com",
    phone: "+92 3292450128",
    address: "Studio 402, Highline Creative District, Lahore, Pakistan",
    hours: "Mon - Sat: 9:00 AM - 7:00 PM | Sun: By Appointment",
    socials: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      pinterest: "https://pinterest.com",
      twitter: "https://twitter.com"
    }
  },

  // Portfolio items across 6 required categories (6 images each = 36 total)
  portfolio: [
    /* ---------------- WEDDING PHOTOGRAPHY (6 images) ---------------- */
    {
      id: 1,
      title: "Eternal Vows & Ceremony",
      category: "wedding",
      categoryLabel: "Wedding Photography",
      image: "images/Wed 1.jpeg",
      description: "An intimate sacred union capturing emotional warmth, vows, and delicate bridal moments.",
      client: "Sarah & Marcus",
      date: "October 2025"
    },
    {
      id: 2,
      title: "The Royal Ballroom Elegance",
      category: "wedding",
      categoryLabel: "Wedding Photography",
      image: "images/wed 2.jpeg",
      description: "Grand traditional wedding celebration highlighting architectural romance and ambient illumination.",
      client: "Zara & Hamza",
      date: "November 2025"
    },
    {
      id: 3,
      title: "Ceremony Moments",
      category: "wedding",
      categoryLabel: "Wedding Photography",
      image: "images/wed 3.jpeg",
      description: "Sacred traditional vows and emotional ceremonial moments captured with reverence.",
      client: "Elena & David",
      date: "December 2025"
    },
    {
      id: 4,
      title: "Emotional Moment",
      category: "wedding",
      categoryLabel: "Wedding Photography",
      image: "images/wed 4.jpeg",
      description: "Sunlit romantic silhouette framing authentic tender embraces during peak twilight.",
      client: "Ayla & Rayan",
      date: "January 2026"
    },
    {
      id: 5,
      title: "Emotional Embrace",
      category: "wedding",
      categoryLabel: "Wedding Photography",
      image: "images/wed 5.jpeg",
      description: "Intricate veil textures, jewelry craftsmanship, and poised pre-ceremony reflections.",
      client: "Nadia & Bilal",
      date: "February 2026"
    },
    {
      id: 6,
      title: "The Signing",
      category: "wedding",
      categoryLabel: "Wedding Photography",
      image: "images/wed 6.jpeg",
      description: "Romantic first dance framed by gentle bokeh chandeliers and timeless harmony.",
      client: "Sonia & Daniel",
      date: "March 2026"
    },

    /* ---------------- PORTRAIT PHOTOGRAPHY (6 images) ---------------- */
    {
      id: 7,
      title: "The Editorial Persona",
      category: "portrait",
      categoryLabel: "Portrait Photography",
      image: "images/potra 1.jpeg",
      description: "Chiaroscuro studio lighting capturing depth, character, and expressive emotional nuance.",
      client: "Amina Ross",
      date: "January 2026"
    },
    {
      id: 8,
      title: "Executive Presence",
      category: "portrait",
      categoryLabel: "Portrait Photography",
      image: "images/potra 2.jpeg",
      description: "Modern professional personal branding session with a confident and poised executive aesthetic.",
      client: "Julian Vance",
      date: "February 2026"
    },
    {
      id: 9,
      title: "Natural Ambient Gaze",
      category: "portrait",
      categoryLabel: "Portrait Photography",
      image: "images/potra 3.jpeg",
      description: "Soft window sidelight crafting an organic, genuine, and contemplative close-up portrait.",
      client: "Chloe Miller",
      date: "March 2026"
    },
    {
      id: 10,
      title: "Artistic Studio Profile",
      category: "portrait",
      categoryLabel: "Portrait Photography",
      image: "images/potra 4.jpeg",
      description: "Sculpted side-profile portrait emphasizing facial contouring and authentic gaze.",
      client: "Tariq Malik",
      date: "March 2026"
    },
    {
      id: 11,
      title: "Creative Luminance",
      category: "portrait",
      categoryLabel: "Portrait Photography",
      image: "images/potra 5.jpeg",
      description: "Dramatic rim-light silhouette celebrating individuality and creative personal presence.",
      client: "Maya Lin",
      date: "April 2026"
    },
    {
      id: 12,
      title: "Monochrome Soul",
      category: "portrait",
      categoryLabel: "Portrait Photography",
      image: "images/potra 6.jpeg",
      description: "High-contrast monochrome study exploring raw emotion, subtle texture, and depth.",
      client: "Kareem Harris",
      date: "April 2026"
    },

    /* ---------------- FASHION PHOTOGRAPHY (6 images) ---------------- */
    {
      id: 13,
      title: "Velvet Couture Editorial",
      category: "fashion",
      categoryLabel: "Fashion Photography",
      image: "images/fash 1.jpeg",
      description: "High fashion editorial for seasonal designer couture highlighting textile textures and posture.",
      client: "Maison V",
      date: "January 2026"
    },
    {
      id: 14,
      title: "Contemporary Runway Look",
      category: "fashion",
      categoryLabel: "Fashion Photography",
      image: "images/fash 2.jpeg",
      description: "Bold sartorial lines and high-contrast studio staging celebrating avant-garde tailoring.",
      client: "Atelier Lux",
      date: "February 2026"
    },
    {
      id: 15,
      title: "Urban Street Haute",
      category: "fashion",
      categoryLabel: "Fashion Photography",
      image: "images/fash 3.jpeg",
      description: "Dynamic metropolitan street aesthetic framing sophisticated modern streetwear.",
      client: "Aura Apparel",
      date: "March 2026"
    },
    {
      id: 16,
      title: "Minimalist Geometry",
      category: "fashion",
      categoryLabel: "Fashion Photography",
      image: "images/fash 4.jpeg",
      description: "Sharp architectural forms blended with flowing silk drape aesthetics in pure studio light.",
      client: "Studio Nova",
      date: "March 2026"
    },
    {
      id: 17,
      title: "Vibrant Horizon Lookbook",
      category: "fashion",
      categoryLabel: "Fashion Photography",
      image: "images/fash 5.jpeg",
      description: "Vivid color harmonies and movement-driven poses creating compelling catalog imagery.",
      client: "Zephyr Collective",
      date: "April 2026"
    },
    {
      id: 18,
      title: "Editorial Golden Hour",
      category: "fashion",
      categoryLabel: "Fashion Photography",
      image: "images/fash 6.jpeg",
      description: "Rich natural backlighting enhancing delicate garments and effortless model poise.",
      client: "Lumi�re Vogue",
      date: "April 2026"
    },

    /* ---------------- EVENT PHOTOGRAPHY (6 images) ---------------- */
    {
      id: 19,
      title: "Global Leadership Summit",
      category: "event",
      categoryLabel: "Event Photography",
      image: "images/event 1.jpeg",
      description: "Keynote presentation with dramatic spotlights, engaged delegates, and crisp speaker focus.",
      client: "NexGen Ventures",
      date: "February 2026"
    },
    {
      id: 20,
      title: "Gala Charity Soir�e",
      category: "event",
      categoryLabel: "Event Photography",
      image: "images/event 2.jpeg",
      description: "Ambient banquet lighting, live acoustic musicians, and spontaneous genuine attendee interactions.",
      client: "Starlight Foundation",
      date: "March 2026"
    },
    {
      id: 21,
      title: "Corporate Awards Night",
      category: "event",
      categoryLabel: "Event Photography",
      image: "images/event 3.jpeg",
      description: "Trophy presentations, triumphant stage smiles, and lively celebratory networking.",
      client: "Apex Industries",
      date: "March 2026"
    },
    {
      id: 22,
      title: "Cultural Festival & Gala",
      category: "event",
      categoryLabel: "Event Photography",
      image: "images/event 4.jpeg",
      description: "Vibrant stage performances with synchronized ambient illumination and enthusiastic audiences.",
      client: "Harmony Arts",
      date: "April 2026"
    },
    {
      id: 23,
      title: "Tech Innovation Expo",
      category: "event",
      categoryLabel: "Event Photography",
      image: "images/event 5.jpeg",
      description: "Interactive exhibition floor showcases, high-profile product unveilings, and executive panels.",
      client: "Silicon Nexus",
      date: "April 2026"
    },
    {
      id: 24,
      title: "VIP Networking Reception",
      category: "event",
      categoryLabel: "Event Photography",
      image: "images/event 6.jpeg",
      description: "Intimate conversation clusters and refined lounge atmosphere under evening chandeliers.",
      client: "Capital Partners",
      date: "April 2026"
    },

    /* ---------------- PRODUCT PHOTOGRAPHY (6 images) ---------------- */
    {
      id: 25,
      title: "Artisan Craft & Chronograph",
      category: "product",
      categoryLabel: "Product Photography",
      image: "images/prod 1.jpeg",
      description: "Micro-detail focus highlighting brushed stainless steel chamfers and sapphire reflections.",
      client: "Kronos Chronographs",
      date: "January 2026"
    },
    {
      id: 26,
      title: "Botanical Fragrance Glassware",
      category: "product",
      categoryLabel: "Product Photography",
      image: "images/prod 2.jpeg",
      description: "Clean aesthetic glassware staging with natural sun shadows and organic stone textures.",
      client: "Aroma Botanica",
      date: "February 2026"
    },
    {
      id: 27,
      title: "Luxury Leather Accessories",
      category: "product",
      categoryLabel: "Product Photography",
      image: "images/prod 3.jpeg",
      description: "Supple leather grain texture captured under precise softbox illumination.",
      client: "Vittorio Leather",
      date: "March 2026"
    },
    {
      id: 28,
      title: "Premium Skincare Essentials",
      category: "product",
      categoryLabel: "Product Photography",
      image: "images/prod 4.jpeg",
      description: "Minimalist cosmetics presentation with balanced negative space and pastel backdrop harmony.",
      client: "Lumina Skin",
      date: "March 2026"
    },
    {
      id: 29,
      title: "Fine Jewelry & Gemstone Shine",
      category: "product",
      categoryLabel: "Product Photography",
      image: "images/prod 5.jpeg",
      description: "Macro sparkle and reflection control highlighting facet symmetry and gold purity.",
      client: "Aurum Fine Gems",
      date: "April 2026"
    },
    {
      id: 30,
      title: "Modern Acoustic Tech",
      category: "product",
      categoryLabel: "Product Photography",
      image: "images/prod 6.jpeg",
      description: "Matte finish hardware styling highlighting clean lines and ergonomic industrial design.",
      client: "Pulse Audio",
      date: "April 2026"
    },

    /* ---------------- NATURE & LIFESTYLE (6 images) ---------------- */
    {
      id: 31,
      title: "Alpine Lake Reflections",
      category: "lifestyle",
      categoryLabel: "Nature & Lifestyle",
      image: "images/nat 1.jpeg",
      description: "Pristine mountain alpine reflection in glassy still waters during quiet sunrise tranquility.",
      client: "Wilderness Journal",
      date: "March 2026"
    },
    {
      id: 32,
      title: "Morning Sun & Slow Living",
      category: "lifestyle",
      categoryLabel: "Nature & Lifestyle",
      image: "images/nat 2.jpeg",
      description: "Authentic, warm, slow-living moments captured with soft natural morning illumination.",
      client: "Nordic Roasters",
      date: "March 2026"
    },
    {
      id: 33,
      title: "Whispering Pine Forest",
      category: "lifestyle",
      categoryLabel: "Nature & Lifestyle",
      image: "images/nat 3.jpeg",
      description: "Sun rays piercing through misty evergreen canopies creating ethereal light shafts.",
      client: "Terra Eco Travels",
      date: "April 2026"
    },
    {
      id: 34,
      title: "Coastal Tide & Sand Horizons",
      category: "lifestyle",
      categoryLabel: "Nature & Lifestyle",
      image: "images/nat 4.jpeg",
      description: "Rolling ocean waves meeting untouched shoreline under vast atmospheric skies.",
      client: "Oceanic Wander",
      date: "April 2026"
    },
    {
      id: 35,
      title: "Autumn Pathway Stroll",
      category: "lifestyle",
      categoryLabel: "Nature & Lifestyle",
      image: "images/nat 5.jpeg",
      description: "Vibrant golden foliage lining a quiet countryside path filled with rustic peace.",
      client: "Solitude Magazine",
      date: "April 2026"
    },
    {
      id: 36,
      title: "Golden Meadow Twilight",
      category: "lifestyle",
      categoryLabel: "Nature & Lifestyle",
      image: "images/nat 6.jpeg",
      description: "Gentle breeze rippling across amber grassy fields during the last glow of sunset.",
      client: "Horizon Gazette",
      date: "April 2026"
    }
  ],

  // 8 Specific Photography Services
  services: [
    {
      id: "wedding",
      title: "Wedding Photography",
      icon: "camera",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
      description: "Documentary wedding storytelling designed to preserve emotional intimacy, sacred traditional rituals, and grand architectural moments.",
      features: ["Full-day coverage options", "High-resolution edited master gallery", "Online password-protected digital album", "Complimentary engagement couple shoot"]
    },
    {
      id: "pre-wedding",
      title: "Pre-Wedding & Engagement Shoots",
      icon: "heart",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
      description: "Cinematic, relaxed sessions celebrating your romantic journey across scenic destination landscapes or heritage architecture.",
      features: ["Curated indoor/outdoor destination locations", "Professional wardrobe & styling direction", "Print-ready teaser highlights in 48 hours", "Bespoke digital save-the-date cards"]
    },
    {
      id: "portrait",
      title: "Portrait & Personal Branding",
      icon: "user",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      description: "Magnetic, editorial portraits crafted for founders, artists, and senior executives commanding authoritative presence.",
      features: ["Private studio or corporate on-location shoot", "Precision skin & wardrobe retouching", "Commercial publishing license included", "Tailored LinkedIn, Forbes & press-kit crops"]
    },
    {
      id: "fashion",
      title: "Fashion & Model Photography",
      icon: "feather",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
      description: "Runway-grade lookbooks, high-fashion campaigns, and model portfolios capturing garment drapery, texture, and movement.",
      features: ["Creative concept & moodboard development", "Tethered live monitor preview during shoots", "High-end editorial skin & color grading", "Lookbook graphic layout support"]
    },
    {
      id: "corporate",
      title: "Corporate & Event Photography",
      icon: "briefcase",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
      description: "Comprehensive documentation of summits, galas, and keynotes with prompt next-day media batches for corporate PR.",
      features: ["Multi-camera synchronized coverage", "Next-morning priority PR teaser batch", "Candid attendee & VIP dignitary moments", "Keynote stage & executive award presentations"]
    },
    {
      id: "product",
      title: "Product & E-Commerce Photography",
      icon: "package",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
      description: "High-fidelity studio staging, macro texture precision, and 360 styling designed to elevate brand perception and conversions.",
      features: ["Seamless infinity white & lifestyle sets", "Industrial color-accuracy calibration", "Optimized for Amazon, Shopify & print catalogs", "Tiered volume batch production rates"]
    },
    {
      id: "family",
      title: "Family & Lifestyle Photography",
      icon: "smile",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
      description: "Timeless multi-generation family narratives captured with natural light, relaxed laughter, and unscripted warmth.",
      features: ["Warm, unhurried, kid-friendly atmosphere", "Outdoor natural landscape or home session", "Heirloom museum-grade wall-art options", "Complete high-res digital collection"]
    },
    {
      id: "maternity",
      title: "Maternity & Newborn Photography",
      icon: "sun",
      image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=800&q=80",
      description: "Gentle, serene celebrations of new life with soft ambient studio illumination and strict newborn safety standards.",
      features: ["Climate-controlled private studio sanctum", "Artisanal organic wraps & delicate props provided", "Ample time allocated for feeding breaks", "Intimate mother-infant bonding captures"]
    }
  ],

  // 3 Transparent Pricing Packages
  packages: [
    {
      id: "basic",
      name: "Basic Package",
      subtitle: "Essential & Crisp Sessions",
      price: "PKR 45,000",
      priceValue: 45000,
      duration: "1.5 Hours Session",
      features: [
        "1 dedicated professional photographer",
        "1 curated location or studio setup",
        "25 professionally edited high-res photos",
        "Private password-protected digital gallery",
        "Standard delivery within 7 business days",
        "Full personal printing rights"
      ],
      popular: false
    },
    {
      id: "standard",
      name: "Standard Package",
      subtitle: "Most Popular for Weddings & Events",
      price: "PKR 95,000",
      priceValue: 95000,
      duration: "4 Hours Extended Session",
      features: [
        "2 dedicated senior photographers",
        "Up to 2 locations or indoor/outdoor setup",
        "75 professionally color-graded master images",
        "Private online gallery with instant download",
        "Sneak-peek highlights within 48 hours",
        "Handcrafted heirloom photobook keepsake",
        "Full commercial & personal rights"
      ],
      popular: true
    },
    {
      id: "premium",
      name: "Premium Package",
      subtitle: "The Ultimate Bespoke Atelier Experience",
      price: "PKR 185,000",
      priceValue: 185000,
      duration: "Full Day (Up to 8 Hours)",
      features: [
        "Lead Master Photographer + 2 Associates",
        "Full event & multi-destination coverage",
        "200+ fully retouched magazine-grade images",
        "4K cinematic video reel highlight (3-5 min)",
        "Luxury Italian leather wedding heirloom album",
        "Express delivery within 48 hours",
        "VIP archival cloud backup forever"
      ],
      popular: false
    }
  ],

  // Frequently Asked Questions
    // Curated National & International Client Experiences
  testimonials: [
    {
      id: 1,
      name: "Ayesha & Hamza Malik",
      role: "Bridal Couple",
      location: "Lahore, Pakistan (National)",
      service: "Royal Wedding Coverage (3-Day)",
      avatar: "images/potra 1.jpeg",
      rating: 5,
      text: "LensCraft captured our multi-day Lahore wedding with sheer royal grace. The raw emotional tears, laughter, and heritage heirloom album exceeded every expectation. Alexander Vance and his team felt like family!"
    },
    {
      id: 2,
      name: "Sophie & David Beaumont",
      role: "Destination Wedding Clients",
      location: "Paris, France (International)",
      service: "Destination Nuptials & Editorial Shoot",
      avatar: "images/potra 2.jpeg",
      rating: 5,
      text: "We flew Alexander and the LensCraft crew to Europe for our Normandy estate vows. Their editorial eye and command of natural dusk lighting produced magazine-cover imagery that our families in France and the UK treasure daily."
    },
    {
      id: 3,
      name: "Bilal Siddiqui",
      role: "Founder & Creative Director, Saffron Silk",
      location: "Karachi, Pakistan (National)",
      service: "Fashion Lookbook & Commercial Campaign",
      avatar: "images/potra 4.jpeg",
      rating: 5,
      text: "As an apparel brand launching our winter collection, we needed flawless textile textures and color fidelity. LensCraft delivered sharp, vibrant campaign images that drove a 40% jump in our online launch sales."
    },
    {
      id: 4,
      name: "Elena Rostova & Marcus Sterling",
      role: "Executive Clients",
      location: "London, United Kingdom (International)",
      service: "Highline Portrait & Personal Branding",
      avatar: "images/potra 3.jpeg",
      rating: 5,
      text: "World-class studio production! The private studio in the Highline District is serene, professional, and equipped with medium-format precision. My executive headshots command immediate authority across Bloomberg and Forbes."
    },
    {
      id: 5,
      name: "Zainab & Daniyal Qureshi",
      role: "Milestone & Family Clients",
      location: "Islamabad, Pakistan (National)",
      service: "Heirloom Family & Outdoor Lifestyle",
      avatar: "images/potra 5.jpeg",
      rating: 5,
      text: "Capturing three generations with young toddlers seemed impossible until LensCraft stepped in. The warm, patient direction and unstaged candid laughter turned into wall art that will live in our family home forever."
    },
    {
      id: 6,
      name: "Kenji Takahashi",
      role: "Brand Director, Lumina Timepieces",
      location: "Tokyo, Japan (International)",
      service: "Commercial Luxury Watch Campaign",
      avatar: "images/potra 6.jpeg",
      rating: 5,
      text: "LensCraft’s mastery of macro reflection control and chamfer edge illumination on our luxury chronographs was immaculate. A truly global standard studio with unmatched creative vision and rapid turnaround."
    }
  ],

  faqs: [
    {
      question: "How can I book a photography session?",
      answer: "Booking is effortless! Navigate to our Booking page, select your desired photography service and package, choose your preferred date and time, and submit your inquiry. We will contact you within 24 hours to confirm your session."
    },
    {
      question: "How far in advance should I book?",
      answer: "For weddings and large commercial campaigns, we recommend booking 3 to 6 months in advance to secure peak weekend dates. For studio portraits and product sessions, 1 to 2 weeks notice is generally sufficient."
    },
    {
      question: "How long does photo editing take?",
      answer: "Standard turnaround time is 7 business days for portrait sessions and 2 to 3 weeks for full weddings. We also offer priority express delivery options within 48 to 72 hours for urgent campaigns."
    },
    {
      question: "Can I request a specific location?",
      answer: "Absolutely! We shoot across our private daylight studio, public landmarks, private residences, and scenic natural settings. Travel within the metropolitan area is included in our standard and premium packages."
    },
    {
      question: "Are customized packages available?",
      answer: "Yes, we tailor bespoke packages for multi-day weddings, destination shoots, and brand campaigns. Simply submit an inquiry with your requirements or email us directly at anzaaleem1804@gmail.com."
    },
    {
      question: "How will the final photographs be delivered?",
      answer: "You receive access to a private, password-protected online gallery with instant high-resolution downloads for print and web-ready formats. Premium packages also include a luxury custom USB keepsake box and fine art prints."
    },
    {
      question: "What happens if I need to reschedule?",
      answer: "Life happens! You can reschedule your session up to 72 hours before the scheduled time without any penalty fee. In the event of inclement outdoor weather, we will happily arrange an alternative date or pivot to our studio."
    }
  ]
};



