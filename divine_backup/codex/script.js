const CONFIG={
  whatsappNumber:"918669214433",
  upiId:"yourupi@bank",
  upiName:"Dipa Signature Realms",
  sheetsEndpoints:{orders:"",reviews:"",visits:""}
};

const WA_ICON_HTML='<img src="assets/icons/whatsapp-special.svg" alt="" aria-hidden="true" class="wa-icon" />';

const BEAUTY_PACKAGES=[
  {title:"Royal Maharashtrian Bridal Complete",duration:"4.5 Hours",price:22000,oldPrice:32000,points:["Makeup + hair + draping","HD finish + setting"]},
  {title:"Marwari Regal Bridal Package",duration:"4.5 Hours",price:24000,oldPrice:34000,points:["Rich contour bridal look","Jewelry and drape balance"]},
  {title:"Rajasthani Heritage Bridal Package",duration:"4 Hours",price:23000,oldPrice:33000,points:["Traditional tone mapping","Camera-ready finish"]},
  {title:"Bridal Makeup Only",duration:"2.5 Hours",price:14000,oldPrice:20000,points:["Premium base prep","Long-wear setting"]},
  {title:"Sider Makeup (Family Event)",duration:"90 Minutes",price:4500,oldPrice:6500,points:["Elegant soft glam","Sweat-resistant finish"]},
  {title:"Normal / Party Makeup",duration:"60 Minutes",price:2500,oldPrice:3900,points:["Quick glam touch-up","Balanced skin finish"]},
  {title:"Theme-Based HD Reception Glam",duration:"2 Hours",price:6000,oldPrice:8500,points:["Theme color harmony","Premium lashes + lock"]}
];

const TREATMENTS=[
  {title:"Skin Glow Reset Therapy",duration:"60 Minutes",price:2800,points:["Deep cleanse + hydration","Post-session glow support"]},
  {title:"Acne Recovery Protocol",duration:"75 Minutes",price:3200,points:["Inflammation calming","Barrier-safe correction"]},
  {title:"Pigmentation Corrective Session",duration:"90 Minutes",price:3900,points:["Targeted brightening","Tone balancing"]},
  {title:"Hair Spa Repair Ritual",duration:"60 Minutes",price:2500,points:["Dryness recovery","Scalp nourishment"]},
  {title:"Keratin Smoothening Plan",duration:"120 Minutes",price:6500,points:["Frizz reduction","Heat-safe finish"]},
  {title:"Scalp Detox + Growth Boost",duration:"75 Minutes",price:3600,points:["Scalp exfoliation","Root stimulation"]},
  {title:"Bridal Skin Prep (4 Sittings)",duration:"Program",price:12000,points:["Customized pre-wedding plan","Weekly checkpoints"]},
  {title:"Hair Fall Recovery (3 Sessions)",duration:"Program",price:8500,points:["Scalp balancing","Breakage reduction"]}
];

const DIVINE_PACKAGES=[
  {title:"Rapid Clarity Reading",duration:"30 Minutes",price:999,oldPrice:1499,points:["Current-energy decode","Quick remedy"]},
  {title:"Numerology + Reiki Alignment",duration:"60 Minutes",price:1999,oldPrice:2999,points:["Life path analysis","Reiki balancing"]},
  {title:"Deep Energy Reset",duration:"90 Minutes",price:2999,oldPrice:4299,points:["Chakra scan","Aura cleansing"]},
  {title:"Name Vibration Correction",duration:"45 Minutes",price:1799,oldPrice:2499,points:["Name frequency diagnosis","Correction guidance"]},
  {title:"Monthly Destiny Roadmap",duration:"120 Minutes",price:3999,oldPrice:5499,points:["Strategic calendar","Career + relationship map"]}
];

const TAROT_PACKAGES=[
  {title:"Quick Answer Tarot Spread",duration:"30 Minutes",price:899,oldPrice:1299,points:["Single-question deep dive","Action-based interpretation"]},
  {title:"Love & Relationship Tarot",duration:"60 Minutes",price:1799,oldPrice:2499,points:["Compatibility insight","Communication blocks"]},
  {title:"Career Direction Reading",duration:"60 Minutes",price:1699,oldPrice:2399,points:["Career path options","Opportunity timing"]},
  {title:"Full Life Compass Session",duration:"90 Minutes",price:2599,oldPrice:3599,points:["Love + career + finance","Month-wise recommendation"]},
  {title:"Monthly Tarot Mentorship",duration:"4 x 30 Minutes",price:2999,oldPrice:4199,points:["Weekly guidance","Priority card focus"]}
];

const BEAUTY_PORTFOLIO=[
  {image:"media/dipas-beauty-treats/maharashtrian-bridal-portrait.png",label:"Maharashtrian Bridal Portrait"},
  {image:"media/dipas-beauty-treats/rajasthani-bridal-regal.png",label:"Rajasthani Bridal Regal"},
  {image:"media/dipas-beauty-treats/high-fashion-salon-look.png",label:"High Fashion Salon Look"},
  {image:"media/dipas-beauty-treats/luxury-spa-skin-focus.png",label:"Luxury Spa Skin Focus"},
  {image:"media/dipas-beauty-treats/portfolio-2.jpg",label:"HD Reception Finish"},
  {image:"media/dipas-beauty-treats/portfolio-6.jpg",label:"Party Makeup Signature"}
];

const TAROT_GALLERY=[
  "media/dipas-tarot-oracle/tarot-reading-close-up.png",
  "media/dipas-tarot-oracle/tarot-spread-1.jpg",
  "media/dipas-tarot-oracle/tarot-spread-2.jpg",
  "media/dipas-tarot-oracle/tarot-reader-1.jpg",
  "media/dipas-tarot-oracle/tarot-reader-2.jpg",
  "media/dipas-tarot-oracle/candle-ritual.jpg",
  "media/dipas-tarot-oracle/moon-reading.jpg"
];

