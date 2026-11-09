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
// 2. Lưu giỏ hàng vào localStorage
function saveCart(cart) {
 localStorage.setItem(CART_KEY, JSON.stringify(cart));
}
// 3. Thêm sản phẩm vào giỏ (xử lý không tạo dòng trùng)
function addToCart(productId, quantity = 1) {
 const product = getProductById(productId);
 if (!product) return;
 const cart = getCart();
 const existing = cart.find(item => item.id === product.id);
 if (existing) {
   existing.quantity += quantity; // Nếu trùng thì tăng số lượng
 } else {
   cart.push({
     id: product.id,
     name: product.name,
     price: product.price,
     image: product.image,
     quantity: quantity
   });
 }
 saveCart(cart);
 alert(`Đã thêm "${product.name}" vào giỏ hàng thành công!`);
 renderCart();
}
// 4. Cập nhật số lượng (Tăng / Giảm)
function updateQuantity(productId, change) {
 let cart = getCart();
 const item = cart.find(p => p.id === productId);
 if (item) {
   item.quantity += change;
   if (item.quantity <= 0) {
     cart = cart.filter(p => p.id !== productId); // Nếu số lượng = 0 thì xóa
   }
   saveCart(cart);
   renderCart();
 }
}
// 5. Xóa hoàn toàn sản phẩm khỏi giỏ
function removeFromCart(productId) {
 if (confirm('Bạn có chắc chắn muốn xóa trải nghiệm này khỏi giỏ hàng?')) {
   let cart = getCart();
   cart = cart.filter(p => p.id !== productId);
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
   return `
     <tr style="border-bottom: 1px solid #eee;">
       <td style="padding: 12px; display: flex; align-items: center; gap: 12px;">
         <img src="${item.image}" alt="${item.name}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 4px;">
         <strong>${item.name}</strong>
       </td>
       <td style="padding: 12px;">${formatCurrency(item.price)}</td>
       <td style="padding: 12px; text-align: center;">
         <button onclick="updateQuantity(${item.id}, -1)" style="padding: 4px 8px; cursor: pointer;">-</button>
         <span style="margin: 0 8px; font-weight: 600;">${item.quantity}</span>
         <button onclick="updateQuantity(${item.id}, 1)" style="padding: 4px 8px; cursor: pointer;">+</button>
       </td>
       <td style="padding: 12px; font-weight: 600; color: #b35e27;">${formatCurrency(subtotal)}</td>
       <td style="padding: 12px; text-align: center;">
         <button onclick="removeFromCart(${item.id})" style="color: red; border: none; background: none; cursor: pointer; font-size: 1.1rem;">
           <i class="fa-solid fa-trash"></i>
         </button>
       </td>
     </tr>
   `;
 }).join('');
 if (totalElem) totalElem.textContent = formatCurrency(totalMoney);
}
// Khởi chạy khi mở trang
document.addEventListener('DOMContentLoaded', () => {
 renderCart();
});
