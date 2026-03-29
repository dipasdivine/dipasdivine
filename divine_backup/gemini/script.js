const CONFIG = {
  whatsapp: "918669214433",
  slotCloseHour: 22
};

const BEAUTY_SERVICES = [
  {
    title: "Royal Maharashtrian Bridal",
    duration: "4.5 Hours",
    price: 22000,
    description: "HD bridal coverage with drape and long-wear finish.",
    image: "media/dipas-beauty-treats/bridal-maharashtrian.jpg",
    cta: "Book Royal Bridal"
  },
  {
    title: "Rajasthani Heritage Bridal",
    duration: "4 Hours",
    price: 23000,
    description: "Traditional look architecture tuned for event photography.",
    image: "media/dipas-beauty-treats/bridal-rajasthani.jpg",
    cta: "Book Heritage Bridal"
  },
  {
    title: "Skin Glow Reset Therapy",
    duration: "60 Minutes",
    price: 2800,
    description: "Hydration and glow correction for smooth makeup base.",
    image: "media/dipas-beauty-treats/skin-treatment-3.jpg",
    cta: "Book Skin Session"
  },
  {
    title: "Keratin Smoothening Plan",
    duration: "120 Minutes",
    price: 6500,
    description: "Frizz reduction with salon-grade smooth texture finish.",
    image: "media/dipas-beauty-treats/hair-treatment-2.jpg",
    cta: "Book Keratin"
  },
  {
    title: "Party Makeup Signature",
    duration: "60 Minutes",
    price: 2500,
    description: "Quick glam look designed to stay polished in long events.",
    image: "media/dipas-beauty-treats/party-makeup.jpg",
    cta: "Book Party Makeup"
  },
  {
    title: "Bridal Skin Prep Program",
    duration: "4 Sittings",
    price: 12000,
    description: "Month-long prep pipeline before wedding and reception.",
    image: "media/dipas-beauty-treats/skin-treatment-1.jpg",
    cta: "Start Skin Program"
  }
];

const DIVINE_SERVICES = [
  {
    title: "Rapid Clarity Session",
    duration: "30 Minutes",
    price: 999,
    description: "Fast diagnosis for confusion, stress and emotional noise.",
    image: "media/dipas-divine/consultation.jpg",
    cta: "Book Clarity Session"
  },
  {
    title: "Numerology + Reiki Alignment",
    duration: "60 Minutes",
    price: 1999,
    description: "Life pattern reading paired with energetic balancing.",
    image: "media/dipas-divine/numerology-chart-concept.png",
    cta: "Book Alignment"
  },
  {
    title: "Deep Energy Reset",
    duration: "90 Minutes",
    price: 2999,
    description: "Chakra and aura-focused release for heavy mental load.",
    image: "media/dipas-divine/reiki-energy-transfer.png",
    cta: "Book Reset"
  },
  {
    title: "Name Vibration Correction",
    duration: "45 Minutes",
    price: 1799,
    description: "Guided name correction to improve personal number harmony.",
    image: "media/dipas-divine/numerology-2.jpg",
    cta: "Book Name Correction"
  },
  {
    title: "Monthly Destiny Roadmap",
    duration: "120 Minutes",
    price: 3999,
    description: "Action timeline for relationships, money and career choices.",
    image: "media/dipas-divine/chakras-meditation-art.png",
    cta: "Book Roadmap"
  },
  {
    title: "Aura Cleansing Routine",
    duration: "60 Minutes",
    price: 1499,
    description: "Release stuck emotional residue and restore daily focus.",
    image: "media/dipas-divine/aura-cleansing.jpg",
    cta: "Book Aura Session"
  }
];

