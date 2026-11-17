/**
 * DỰ ÁN: NÉT VIỆT
 * File: js/cart.js
 * Phụ trách: Nguyễn Phúc Như
 * Nhiệm vụ: Xử lý thêm, sửa số lượng, xóa và tính tổng tiền giỏ hàng
 */
const CART_KEY = 'netviet_cart';

// 1. Lấy giỏ hàng từ localStorage
function getCart() {
  const data = localStorage.getItem(CART_KEY);
  return data ? JSON.parse(data) : [];
}

// Cập nhật số lượng hiển thị trên biểu tượng giỏ hàng ở các trang có header.
function updateCartBadge() {
  const badge = document.getElementById('cart-count-badge');
  if (!badge) return;

  const count = getCart().reduce((total, item) => total + (Number(item.quantity) || 0), 0);
  badge.textContent = String(count);

  const cartLink = badge.closest('a');
  if (cartLink) cartLink.setAttribute('aria-label', `Giỏ hàng, ${count} sản phẩm`);
}

// 2. Lưu giỏ hàng vào localStorage
function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

// 3. Thêm sản phẩm vào giỏ (xử lý cộng dồn số lượng)
function addToCart(productId, quantity = 1) {
  const pId = parseInt(productId, 10);
  const qty = parseInt(quantity, 10) || 1;
  let cart = getCart();
  const existingIndex = cart.findIndex(item => parseInt(item.id, 10) === pId);

  if (existingIndex !== -1) {
    cart[existingIndex].quantity = (parseInt(cart[existingIndex].quantity, 10) || 0) + qty;
  } else {
    const product = typeof getProductById === 'function'
      ? getProductById(pId)
      : (typeof products !== 'undefined' ? products.find(p => parseInt(p.id, 10) === pId) : null);
    if (!product) {
      alert('Không tìm thấy thông tin trải nghiệm!');
      return;
    }
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: qty
    });
  }

  saveCart(cart);
  updateCartBadge();
  if (typeof renderCart === 'function') renderCart();
  alert('Đã thêm trải nghiệm vào hành trình của bạn!');
}

// 4. Cập nhật số lượng (Tăng / Giảm)
function updateQuantity(productId, change) {
  const pId = parseInt(productId, 10);
  let cart = getCart();
  const item = cart.find(p => parseInt(p.id, 10) === pId);
  if (item) {
    item.quantity = (parseInt(item.quantity, 10) || 0) + change;
    if (item.quantity <= 0) {
      cart = cart.filter(p => parseInt(p.id, 10) !== pId); // Nếu số lượng = 0 thì xóa
    }
    saveCart(cart);
    renderCart();
  }
}

// 5. Xóa hoàn toàn sản phẩm khỏi giỏ
function removeFromCart(productId) {
  const pId = parseInt(productId, 10);
  if (confirm('Bạn có chắc chắn muốn xóa trải nghiệm này khỏi giỏ hàng?')) {
    let cart = getCart();
    cart = cart.filter(p => parseInt(p.id, 10) !== pId);
    saveCart(cart);
    renderCart();
  }
}

// 6. Hiển thị danh sách giỏ hàng và tính tổng tiền
function renderCart() {
  const tbody = document.getElementById('cart-items-body');
  const emptyMsg = document.getElementById('empty-cart-message');
  const contentWrapper = document.getElementById('cart-content-wrapper');
  const totalElem = document.getElementById('cart-total-price');
  if (!tbody) return; // Nếu không ở trang cart.html thì dừng

  const cart = getCart();
  if (cart.length === 0) {
    if (emptyMsg) emptyMsg.style.display = 'block';
    if (contentWrapper) contentWrapper.style.display = 'none';
    return;
  }
  if (emptyMsg) emptyMsg.style.display = 'none';
  if (contentWrapper) contentWrapper.style.display = 'block';

  let totalMoney = 0;
  tbody.innerHTML = cart.map(item => {
    const subtotal = item.price * item.quantity;
    totalMoney += subtotal;
    const formattedPrice = typeof formatCurrency === 'function' ? formatCurrency(item.price) : (item.price.toLocaleString('vi-VN') + 'đ');
    const formattedSubtotal = typeof formatCurrency === 'function' ? formatCurrency(subtotal) : (subtotal.toLocaleString('vi-VN') + 'đ');
    return `
      <tr style="border-bottom: 1px solid #eee;">
        <td style="padding: 12px; display: flex; align-items: center; gap: 12px;">
          <img src="${item.image}" alt="${item.name}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 4px;">
          <strong>${item.name}</strong>
        </td>
        <td style="padding: 12px;">${formattedPrice}</td>
        <td style="padding: 12px; text-align: center;">
          <button onclick="updateQuantity(${item.id}, -1)" style="padding: 4px 8px; cursor: pointer;">-</button>
          <span style="margin: 0 8px; font-weight: 600;">${item.quantity}</span>
          <button onclick="updateQuantity(${item.id}, 1)" style="padding: 4px 8px; cursor: pointer;">+</button>
        </td>
        <td style="padding: 12px; font-weight: 600; color: #b35e27;">${formattedSubtotal}</td>
        <td style="padding: 12px; text-align: center;">
          <button onclick="removeFromCart(${item.id})" style="color: red; border: none; background: none; cursor: pointer; font-size: 1.1rem;">
            <i class="fa-solid fa-trash"></i>
          </button>
        </td>
      </tr>
    `;
  }).join('');

  if (totalElem) {
    totalElem.textContent = typeof formatCurrency === 'function' ? formatCurrency(totalMoney) : (totalMoney.toLocaleString('vi-VN') + 'đ');
  }
}

// Khởi chạy khi mở trang
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
  renderCart();
});

// Đồng bộ badge nếu giỏ hàng được thay đổi ở một tab trình duyệt khác.
window.addEventListener('storage', (event) => {
  if (event.key === CART_KEY) updateCartBadge();
});