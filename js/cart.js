/**
 * DỰ ÁN: NÉT VIỆT
 * File: js/cart.js
 * Nhiệm vụ: Xử lý giỏ hàng: Thêm, Tăng/Giảm số lượng, Xóa, Tính tổng tiền và Cập nhật icon Header
 */

const CART_KEY = 'netviet_cart';

// 1. Lấy dữ liệu giỏ hàng từ localStorage
function getCart() {
  const data = localStorage.getItem(CART_KEY);
  return data ? JSON.parse(data) : [];
}

// 2. Lưu mảng giỏ hàng vào localStorage
function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

// 3. Cập nhật con số hiển thị trên icon Header ở mọi trang
function updateCartBadge() {
  const badge = document.getElementById('cart-count-badge');
  if (!badge) return;
  const cart = getCart();
  const totalCount = cart.reduce((sum, item) => sum + (parseInt(item.quantity, 10) || 1), 0);
  badge.textContent = totalCount;
}

// 4. Thêm sản phẩm vào giỏ (FIX LỖI CỘNG DỒN SỐ LƯỢNG KHI THÊM LẠI)
function addToCart(productId, quantity = 1) {
  const pId = parseInt(productId, 10);
  const qty = parseInt(quantity, 10) || 1;

  let cart = getCart();
  const existingIndex = cart.findIndex(item => parseInt(item.id, 10) === pId);

  if (existingIndex !== -1) {
    // Đã có trong giỏ -> Cộng dồn số lượng
    cart[existingIndex].quantity = (parseInt(cart[existingIndex].quantity, 10) || 0) + qty;
  } else {
    // Chưa có -> Tìm thông tin trong danh sách products
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
  if (typeof renderCart === 'function') {
    renderCart();
  }
  alert('Đã thêm trải nghiệm vào hành trình của bạn thành công!');
}

// 5. Cập nhật số lượng (+ / -) trong trang giỏ hàng
function updateQuantity(productId, change) {
  const pId = parseInt(productId, 10);
  let cart = getCart();
  const item = cart.find(p => parseInt(p.id, 10) === pId);

  if (item) {
    item.quantity = (parseInt(item.quantity, 10) || 0) + change;
    if (item.quantity <= 0) {
      cart = cart.filter(p => parseInt(p.id, 10) !== pId);
    }
    saveCart(cart);
    renderCart();
    updateCartBadge();
  }
}

// 6. Xóa hoàn toàn một sản phẩm khỏi giỏ
function removeFromCart(productId) {
  const pId = parseInt(productId, 10);
  if (confirm('Bạn có chắc chắn muốn xóa trải nghiệm này khỏi hành trình?')) {
    let cart = getCart();
    cart = cart.filter(p => parseInt(p.id, 10) !== pId);
    saveCart(cart);
    renderCart();
    updateCartBadge();
  }
}

// 7. Hiển thị danh sách giỏ hàng và tính tổng chi phí (dành cho cart.html)
function renderCart() {
  const tbody = document.getElementById('cart-items-body');
  const emptyMsg = document.getElementById('empty-cart-message');
  const contentWrapper = document.getElementById('cart-content-wrapper');
  const totalElem = document.getElementById('cart-total-price');

  if (!tbody) return;

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

    return `
      <tr style="border-bottom: 1px solid #eef2f0;">
        <td style="padding: 14px 16px; display: flex; align-items: center; gap: 14px;">
          <img src="${item.image}" alt="${item.name}" style="width: 65px; height: 65px; object-fit: cover; border-radius: 6px;">
          <div>
            <strong style="color: #173c2e; font-size: 0.95rem; display: block; margin-bottom: 4px;">${item.name}</strong>
            <small style="color: #777;">Mã trải nghiệm: #${item.id}</small>
          </div>
        </td>
        <td style="padding: 14px 16px; font-weight: 500; color: #444;">
          ${typeof formatCurrency === 'function' ? formatCurrency(item.price) : item.price.toLocaleString('vi-VN') + ' đ'}
        </td>
        <td style="padding: 14px 16px; text-align: center;">
          <div style="display: inline-flex; align-items: center; border: 1px solid #ccc; border-radius: 4px; overflow: hidden;">
            <button onclick="updateQuantity(${item.id}, -1)" 
                    style="padding: 6px 12px; background: #f5f5f5; border: none; cursor: pointer; font-weight: bold;">-</button>
            <span style="padding: 0 12px; font-weight: 600; min-width: 25px; text-align: center;">${item.quantity}</span>
            <button onclick="updateQuantity(${item.id}, 1)" 
                    style="padding: 6px 12px; background: #f5f5f5; border: none; cursor: pointer; font-weight: bold;">+</button>
          </div>
        </td>
        <td style="padding: 14px 16px; font-weight: 700; color: #b35e27;">
          ${typeof formatCurrency === 'function' ? formatCurrency(subtotal) : subtotal.toLocaleString('vi-VN') + ' đ'}
        </td>
        <td style="padding: 14px 16px; text-align: center;">
          <button onclick="removeFromCart(${item.id})" 
                  title="Xóa trải nghiệm này"
                  style="color: #d9534f; background: none; border: none; cursor: pointer; font-size: 1.1rem;">
            🗑️
          </button>
        </td>
      </tr>
    `;
  }).join('');

  if (totalElem) {
    totalElem.textContent = typeof formatCurrency === 'function' ? formatCurrency(totalMoney) : totalMoney.toLocaleString('vi-VN') + ' đ';
  }
}

// Khởi chạy khi nạp trang bất kỳ
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
  if (typeof renderCart === 'function') {
    renderCart();
  }
});
