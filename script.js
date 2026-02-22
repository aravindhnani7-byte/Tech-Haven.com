// ============================================
// TechHaven - Enhanced JavaScript
// With Search, Filters, Wishlist, Cart & More
// ============================================

// Product Data with Categories
const products = [
    { 
        id: 1, 
        name: "Gaming Laptop Pro", 
        price: 85000, 
        originalPrice: 95000,
        category: "laptops",
        rating: 4.8,
        reviews: 128,
        badge: "hot",
        image: "https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/thumbnail.png",
        description: "High-performance gaming laptop with dual-screen technology, perfect for gaming and professional work.",
        features: ["Intel Core i9 Processor", "32GB RAM", "1TB SSD", "RTX 4080 Graphics", "Dual 4K Displays"]
    },
    { 
        id: 2, 
        name: "iPhone 15 Pro Max", 
        price: 149999, 
        originalPrice: 159999,
        category: "phones",
        rating: 4.9,
        reviews: 342,
        badge: "new",
        image: "https://cdn.dummyjson.com/products/images/smartphones/iPhone%2013%20Pro/thumbnail.png",
        description: "The most advanced iPhone ever with titanium design and A17 Pro chip.",
        features: ["A17 Pro Chip", "256GB Storage", "48MP Camera", "Titanium Design", "All-day Battery"]
    },
    { 
        id: 3, 
        name: "AirPods Pro 2", 
        price: 24990, 
        originalPrice: 29900,
        category: "audio",
        rating: 4.7,
        reviews: 567,
        badge: "sale",
        image: "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/thumbnail.png",
        description: "Active noise cancellation with personalized spatial audio.",
        features: ["Active Noise Cancellation", "Spatial Audio", "30-hour Battery", "MagSafe Charging", "IPX4 Water Resistant"]
    },
    { 
        id: 4, 
        name: "Mechanical Keyboard RGB", 
        price: 8999, 
        originalPrice: 11999,
        category: "gaming",
        rating: 4.6,
        reviews: 89,
        badge: "sale",
        image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=400&h=300&fit=crop",
        description: "Premium mechanical keyboard with customizable RGB lighting.",
        features: ["Cherry MX Switches", "RGB Backlighting", "Aluminum Frame", "Programmable Keys", "USB-C Connection"]
    },
    { 
        id: 5, 
        name: "Gaming Mouse Elite", 
        price: 4999, 
        originalPrice: 6999,
        category: "gaming",
        rating: 4.5,
        reviews: 234,
        badge: null,
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=300&fit=crop",
        description: "Ultra-lightweight gaming mouse with 25K DPI sensor.",
        features: ["25K DPI Sensor", "Ultra-lightweight", "Wireless", "70-hour Battery", "RGB Lighting"]
    },
    { 
        id: 6, 
        name: "Apple Watch Ultra 2", 
        price: 89900, 
        originalPrice: 99900,
        category: "accessories",
        rating: 4.8,
        reviews: 156,
        badge: "new",
        image: "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Submariner%20Watch/thumbnail.png",
        description: "The most rugged and capable Apple Watch ever.",
        features: ["49mm Titanium Case", "3000 nits Display", "36-hour Battery", "100m Water Resistant", "Precision GPS"]
    },
    { 
        id: 7, 
        name: "iPad Pro 12.9\"", 
        price: 112900, 
        originalPrice: 119900,
        category: "accessories",
        rating: 4.9,
        reviews: 278,
        badge: null,
        image: "https://cdn.dummyjson.com/products/images/tablets/iPad%20Mini%202021%20Starlight/thumbnail.png",
        description: "Supercharged by the M2 chip with Liquid Retina XDR display.",
        features: ["M2 Chip", "12.9\" XDR Display", "128GB Storage", "5G Connectivity", "Face ID"]
    },
    { 
        id: 8, 
        name: "JBL Flip 6 Speaker", 
        price: 11999, 
        originalPrice: 14999,
        category: "audio",
        rating: 4.4,
        reviews: 445,
        badge: "sale",
        image: "https://cdn.dummyjson.com/products/images/mobile-accessories/Amazon%20Echo%20Plus/thumbnail.png",
        description: "Powerful JBL Pro Sound with 12 hours of playtime.",
        features: ["JBL Pro Sound", "12-hour Battery", "IP67 Waterproof", "PartyBoost", "USB-C Charging"]
    },
    { 
        id: 9, 
        name: "Samsung 4K Monitor 32\"", 
        price: 32999, 
        originalPrice: 39999,
        category: "accessories",
        rating: 4.6,
        reviews: 112,
        badge: "sale",
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop",
        description: "Stunning 4K UHD display with HDR10 support.",
        features: ["4K UHD Resolution", "HDR10", "99% sRGB", "AMD FreeSync", "USB-C Hub"]
    },
    { 
        id: 10, 
        name: "HP Laser Printer", 
        price: 18500, 
        originalPrice: 22999,
        category: "accessories",
        rating: 4.3,
        reviews: 67,
        badge: null,
        image: "https://images.unsplash.com/photo-1612815154858-60aa4c43e64e?w=400&h=300&fit=crop",
        description: "Fast, reliable laser printing for your home office.",
        features: ["30 PPM Print Speed", "Wireless Printing", "Auto Duplex", "250-sheet Tray", "Mobile App"]
    },
    { 
        id: 11, 
        name: "Canon EOS R6 Camera", 
        price: 215999, 
        originalPrice: 249999,
        category: "accessories",
        rating: 4.9,
        reviews: 89,
        badge: "hot",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop",
        description: "Professional full-frame mirrorless camera.",
        features: ["20MP Full Frame", "4K 60fps Video", "In-body Stabilization", "Dual Card Slots", "Weather Sealed"]
    },
    { 
        id: 12, 
        name: "Anker PowerCore 20000mAh", 
        price: 3499, 
        originalPrice: 4999,
        category: "accessories",
        rating: 4.5,
        reviews: 892,
        badge: "sale",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=300&fit=crop",
        description: "High-capacity portable charger with fast charging.",
        features: ["20000mAh Capacity", "18W Fast Charging", "USB-C PD", "3 Device Charging", "LED Indicator"]
    },
    { 
        id: 13, 
        name: "Samsung T7 SSD 1TB", 
        price: 8999, 
        originalPrice: 11999,
        category: "accessories",
        rating: 4.7,
        reviews: 334,
        badge: "sale",
        image: "https://images.unsplash.com/photo-1597872252165-4827a235d7bc?w=400&h=300&fit=crop",
        description: "Ultra-fast portable SSD with up to 1050MB/s speed.",
        features: ["1TB Capacity", "1050MB/s Speed", "USB-C", "Hardware Encryption", "Shock Resistant"]
    },
    { 
        id: 14, 
        name: "TP-Link WiFi 6 Router", 
        price: 4999, 
        originalPrice: 6999,
        category: "accessories",
        rating: 4.4,
        reviews: 223,
        badge: null,
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop",
        description: "Next-gen WiFi 6 router for blazing fast speeds.",
        features: ["WiFi 6 AX3000", "Dual Band", "4 Gigabit Ports", "Parental Controls", "Easy Setup"]
    },
    { 
        id: 15, 
        name: "Logitech C920 Webcam", 
        price: 6999, 
        originalPrice: 8999,
        category: "accessories",
        rating: 4.6,
        reviews: 567,
        badge: "sale",
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=300&fit=crop",
        description: "Full HD 1080p webcam for professional video calls.",
        features: ["1080p HD", "Auto Focus", "Stereo Audio", "Privacy Shutter", "Universal Clip"]
    },
    { 
        id: 16, 
        name: "Blue Yeti Microphone", 
        price: 12999, 
        originalPrice: 14999,
        category: "audio",
        rating: 4.8,
        reviews: 445,
        badge: null,
        image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&h=300&fit=crop",
        description: "Professional USB microphone for streaming and recording.",
        features: ["4 Pickup Patterns", "Studio Quality", "Plug & Play", "Gain Control", "Zero Latency"]
    },
    { 
        id: 17, 
        name: "Anker 65W GaN Charger", 
        price: 2999, 
        originalPrice: 3999,
        category: "accessories",
        rating: 4.5,
        reviews: 678,
        badge: "sale",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400&h=300&fit=crop",
        description: "Compact 65W charger with GaN technology.",
        features: ["65W Output", "GaN Technology", "3 Ports", "Universal Compatibility", "Foldable Plug"]
    },
    { 
        id: 18, 
        name: "Meta Quest 3 VR", 
        price: 54999, 
        originalPrice: 59999,
        category: "gaming",
        rating: 4.7,
        reviews: 234,
        badge: "new",
        image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=400&h=300&fit=crop",
        description: "Next-generation mixed reality headset.",
        features: ["4K+ Infinite Display", "Mixed Reality", "Snapdragon XR2", "Touch Plus Controllers", "128GB Storage"]
    },
    { 
        id: 19, 
        name: "Xbox Elite Controller", 
        price: 14999, 
        originalPrice: 17999,
        category: "gaming",
        rating: 4.6,
        reviews: 189,
        badge: null,
        image: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?w=400&h=300&fit=crop",
        description: "Premium wireless controller for serious gamers.",
        features: ["Adjustable Tension", "Interchangeable Parts", "40-hour Battery", "Hair Trigger Locks", "Custom Profiles"]
    },
    { 
        id: 20, 
        name: "Samsung Galaxy S24 Ultra", 
        price: 129999, 
        originalPrice: 139999,
        category: "phones",
        rating: 4.8,
        reviews: 456,
        badge: "new",
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=300&fit=crop",
        description: "AI-powered flagship with S Pen and titanium design.",
        features: ["Galaxy AI", "200MP Camera", "S Pen Built-in", "Titanium Frame", "5000mAh Battery"]
    },
];