const TAROT_SERVICES = [
  {
    title: "Quick Answer Tarot",
    duration: "30 Minutes",
    price: 899,
    description: "Straight answer spread for one priority question.",
    image: "media/dipas-tarot-oracle/tarot-spread-2.jpg",
    cta: "Book Quick Tarot"
  },
  {
    title: "Relationship Tarot",
    duration: "60 Minutes",
    price: 1799,
    description: "Compatibility and communication clarity reading.",
    image: "media/dipas-tarot-oracle/tarot-reader-1.jpg",
    cta: "Book Relationship Reading"
  },
  {
    title: "Career Direction Reading",
    duration: "60 Minutes",
    price: 1699,
    description: "Compare options and decode path timing confidently.",
    image: "media/dipas-tarot-oracle/moon-reading.jpg",
    cta: "Book Career Reading"
  },
  {
    title: "Full Life Compass",
    duration: "90 Minutes",
    price: 2599,
    description: "Comprehensive spread for love, money and personal growth.",
    image: "media/dipas-tarot-oracle/tarot-reading-close-up.png",
    cta: "Book Compass Session"
  },
  {
    title: "Monthly Tarot Mentorship",
    duration: "4 x 30 Minutes",
    price: 2999,
    description: "Weekly check-ins for decisions and timing management.",
    image: "media/dipas-tarot-oracle/tarot-reader-2.jpg",
    cta: "Book Monthly Mentorship"
  },
  {
    title: "Moon Ritual Reading",
    duration: "45 Minutes",
    price: 1299,
    description: "Cycle-aligned guidance for emotional and spiritual reset.",
    image: "media/dipas-tarot-oracle/candle-ritual.jpg",
    cta: "Book Moon Reading"
  }
];

const CRYSTALS = [
  {
    name: "Rose Quartz Heart",
    price: 1499,
    image: "media/crystal-vault/rose-quartz-product-shot.png",
    description: "Support for self-love and emotional healing.",
    tags: ["love", "healing"]
  },
  {
    name: "Amethyst Cluster",
    price: 1899,
    image: "media/crystal-vault/amethyst-geode-product-shot.png",
    description: "Calm mind support for sleep and intuitive clarity.",
    tags: ["focus", "healing"]
  },
  {
    name: "Black Tourmaline Shield",
    price: 1599,
    image: "media/crystal-vault/black-tourmaline.jpg",
    description: "Grounding and energetic protection for daily stress.",
    tags: ["protection"]
  },
  {
    name: "Citrine Point",
    price: 1699,
    image: "media/crystal-vault/citrine.jpg",
    description: "Prosperity and confidence support for action and sales.",
    tags: ["abundance"]
  },
  {
    name: "Clear Quartz Tower",
    price: 1299,
    image: "media/crystal-vault/clear-quartz.jpg",
    description: "Energy amplifier for focus rituals and manifestation.",
    tags: ["focus", "abundance"]
  },
  {
    name: "Lapis Clarity Stone",
    price: 1499,
    image: "media/crystal-vault/lapis.jpg",
    description: "Communication and insight support for bold decisions.",
    tags: ["focus"]
  },
  {
    name: "Pyrite Prosperity Cube",
    price: 1399,
    image: "media/crystal-vault/pyrite.jpg",
    description: "Career momentum and money mindset activation.",
    tags: ["abundance", "protection"]
  },
  {
    name: "Selenite Wand Set",
    price: 1199,
    image: "media/crystal-vault/selenite.jpg",
    description: "Aura and space cleansing support for routine reset.",
    tags: ["protection", "healing"]
  }
];

const TESTIMONIALS = [
  {
    quote: "Bridal look stayed flawless through the full wedding schedule and photos looked perfect.",
    author: "Rutuja P. · Jalna"
  },
  {
    quote: "Numerology plus Reiki helped me calm down and choose my career move clearly.",
    author: "Neha K. · Mantha Road"
  },
  {
    quote: "Tarot reading gave practical steps and timing, not vague advice. Very helpful.",
    author: "Sonal M. · Sukh Shanti Nagar"
  },
  {
    quote: "Crystal recommendations matched my intention and the order process was very smooth.",
    author: "Prachi D. · Jalna"
  }
];

