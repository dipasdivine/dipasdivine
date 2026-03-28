// 1. 3D High-Performance Native Canvas Starfield & Nebula System
const init3DCanvas = () => {
    const canvas = document.getElementById('bg-canvas');
    if(!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    let width, height;
    let stars = [];
    const numStars = window.innerWidth < 768 ? 80 : 250; // Mobile Optimization

    const resize = () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: (Math.random() - 0.5) * width * 3,
            y: (Math.random() - 0.5) * height * 3,
            z: Math.random() * width,
            size: Math.random() * 2
        });
    }

    let rotX = 0, rotY = 0;
    // Interactive mouse rotation for 3D feel
    window.addEventListener('mousemove', (e) => {
        rotX = (e.clientX - width / 2) * 0.0002;
        rotY = (e.clientY - height / 2) * 0.0002;
    }, {passive:true});

    function animate() {
        ctx.fillStyle = 'rgba(11, 11, 14, 0.4)'; // Base Dark Mode with trailing effect
        ctx.fillRect(0, 0, width, height);

        for (let i = 0; i < numStars; i++) {
            let s = stars[i];
            s.z -= 1.0; // Star moving towards viewer
            
            // Allow slight perspective shifting based on mouse
            s.x -= rotX * (width/s.z);
            s.y -= rotY * (height/s.z);
            
            if (s.z <= 0) {
                s.z = width;
                s.x = (Math.random() - 0.5) * width * 3;
                s.y = (Math.random() - 0.5) * height * 3;
            }

            let k = 128.0 / Math.max(s.z, 0.1);
            let px = s.x * k + width / 2;
            let py = s.y * k + height / 2;
            
            if (px >= 0 && px <= width && py >= 0 && py <= height) {
                let size = (1 - s.z / width) * 4 * s.size;
                let intensity = (1 - s.z / width);
                ctx.beginPath();
                ctx.arc(px, py, Math.max(size, 0.1), 0, Math.PI * 2);
                ctx.fillStyle = `rgba(109, 40, 217, ${intensity})`; // Primary Purple glow
                ctx.fill();
                
                // Inner core
                ctx.beginPath();
                ctx.arc(px, py, Math.max(size * 0.4, 0.1), 0, Math.PI * 2);
                ctx.fillStyle = `rgba(212, 175, 55, ${Math.min(intensity * 1.5, 1)})`; // Gold core
                ctx.fill();
            }
        }
        requestAnimationFrame(animate); 
    }
    animate();
};