// State
let cart = [];
let wishlist = [];
let currentCategory = 'all';
let searchQuery = '';
let currentProduct = null;

// DOM Elements
const productList = document.getElementById("product-list");
const cartSidebar = document.getElementById("cart-sidebar");
const cartOverlay = document.getElementById("cart-overlay");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotalElement = document.getElementById("cart-total");
const cartSubtotalElement = document.getElementById("cart-subtotal");
const cartCountElement = document.getElementById("cart-count");
const checkoutBtn = document.getElementById("checkout-btn");
const productCountElement = document.getElementById("product-count");

const paymentModal = document.getElementById("payment-modal");
const paymentOverlay = document.getElementById("payment-overlay");
const modalTotalElement = document.getElementById("modal-total");
const paymentQrImg = document.getElementById("payment-qr");

const productModal = document.getElementById("product-modal");
const productOverlay = document.getElementById("product-overlay");

// Initialize
document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
});

// ============================================
// PRODUCT RENDERING
// ============================================

function renderProducts() {
    let filteredProducts = products;
    
    // Filter by category
    if (currentCategory !== 'all') {
        filteredProducts = filteredProducts.filter(p => p.category === currentCategory);
    }
    
    // Filter by search query
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filteredProducts = filteredProducts.filter(p => 
            p.name.toLowerCase().includes(query) || 
            p.category.toLowerCase().includes(query)
        );
    }
    
    // Update product count
    productCountElement.textContent = `Showing ${filteredProducts.length} product${filteredProducts.length !== 1 ? 's' : ''}`;
    
    if (filteredProducts.length === 0) {
        productList.innerHTML = `
            <div class="no-products">
                <div class="no-products-icon">🔍</div>
                <h3>No products found</h3>
                <p>Try adjusting your search or filters</p>
            </div>
        `;
        return;
    }
    
    productList.innerHTML = filteredProducts.map(product => `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image-wrapper">
                <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy">
                <button class="wishlist-btn ${isInWishlist(product.id) ? 'active' : ''}" 
                    onclick="toggleWishlist(${product.id}, event)" title="Add to Wishlist">
                    ${isInWishlist(product.id) ? '❤️' : '🤍'}
                </button>
                ${product.badge ? `<span class="badge badge-${product.badge}">${product.badge.toUpperCase()}</span>` : ''}
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price-row">
                    <div>
                        <span class="product-price">₹${product.price.toLocaleString()}</span>
                        ${product.originalPrice ? `<span class="product-original-price">₹${product.originalPrice.toLocaleString()}</span>` : ''}
                    </div>
                    <div class="product-rating">
                        ⭐ ${product.rating}
                    </div>
                </div>
                <div class="product-actions">
                    <button class="btn btn-primary" onclick="addToCart(${product.id})">
                        Add to Cart
                    </button>
                    <button class="btn-view" onclick="openProductModal(${product.id})" title="View Details">
                        👁️
                    </button>
                </div>
            </div>
        </div>
    `).join("");
}