const BLOGS = [
  {
    topic: "Beauty",
    title: "Glass Skin Bridal Prep Plan in 2026",
    excerpt: "The trend in bridal makeup is natural skin texture with strategic high points.",
    image: "media/dipas-beauty-treats/luxury-spa-skin-focus.png",
    body: [
      "Bridal clients are moving from heavy matte layers to skin-first prep that still photographs cleanly. The first step is barrier repair and hydration calibration based on your event month.",
      "Book two to four skin sessions before the wedding week. This supports smooth blending, reduces patchiness, and improves makeup longevity under long function schedules.",
      "For final week prep, avoid aggressive treatments. Keep calming facials, sleep discipline, and simple at-home hydration to preserve glow and reduce last-minute sensitivity."
    ]
  },
  {
    topic: "Beauty",
    title: "Quiet Luxury Makeup Looks Clients Are Booking",
    excerpt: "Soft contour, premium base, and understated eye structure are leading requests.",
    image: "media/dipas-beauty-treats/high-fashion-salon-look.png",
    body: [
      "Quiet luxury looks focus on polished skin, tailored undertones, and elegant lip balance rather than loud contrast. This style works for receptions, office events, and destination functions.",
      "Use thin base layers and build only where needed. Weightless products and setting choices are key to keeping the look rich without visible heaviness.",
      "The trend also favors tailored brow shape and refined lashes over dramatic volume. Result: timeless photographs and better comfort during full-day wear."
    ]
  },
  {
    topic: "Beauty",
    title: "Hard Water Hair Damage: Jalna Recovery Routine",
    excerpt: "A salon + home protocol to reduce frizz, roughness and breakage from hard water.",
    image: "media/dipas-beauty-treats/hair-treatment-2.jpg",
    body: [
      "Hard water buildup can leave hair dry, rough, and difficult to style. Start with scalp detox and mineral-clearing support at a professional setup.",
      "Follow with weekly hydration masks and protective serum before heat styling. Avoid over-washing, especially during hotter months when shafts are already moisture-depleted.",
      "In most cases, visible smoothness improves within three sessions when care is consistent and products are selected for your texture and chemical history."
    ]
  },
  {
    topic: "Divine",
    title: "Personal Year Number 2026: What to Focus On",
    excerpt: "A trending numerology framework for planning relationships, money and career timing.",
    image: "media/dipas-divine/numerology-chart-concept.png",
    body: [
      "Personal year numbers are being widely used for practical planning, not just spiritual curiosity. They help you decide whether to push expansion or stabilize current systems.",
      "When your cycle supports growth, move on launches, networking, and visibility. When it favors closure, focus on cleanup, debt reduction, and emotional release.",
      "Pairing numerology insight with Reiki makes execution easier because mental noise is lower and action priorities become clearer."
    ]
  },
  {
    topic: "Divine",
    title: "Reiki for Burnout Recovery Before It Gets Severe",
    excerpt: "Why early intervention sessions are becoming popular among professionals.",
    image: "media/dipas-divine/reiki-energy-transfer.png",
    body: [
      "Many clients now book Reiki before burnout peaks. Early sessions help regulate overload signals such as irritability, shallow sleep, and constant mental fatigue.",
      "A focused reset can calm nervous system pressure and improve attention span within a short window. This is why it is trending among founders and high-output professionals.",
      "Use post-session routines like hydration, reduced stimulants, and quiet evenings for 24 hours to lock in the calming response."
    ]
  },
  {
    topic: "Tarot",
    title: "No-Contact Tarot Questions That Give Clear Answers",
    excerpt: "A practical way to ask relationship questions without emotional confusion.",
    image: "media/dipas-tarot-oracle/tarot-reader-1.jpg",
    body: [
      "The best no-contact readings avoid yes or no dependency. Ask about communication blocks, emotional readiness, and timing windows instead.",
      "Framing your questions around actionable outcomes gives better clarity. You can then set one boundary, one timeline, and one follow-up decision.",
      "This method reduces repetitive overthinking and turns tarot into a planning tool rather than emotional looping."
    ]
  },
  {
    topic: "Tarot",
    title: "Career Shift Tarot Spread for 2026 Job Moves",
    excerpt: "A structured spread to compare opportunities, risk, and next action.",
    image: "media/dipas-tarot-oracle/tarot-spread-2.jpg",
    body: [
      "Career switch readings are trending because many professionals are evaluating growth, income, and flexibility together. A structured spread can map this clearly.",
      "Use positions for current block, new opportunity quality, hidden challenge, and timing trigger. This keeps interpretation practical and measurable.",
      "After reading, convert insights into deadlines and application targets so intuition supports execution."
    ]
  },
  {
    topic: "Tarot",
    title: "Full Moon Reading Rituals That Stay Practical",
    excerpt: "How to use moon-cycle tarot without getting lost in vague interpretation.",
    image: "media/dipas-tarot-oracle/moon-reading.jpg",
    body: [
      "Full moon pulls are trending for release work and decision resets. The best approach is simple: one release card, one focus card, one action card.",
      "Write one sentence per card and one measurable action for the next seven days. This avoids over-analysis and keeps the ritual grounded.",
      "Repeat monthly and track patterns. Consistent notes improve interpretation quality and confidence over time."
    ]
  },
  {
    topic: "Crystals",
    title: "Abundance Desk Setup: Citrine, Pyrite and Quartz",
    excerpt: "A high-demand crystal combination for business focus and momentum.",
    image: "media/crystal-vault/net-crystal-9.jpg",
    body: [
      "Citrine plus pyrite is trending in prosperity setups for entrepreneurs and freelancers. Clear quartz is often added as an amplifier for intention work.",
      "Place the trio on your work desk where daily visibility is high. Pair with weekly goal-writing for stronger consistency.",
      "Keep maintenance simple: cleanse periodically and reset your intention statements every week."
    ]
  },
  {
    topic: "Crystals",
    title: "Rose Quartz Reset Routine for Emotional Stability",
    excerpt: "A modern self-regulation ritual using rose quartz and short breathwork.",
    image: "media/crystal-vault/rose-quartz-product-shot.png",
    body: [
      "Rose quartz routines are popular for emotional grounding and self-worth support. The trend focuses on short, repeatable rituals rather than long ceremonies.",
      "Use two to three minutes of breathwork while holding the stone, then journal one boundary and one gratitude point.",
      "This daily structure helps shift reactivity, especially during high-stress periods or relationship transition phases."
    ]
  }
];