const PRODUCTS=[
  {id:"rose-quartz-heart",name:"Rose Quartz Heart",price:1499,oldPrice:2199,stock:6,description:"Heart-energy crystal for self-love and emotional healing.",image:"media/crystal-vault/rose-quartz-product-shot.png"},
  {id:"amethyst-cluster",name:"Amethyst Cluster",price:1899,oldPrice:2699,stock:7,description:"Calm-focused stone for clarity, sleep balance, and tarot intuition.",image:"media/crystal-vault/amethyst-geode-product-shot.png"},
  {id:"citrine-point",name:"Citrine Point",price:1699,oldPrice:2499,stock:5,description:"Abundance crystal for confidence, money flow, and business intent.",image:"media/crystal-vault/citrine.jpg"},
  {id:"clear-quartz-tower",name:"Clear Quartz Tower",price:1299,oldPrice:1899,stock:8,description:"Energy amplifier for affirmations, manifestation, and focus.",image:"media/crystal-vault/clear-quartz.jpg"},
  {id:"black-tourmaline-shield",name:"Black Tourmaline Shield",price:1599,oldPrice:2299,stock:6,description:"Grounding protection stone for aura safety and stress release.",image:"media/crystal-vault/black-tourmaline.jpg"},
  {id:"selenite-wand-set",name:"Selenite Wand Set",price:1199,oldPrice:1699,stock:8,description:"Cleansing wand set for tarot deck purification and energy clearing.",image:"media/crystal-vault/selenite.jpg"},
  {id:"pyrite-cube",name:"Pyrite Prosperity Cube",price:1399,oldPrice:1999,stock:7,description:"Prosperity support stone for career growth and business numerology.",image:"media/crystal-vault/pyrite.jpg"},
  {id:"lapis-clarity-stone",name:"Lapis Clarity Stone",price:1499,oldPrice:2099,stock:6,description:"Inner wisdom crystal for communication, tarot and self-expression.",image:"media/crystal-vault/lapis.jpg"},

  {id:"celestial-quartz-prism",name:"Celestial Quartz Prism",price:1899,oldPrice:2599,stock:5,description:"Internet collection piece. Ideal with numerology intention rituals.",image:"media/crystal-vault/net-crystal-1.jpg"},
  {id:"moon-oracle-stone",name:"Moon Oracle Stone",price:1799,oldPrice:2499,stock:5,description:"Internet collection piece for moon tarot, dream clarity, and calm.",image:"media/crystal-vault/net-crystal-7.jpg"},
  {id:"reiki-flow-fluorite",name:"Reiki Flow Fluorite",price:1999,oldPrice:2799,stock:5,description:"Internet collection piece for Reiki sessions and chakra alignment.",image:"media/crystal-vault/net-crystal-8.jpg"},
  {id:"fortune-citrine-shard",name:"Fortune Citrine Shard",price:1699,oldPrice:2399,stock:6,description:"Internet collection piece for wealth intentions and leadership focus.",image:"media/crystal-vault/net-crystal-9.jpg"},
  {id:"tarot-focus-crystal",name:"Tarot Focus Crystal",price:1599,oldPrice:2299,stock:6,description:"Internet collection piece to sharpen tarot spreads and interpretation.",image:"media/crystal-vault/net-crystal-10.jpg"},
  {id:"numerology-grid-quartz",name:"Numerology Grid Quartz",price:2099,oldPrice:2999,stock:4,description:"Internet collection piece for personal year planning and grid work.",image:"media/crystal-vault/net-crystal-11.jpg"},
  {id:"aura-reset-stone",name:"Aura Reset Stone",price:1499,oldPrice:2199,stock:6,description:"Internet collection piece for aura cleansing and emotional release.",image:"media/crystal-vault/net-crystal-12.jpg"},
  {id:"oracle-vision-crystal",name:"Oracle Vision Crystal",price:2199,oldPrice:3099,stock:4,description:"Internet collection piece for deep intuitive readings and meditation.",image:"media/crystal-vault/net-crystal-13.jpg"},
  {id:"chakra-balance-gem",name:"Chakra Balance Gem",price:1999,oldPrice:2799,stock:5,description:"Internet collection piece for chakra balancing and energy restoration.",image:"media/crystal-vault/net-crystal-14.jpg"},
  {id:"sunrise-confidence-stone",name:"Sunrise Confidence Stone",price:1399,oldPrice:1999,stock:7,description:"Internet collection piece for motivation, positivity, and action.",image:"media/crystal-vault/net-crystal-15.jpg"}
];

