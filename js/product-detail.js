/**
 * DỰ ÁN: NÉT VIỆT
 * File: js/product-detail.js
 * Phụ trách: Huỳnh Khánh An
 * Nhiệm vụ: Đọc ID từ URL, tìm sản phẩm và hiển thị thông tin chi tiết
 */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Đọc tham số ?id= từ thanh địa chỉ URL
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id');
  const mainContent = document.getElementById('detail-main-content') || document.querySelector('main');

  // 2. Xử lý trường hợp không có ID trên URL
  if (!productId) {
    showNotFound(mainContent);
    return;
  }

  // 3. Tìm sản phẩm trong mảng dữ liệu (dùng hàm của Thảo Sương)
  const product = typeof getProductById === 'function' ? getProductById(productId) : null;

  // 4. Xử lý trường hợp ID không tồn tại trong danh sách
  if (!product) {
    showNotFound(mainContent);
    return;
  }

  // 5. Cập nhật tiêu đề trang web
  document.title = `${product.name} | Nét Việt`;

  // 6. Đổ dữ liệu vào các phần tử giao diện
  const imgElem = document.getElementById('detail-image') || document.getElementById('mainImage');
  const titleElem = document.getElementById('detail-title') || document.querySelector('.product-title');
  const catElem = document.getElementById('detail-category') || document.querySelector('.product-meta-tag');
  const locElem = document.getElementById('detail-location') || document.querySelector('.product-location');
  const priceElem = document.getElementById('detail-price') || document.querySelector('.product-price strong');
  const descElem = document.getElementById('detail-description') || document.querySelector('.product-overview p');

  if (imgElem) {
    imgElem.src = product.image;
    imgElem.alt = product.name;
  }
  if (titleElem) titleElem.textContent = product.name;
  if (catElem) catElem.textContent = product.categoryName;
  if (locElem) locElem.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${product.location}`;
  if (priceElem && typeof formatCurrency === 'function') priceElem.textContent = formatCurrency(product.price);
  if (descElem) descElem.textContent = product.description;

  // 7. Lấy số lượng khách hiện tại
  const getSelectedQuantity = () => {
    const countElem = document.getElementById('peopleCount');
    return countElem ? (parseInt(countElem.textContent, 10) || 1) : 1;
  };

  // 8. Gắn sự kiện cho nút "Thêm vào giỏ"
  const btnAddToCart = document.getElementById('btn-add-to-cart') || document.getElementById('detail-add-to-cart');
  if (btnAddToCart) {
    btnAddToCart.addEventListener('click', (e) => {
      e.preventDefault();
      const qty = getSelectedQuantity();
      if (typeof addToCart === 'function') {
        addToCart(product.id, qty);
      } else {
        alert(`Đã thêm ${qty} vé "${product.name}" vào giỏ hàng!`);
      }
    });
  }

  // 9. Gắn sự kiện cho nút "Đặt trải nghiệm ngay" (Thêm vào giỏ và chuyển đến cart.html)
  const btnBookNow = document.getElementById('btn-book-now');
  if (btnBookNow) {
    btnBookNow.addEventListener('click', (e) => {
      e.preventDefault();
      const qty = getSelectedQuantity();
      if (typeof addToCart === 'function') {
        addToCart(product.id, qty);
      }
      window.location.href = 'cart.html';
    });
  }
});

// Hàm hiển thị thông báo khi ID không hợp lệ hoặc không tìm thấy
function showNotFound(container) {
  if (!container) return;
  container.innerHTML = `
    <div style="text-align: center; padding: 80px 20px; min-height: 50vh;">
      <h2 style="font-size: 1.8rem; color: #b35e27; margin-bottom: 12px;">Không tìm thấy trải nghiệm!</h2>
      <p style="color: #666; margin-bottom: 24px;">Trải nghiệm bạn đang tìm kiếm không tồn tại hoặc đã bị gỡ bỏ.</p>
      <a href="products.html" class="button button-gold" style="padding: 10px 20px; text-decoration: none; border-radius: 6px;">
        &larr; Quay lại danh sách trải nghiệm
      </a>
    </div>
  `;
}