const GOAL_MAP = {
  bridal: {
    title: "Recommended: Beauty Bridal Stack",
    text: "Start with bridal consultation, then lock skin prep and event-day makeup timeline.",
    target: "#beauty",
    cta: "View Bridal Packages"
  },
  skin: {
    title: "Recommended: Skin + Hair Repair Path",
    text: "Use a 3-4 week sequence with skin reset and keratin support for visible texture improvement.",
    target: "#beauty",
    cta: "See Skin and Hair Services"
  },
  stress: {
    title: "Recommended: Numerology + Reiki",
    text: "Begin with rapid clarity and continue with deep energy reset if overload is persistent.",
    target: "#divine",
    cta: "See Healing Sessions"
  },
  clarity: {
    title: "Recommended: Tarot Decision Spread",
    text: "Use career or relationship spread for practical next steps and timeline clarity.",
    target: "#tarot",
    cta: "See Tarot Services"
  },
  prosperity: {
    title: "Recommended: Abundance Crystal Bundle",
    text: "Citrine, pyrite and clear quartz are commonly chosen for business confidence and focus.",
    target: "#crystals",
    cta: "Shop Abundance Crystals"
  }
};

const els = {
  menuToggle: document.getElementById("menuToggle"),
  mainNav: document.getElementById("mainNav"),
  scrollProgress: document.getElementById("scrollProgress"),
  slotCountdown: document.getElementById("slotCountdown"),
  yearNow: document.getElementById("yearNow"),
  beautyServiceGrid: document.getElementById("beautyServiceGrid"),
  divineServiceGrid: document.getElementById("divineServiceGrid"),
  tarotServiceGrid: document.getElementById("tarotServiceGrid"),
  crystalGrid: document.getElementById("crystalGrid"),
  crystalFilters: document.getElementById("crystalFilters"),
  goalChips: document.getElementById("goalChips"),
  goalTitle: document.getElementById("goalTitle"),
  goalText: document.getElementById("goalText"),
  goalCta: document.getElementById("goalCta"),
  heroStageStack: document.getElementById("heroStageStack"),
  testimonialBox: document.getElementById("testimonialBox"),
  testimonialContent: document.getElementById("testimonialContent"),
  testimonialControls: document.getElementById("testimonialControls"),
  blogGrid: document.getElementById("blogGrid"),
  blogReaderOverlay: document.getElementById("blogReaderOverlay"),
  blogReader: document.getElementById("blogReader"),
  closeBlogReader: document.getElementById("closeBlogReader"),
  blogReaderImage: document.getElementById("blogReaderImage"),
  blogReaderTag: document.getElementById("blogReaderTag"),
  blogReaderTitle: document.getElementById("blogReaderTitle"),
  blogReaderExcerpt: document.getElementById("blogReaderExcerpt"),
  blogReaderBody: document.getElementById("blogReaderBody"),
  leadForm: document.getElementById("leadForm"),
  leadName: document.getElementById("leadName"),
  leadPhone: document.getElementById("leadPhone"),
  leadService: document.getElementById("leadService"),
  leadMessage: document.getElementById("leadMessage")
};

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const state = {
  blogReaderOpen: false
};