const BLOGS=[
  {section:"Beauty",title:"Pre-Bridal Skin Prep: 30 Day Checklist",excerpt:"A simple timeline for glow-ready skin before your big events.",image:"media/dipas-beauty-treats/luxury-spa-skin-focus.png",body:["Start with a consultation to understand current skin condition, active concerns, and event timeline. A personalized plan always performs better than random product trials.","In the first two weeks, focus on barrier repair, hydration, and calming steps. This stage improves makeup finish and reduces redness, uneven texture, and sudden breakouts.","In the last 10 days, avoid aggressive experiments and stay with tested routines. Add sleep, water, and clinic-recommended facials to keep skin calm and camera-ready."]},
  {section:"Beauty",title:"Party Makeup That Lasts in Heat",excerpt:"Artist-backed steps for smooth base, eye hold, and transfer control.",image:"media/dipas-beauty-treats/high-fashion-salon-look.png",body:["Long-lasting glam starts with skin prep: cleanse, light hydration, and oil-control where needed. The right prep makes foundation hold longer without cracking.","Use thin, layered base application instead of a thick single coat. Build coverage in targeted zones and lock each layer with setting techniques suitable for humid weather.","Finish with transfer-resistant products on high-friction points like around nose, chin, and jawline. A quick touch-up kit keeps the look fresh through long events."]},
  {section:"Beauty",title:"Hair Repair Plan for Dry and Frizzy Ends",excerpt:"Weekly in-salon + at-home routine for softer, stronger hair.",image:"media/dipas-beauty-treats/hair-treatment-2.jpg",body:["Repair begins with scalp and strand assessment. Knowing whether damage is from heat, color, or dryness helps choose the right treatment path.","Combine salon-level hydration or bond-support services with a simple weekly home routine. Consistency in wash cycle, mask timing, and protection is what creates visible change.","Limit direct heat exposure and apply protective serums before styling. Within a few sessions, texture improves and hair becomes easier to manage with less breakage."]},
  {section:"Beauty",title:"Bridal Base Matching Without Flashback",excerpt:"How professionals avoid grey cast and keep skin tone true in photos.",image:"media/dipas-beauty-treats/maharashtrian-bridal-portrait.png",body:["Flashback appears when product layers are too reflective for event lighting and camera flash. Correct base starts with skin prep and product choices made for real photography conditions.","Artists balance undertone, depth, and texture before full coverage is applied. This prevents mask-like finish and keeps neck-face harmony in natural and indoor light.","Trial photos under similar lighting help lock your final shade and powder strategy before the event day. That is the safest way to avoid surprises."]},
  {section:"Beauty",title:"Salon Hair Gloss Routine for Wedding Month",excerpt:"A simple 4-week sequence for shine, smoothness, and low-frizz styling.",image:"media/dipas-beauty-treats/hair-treatment-3.jpg",body:["Glossy bridal hair needs moisture, cuticle support, and heat-safe products. A planned four-week routine gives better results than a last-minute treatment.","Combine one salon repair session with disciplined home care: gentle cleansing, weekly mask, and serum before every heat exposure.","Book your final gloss touchup 2-3 days before the function so hair looks fresh, soft, and controlled without feeling heavy."]},
  {section:"Divine",title:"Numerology + Reiki: What Happens in a Session",excerpt:"Understand the flow from number reading to energy balancing.",image:"media/dipas-divine/numerology-chart-concept.png",body:["A session starts with numerology mapping to identify core patterns in timing, personality, and recurring life themes. This gives a practical direction before energy work.","Reiki is then used to calm emotional overload and release energetic heaviness. Clients usually report mental quietness, improved clarity, and better decision confidence.","You receive simple post-session guidance to maintain stability in daily life. This blend of insight and energy reset helps convert awareness into real action."]},
  {section:"Divine",title:"Quick Reiki Reset for Mental Overload",excerpt:"When to book and how to prepare for better emotional relief.",image:"media/dipas-divine/reiki-energy-transfer.png",body:["If you are feeling mentally crowded, emotionally reactive, or physically drained, a focused Reiki reset can help you settle your system quickly.","Before the session, reduce caffeine, hydrate well, and keep your schedule lighter for a few hours after. This allows your body to absorb the process better.","After the session, brief grounding steps like deep breathing, gentle movement, and early sleep help extend the calming effect into your next day."]},
  {section:"Divine",title:"Chakra Balance Basics for Daily Life",excerpt:"Foundational signs of imbalance and gentle ways to recenter.",image:"media/dipas-divine/chakras-meditation-art.png",body:["Chakra imbalance is often experienced as emotional swings, low motivation, or repeated stress loops. Awareness of your daily patterns is the first correction step.","Start with simple balancing rituals: breathwork, mindful pauses, hydration, and intentional rest. Small consistent shifts are more powerful than occasional intense effort.","Regular energy sessions can support deeper realignment when daily self-care is not enough. A guided plan helps you stay emotionally steady and mentally focused."]},
  {section:"Divine",title:"Personal Year Numbers: Quick Decision Guide",excerpt:"Use your personal year cycle for timing career and relationship moves.",image:"media/dipas-divine/numerology-2.jpg",body:["Personal year numerology gives a practical rhythm for planning effort and expectations. Some years reward expansion, while others are better for consolidation.","Knowing your cycle helps reduce rushed decisions and emotional confusion. It creates better alignment between action speed and life response.","When paired with Reiki balancing, this timing approach improves clarity and stamina so decisions feel lighter and more sustainable."]},
  {section:"Divine",title:"Aura Cleansing Signs You Should Not Ignore",excerpt:"Recognize low-energy patterns and when to schedule support sessions.",image:"media/dipas-divine/aura-cleansing.jpg",body:["Persistent heaviness, irritability, or mental fog can signal energetic overload. Awareness of these signs helps you intervene before burnout grows.","Aura-cleansing sessions focus on releasing accumulated stress signatures and rebuilding emotional steadiness.","Follow-up grounding practices, hydration, and sleep discipline help maintain results between sessions."]},
  {section:"Tarot",title:"Career Decision Tarot Spread Explained",excerpt:"A clear framework to compare options and reduce confusion.",image:"media/dipas-tarot-oracle/tarot-spread-2.jpg",body:["Career readings work best when you bring clear choices to compare. Structured questions create practical answers instead of vague predictions.","A focused spread can highlight opportunity quality, hidden pressure points, and likely outcomes for each path. This helps you choose based on both logic and intuition.","Use the reading as a decision aid, then pair it with action steps and timelines. The strongest results come when insight is followed by execution."]},
  {section:"Tarot",title:"Relationship Reading: Questions That Help",excerpt:"Ask focused questions to get practical, useful guidance.",image:"media/dipas-tarot-oracle/tarot-reader-1.jpg",body:["The quality of your question defines the quality of your reading. Ask about communication patterns, emotional compatibility, and practical next steps.","Instead of waiting for yes/no outcomes, use tarot to understand timing, boundaries, and where energy is blocked. This gives a healthier path forward.","Relationship readings are most useful when approached with openness and honesty. The goal is clarity, not fear, so you can act with confidence."]},
  {section:"Tarot",title:"Monthly Tarot Planning Ritual",excerpt:"Use card pulls to organize goals, timing, and personal energy.",image:"media/dipas-tarot-oracle/tarot-reading-close-up.png",body:["A monthly tarot ritual helps you start each cycle with intention. One spread can show theme, opportunities, and areas needing caution.","Break your month into weekly action blocks and align them with your card guidance. This builds momentum while keeping plans flexible and grounded.","Track outcomes at month end to identify repeating patterns. Over time, this creates sharper intuition and stronger decision discipline."]},
  {section:"Tarot",title:"Love Reading Boundaries and Timing",excerpt:"Understand emotional pace, healthy boundaries, and next best actions.",image:"media/dipas-tarot-oracle/moon-reading.jpg",body:["Love readings are strongest when you ask about dynamics, boundaries, and timing instead of absolute outcomes.","Cards often reveal patterns around communication gaps, trust, and pace mismatch. Knowing this early helps reduce repeated pain loops.","Use guidance to create clear actions: one conversation, one boundary, one timeline. Small practical shifts create real relational progress."]},
  {section:"Tarot",title:"3-Card Daily Pull for Clear Mindset",excerpt:"A short daily ritual for focus, emotional regulation, and alignment.",image:"media/dipas-tarot-oracle/candle-ritual.jpg",body:["A three-card pull can anchor your day: current energy, focus action, and caution point. This takes less than five minutes.","Write one line per card and convert it into a practical step. Simple structure prevents overthinking and keeps interpretation grounded.","By tracking daily pulls, you build pattern awareness that strengthens intuition and better decision consistency over time."]}
];

const TESTIMONIALS=[
  {name:"Rutuja P.",rating:"★★★★★",text:"Bridal and skin prep package gave me my best wedding photographs."},
  {name:"Neha K.",rating:"★★★★★",text:"Numerology + Reiki session gave calm and clarity before my job change."},
  {name:"Sonal M.",rating:"★★★★★",text:"Tarot reading was accurate and practical with clear action points."}
];

const SEEDED_REVIEWS=[
  {name:"Prachi R.",rating:5,comment:"Skin glow program and sider makeup both were excellent.",date:"2026-03-12"},
  {name:"Kanchan D.",rating:5,comment:"Divine session helped with stress and timing confusion.",date:"2026-03-16"}
];

const STORAGE_KEYS={cart:"dipas_cart_v3",reviews:"dipas_reviews_v2"};
const state={cart:{},reviews:[],selectedRating:0,checkoutStep:1,selectedPayment:"COD",revealObserver:null,heroTimer:null,rotatorPointerInside:false,rotatorClickLocked:false};

