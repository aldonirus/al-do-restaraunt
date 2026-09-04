// Состояние корзины
let cart = [];

// Переключение мобильного меню
function toggleNav() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
}

// Функция добавления товара в корзину
function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name: name, price: price, quantity: 1 });
    }
    updateCartUI();
    
    // Легкая анимация кнопки корзины при добавлении
    const cartBtn = document.getElementById('cart-toggle-btn');
    if (cartBtn) {
        cartBtn.style.transform = 'scale(1.1)';
        setTimeout(() => { cartBtn.style.transform = 'scale(1)'; }, 200);
    }
}

// Изменение количества блюда в корзине
function changeQuantity(name, delta) {
    const item = cart.find(i => i.name === name);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.name !== name);
        }
    }
    updateCartUI();
}

// Обновление интерфейса корзины
function updateCartUI() {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Счетчик на кнопке корзины
    const cartBtn = document.getElementById('cart-toggle-btn');
    if (cartBtn) {
        cartBtn.innerText = `Корзина (${totalCount})`;
    }

    // Рендер элементов в модальном окне
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceEl = document.getElementById('total-price-val');

    if (cartItemsContainer) {
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `<p style="text-align:center; padding: 20px; color: #888;">Корзина пуста</p>`;
        } else {
            cartItemsContainer.innerHTML = cart.map(item => `
                <div style="display:flex; justify-between; align-items:center; margin-bottom:12px; border-bottom:1px solid #eee; padding-bottom:8px;">
                    <div>
                        <strong>${item.name}</strong>
                        <div style="font-size:14px; color:#666;">${item.price} ₸ × ${item.quantity} = ${item.price * item.quantity} ₸</div>
                    </div>
                    <div style="display:flex; align-items:center; gap:8px;">
                        <button onclick="changeQuantity('${item.name}', -1)" style="padding:2px 8px; cursor:pointer;">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="changeQuantity('${item.name}', 1)" style="padding:2px 8px; cursor:pointer;">+</button>
                    </div>
                </div>
            `).join('');
        }
    }

    if (totalPriceEl) {
        totalPriceEl.innerText = `${totalPrice} ₸`;
    }
}

// Открытие и закрытие модального окна корзины
function toggleCartModal(show) {
    const modal = document.getElementById('cart-modal');
    if (modal) {
        modal.style.display = show ? 'flex' : 'none';
    }
}