const formatINR = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(value);

function buildWhatsAppLink(message) {
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
}

function createServiceCard(item) {
  const card = document.createElement("article");
  card.className = "service-card reveal";
  card.setAttribute("data-tilt", "");
  card.innerHTML = `
    <img src="${item.image}" alt="${item.title}" loading="lazy" />
    <div class="service-info">
      <h3>${item.title}</h3>
      <div class="service-meta">
        <span class="badge time">${item.duration}</span>
        <strong class="price">${formatINR(item.price)}</strong>
      </div>
      <p>${item.description}</p>
      <a class="btn btn-ghost" href="${buildWhatsAppLink(`I want to book: ${item.title}`)}" target="_blank" rel="noopener noreferrer">${item.cta}</a>
    </div>
  `;
  return card;
}

function renderServiceGrid(container, data) {
  if (!container) return;
  container.innerHTML = "";
  data.forEach((item) => {
    container.appendChild(createServiceCard(item));
  });
}

function createCrystalCard(item) {
  const tags = item.tags.map((tag) => `<span class="product-tag">${tag}</span>`).join("");
  const card = document.createElement("article");
  card.className = "product-card reveal";
  card.setAttribute("data-tilt", "");
  card.innerHTML = `
    <img src="${item.image}" alt="${item.name}" loading="lazy" />
    <div class="product-info">
      <h3>${item.name}</h3>
      <strong class="price">${formatINR(item.price)}</strong>
      <p>${item.description}</p>
      <div class="product-tags">${tags}</div>
      <a class="btn btn-primary" href="${buildWhatsAppLink(`I want to order crystal: ${item.name} (${formatINR(item.price)})`)}" target="_blank" rel="noopener noreferrer">Order on WhatsApp</a>
    </div>
  `;
  return card;
}

function renderCrystals(filter = "all") {
  if (!els.crystalGrid) return;
  const items =
    filter === "all"
      ? CRYSTALS
      : CRYSTALS.filter((item) => item.tags.includes(filter));

  els.crystalGrid.innerHTML = "";
  items.forEach((item, index) => {
    const card = createCrystalCard(item);
    card.style.setProperty("--reveal-delay", `${Math.min(index * 50, 250)}ms`);
    els.crystalGrid.appendChild(card);
  });
}

function createBlogCard(blog, index) {
  const card = document.createElement("article");
  card.className = "blog-card reveal";
  card.setAttribute("data-blog-index", String(index));
  card.innerHTML = `
    <img src="${blog.image}" alt="${blog.title}" loading="lazy" />
    <div class="blog-info">
      <span class="blog-chip">${blog.topic}</span>
      <h3>${blog.title}</h3>
      <p>${blog.excerpt}</p>
      <button type="button" class="btn btn-ghost" data-blog-index="${index}">Read in Detail</button>
    </div>
  `;
  return card;
}