const el={
  heroSlides:document.getElementById("heroSlides"),
  heroCountdown:document.getElementById("heroCountdown"),
  beautyPackageGrid:document.getElementById("beautyPackageGrid"),
  treatmentGrid:document.getElementById("treatmentGrid"),
  beautyPortfolioGrid:document.getElementById("beautyPortfolioGrid"),
  divinePackageGrid:document.getElementById("divinePackageGrid"),
  tarotPackageGrid:document.getElementById("tarotPackageGrid"),
  tarotGallery:document.getElementById("tarotGallery"),
  crystalRotator:document.getElementById("crystalRotator"),
  crystalRotatorStage:document.getElementById("crystalRotatorStage"),
  crystalShowcase:document.getElementById("crystalShowcase"),
  productGrid:document.getElementById("productGrid"),
  addAllCrystals:document.getElementById("addAllCrystals"),
  blogGrid:document.getElementById("blogGrid"),
  blogReaderOverlay:document.getElementById("blogReaderOverlay"),
  blogReader:document.getElementById("blogReader"),
  closeBlogReader:document.getElementById("closeBlogReader"),
  blogReaderImage:document.getElementById("blogReaderImage"),
  blogReaderTag:document.getElementById("blogReaderTag"),
  blogReaderTitle:document.getElementById("blogReaderTitle"),
  blogReaderExcerpt:document.getElementById("blogReaderExcerpt"),
  blogReaderBody:document.getElementById("blogReaderBody"),
  testimonialRow:document.getElementById("testimonialRow"),
  reviewList:document.getElementById("reviewList"),
  reviewForm:document.getElementById("reviewForm"),
  reviewName:document.getElementById("reviewName"),
  reviewComment:document.getElementById("reviewComment"),
  reviewRating:document.getElementById("reviewRating"),
  reviewMessage:document.getElementById("reviewMessage"),
  starPicker:document.getElementById("starPicker"),
  yearNow:document.getElementById("yearNow"),
  cartFab:document.getElementById("cartFab"),
  cartBadge:document.getElementById("cartBadge"),
  cartDrawer:document.getElementById("cartDrawer"),
  closeCart:document.getElementById("closeCart"),
  drawerOverlay:document.getElementById("drawerOverlay"),
  cartItems:document.getElementById("cartItems"),
  cartSubtotal:document.getElementById("cartSubtotal"),
  cartTotal:document.getElementById("cartTotal"),
  orderAllWhatsapp:document.getElementById("orderAllWhatsapp"),
  startCheckout:document.getElementById("startCheckout"),
  checkoutPanel:document.getElementById("checkoutPanel"),
  checkoutForm:document.getElementById("checkoutForm"),
  customerName:document.getElementById("customerName"),
  customerPhone:document.getElementById("customerPhone"),
  customerAddress:document.getElementById("customerAddress"),
  toPayment:document.getElementById("toPayment"),
  backInfo:document.getElementById("backInfo"),
  toConfirm:document.getElementById("toConfirm"),
  backPayment:document.getElementById("backPayment"),
  orderPreview:document.getElementById("orderPreview"),
  upiBox:document.getElementById("upiBox"),
  codBox:document.getElementById("codBox"),
  upiQrImage:document.getElementById("upiQrImage"),
  upiDeepLink:document.getElementById("upiDeepLink"),
  confirmUpi:document.getElementById("confirmUpi"),
  confirmCod:document.getElementById("confirmCod"),
  checkoutMessage:document.getElementById("checkoutMessage"),
  productTemplate:document.getElementById("productTemplate"),
  cartItemTemplate:document.getElementById("cartItemTemplate")
};

const formatINR=(v)=>new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(v);
const productById=(id)=>PRODUCTS.find((p)=>p.id===id);
function loadState(){
  try{const c=localStorage.getItem(STORAGE_KEYS.cart);state.cart=c?JSON.parse(c):{};}catch{state.cart={};}
  try{const r=localStorage.getItem(STORAGE_KEYS.reviews);state.reviews=[...SEEDED_REVIEWS,...(r?JSON.parse(r):[])];}catch{state.reviews=[...SEEDED_REVIEWS];}
}

const saveCart=()=>localStorage.setItem(STORAGE_KEYS.cart,JSON.stringify(state.cart));
function saveReviews(){
  const custom=state.reviews.filter((x)=>!SEEDED_REVIEWS.some((s)=>s.name===x.name&&s.comment===x.comment));
  localStorage.setItem(STORAGE_KEYS.reviews,JSON.stringify(custom.slice(0,20)));
}

function renderPriceCards(container,items){
  container.innerHTML="";
  items.forEach((item)=>{
    const card=document.createElement("article");
    card.className="price-card reveal";
    card.setAttribute("data-tilt","");
    const points=item.points.map((p)=>`<li>${p}</li>`).join("");
    card.innerHTML=`
      <h4>${item.title}</h4>
      <p>${item.duration}</p>
      <div class="price-meta"><span class="old">${formatINR(item.oldPrice)}</span><strong class="new">${formatINR(item.price)}</strong></div>
      <ul>${points}</ul>
      <a class="mini-cta wa-inline" href="https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(`I want to book: ${item.title}`)}" target="_blank" rel="noopener noreferrer">${WA_ICON_HTML}<span>Book on WhatsApp</span></a>`;
    container.appendChild(card);
  });
}

function renderTreatmentCards(){
  el.treatmentGrid.innerHTML="";
  TREATMENTS.forEach((item)=>{
    const card=document.createElement("article");
    card.className="treatment-card reveal";
    card.setAttribute("data-tilt","");
    const points=item.points.map((p)=>`<li>${p}</li>`).join("");
    card.innerHTML=`
      <h4>${item.title}</h4>
      <p>${item.duration}</p>
      <div class="price-meta"><strong class="new">${formatINR(item.price)}</strong></div>
      <ul>${points}</ul>
      <a class="mini-cta wa-inline" href="https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(`I want to book: ${item.title}`)}" target="_blank" rel="noopener noreferrer">${WA_ICON_HTML}<span>Book Session</span></a>`;
    el.treatmentGrid.appendChild(card);
  });
}

function renderBeautyPortfolio(){
  el.beautyPortfolioGrid.innerHTML="";
  BEAUTY_PORTFOLIO.forEach((item)=>{
    const card=document.createElement("article");
    card.className="portfolio-item reveal";
    card.innerHTML=`<img src="${item.image}" alt="${item.label}" loading="lazy" /><span>${item.label}</span>`;
    el.beautyPortfolioGrid.appendChild(card);
  });
}

function renderTarotGallery(){
  el.tarotGallery.innerHTML="";
  TAROT_GALLERY.forEach((img,i)=>{
    const tag=document.createElement("img");
    tag.className="reveal";
    tag.src=img; tag.alt=`Tarot portfolio ${i+1}`; tag.loading="lazy";
    el.tarotGallery.appendChild(tag);
  });
}