// ============================================
// SEARCH & FILTERS
// ============================================

function handleSearch() {
    const searchInput = document.getElementById('search-input');
    searchQuery = searchInput.value.trim();
    renderProducts();
}

function filterByCategory(category) {
    currentCategory = category;
    
    // Update active pill
    document.querySelectorAll('.category-pill').forEach(pill => {
        pill.classList.remove('active');
        if (pill.dataset.category === category) {
            pill.classList.add('active');
        }
    });
    
    renderProducts();
}

// ============================================
// WISHLIST
// ============================================

function loadWishlist() {
    const saved = localStorage.getItem('wishlist');
    if (saved) {
        wishlist = JSON.parse(saved);
    }
}

function saveWishlist() {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

function isInWishlist(productId) {
    return wishlist.includes(productId);
}

function toggleWishlist(productId, event) {
    if (event) event.stopPropagation();
    
    const index = wishlist.indexOf(productId);
    if (index === -1) {
        wishlist.push(productId);
        showToast('Added to wishlist!', 'success');
    } else {
        wishlist.splice(index, 1);
        showToast('Removed from wishlist', 'info');
    }
    
    saveWishlist();
    renderProducts();
}

// ============================================
// CART FUNCTIONS
// ============================================

function loadCart() {
    const saved = localStorage.getItem('cart');
    if (saved) {
        cart = JSON.parse(saved);
        updateCartUI();
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Check if already in cart
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    saveCart();
    updateCartUI();
    showToast(`${product.name} added to cart!`, 'success');
    
    // Open cart to show user item was added
    if (!cartSidebar.classList.contains('active')) {
        toggleCart();
    }
}

function addToCartFromModal() {
    if (currentProduct) {
        addToCart(currentProduct.id);
        closeProductModal();
    }
}

function removeFromCart(index) {
    const item = cart[index];
    cart.splice(index, 1);
    saveCart();
    updateCartUI();
    showToast('Item removed from cart', 'info');
}

function updateQuantity(index, change) {
    const item = cart[index];
    item.quantity = (item.quantity || 1) + change;
    
    if (item.quantity <= 0) {
        removeFromCart(index);
        return;
    }
    
    saveCart();
    updateCartUI();
}

function clearCart() {
    if (cart.length === 0) return;
    
    if (confirm('Are you sure you want to clear your cart?')) {
        cart = [];
        saveCart();
        updateCartUI();
        showToast('Cart cleared', 'info');
    }
}

function updateCartUI() {
    // Update count badge
    const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    cartCountElement.textContent = totalItems;
    
    // Update cart items
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛒</div>
                <h3>Your cart is empty</h3>
                <p>Add some products to get started!</p>
            </div>
        `;
        checkoutBtn.disabled = true;
    } else {
        cartItemsContainer.innerHTML = cart.map((item, index) => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">₹${item.price.toLocaleString()}</div>
                    <div class="quantity-control">
                        <button class="qty-btn" onclick="updateQuantity(${index}, -1)">−</button>
                        <span class="qty-value">${item.quantity || 1}</span>
                        <button class="qty-btn" onclick="updateQuantity(${index}, 1)">+</button>
                    </div>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${index})" title="Remove">🗑️</button>
            </div>
        `).join("");
        checkoutBtn.disabled = false;
    }
    
    // Update totals
    const subtotal = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
    const shipping = subtotal > 50000 ? 0 : 499;
    const total = subtotal + shipping;
    
    cartSubtotalElement.textContent = subtotal.toLocaleString();
    document.getElementById('shipping-cost').textContent = shipping === 0 ? 'Free' : `₹${shipping}`;
    cartTotalElement.textContent = total.toLocaleString();
    modalTotalElement.textContent = total.toLocaleString();
    
    // Update QR Code
    const upiString = `upi://pay?pa=shop@techhaven&pn=TechHaven&am=${total}&cu=INR`;
    paymentQrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(upiString)}`;
}

function toggleCart() {
    cartSidebar.classList.toggle("active");
    cartOverlay.classList.toggle("active");
    document.body.style.overflow = cartSidebar.classList.contains("active") ? 'hidden' : '';
}

// ============================================
// PRODUCT MODAL
// ============================================

function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    currentProduct = product;
    
    const content = document.getElementById('product-detail-content');
    content.innerHTML = `
        <div class="product-detail-image">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-detail-info">
            <span class="product-category">${product.category}</span>
            <h2>${product.name}</h2>
            <div class="product-detail-meta">
                <span class="badge badge-${product.badge || 'new'}">${(product.badge || 'new').toUpperCase()}</span>
                <span class="product-rating">⭐ ${product.rating} (${product.reviews} reviews)</span>
            </div>
            <div class="product-detail-price">
                ₹${product.price.toLocaleString()}
                ${product.originalPrice ? `<span class="product-original-price">₹${product.originalPrice.toLocaleString()}</span>` : ''}
            </div>
            <p class="product-detail-description">${product.description}</p>
            <div class="product-features">
                <h4>Key Features</h4>
                <ul>
                    ${product.features.map(f => `<li>${f}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
    
    productModal.classList.add("active");
    productOverlay.classList.add("active");
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    productModal.classList.remove("active");
    productOverlay.classList.remove("active");
    document.body.style.overflow = '';
    currentProduct = null;
}

// ============================================
// PAYMENT MODAL
// ============================================

function openPaymentModal() {
    toggleCart(); // Close sidebar
    paymentModal.classList.add("active");
    paymentOverlay.classList.add("active");
    document.body.style.overflow = 'hidden';
}

function closePaymentModal() {
    paymentModal.classList.remove("active");
    paymentOverlay.classList.remove("active");
    document.body.style.overflow = '';
}

function processPayment() {
    const btn = document.getElementById('confirm-payment-btn');
    btn.classList.add('loading');
    btn.disabled = true;
    
    setTimeout(() => {
        showToast('Payment Successful! Thank you for your order.', 'success');
        cart = [];
        saveCart();
        updateCartUI();
        closePaymentModal();
        
        btn.classList.remove('loading');
        btn.disabled = false;
    }, 2000);
}

// ============================================
// TOAST NOTIFICATIONS
// ============================================

function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icons = {
        success: '✅',
        error: '❌',
        warning: '⚠️',
        info: 'ℹ️'
    };
    
    const titles = {
        success: 'Success',
        error: 'Error',
        warning: 'Warning',
        info: 'Info'
    };
    
    toast.innerHTML = `
        <span class="toast-icon">${icons[type]}</span>
        <div class="toast-content">
            <div class="toast-title">${titles[type]}</div>
            <div class="toast-message">${message}</div>
        </div>
        <button class="toast-close" onclick="this.parentElement.remove()">×</button>
    `;
    
    container.appendChild(toast);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
        if (toast.parentElement) {
            toast.classList.add('hiding');
            setTimeout(() => toast.remove(), 300);
        }
    }, 4000);
}

// ============================================
// KEYBOARD SHORTCUTS
// ============================================

document.addEventListener('keydown', (e) => {
    // ESC to close modals
    if (e.key === 'Escape') {
        if (productModal.classList.contains('active')) {
            closeProductModal();
        } else if (paymentModal.classList.contains('active')) {
            closePaymentModal();
        } else if (cartSidebar.classList.contains('active')) {
            toggleCart();
        }
    }
    
    // / to focus search
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
        e.preventDefault();
        const searchInput = document.getElementById('search-input');
        if (searchInput) searchInput.focus();
    }
});

// ============================================
// INITIALIZATION
// ============================================

// Make functions globally available
window.toggleCart = toggleCart;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.clearCart = clearCart;
window.openPaymentModal = openPaymentModal;
window.closePaymentModal = closePaymentModal;
window.processPayment = processPayment;
window.openProductModal = openProductModal;
window.closeProductModal = closeProductModal;
window.addToCartFromModal = addToCartFromModal;
window.toggleWishlist = toggleWishlist;
window.handleSearch = handleSearch;
window.filterByCategory = filterByCategory;
window.showToast = showToast;
window.loadWishlist = loadWishlist;
window.loadCart = loadCart;