document.addEventListener('DOMContentLoaded', () => {
    init3DCanvas(); // Start the customized 3D starfield

    // 2. Scroll Reveal & Parallax
    const reveals = document.querySelectorAll('.reveal-up');
    const parallaxes = document.querySelectorAll('.parallax');
    const scrollHandler = () => {
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;
        reveals.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) el.classList.add('active');
        });
        parallaxes.forEach(bg => {
            if(window.innerWidth > 768) {
                bg.style.transform = `translateY(${scrollY * 0.4}px)`;
            }
        });
    };
    window.addEventListener('scroll', scrollHandler, {passive: true});

    // 3. Cart Logic
    let cart = JSON.parse(localStorage.getItem('divine_cart')) || [];
    const cartBadge = document.getElementById('cart-badge');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalEl = document.getElementById('cart-total-price');
    const cartDrawer = document.getElementById('cart-drawer');
    const cartOverlay = document.getElementById('cart-overlay');
    const checkoutBtn = document.getElementById('checkout-btn');

    function updateCartUI() {
        localStorage.setItem('divine_cart', JSON.stringify(cart));
        const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);
        if(cartBadge) cartBadge.innerText = totalItems;
        if(cartItemsContainer) {
            cartItemsContainer.innerHTML = cart.length === 0 
                ? '<p class="text-center text-muted mt-4">Your cart is empty.</p>' 
                : cart.map(item => `
                    <div class="cart-item">
                        <img src="${item.img || 'https://via.placeholder.com/60'}" class="cart-item-img">
                        <div class="cart-item-info">
                            <div class="cart-item-title">${item.name}</div>
                            <div class="cart-item-price">₹${item.price}</div>
                            <div class="qty-controls">
                                <button class="qty-btn dec" data-id="${item.id}">-</button>
                                <span>${item.qty}</span>
                                <button class="qty-btn inc" data-id="${item.id}">+</button>
                            </div>
                        </div>
                        <button class="remove-item" data-id="${item.id}">&times;</button>
                    </div>
                `).join('');
        }
        const total = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
        if(cartTotalEl) cartTotalEl.innerText = `₹${total}`;
    }

    function addToCart(product, btnEl) {
        const existing = cart.find(i => i.id === product.id);
        if (existing) existing.qty += 1;
        else cart.push({ ...product, qty: 1 });
        updateCartUI();
        if(cartOverlay) { cartOverlay.classList.add('open'); cartDrawer.classList.add('open'); }
        if(btnEl) {
            const originalText = btnEl.innerText;
            btnEl.innerText = "Added ✨";
            setTimeout(() => btnEl.innerText = originalText, 1000);
        }
    }

    if(cartItemsContainer) {
        cartItemsContainer.addEventListener('click', (e) => {
            const id = e.target.getAttribute('data-id');
            if (e.target.classList.contains('inc')) {
                const item = cart.find(i => i.id === id);
                if(item) { item.qty++; updateCartUI(); }
            } else if (e.target.classList.contains('dec')) {
                const item = cart.find(i => i.id === id);
                if(item) { item.qty--; if(item.qty <= 0) cart = cart.filter(i => i.id !== id); updateCartUI(); }
            } else if (e.target.classList.contains('remove-item')) {
                cart = cart.filter(i => i.id !== id);
                updateCartUI();
            }
        });
    }

    if(checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) return alert('Your cart is empty.');
            const itemsStr = cart.map(i => `• ${i.name} (x${i.qty}) - ₹${i.price * i.qty}`).join('\n');
            const total = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
            const msg = encodeURIComponent(`*🌟 New Dipa's Divine Order*\n\n*Cart:*\n${itemsStr}\n\n*Total:* ₹${total}`);
            cart = []; updateCartUI();
            window.open(`https://wa.me/918669214433?text=${msg}`, '_blank');
            if(cartOverlay) { cartOverlay.classList.remove('open'); cartDrawer.classList.remove('open'); }
        });
    }

    const openCartBtn = document.getElementById('open-cart-btn');
    const closeCartBtn = document.getElementById('close-cart-btn');
    if(openCartBtn) openCartBtn.addEventListener('click', () => { cartOverlay.classList.add('open'); cartDrawer.classList.add('open'); });
    if(closeCartBtn) closeCartBtn.addEventListener('click', () => { cartOverlay.classList.remove('open'); cartDrawer.classList.remove('open'); });
    if(cartOverlay) cartOverlay.addEventListener('click', () => { cartOverlay.classList.remove('open'); cartDrawer.classList.remove('open'); });

    // 4. Carousel 3D Injection
    const carouselEl = document.getElementById('crystal-carousel');
    if (carouselEl) {
        const crystals = [
            { id: 'c1', name: 'Raw Amethyst Geode', price: 2800, img: 'media/crystals/amethyst.png', desc: 'Stress relief & Peace' },
            { id: 'c2', name: 'Rose Quartz', price: 1200, img: 'media/crystals/Rose Quartz Product Shot.png', desc: 'Universal Love' },
            { id: 'c3', name: 'Citrine Point', price: 1500, img: 'media/crystals/citrine.png', desc: 'Wealth & Joy' },
            { id: 'c4', name: 'Clear Quartz Prism', price: 900, img: 'media/crystals/clearquartz.png', desc: 'Master Healer' },
            { id: 'c5', name: 'Lapis Lazuli', price: 2100, img: 'media/crystals/lapis.png', desc: 'Inner Truth' },
            { id: 'c6', name: 'Raw Pyrite Cluster', price: 1800, img: 'media/crystals/pyrite.png', desc: 'Luck & Money Magnet' },
            { id: 'c7', name: 'Tiger Eye', price: 1100, img: 'media/crystals/tigereye.png', desc: 'Courage & Focus' },
            { id: 'c8', name: 'Labradorite Iridescence', price: 1900, img: 'media/crystals/labradorite.png', desc: 'Magic & Intuition' },
            { id: 'c9', name: 'Fluorite', price: 1700, img: 'media/crystals/fluorite.png', desc: 'Mental Clarity' },
            { id: 'c10', name: 'Selenite Tower', price: 1600, img: 'media/crystals/selenite.png', desc: 'Energy Cleansing' },
            { id: 'c11', name: 'Prismatic Rainbow', price: 2200, img: 'media/crystals/prismatic.png', desc: 'Aura Alignment' },
            { id: 'c12', name: 'Golden Drip Accent', price: 3200, img: 'media/crystals/goldendrips.png', desc: 'Manifesting Wealth' }
        ];
        let crystalHTML = '';
        crystals.forEach((c, index) => {
            const angle = index * (360 / crystals.length);
            crystalHTML += `
                <div class="carousel-item" style="transform: rotateY(${angle}deg) translateZ(280px);">
                    <img src="${c.img}" alt="${c.name}">
                    <h3>${c.name}</h3>
                    <p>₹${c.price} - ${c.desc}</p>
                    <button class="btn btn-primary btn-glow btn-add-cart mt-2" data-id="${c.id}" data-name="${c.name}" data-price="${c.price}" data-img="${c.img}">Add & Buy</button>
                </div>`;
        });
        carouselEl.innerHTML = crystalHTML;
        carouselEl.addEventListener('click', () => carouselEl.classList.toggle('paused'));
        carouselEl.addEventListener('mouseenter', () => carouselEl.classList.add('paused'));
        carouselEl.addEventListener('mouseleave', () => carouselEl.classList.remove('paused'));
    }

    // 5. Rebind Buttons
    function rebind() {
        document.querySelectorAll('.book-service-btn').forEach(btn => {
            btn.onclick = () => {
                const id = 'svc_' + (btn.getAttribute('data-service') || 'item').replace(/[^a-zA-Z0-9]/g, '_').toLowerCase();
                addToCart({ id, name: btn.getAttribute('data-service'), price: parseInt(btn.getAttribute('data-price')), img: '' }, btn);
            };
        });
        document.querySelectorAll('.btn-add-cart').forEach(btn => {
            btn.onclick = (e) => {
                e.stopPropagation();
                addToCart({ id: btn.getAttribute('data-id'), name: btn.getAttribute('data-name'), price: parseInt(btn.getAttribute('data-price')), img: btn.getAttribute('data-img') }, btn);
            };
        });
    }
    rebind();

    // 6. Blog & Reading View
    const blogData = {
        '1': '<h2>5 Trending Skin Routine Tips for Hot Weather</h2><p>Adapt your regimen for heat: double cleanse, broad-spectrum SPF, lightweight moisturizers, gentle exfoliation, and cooling mists.</p>',
        '2': '<h2>The Minimalist Everyday Makeup Guide</h2><p>Achieving the "no-makeup" look: hydrate, light BB cream, brow gel, mascara, and cream blush for a dewy glow.</p>',
        '3': '<h2>Why Keratin Matters for Frizz Control</h2><p>Keratin restores hair structure. Professional treatments infuse protein back into gaps caused by styling and pollution.</p>',
        '4': '<h2>How Reiki Removes Emotional Blockages</h2><p>Reiki transfers universal light into chakras, clearing stagnant negative energy from past traumas and stress.</p>',
        '5': '<h2>The Truth About the "Death" Tarot Card</h2><p>Death signifies transformation, the end of cycles, and rebirth, not physical death. Embrace the positive change!</p>'
    };
    const blogModal = document.getElementById('blog-modal-overlay');
    const blogContent = document.getElementById('blog-content-area');
    document.querySelectorAll('.blog-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = card.getAttribute('data-article');
            if(blogData[id]) {
                blogContent.innerHTML = blogData[id];
                blogModal.classList.add('open');
            }
        });
    });
    const closeBlog = () => blogModal.classList.remove('open');
    const closeBlogBtn = document.getElementById('close-blog-btn');
    if(closeBlogBtn) closeBlogBtn.addEventListener('click', closeBlog);
    if(blogModal) blogModal.addEventListener('click', (e) => { if(e.target === blogModal) closeBlog(); });

    // 7. Auto-scroll Portfolio
    const portfolioScroll = document.querySelector('.portfolio-scroll');
    if (portfolioScroll) {
        let isPaused = false;
        portfolioScroll.addEventListener('mouseenter', () => isPaused = true);
        portfolioScroll.addEventListener('mouseleave', () => isPaused = false);
        portfolioScroll.addEventListener('click', () => isPaused = !isPaused);
        
        setInterval(() => {
            if(!isPaused) {
                portfolioScroll.scrollLeft += 1;
                if(portfolioScroll.scrollLeft >= (portfolioScroll.scrollWidth - portfolioScroll.clientWidth - 1)) portfolioScroll.scrollLeft = 0;
            }
        }, 15);
    }

    // 8. Video Redirection
    document.querySelectorAll('.video-card').forEach(card => {
        card.addEventListener('click', () => {
            const url = card.getAttribute('data-url');
            if(url && url !== '#') window.open(url, '_blank');
        });
    });

    // 9. Escape to Close
    document.addEventListener('keydown', (e) => {
        if(e.key === 'Escape') {
            if(blogModal) blogModal.classList.remove('open');
            if(cartOverlay) { cartOverlay.classList.remove('open'); cartDrawer.classList.remove('open'); }
        }
    });

    updateCartUI();
});