function renderProducts(){
  el.productGrid.innerHTML="";
  PRODUCTS.forEach((p)=>{
    const f=el.productTemplate.content.cloneNode(true);
    const card=f.querySelector(".product-card");
    const image=f.querySelector(".product-image");
    const stock=f.querySelector(".stock-pill");
    f.querySelector(".product-name").textContent=p.name;
    f.querySelector(".product-desc").textContent=p.description;
    f.querySelector(".old-price").textContent=formatINR(p.oldPrice);
    f.querySelector(".new-price").textContent=formatINR(p.price);
    image.src=p.image; image.alt=p.name;
    stock.textContent=p.stock<=3?`Only ${p.stock} left`:`${p.stock} available`;
    if(p.stock<=3){stock.classList.add("low");}
    const btn=f.querySelector(".add-to-cart");
    btn.addEventListener("click",()=>{
      btn.classList.add("is-adding");
      setTimeout(()=>btn.classList.remove("is-adding"),620);
      addToCart(p.id);
    });
    card.classList.add("reveal");
    el.productGrid.appendChild(f);
  });
}

function renderCrystalShowcase(){
  if(!el.crystalShowcase){return;}
  el.crystalShowcase.innerHTML="";
  const used=new Set();
  PRODUCTS.forEach((p)=>{
    if(used.has(p.image)){return;}
    used.add(p.image);
    const tag=document.createElement("img");
    tag.src=p.image;
    tag.alt=p.name;
    tag.loading="lazy";
    el.crystalShowcase.appendChild(tag);
  });
}

function unlockCrystalRotator(){
  if(!el.crystalRotator){return;}
  state.rotatorClickLocked=false;
  el.crystalRotator.classList.remove("locked","is-paused");
  el.crystalRotator.querySelectorAll(".crystal-node.active").forEach((n)=>n.classList.remove("active"));
}

function pauseCrystalRotator(){
  if(!el.crystalRotator){return;}
  el.crystalRotator.classList.add("is-paused");
}

function resumeCrystalRotator(){
  if(!el.crystalRotator||state.rotatorClickLocked){return;}
  el.crystalRotator.classList.remove("is-paused");
}

function renderCrystalRotator(){
  if(!el.crystalRotator){return;}
  el.crystalRotator.innerHTML="";
  unlockCrystalRotator();
  const items=PRODUCTS.slice(0,Math.min(12,PRODUCTS.length));
  const step=360/Math.max(1,items.length);
  items.forEach((item,index)=>{
    const card=document.createElement("article");
    card.className="crystal-node";
    card.tabIndex=0;
    card.setAttribute("role","button");
    card.setAttribute("aria-label",`Crystal ${item.name}`);
    card.style.setProperty("--theta",`${(index*step).toFixed(3)}deg`);
    card.innerHTML=`
      <img src="${item.image}" alt="${item.name}" loading="lazy" />
      <div class="crystal-node-meta">
        <strong class="crystal-node-name">${item.name}</strong>
        <span class="crystal-node-price">${formatINR(item.price)}</span>
        <button type="button" class="crystal-node-buy">Buy</button>
      </div>`;

    const addCrystal=()=>{
      addToCart(item.id);
      card.classList.add("selected");
      window.setTimeout(()=>card.classList.remove("selected"),850);
    };

    const buyBtn=card.querySelector(".crystal-node-buy");
    if(buyBtn){
      buyBtn.addEventListener("click",(ev)=>{
        ev.stopPropagation();
        addCrystal();
      });
    }

    const activate=()=>{
      card.classList.add("active");
      state.rotatorClickLocked=true;
      pauseCrystalRotator();
      el.crystalRotator.classList.add("locked");
    };

    card.addEventListener("mouseenter",()=>{pauseCrystalRotator(); card.classList.add("active");});
    card.addEventListener("mouseleave",()=>{if(!state.rotatorClickLocked){card.classList.remove("active"); resumeCrystalRotator();}});
    card.addEventListener("focus",()=>{pauseCrystalRotator(); card.classList.add("active");});
    card.addEventListener("blur",()=>{if(!state.rotatorClickLocked){card.classList.remove("active"); resumeCrystalRotator();}});

    card.addEventListener("click",activate);
    card.addEventListener("keydown",(ev)=>{
      if(ev.key==="Enter"||ev.key===" "){
        ev.preventDefault();
        activate();
      }
    });

    el.crystalRotator.appendChild(card);
  });

  if(el.crystalRotatorStage&&!el.crystalRotatorStage.dataset.rotatorBound){
    el.crystalRotatorStage.dataset.rotatorBound="1";
    el.crystalRotatorStage.addEventListener("pointerenter",()=>{
      state.rotatorPointerInside=true;
      pauseCrystalRotator();
    });
    el.crystalRotatorStage.addEventListener("pointerleave",()=>{
      state.rotatorPointerInside=false;
      unlockCrystalRotator();
    });
    el.crystalRotatorStage.addEventListener("wheel",unlockCrystalRotator,{passive:true});
    window.addEventListener("scroll",()=>{
      if(state.rotatorClickLocked&&!state.rotatorPointerInside){unlockCrystalRotator();}
    },{passive:true});
    window.addEventListener("pointermove",(ev)=>{
      if(!state.rotatorClickLocked||!el.crystalRotatorStage){return;}
      const box=el.crystalRotatorStage.getBoundingClientRect();
      const outside=ev.clientX<box.left||ev.clientX>box.right||ev.clientY<box.top||ev.clientY>box.bottom;
      if(outside){unlockCrystalRotator();}
    },{passive:true});
  }
}

function addAllCrystalsToCart(){
  PRODUCTS.forEach((p)=>{
    const current=state.cart[p.id]||0;
    state.cart[p.id]=Math.min(Math.max(current,1),p.stock);
  });
  saveCart();
  renderCart();
  openCart();
}

function sendCartToWhatsAppOneClick(){
  const items=getCartItems();
  if(!items.length){
    el.checkoutMessage.textContent="Your cart is empty.";
    return;
  }
  const total=items.reduce((sum,i)=>sum+i.total,0);
  const itemLines=items.map((i)=>`- ${i.name} x${i.quantity} (${formatINR(i.total)})`).join("\n");
  const infoLines=[];
  if(el.customerName&&el.customerName.value.trim()){infoLines.push(`Name: ${el.customerName.value.trim()}`);}
  if(el.customerPhone&&el.customerPhone.value.trim()){infoLines.push(`Phone: ${el.customerPhone.value.trim()}`);}
  if(el.customerAddress&&el.customerAddress.value.trim()){infoLines.push(`Address: ${el.customerAddress.value.trim()}`);}
  const messageParts=[
    "Hello Dipa, I want to place this crystal order:",
    itemLines,
    `Total: ${formatINR(total)}`
  ];
  if(infoLines.length){messageParts.push(infoLines.join("\n"));}
  messageParts.push(`Order Time: ${new Date().toLocaleString("en-IN")}`);
  const waUrl=`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(messageParts.join("\n\n"))}`;
  window.location.href=waUrl;
}