function renderBlogs() {
  if (!els.blogGrid) return;
  els.blogGrid.innerHTML = "";
  BLOGS.forEach((blog, index) => {
    const card = createBlogCard(blog, index);
    card.style.setProperty("--reveal-delay", `${Math.min(index * 45, 260)}ms`);
    els.blogGrid.appendChild(card);
  });
}

function closeBlogReader() {
  if (!els.blogReaderOverlay || !state.blogReaderOpen) return;
  state.blogReaderOpen = false;
  els.blogReaderOverlay.classList.remove("open");
  window.setTimeout(() => {
    if (!state.blogReaderOpen) {
      els.blogReaderOverlay.hidden = true;
    }
  }, 220);
}

function openBlogReader(index) {
  if (!els.blogReaderOverlay || !els.blogReaderBody || !els.blogReaderImage) return;
  const blog = BLOGS[index];
  if (!blog) return;

  els.blogReaderImage.src = blog.image;
  els.blogReaderImage.alt = blog.title;
  if (els.blogReaderTag) els.blogReaderTag.textContent = `${blog.topic} Trend`;
  if (els.blogReaderTitle) els.blogReaderTitle.textContent = blog.title;
  if (els.blogReaderExcerpt) els.blogReaderExcerpt.textContent = blog.excerpt;

  els.blogReaderBody.innerHTML = "";
  blog.body.forEach((line) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = line;
    els.blogReaderBody.appendChild(paragraph);
  });

  els.blogReaderOverlay.hidden = false;
  requestAnimationFrame(() => {
    els.blogReaderOverlay.classList.add("open");
  });
  state.blogReaderOpen = true;

  if (els.blogReader) {
    els.blogReader.scrollTop = 0;
  }
}

function initBlogReader() {
  if (!els.blogGrid) return;

  els.blogGrid.addEventListener("click", (event) => {
    const btn = event.target.closest("[data-blog-index]");
    if (!btn) return;
    const index = Number(btn.getAttribute("data-blog-index"));
    if (Number.isNaN(index)) return;
    openBlogReader(index);
  });

  if (els.closeBlogReader) {
    els.closeBlogReader.addEventListener("click", closeBlogReader);
  }

  if (els.blogReaderOverlay) {
    els.blogReaderOverlay.addEventListener("click", (event) => {
      if (event.target === els.blogReaderOverlay) {
        closeBlogReader();
      }
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeBlogReader();
    }
  });
}

function setGoal(goalKey) {
  const goal = GOAL_MAP[goalKey];
  if (!goal) return;

  if (els.goalTitle) els.goalTitle.textContent = goal.title;
  if (els.goalText) els.goalText.textContent = goal.text;
  if (els.goalCta) {
    els.goalCta.textContent = goal.cta;
    els.goalCta.setAttribute("href", goal.target);
    els.goalCta.setAttribute("data-scroll", goal.target);
  }

  document.querySelectorAll("[data-goal]").forEach((button) => {
    button.classList.toggle("is-active", button.getAttribute("data-goal") === goalKey);
  });
}

function initGoalSelectors() {
  const goalButtons = document.querySelectorAll("[data-goal]");
  goalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.getAttribute("data-goal");
      setGoal(key);
    });
  });
}

function initCrystalFilters() {
  if (!els.crystalFilters) return;
  els.crystalFilters.addEventListener("click", (event) => {
    const btn = event.target.closest(".filter-btn");
    if (!btn) return;
    const filter = btn.getAttribute("data-filter") || "all";

    els.crystalFilters.querySelectorAll(".filter-btn").forEach((chip) => {
      const active = chip === btn;
      chip.classList.toggle("is-active", active);
      chip.setAttribute("aria-selected", active ? "true" : "false");
    });

    renderCrystals(filter);
    initRevealObserver();
    initTiltCards();
  });
}

