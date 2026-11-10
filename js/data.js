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
    address: "Studio 402, Highline Creative District, Lahore / Islamabad",
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
      title: "Candid Sunset Laughter",
      category: "wedding",
      categoryLabel: "Wedding Photography",
      image: "images/wed 3.jpeg",
      description: "Documentary-style candid laughter captured outdoors amidst vintage stone gardens.",
      client: "Elena & David",
      date: "December 2025"
    },
    {
      id: 4,
      title: "Golden Hour Couple Portrait",
      category: "wedding",
      categoryLabel: "Wedding Photography",
      image: "images/wed 4.jpeg",
      description: "Sunlit romantic silhouette framing authentic tender embraces during peak twilight.",
      client: "Ayla & Rayan",
      date: "January 2026"
    },
    {
      id: 5,
      title: "Bridal Heirloom Details",
      category: "wedding",
      categoryLabel: "Wedding Photography",
      image: "images/wed 5.jpeg",
      description: "Intricate veil textures, jewelry craftsmanship, and poised pre-ceremony reflections.",
      client: "Nadia & Bilal",
      date: "February 2026"
    },
    {
      id: 6,
      title: "First Dance in Starlight",
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
      client: "LumiÃ¨re Vogue",
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
      title: "Gala Charity SoirÃ©e",
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
      image: "images/Wed 1.jpeg",
      description: "Comprehensive coverage of your special day, capturing both grand moments and emotional glances with fine-art precision.",
      features: ["Full day coverage options", "High-res edited gallery", "Online digital album", "Complimentary engagement shoot"]
    },
    {
      id: "pre-wedding",
      title: "Pre-Wedding & Engagement Shoots",
      icon: "heart",
      image: "images/wed 4.jpeg",
      description: "Romantic, relaxed sessions designed to celebrate your love story in breathtaking outdoor or scenic destination spots.",
      features: ["2 scenic location options", "Styling & outfit guidance", "Print-ready highlight reel", "Save-the-date cards"]
    },
    {
      id: "portrait",
      title: "Portrait & Personal Branding",
      icon: "user",
      image: "images/potra 1.jpeg",
      description: "Striking headshots and creative portraits for entrepreneurs, artists, and leaders seeking a magnetic presence.",
      features: ["Studio or on-location shoot", "Professional retouching", "Commercial use license", "LinkedIn & Press kit crops"]
    },
    {
      id: "fashion",
      title: "Fashion & Model Photography",
      icon: "feather",
      image: "images/fash 1.jpeg",
      description: "Editorial lookbooks and campaign visual storytelling crafted specifically for fashion houses, designers, and models.",
      features: ["Moodboard collaboration", "Tethered live preview", "High-end skin retouching", "Lookbook layout support"]
    },
    {
      id: "corporate",
      title: "Corporate & Event Photography",
      icon: "briefcase",
      image: "images/event 1.jpeg",
      description: "Dynamic documentation of conferences, galas, award nights, and summits with rapid next-day PR delivery.",
      features: ["Multi-camera coverage", "Next-day teaser batch", "Candid attendee shots", "Executive keynote coverage"]
    },
    {
      id: "product",
      title: "Product & E-Commerce Photography",
      icon: "package",
      image: "images/prod 1.jpeg",
      description: "Ultra-sharp hero images, 360 views, and lifestyle staging that elevate your brand and drive online conversion.",
      features: ["Pure white & lifestyle sets", "Color accuracy calibration", "Amazon & Shopify ready", "Batch pricing discounts"]
    },
    {
      id: "family",
      title: "Family & Lifestyle Photography",
      icon: "smile",
      image: "images/nat 2.jpeg",
      description: "Cherish generations and joyous milestones with warm, unstaged family portraits in natural, comfortable settings.",
      features: ["Fun & relaxed atmosphere", "Outdoor or home session", "Family heirloom wall art", "Full digital collection"]
    },
    {
      id: "maternity",
      title: "Maternity & Newborn Photography",
      icon: "sun",
      image: "images/potra 3.jpeg",
      description: "Gentle, timeless celebrations of new beginnings with warm studio light and utmost baby safety protocols.",
      features: ["Safe, climate-controlled studio", "Delicate wraps & props provided", "Patience for feeding breaks", "Mother & newborn bonding shots"]
    }
  ],

  // 3 Transparent Pricing Packages
  packages: [
    {
      id: "basic",
      name: "Basic Package",
      subtitle: "Essential & Crisp Sessions",
      price: "PKR 45,000", priceValue: 45000,
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
      price: "PKR 95,000", priceValue: 95000,
      duration: "4 Hours Extended Session",
      features: [
        "Lead photographer + assistant",
        "Up to 2 distinct locations",
        "65 professionally retouched photos",
        "Priority editing within 4 business days",
        "Full resolution download + web optimized",
        "Custom USB presentation keepsake box",
        "Commercial & personal printing rights"
      ],
      popular: true
    },
    {
      id: "premium",
      name: "Premium Package",
      subtitle: "Full-Day Luxury Experience",
      price: "PKR 185,000", priceValue: 185000,
      duration: "Full Day (Up to 8 Hours)",
      features: [
        "2 Principal master photographers",
        "Unlimited locations & outfit changes",
        "150+ master retouched photographs",
        "Drone aerial photography included",
        "Express 48-hour delivery",
        "Handcrafted 30-page Italian leather album",
        "All raw files + 4K cinematic highlight slideshow"
      ],
      popular: false
    }
  ],

  // Photographers & Team
  team: [
    {
      name: "Alexander Vance",
      role: "Lead Master Photographer & Founder",
      bio: "12+ years capturing high-end weddings and fine art portraits globally. Featured in Vogue & National Geographic.",
      image: "images/potra 2.jpeg"
    },
    {
      name: "Sophia Sterling",
      role: "Head of Editorial & Fashion",
      bio: "Specializes in dramatic lighting and fashion campaign direction, bringing commercial flair and modern grace.",
      image: "images/potra 1.jpeg"
    },
    {
      name: "Marcus Aurel",
      role: "Cinematographer & Event Lead",
      bio: "Master of candid moments and corporate summit narratives with lightning-quick post-production turnaround.",
      image: "images/potra 4.jpeg"
    }
  ],

  // Client Testimonials
  testimonials: [
    {
      id: 1,
      name: "Claire & Thomas Mitchell",
      role: "Wedding Clients",
      avatar: "images/potra 3.jpeg",
      text: "LensCraft captured our wedding day with so much grace and authenticity. Looking through our album brings tears of joy every single time. Absolutely world-class artistry!",
      service: "Wedding Photography",
      rating: 5
    },
    {
      id: 2,
      name: "David Chen",
      role: "CEO, Horizon Tech",
      avatar: "images/potra 2.jpeg",
      text: "Our annual leadership summit was documented flawlessly. The photographers were discrete, polished, and delivered PR-ready assets the very next morning.",
      service: "Corporate & Event Photography",
      rating: 5
    },
    {
      id: 3,
      name: "Elena Rostova",
      role: "Fashion Designer",
      avatar: "images/potra 1.jpeg",
      text: "The lighting and mood created for our Autumn Lookbook exceeded all expectations. Our international sales increased by 40% thanks to these stunning visuals.",
      service: "Fashion Photography",
      rating: 5
    }
  ],

  // Studio FAQs
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