function renderBlogs(){
  el.blogGrid.innerHTML="";
  BLOGS.forEach((b)=>{
    const card=document.createElement("article");
    card.className="blog-card reveal";
    card.setAttribute("role","button");
    card.tabIndex=0;
    card.setAttribute("aria-label",`Read article: ${b.title}`);
    card.innerHTML=`
      <img src="${b.image}" alt="${b.title}" loading="lazy" />
      <div class="content"><span class="blog-tag">${b.section}</span><h3>${b.title}</h3><p>${b.excerpt}</p><span class="read-hint">Tap to read full article</span></div>`;
    const open=()=>openBlogReader(b);
    card.addEventListener("click",open);
    card.addEventListener("keydown",(ev)=>{
      if(ev.key==="Enter"||ev.key===" "){
        ev.preventDefault();
        open();
      }
    });
    el.blogGrid.appendChild(card);
  });
}

function openBlogReader(blog){
  if(!el.blogReaderOverlay||!blog){return;}
  const paragraphs=Array.isArray(blog.body)&&blog.body.length?blog.body:[blog.excerpt];
  el.blogReaderImage.src=blog.image;
  el.blogReaderImage.alt=blog.title;
  el.blogReaderTag.textContent=blog.section;
  el.blogReaderTitle.textContent=blog.title;
  el.blogReaderExcerpt.textContent=blog.excerpt;
  el.blogReaderBody.innerHTML=paragraphs.map((text)=>`<p>${text}</p>`).join("");
  el.blogReaderOverlay.hidden=false;
  requestAnimationFrame(()=>el.blogReaderOverlay.classList.add("open"));
  document.body.classList.add("no-scroll");
  if(el.closeBlogReader){el.closeBlogReader.focus();}
}

function closeBlogReader(){
  if(!el.blogReaderOverlay||el.blogReaderOverlay.hidden){return;}
  el.blogReaderOverlay.classList.remove("open");
  document.body.classList.remove("no-scroll");
  window.setTimeout(()=>{el.blogReaderOverlay.hidden=true;},180);
}

function initBlogReader(){
  if(!el.blogReaderOverlay||!el.closeBlogReader){return;}
  el.closeBlogReader.addEventListener("click",closeBlogReader);
  el.blogReaderOverlay.addEventListener("click",(ev)=>{if(ev.target===el.blogReaderOverlay){closeBlogReader();}});
  document.addEventListener("keydown",(ev)=>{if(ev.key==="Escape"){closeBlogReader();}});
}

function initVideoLinks(){
  document.querySelectorAll(".video-link-card").forEach((card)=>{
    const link=card.querySelector(".video-link");
    if(!link){return;}
    const url=(card.getAttribute("data-youtube-url")||"").trim();
    if(!url){
      card.classList.add("is-disabled");
      link.removeAttribute("href");
      link.textContent="YouTube URL Coming Soon";
      return;
    }
    link.href=url;
    if(card.dataset.videoBound){return;}
    card.dataset.videoBound="1";
    card.addEventListener("click",(ev)=>{
      if(ev.target.closest("a")){return;}
      window.open(url,"_blank","noopener,noreferrer");
    });
  });
}

function renderTestimonials(){
  el.testimonialRow.innerHTML="";
  TESTIMONIALS.forEach((t)=>{
    const card=document.createElement("article");
    card.className="testimonial-card reveal";
    card.innerHTML=`<p class="rating">${t.rating}</p><p>${t.text}</p><h4>- ${t.name}</h4>`;
    el.testimonialRow.appendChild(card);
  });
}

function renderReviews(){
  el.reviewList.innerHTML="";
  state.reviews.slice(0,10).forEach((r)=>{
    const card=document.createElement("article");
    const stars="★".repeat(Math.max(1,Math.min(5,Number(r.rating)||0))).padEnd(5,"☆");
    card.className="review-card reveal";
    card.innerHTML=`<strong>${r.name}</strong><p class="meta">${stars} · ${r.date}</p><p>${r.comment}</p>`;
    el.reviewList.appendChild(card);
  });
}

function getCartItems(){
  return Object.entries(state.cart).map(([id,quantity])=>{
    const p=productById(id);
    if(!p||quantity<=0){return null;}
    return {...p,quantity,total:p.price*quantity};
  }).filter(Boolean);
}

function addToCart(id){
  const p=productById(id); if(!p){return;}
  const current=state.cart[id]||0;
  state.cart[id]=Math.min(current+1,p.stock);
  saveCart();
  renderCart();
}

function updateCartItem(id,action){
  const current=state.cart[id]||0;
  if(action==="remove"){delete state.cart[id];}
  if(action==="increase"){const p=productById(id); state.cart[id]=Math.min(current+1,p?p.stock:current+1);}
  if(action==="decrease"){if(current<=1){delete state.cart[id];}else{state.cart[id]=current-1;}}
  saveCart();
  renderCart();
}

function renderCart(){
  const items=getCartItems();
  el.cartItems.innerHTML="";
  if(!items.length){
    el.cartItems.innerHTML='<p class="empty-state">Your cart is empty. Add crystals from the vault.</p>';
    el.startCheckout.disabled=true;
    if(el.orderAllWhatsapp){el.orderAllWhatsapp.disabled=true;}
    el.checkoutPanel.hidden=true;
    el.checkoutMessage.textContent="";
  }else{
    el.startCheckout.disabled=false;
    if(el.orderAllWhatsapp){el.orderAllWhatsapp.disabled=false;}
  }

  items.forEach((item)=>{
    const f=el.cartItemTemplate.content.cloneNode(true);
    f.querySelector(".cart-item-image").src=item.image;
    f.querySelector(".cart-item-image").alt=item.name;
    f.querySelector(".cart-item-title").textContent=item.name;
    f.querySelector(".cart-item-price").textContent=`${formatINR(item.price)} each`;
    f.querySelector(".qty-value").textContent=String(item.quantity);
    f.querySelectorAll("button[data-action]").forEach((b)=>b.addEventListener("click",()=>updateCartItem(item.id,b.getAttribute("data-action"))));
    el.cartItems.appendChild(f);
  });

  const subtotal=items.reduce((sum,i)=>sum+i.total,0);
  const qty=items.reduce((sum,i)=>sum+i.quantity,0);
  el.cartSubtotal.textContent=formatINR(subtotal);
  el.cartTotal.textContent=formatINR(subtotal);
  el.cartBadge.textContent=String(qty);
}