function initSmoothScroll() {
  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-scroll]");
    if (!trigger) return;
    const targetSelector = trigger.getAttribute("data-scroll");
    if (!targetSelector || !targetSelector.startsWith("#")) return;

    const target = document.querySelector(targetSelector);
    if (!target) return;

    event.preventDefault();

    if (els.mainNav && els.mainNav.classList.contains("is-open")) {
      els.mainNav.classList.remove("is-open");
      document.body.classList.remove("menu-open");
      if (els.menuToggle) {
        els.menuToggle.setAttribute("aria-expanded", "false");
      }
    }

    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function initMenuToggle() {
  if (!els.menuToggle || !els.mainNav) return;
  els.menuToggle.addEventListener("click", () => {
    const isOpen = els.mainNav.classList.toggle("is-open");
    els.menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    document.body.classList.toggle("menu-open", isOpen);
  });

  document.addEventListener("click", (event) => {
    const clickedInsideNav = event.target.closest("#mainNav") || event.target.closest("#menuToggle");
    if (!clickedInsideNav && els.mainNav.classList.contains("is-open")) {
      els.mainNav.classList.remove("is-open");
      els.menuToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    }
  });
}

function initScrollProgress() {
  const header = document.querySelector(".site-header");
  const navLinks = Array.from(document.querySelectorAll(".main-nav a"));
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const update = () => {
    const scrollTop = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const progress = max > 0 ? (scrollTop / max) * 100 : 0;
    if (els.scrollProgress) {
      els.scrollProgress.style.width = `${Math.min(progress, 100)}%`;
    }

    if (header) {
      header.classList.toggle("is-scrolled", scrollTop > 12);
    }

    let activeId = "";
    sections.forEach((section) => {
      const top = section.offsetTop - 130;
      const bottom = top + section.offsetHeight;
      if (scrollTop >= top && scrollTop < bottom) {
        activeId = `#${section.id}`;
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === activeId);
    });
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
}

function initCountdown() {
  if (!els.slotCountdown) return;

  const updateCountdown = () => {
    const now = new Date();
    const closing = new Date(now);
    closing.setHours(CONFIG.slotCloseHour, 0, 0, 0);

    if (now >= closing) {
      closing.setDate(closing.getDate() + 1);
    }

    const diff = closing.getTime() - now.getTime();
    const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, "0");
    const minutes = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
    const seconds = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, "0");

    els.slotCountdown.textContent = `${hours}h ${minutes}m ${seconds}s`;
  };

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

function initHeroStageRotation() {
  if (!els.heroStageStack || reduceMotion) return;
  const cards = Array.from(els.heroStageStack.querySelectorAll(".stage-card"));
  if (cards.length < 2) return;

  let index = 0;
  setInterval(() => {
    cards[index].classList.remove("is-active");
    index = (index + 1) % cards.length;
    cards[index].classList.add("is-active");
  }, 3300);
}

function initTestimonials() {
  if (!els.testimonialContent || !els.testimonialControls || !els.testimonialBox) return;

  let pointer = 0;
  let pausedByHover = false;
  let pausedBySelect = false;
  let timerId = null;

  const render = () => {
    const item = TESTIMONIALS[pointer];
    els.testimonialContent.innerHTML = `
      <blockquote>“${item.quote}”</blockquote>
      <p class="author">${item.author}</p>
    `;
    els.testimonialControls.querySelectorAll(".testimonial-dot").forEach((dot, index) => {
      dot.classList.toggle("is-active", index === pointer);
      dot.setAttribute("aria-pressed", index === pointer ? "true" : "false");
    });
  };

  const stopAuto = () => {
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }
  };

  const startAuto = () => {
    if (reduceMotion || pausedBySelect) return;
    stopAuto();
    timerId = setInterval(() => {
      if (pausedByHover || pausedBySelect) return;
      pointer = (pointer + 1) % TESTIMONIALS.length;
      render();
    }, 1000);
  };

  els.testimonialControls.innerHTML = "";
  TESTIMONIALS.forEach((item, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "testimonial-dot";
    dot.setAttribute("aria-label", `Select review ${index + 1}`);
    dot.addEventListener("click", () => {
      pointer = index;
      pausedBySelect = true;
      stopAuto();
      render();
    });
    els.testimonialControls.appendChild(dot);
  });

  els.testimonialBox.addEventListener("pointerenter", () => {
    pausedByHover = true;
  });
  els.testimonialBox.addEventListener("pointerleave", () => {
    pausedByHover = false;
  });

  render();
  startAuto();
}

