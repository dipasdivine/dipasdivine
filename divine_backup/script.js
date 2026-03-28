document.addEventListener('DOMContentLoaded', () => {
    // 1. Particle Background for Hero
    const particlesContainer = document.getElementById('particles-container');
    if (particlesContainer) {
        for (let i = 0; i < 30; i++) {
            let particle = document.createElement('div');
            particle.classList.add('particle');
            
            let size = Math.random() * 3 + 1;
            let left = Math.random() * 100;
            let duration = Math.random() * 20 + 10;
            let delay = Math.random() * 10;

            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${left}%`;
            particle.style.animationDuration = `${duration}s`;
            particle.style.animationDelay = `-${delay}s`;

            particlesContainer.appendChild(particle);
        }
    }

    // 2. Scroll Reveal & Parallax Backgrounds
    const reveals = document.querySelectorAll('.reveal-up, .reveal-fade');
    const parallaxes = document.querySelectorAll('.parallax');

    const scrollHandler = () => {
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;

        // Reveal
        reveals.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                el.classList.add('active');
            }
        });

        // Parallax
        parallaxes.forEach(bg => {
            if(window.innerWidth > 768) {
                const speed = 0.4;
                bg.style.transform = `translateY(${scrollY * speed}px)`;
            } else {
                bg.style.transform = `translateY(0px)`;
            }
        });
    };
    window.addEventListener('scroll', scrollHandler, {passive: true});
    scrollHandler(); // Trigger on load

    // 3. 3D Tilt Effect on Cards (Vanilla JS GSAP-level alternative)
    const tiltCards = document.querySelectorAll('.tilt-effect');
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            if(window.innerWidth < 768) return; // Disable on mobile for performance
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -10; // Max 10 deg
            const rotateY = ((x - centerX) / centerX) * 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            card.style.transition = 'none';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            card.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        });
    });

    // 5. Cart & Checkout Systems
    let cart = JSON.parse(localStorage.getItem('divine_cart')) || [];
    
    // Clean up old cart data format
    cart = cart.map(item => { return { ...item, price: parseInt(item.price) } });

    const cartBadge = document.getElementById('cart-badge');
    const cartOverlay = document.getElementById('cart-overlay');
    const cartDrawer = document.getElementById('cart-drawer');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalPrice = document.getElementById('cart-total-price');
    
    // Elements for listeners
    const openCartBtn = document.getElementById('open-cart-btn');
    const closeCartBtn = document.getElementById('close-cart-btn');
    const checkoutBtn = document.getElementById('checkout-btn');

    // Checkout Modal Elements
    const coOverlay = document.getElementById('checkout-modal-overlay');
    const closeCoBtn = document.getElementById('close-checkout-btn');
    const steps = document.querySelectorAll('.checkout-step');
    const detailsForm = document.getElementById('details-form');
    const payOptBtns = document.querySelectorAll('.pay-opt-btn');
    const backStepBtns = document.querySelectorAll('.back-step-btn');
    const confirmUpiBtn = document.getElementById('confirm-upi-paid');
    
    // Order State
    let currentOrder = {
        name: '',
        phone: '',
        address: '',
        total: 0,
        method: '',
        items: []
    };

    function updateCartUI() {
        cartBadge.innerText = cart.reduce((sum, item) => sum + item.qty, 0);
        
        cartItemsContainer.innerHTML = '';
        let total = 0;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="text-muted text-center mt-4">Your cart is empty.</p>';
        } else {
            cart.forEach(item => {
                total += item.price * item.qty;
                const div = document.createElement('div');
                div.className = 'cart-item';
                div.innerHTML = `
                    ${item.img ? `<img src="${item.img}" class="cart-item-img" alt="${item.name}">` : ''}
                    <div class="cart-item-info">
                        <div class="cart-item-title">${item.name}</div>
                        <div class="cart-item-price">₹${item.price.toLocaleString('en-IN')}</div>
                        <div class="qty-controls">
                            <button class="qty-btn dec" data-id="${item.id}">-</button>
                            <span>${item.qty}</span>
                            <button class="qty-btn inc" data-id="${item.id}">+</button>
                        </div>
                    </div>
                    <button class="remove-item" data-id="${item.id}">&times;</button>
                `;
                cartItemsContainer.appendChild(div);
            });
        }

        cartTotalPrice.innerText = `₹${total.toLocaleString('en-IN')}`;
        currentOrder.total = total;
        localStorage.setItem('divine_cart', JSON.stringify(cart));
    }

    function addToCart(itemObj, btnElement = null) {
        const existing = cart.find(i => i.id === itemObj.id);
        if (existing) {
            existing.qty += 1;
        } else {
            cart.push({ ...itemObj, qty: 1 });
        }
        
        // Squeeze animation
        if (btnElement) {
            btnElement.classList.add('squeeze-bounce');
            openCartBtn.classList.add('squeeze-bounce', 'btn-glow');
            setTimeout(() => {
                btnElement.classList.remove('squeeze-bounce');
                openCartBtn.classList.remove('squeeze-bounce', 'btn-glow');
            }, 500);
        }

        updateCartUI();
        openCartDrawer();
    }

    function changeQty(id, delta) {
        const item = cart.find(i => i.id === id);
        if (item) {
            item.qty += delta;
            if (item.qty <= 0) {
                cart = cart.filter(i => i.id !== id);
            }
            updateCartUI();
        }
    }

    function removeItem(id) {
        cart = cart.filter(i => i.id !== id);
        updateCartUI();
    }

    function openCartDrawer() {
        cartOverlay.classList.add('open');
        cartDrawer.classList.add('open');
    }
    function closeCartDrawer() {
        cartOverlay.classList.remove('open');
        cartDrawer.classList.remove('open');
    }

    // Initialize UI
    updateCartUI();

    // Rebind after DOM redraws
    function rebindEvents() {
        // Service Booking Buttons
        document.querySelectorAll('.book-service-btn').forEach(btn => {
            btn.onclick = () => {
                const service = btn.getAttribute('data-service');
                const price = parseInt(btn.getAttribute('data-price'));
                // generate id based on name
                const id = 'svc_' + service.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase();
                addToCart({ id, name: service, price, img: '' }, btn);
            };
        });
        
        // Product Buttons
        document.querySelectorAll('.btn-add-cart').forEach(btn => {
            btn.onclick = () => {
                const id = btn.getAttribute('data-id');
                const name = btn.getAttribute('data-name');
                const price = parseInt(btn.getAttribute('data-price'));
                const img = btn.getAttribute('data-img');
                addToCart({ id, name, price, img }, btn);
            };
        });
    }
    rebindEvents();

    // Cart Listeners
    openCartBtn.addEventListener('click', openCartDrawer);
    closeCartBtn.addEventListener('click', closeCartDrawer);
    cartOverlay.addEventListener('click', closeCartDrawer);

    cartItemsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('inc')) {
            changeQty(e.target.getAttribute('data-id'), 1);
        } else if (e.target.classList.contains('dec')) {
            changeQty(e.target.getAttribute('data-id'), -1);
        } else if (e.target.classList.contains('remove-item')) {
            removeItem(e.target.getAttribute('data-id'));
        }
    });

    // Checkout Flow
    function goToStep(stepNum) {
        steps.forEach(s => s.classList.remove('active'));
        document.getElementById(`step-${stepNum}`).classList.add('active');
    }

    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) return alert('Your cart is empty.');
        closeCartDrawer();
        coOverlay.classList.add('open');
        goToStep(1);
    });

    closeCoBtn.addEventListener('click', () => {
        coOverlay.classList.remove('open');
    });

    backStepBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            goToStep(btn.getAttribute('data-target'));
        });
    });

    detailsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        currentOrder.name = document.getElementById('co-name').value;
        currentOrder.phone = document.getElementById('co-phone').value;
        currentOrder.address = document.getElementById('co-address').value;
        goToStep(2);
    });

    payOptBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const method = btn.getAttribute('data-method');
            currentOrder.method = method;
            
            if (method === 'UPI') {
                document.getElementById('upi-total-display').innerText = `₹${currentOrder.total.toLocaleString('en-IN')}`;
                // Set Up Deep Link: target Jalna business
                const upiLink = `upi://pay?pn=DipasUniverse&pa=8669214433@upi&am=${currentOrder.total}&cu=INR`;
                document.getElementById('upi-deep-link').href = upiLink;
                goToStep('3-upi');
            } else {
                finalizeOrder();
            }
        });
    });

    confirmUpiBtn.addEventListener('click', finalizeOrder);

    function finalizeOrder() {
        goToStep('finish');
        currentOrder.items = cart;
        
        // Mocked timeout for UX
        setTimeout(() => {
            sendOrderToGoogleSheet(currentOrder)
                .then(() => {
                    sendToWhatsApp(currentOrder);
                })
                .catch(err => {
                    console.error('Sheet posting failed, proceeding to WP anyway', err);
                    sendToWhatsApp(currentOrder);
                });
        }, 1500);
    }

    function sendOrderToGoogleSheet(order) {
        const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL';
        
        const payload = {
            action: 'createOrder',
            data: {
                name: order.name,
                phone: order.phone,
                address: order.address || 'N/A',
                items: order.items.map(i => `${i.name} (x${i.qty})`).join(', '),
                total: order.total,
                method: order.method
            }
        };

        if (scriptURL === 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL') {
            return Promise.resolve();
        }

        return fetch(scriptURL, {
            method: 'POST',
            body: JSON.stringify(payload)
        });
    }

    function sendToWhatsApp(order) {
        // Format message
        let itemsStr = order.items.map(i => `• ${i.name} (x${i.qty}) - ₹${i.price * i.qty}`).join('\n');
        
        const message = `*🌟 New Dipa's Universe Booking/Order*\n\n*Name:* ${order.name}\n*Phone:* ${order.phone}\n*Address:* ${order.address || 'N/A'}\n\n*Cart:*\n${itemsStr}\n\n*Total:* ₹${order.total}\n*Payment Method:* ${order.method}\n\n_Thank you for choosing Sukhshanti Nagar's finest._`;
        
        const encode = encodeURIComponent(message);
        const whaNumber = '918669214433'; // Official Jalna number
        
        // Clear cart
        cart = [];
        updateCartUI();
        
        // Redirect
        window.location.href = `https://wa.me/${whaNumber}?text=${encode}`;
    }

    // Dynamic Year in footer
    if (document.getElementById('year')) {
        document.getElementById('year').innerText = new Date().getFullYear();
    }

    // Register Service Worker for PWA
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('service-worker.js')
                .then(registration => {
                    console.log('ServiceWorker registration successful');
                })
                .catch(err => {
                    console.log('ServiceWorker registration failed: ', err);
                });
        });
    }
});