const openCart=()=>{el.cartDrawer.classList.add("open");el.drawerOverlay.classList.add("show");el.cartDrawer.setAttribute("aria-hidden","false");};
const closeCart=()=>{el.cartDrawer.classList.remove("open");el.drawerOverlay.classList.remove("show");el.cartDrawer.setAttribute("aria-hidden","true");};
function setCheckoutStep(step){
  state.checkoutStep=step;
  el.checkoutForm.querySelectorAll("[data-step]").forEach((node)=>{node.hidden=Number(node.getAttribute("data-step"))!==step;});
  document.querySelectorAll("[data-step-indicator]").forEach((n)=>n.classList.toggle("active",Number(n.getAttribute("data-step-indicator"))===step));
}

const validateCustomerInfo=()=>el.customerName.reportValidity()&&el.customerPhone.reportValidity()&&el.customerAddress.reportValidity();

function buildOrderPreview(){
  const items=getCartItems();
  const total=items.reduce((sum,i)=>sum+i.total,0);
  const list=items.map((i)=>`<li>${i.name} x${i.quantity} - ${formatINR(i.total)}</li>`).join("");
  el.orderPreview.innerHTML=`<p><strong>Order Summary</strong></p><ul>${list}</ul><p><strong>Total: ${formatINR(total)}</strong></p>`;
  const upiLink=`upi://pay?pa=${encodeURIComponent(CONFIG.upiId)}&pn=${encodeURIComponent(CONFIG.upiName)}&am=${total}&cu=INR`;
  el.upiDeepLink.href=upiLink;
  el.upiQrImage.src=`https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=${encodeURIComponent(upiLink)}`;
}

async function postToEndpoint(url,payload){
  if(!url){return {skipped:true};}
  const res=await fetch(url,{method:"POST",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(payload)});
  const txt=await res.text();
  let data; try{data=JSON.parse(txt);}catch{data={raw:txt};}
  return {ok:res.ok,status:res.status,data};
}

async function fetchRemoteReviews(){
  if(!CONFIG.sheetsEndpoints.reviews){return;}
  try{
    const res=await fetch(`${CONFIG.sheetsEndpoints.reviews}?sheet=reviews&limit=8`);
    if(!res.ok){return;}
    const data=await res.json();
    if(!data||!Array.isArray(data.reviews)){return;}
    data.reviews.forEach((incoming)=>{
      const exists=state.reviews.some((r)=>r.name===incoming.name&&r.comment===incoming.comment);
      if(!exists){
        state.reviews.unshift({
          name:incoming.name||"Guest",
          rating:Number(incoming.rating)||5,
          comment:incoming.comment||"",
          date:incoming.date||new Date().toISOString().slice(0,10)
        });
      }
    });
    state.reviews=state.reviews.slice(0,25);
    renderReviews();
    observeReveals();
  }catch{}
}

async function submitOrder(paymentType){
  const items=getCartItems();
  if(!items.length){el.checkoutMessage.textContent="Your cart is empty.";return;}
  if(!validateCustomerInfo()){el.checkoutMessage.textContent="Please fill customer details first.";setCheckoutStep(1);return;}

  const total=items.reduce((sum,i)=>sum+i.total,0);
  const orderId=`DIPA-${Date.now().toString().slice(-7)}-${Math.floor(Math.random()*900+100)}`;
  const payload={
    type:"order",
    orderId,
    createdAt:new Date().toISOString(),
    paymentType,
    customer:{name:el.customerName.value.trim(),phone:el.customerPhone.value.trim(),address:el.customerAddress.value.trim()},
    total,
    items:items.map((i)=>({id:i.id,name:i.name,quantity:i.quantity,price:i.price,total:i.total}))
  };

  el.checkoutMessage.textContent="Placing your order...";
  try{await postToEndpoint(CONFIG.sheetsEndpoints.orders,payload);}catch{}

  const itemLines=items.map((i)=>`${i.name} x${i.quantity} (${formatINR(i.total)})`).join("\n");
  const waText=[`Order ID: ${orderId}`,`Items:\n${itemLines}`,`Total: ${formatINR(total)}`,`Address: ${el.customerAddress.value.trim()}`,`Payment: ${paymentType}`].join("\n\n");
  const waUrl=`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(waText)}`;

  state.cart={};
  saveCart();
  renderCart();

  el.checkoutMessage.textContent=`Order ${orderId} confirmed. Redirecting to WhatsApp...`;
  setTimeout(()=>{window.location.href=waUrl;},900);
}

function initCheckout(){
  el.startCheckout.addEventListener("click",()=>{
    if(!getCartItems().length){return;}
    el.checkoutPanel.hidden=false;
    setCheckoutStep(1);
    el.checkoutMessage.textContent="";
  });

  el.toPayment.addEventListener("click",()=>{
    if(!validateCustomerInfo()){el.checkoutMessage.textContent="Please fill all customer details.";return;}
    el.checkoutMessage.textContent="";
    setCheckoutStep(2);
  });

  el.backInfo.addEventListener("click",()=>setCheckoutStep(1));

  el.toConfirm.addEventListener("click",()=>{
    const selected=el.checkoutForm.querySelector("input[name='payMethod']:checked");
    state.selectedPayment=selected?selected.value:"COD";
    buildOrderPreview();
    el.upiBox.hidden=state.selectedPayment!=="UPI";
    el.codBox.hidden=state.selectedPayment!=="COD";
    setCheckoutStep(3);
  });

  el.backPayment.addEventListener("click",()=>setCheckoutStep(2));
  el.confirmUpi.addEventListener("click",()=>submitOrder("UPI"));
  el.confirmCod.addEventListener("click",()=>submitOrder("COD"));
}

function updateRatingStars(rating){
  state.selectedRating=rating;
  el.reviewRating.value=String(rating);
  el.starPicker.querySelectorAll("button").forEach((b)=>{
    const val=Number(b.getAttribute("data-star"));
    b.classList.toggle("active",val<=rating);
  });
}

