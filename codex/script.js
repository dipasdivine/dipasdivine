const CONFIG={
  whatsappNumber:"918669214433",
  upiId:"yourupi@bank",
  upiName:"Dipa Signature Realms",
  sheetsEndpoints:{orders:"",reviews:"",visits:""}
};

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
  {image:"media/dipas-beauty-treats/portfolio-1.jpg",label:"Soft Glam Bridal"},
  {image:"media/dipas-beauty-treats/portfolio-2.jpg",label:"HD Reception Finish"},
  {image:"media/dipas-beauty-treats/portfolio-3.jpg",label:"Traditional Bridal Theme"},
  {image:"media/dipas-beauty-treats/portfolio-4.jpg",label:"Hair Styling Architecture"},
  {image:"media/dipas-beauty-treats/portfolio-5.jpg",label:"Skin Glow Therapy"},
  {image:"media/dipas-beauty-treats/portfolio-6.jpg",label:"Party Makeup Signature"}
];

const TAROT_GALLERY=[
  "media/dipas-tarot-oracle/tarot-spread-1.jpg",
  "media/dipas-tarot-oracle/tarot-spread-2.jpg",
  "media/dipas-tarot-oracle/tarot-reader-1.jpg",
  "media/dipas-tarot-oracle/tarot-reader-2.jpg",
  "media/dipas-tarot-oracle/candle-ritual.jpg",
  "media/dipas-tarot-oracle/moon-reading.jpg"
];

const PRODUCTS=[
  {id:"rose-quartz-heart",name:"Rose Quartz Heart",price:1499,oldPrice:2199,stock:3,description:"Heart-energy crystal for self-love.",image:"media/crystal-vault/rose-quartz.jpg"},
  {id:"amethyst-cluster",name:"Amethyst Cluster",price:1899,oldPrice:2699,stock:5,description:"Calm-focused stone for clarity.",image:"media/crystal-vault/amethyst.jpg"},
  {id:"citrine-point",name:"Citrine Point",price:1699,oldPrice:2499,stock:2,description:"Abundance crystal for confidence.",image:"media/crystal-vault/citrine.jpg"},
  {id:"clear-quartz-tower",name:"Clear Quartz Tower",price:1299,oldPrice:1899,stock:6,description:"Energy amplifier for intentions.",image:"media/crystal-vault/clear-quartz.jpg"},
  {id:"black-tourmaline-shield",name:"Black Tourmaline Shield",price:1599,oldPrice:2299,stock:4,description:"Grounding protection stone.",image:"media/crystal-vault/black-tourmaline.jpg"},
  {id:"selenite-wand-set",name:"Selenite Wand Set",price:1199,oldPrice:1699,stock:7,description:"Cleansing wand set for aura work.",image:"media/crystal-vault/selenite.jpg"},
  {id:"pyrite-cube",name:"Pyrite Prosperity Cube",price:1399,oldPrice:1999,stock:5,description:"Prosperity support stone.",image:"media/crystal-vault/pyrite.jpg"},
  {id:"lapis-clarity-stone",name:"Lapis Clarity Stone",price:1499,oldPrice:2099,stock:4,description:"Inner wisdom and communication.",image:"media/crystal-vault/lapis.jpg"}
];