function initLeadForm() {
  if (!els.leadForm) return;

  els.leadForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = (els.leadName?.value || "").trim();
    const phone = (els.leadPhone?.value || "").trim();
    const service = els.leadService?.value || "";

    if (!name || !phone || !service) {
      if (els.leadMessage) {
        els.leadMessage.textContent = "Please fill all fields before sending.";
      }
      return;
    }

    const message = [
      "New Website Inquiry",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Service: ${service}`,
      "Source: Quick Inquiry Form"
    ].join("\n");

    if (els.leadMessage) {
      els.leadMessage.textContent = "Opening WhatsApp with your details...";
    }

    window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");
    els.leadForm.reset();
  });
}

function initRevealObserver() {
  const revealNodes = document.querySelectorAll(".reveal");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealNodes.forEach((node) => node.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -12% 0px",
      threshold: 0.12
    }
  );

  revealNodes.forEach((node) => observer.observe(node));
}

function initParallaxLayers() {
  if (reduceMotion) return;
  const layers = Array.from(document.querySelectorAll(".bg-layer[data-depth]"));
  if (!layers.length) return;

  let rafId = 0;

  const updateLayers = (clientX, clientY) => {
    const xNorm = (clientX / window.innerWidth) * 2 - 1;
    const yNorm = (clientY / window.innerHeight) * 2 - 1;

    layers.forEach((layer) => {
      const depth = Number(layer.getAttribute("data-depth")) || 0;
      const tx = xNorm * depth * 26;
      const ty = yNorm * depth * 20;
      layer.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
    });
  };

  window.addEventListener(
    "pointermove",
    (event) => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => updateLayers(event.clientX, event.clientY));
    },
    { passive: true }
  );
}

function initTiltCards() {
  if (reduceMotion) return;

  const tiltNodes = document.querySelectorAll("[data-tilt]");

  tiltNodes.forEach((node) => {
    if (node.dataset.tiltReady === "true") return;
    node.dataset.tiltReady = "true";

    const maxTilt = Number(node.getAttribute("data-tilt-max")) || 8;

    const onMove = (event) => {
      const rect = node.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      const tiltX = (0.5 - y) * maxTilt;
      const tiltY = (x - 0.5) * maxTilt;
      node.style.transform = `perspective(1300px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-2px)`;
    };

    const reset = () => {
      node.style.transform = "";
    };

    node.addEventListener("pointermove", onMove);
    node.addEventListener("pointerleave", reset);
    node.addEventListener("pointercancel", reset);
  });
}

function initFaqAccordion() {
  const details = document.querySelectorAll(".faq-list details");
  details.forEach((node) => {
    node.addEventListener("toggle", () => {
      if (!node.open) return;
      details.forEach((item) => {
        if (item !== node) item.open = false;
      });
    });
  });
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js").catch(() => {
      // Non-blocking in static hosting if service worker fails.
    });
  });
}

function boot() {
  renderServiceGrid(els.beautyServiceGrid, BEAUTY_SERVICES);
  renderServiceGrid(els.divineServiceGrid, DIVINE_SERVICES);
  renderServiceGrid(els.tarotServiceGrid, TAROT_SERVICES);
  renderCrystals("all");
  renderBlogs();

  if (els.yearNow) {
    els.yearNow.textContent = String(new Date().getFullYear());
  }

  setGoal("bridal");
  initGoalSelectors();
  initCrystalFilters();
  initSmoothScroll();
  initMenuToggle();
  initScrollProgress();
  initCountdown();
  initHeroStageRotation();
  initTestimonials();
  initBlogReader();
  initLeadForm();
  initRevealObserver();
  initParallaxLayers();
  initTiltCards();
  initFaqAccordion();
  registerServiceWorker();
}

boot();
