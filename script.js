// Переключение меню-бургера
// Хранилище товаров в корзине
let cart = [];

// Переводы меню
const translations = {
  ru: {
    title: "Меню",
    cartBtn: "Корзина",
    emptyCart: "Корзина пуста",
    total: "Итого",
    addBtn: "Добавить",
    showToWaiter: "Покажите этот экран официанту для оформления заказа",
    closeBtn: "Закрыть"
  },
  en: {
    title: "Menu",
    cartBtn: "Cart",
    emptyCart: "Cart is empty",
    total: "Total",
    addBtn: "Add",
    showToWaiter: "Show this screen to the waiter to place your order",
    closeBtn: "Close"
  }
};

let currentLang = 'ru';

// Переключение языка
function setLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });
  updateCartUI();
}

// Добавление товара в корзину
function addToCart(name, price) {
  const existingItem = cart.find(item => item.name === name);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  updateCartUI();
}

// Изменение количества товара
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

  // Обновляем счетчик на кнопке корзины
  const cartBtn = document.getElementById('cart-toggle-btn');
  if (cartBtn) {
    cartBtn.innerText = `${translations[currentLang].cartBtn} (${totalCount})`;
  }

  // Обновляем список внутри модального окна
  const cartItemsContainer = document.getElementById('cart-items');
  const totalPriceEl = document.getElementById('total-price-val');

  if (cartItemsContainer) {
    if (cart.length === 0) {
      cartItemsContainer.innerHTML = `<p class="empty-msg">${translations[currentLang].emptyCart}</p>`;
    } else {
      cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item-row">
          <div class="cart-item-info">
            <strong>${item.name}</strong>
            <div>${item.price} ₸ × ${item.quantity} = ${item.price * item.quantity} ₸</div>
          </div>
          <div class="cart-item-controls">
            <button onclick="changeQuantity('${item.name}', -1)">-</button>
            <span>${item.quantity}</span>
            <button onclick="changeQuantity('${item.name}', 1)">+</button>
          </div>
        </div>
      `).join('');
    }
  }

  if (totalPriceEl) {
    totalPriceEl.innerText = `${totalPrice} ₸`;
  }
}

// Открытие / закрытие модального окна корзины
function toggleCartModal(show) {
  const modal = document.getElementById('cart-modal');
  if (modal) {
    modal.style.display = show ? 'flex' : 'none';
  }
}