const BLOGS=[
  {section:"Beauty",title:"Skin Cycling for Indian Weather: 2026 Routine",excerpt:"Weekly sequence for glow and barrier safety.",image:"media/dipas-beauty-treats/skin-treatment-1.jpg"},
  {section:"Beauty",title:"Basic Makeup Mistakes That Add 5 Years",excerpt:"Artist-backed corrections for base and blending.",image:"media/dipas-beauty-treats/normal-makeup.jpg"},
  {section:"Beauty",title:"Haircare Trend: Scalp Detox + Bond Repair",excerpt:"Why this two-step path is now preferred.",image:"media/dipas-beauty-treats/hair-treatment-2.jpg"},
  {section:"Divine",title:"Numerology + Reiki Combo: Why It Works",excerpt:"Number systems and energy work together.",image:"media/dipas-divine/numerology-1.jpg"},
  {section:"Divine",title:"Burnout Reset in 60 Minutes",excerpt:"Focused Reiki and release protocol.",image:"media/dipas-divine/reiki-1.jpg"},
  {section:"Divine",title:"Best Days to Start Goals by Personal Year",excerpt:"Timing insights for business and life decisions.",image:"media/dipas-divine/consultation.jpg"},
  {section:"Tarot",title:"Tarot for Career Pivots: 5 Card Framework",excerpt:"Evaluate offers, risks and direction.",image:"media/dipas-tarot-oracle/tarot-spread-2.jpg"},
  {section:"Tarot",title:"What to Ask in Your First Relationship Reading",excerpt:"Questions that produce practical answers.",image:"media/dipas-tarot-oracle/tarot-reader-1.jpg"},
  {section:"Tarot",title:"Moon Cycle Tarot Planning Trend",excerpt:"Weekly spread timing for better execution.",image:"media/dipas-tarot-oracle/moon-reading.jpg"}
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

const STORAGE_KEYS={cart:"dipas_cart_v2",reviews:"dipas_reviews_v2"};
const state={cart:{},reviews:[],selectedRating:0,checkoutStep:1,selectedPayment:"COD",revealObserver:null,heroTimer:null};

const el={
  heroSlides:document.getElementById("heroSlides"),
  heroCountdown:document.getElementById("heroCountdown"),
  beautyPackageGrid:document.getElementById("beautyPackageGrid"),
  treatmentGrid:document.getElementById("treatmentGrid"),
  beautyPortfolioGrid:document.getElementById("beautyPortfolioGrid"),
  divinePackageGrid:document.getElementById("divinePackageGrid"),
  tarotPackageGrid:document.getElementById("tarotPackageGrid"),
  tarotGallery:document.getElementById("tarotGallery"),
  productGrid:document.getElementById("productGrid"),
  blogGrid:document.getElementById("blogGrid"),
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
      <a class="mini-cta" href="https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(`I want to book: ${item.title}`)}" target="_blank" rel="noopener noreferrer">Book on WhatsApp</a>`;
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
      <a class="mini-cta" href="https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(`I want to book: ${item.title}`)}" target="_blank" rel="noopener noreferrer">Book Session</a>`;
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

function renderBlogs(){
  el.blogGrid.innerHTML="";
  BLOGS.forEach((b)=>{
    const card=document.createElement("article");
    card.className="blog-card reveal";
    card.innerHTML=`
      <img src="${b.image}" alt="${b.title}" loading="lazy" />
      <div class="content"><span class="blog-tag">${b.section}</span><h3>${b.title}</h3><p>${b.excerpt}</p></div>`;
    el.blogGrid.appendChild(card);
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
    el.checkoutPanel.hidden=true;
    el.checkoutMessage.textContent="";
  }else{el.startCheckout.disabled=false;}

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
  const paint=(x,y)=>orbs.forEach((orb)=>{const d=Number(orb.getAttribute("data-depth"));orb.style.transform=`translate3d(${x*d*80}px, ${y*d*60}px, 0)`;});
  window.addEventListener("pointermove",(ev)=>{
    const x=(ev.clientX/window.innerWidth-0.5)*2;
    const y=(ev.clientY/window.innerHeight-0.5)*2;
    if(raf){cancelAnimationFrame(raf);}
    raf=requestAnimationFrame(()=>paint(x,y));
  },{passive:true});
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
}

function init(){
  loadState();
  renderPriceCards(el.beautyPackageGrid,BEAUTY_PACKAGES);
  renderTreatmentCards();
  renderBeautyPortfolio();
  renderPriceCards(el.divinePackageGrid,DIVINE_PACKAGES);
  renderPriceCards(el.tarotPackageGrid,TAROT_PACKAGES);
  renderTarotGallery();
  renderProducts();
  renderBlogs();
  renderTestimonials();
  renderReviews();
  renderCart();

  initGlobals();
  initCheckout();
  initReviews();
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