function initReviews(){
  el.starPicker.querySelectorAll("button").forEach((b)=>b.addEventListener("click",()=>updateRatingStars(Number(b.getAttribute("data-star")))));

  el.reviewForm.addEventListener("submit",async (e)=>{
    e.preventDefault();
    const rating=Number(el.reviewRating.value);
    const name=el.reviewName.value.trim();
    const comment=el.reviewComment.value.trim();
    if(!rating||!name||!comment){el.reviewMessage.textContent="Please provide name, rating, and comment.";return;}

    const review={type:"review",name,rating,comment,date:new Date().toISOString().slice(0,10)};
    state.reviews.unshift(review);
    state.reviews=state.reviews.slice(0,25);
    saveReviews();
    renderReviews();
    observeReveals();

    el.reviewForm.reset();
    updateRatingStars(0);
    el.reviewMessage.textContent="Review submitted successfully.";

    try{await postToEndpoint(CONFIG.sheetsEndpoints.reviews,review);}catch{}
  });
}
function initSmoothScroll(){
  const triggers=document.querySelectorAll("[data-scroll]");
  const ease=(t)=>(t<0.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2);

  const smoothTo=(targetY,duration=850)=>{
    const startY=window.scrollY; const delta=targetY-startY; const start=performance.now();
    const frame=(now)=>{
      const p=Math.min((now-start)/duration,1);
      window.scrollTo(0,startY+delta*ease(p));
      if(p<1){requestAnimationFrame(frame);}
    };
    requestAnimationFrame(frame);
  };

  triggers.forEach((t)=>t.addEventListener("click",(e)=>{
    const selector=t.getAttribute("data-scroll");
    if(!selector||!selector.startsWith("#")){return;}
    const target=document.querySelector(selector); if(!target){return;}
    e.preventDefault();
    smoothTo(target.getBoundingClientRect().top+window.scrollY-78);
  }));
}

function initHeroSlider(){
  if(!el.heroSlides){return;}
  const slides=Array.from(el.heroSlides.querySelectorAll("img"));
  if(slides.length<=1){return;}
  let i=0;
  state.heroTimer=window.setInterval(()=>{
    slides[i].classList.remove("active");
    i=(i+1)%slides.length;
    slides[i].classList.add("active");
  },5200);
}

function initCountdown(){
  const tick=()=>{
    const now=new Date();
    const end=new Date(now); end.setHours(23,59,59,999);
    const diff=Math.max(0,end.getTime()-now.getTime());
    const h=String(Math.floor(diff/3600000)).padStart(2,"0");
    const m=String(Math.floor((diff%3600000)/60000)).padStart(2,"0");
    const s=String(Math.floor((diff%60000)/1000)).padStart(2,"0");
    el.heroCountdown.textContent=`Today's booking window closes in ${h}:${m}:${s}`;
  };
  tick(); setInterval(tick,1000);
}

function initParallax(){
  const orbs=Array.from(document.querySelectorAll(".orb[data-depth]"));
  if(!orbs.length){return;}
  let raf=0;
  const clamp=(v,min,max)=>Math.min(max,Math.max(min,v));
  const paint=(x,y)=>orbs.forEach((orb)=>{const d=Number(orb.getAttribute("data-depth"));orb.style.transform=`translate3d(${x*d*80}px, ${y*d*60}px, 0)`;});
  const queuePaint=(x,y)=>{
    if(raf){cancelAnimationFrame(raf);}
    raf=requestAnimationFrame(()=>paint(x,y));
  };
  window.addEventListener("pointermove",(ev)=>{
    const x=(ev.clientX/window.innerWidth-0.5)*2;
    const y=(ev.clientY/window.innerHeight-0.5)*2;
    queuePaint(x,y);
  },{passive:true});
  window.addEventListener("scroll",()=>{
    const docHeight=Math.max(1,document.body.scrollHeight-window.innerHeight);
    const y=(window.scrollY/docHeight-0.5)*2;
    queuePaint(0,clamp(y,-1,1));
  },{passive:true});
  if("DeviceOrientationEvent" in window){
    window.addEventListener("deviceorientation",(ev)=>{
      if(typeof ev.gamma!=="number"||typeof ev.beta!=="number"){return;}
      queuePaint(clamp(ev.gamma/35,-1,1),clamp(ev.beta/45,-1,1));
    },{passive:true});
  }
  queuePaint(0,0);
}

function attachTilt(node){
  let touch=false;
  node.addEventListener("touchstart",()=>{touch=true;},{passive:true});
  node.addEventListener("mousemove",(ev)=>{
    if(touch){return;}
    const r=node.getBoundingClientRect();
    const x=(ev.clientX-r.left)/r.width;
    const y=(ev.clientY-r.top)/r.height;
    node.style.transform=`perspective(950px) rotateX(${(0.5-y)*10}deg) rotateY(${(x-0.5)*14}deg) translateZ(4px)`;
  });
  node.addEventListener("mouseleave",()=>{node.style.transform="";});
}

const initTiltCards=()=>document.querySelectorAll("[data-tilt]").forEach((n)=>attachTilt(n));

function observeReveals(){
  if(state.revealObserver){state.revealObserver.disconnect();}
  state.revealObserver=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{if(entry.isIntersecting){entry.target.classList.add("in-view");state.revealObserver.unobserve(entry.target);}});
  },{threshold:0.14,rootMargin:"0px 0px -10%"});
  document.querySelectorAll(".reveal").forEach((n)=>state.revealObserver.observe(n));
}

async function trackVisit(){
  try{await postToEndpoint(CONFIG.sheetsEndpoints.visits,{type:"visit",timestamp:new Date().toISOString(),path:window.location.pathname,referrer:document.referrer||"direct",userAgent:navigator.userAgent});}catch{}
}

function registerSW(){
  if(!("serviceWorker" in navigator)){return;}
  window.addEventListener("load",()=>{navigator.serviceWorker.register("./service-worker.js").catch(()=>{});});
}

function initGlobals(){
  el.yearNow.textContent=String(new Date().getFullYear());
  el.cartFab.addEventListener("click",openCart);
  el.closeCart.addEventListener("click",closeCart);
  el.drawerOverlay.addEventListener("click",closeCart);
  document.querySelectorAll("[data-open-cart]").forEach((btn)=>btn.addEventListener("click",openCart));
  if(el.addAllCrystals){el.addAllCrystals.addEventListener("click",addAllCrystalsToCart);}
  if(el.orderAllWhatsapp){el.orderAllWhatsapp.addEventListener("click",sendCartToWhatsAppOneClick);}
}

function init(){
  loadState();
  renderPriceCards(el.beautyPackageGrid,BEAUTY_PACKAGES);
  renderTreatmentCards();
  renderBeautyPortfolio();
  renderPriceCards(el.divinePackageGrid,DIVINE_PACKAGES);
  renderPriceCards(el.tarotPackageGrid,TAROT_PACKAGES);
  renderTarotGallery();
  renderCrystalRotator();
  renderCrystalShowcase();
  renderProducts();
  renderBlogs();
  renderTestimonials();
  renderReviews();
  renderCart();

  initGlobals();
  initCheckout();
  initReviews();
  initBlogReader();
  initVideoLinks();
  initSmoothScroll();
  initHeroSlider();
  initCountdown();
  initParallax();
  initTiltCards();
  observeReveals();
  registerSW();

  trackVisit();
  fetchRemoteReviews();
  setCheckoutStep(1);
}

init();
