/**
 * DỰ ÁN: NÉT VIỆT
 * File: js/cart.js
 * Phụ trách: Huỳnh Phúc Như
 * Nhiệm vụ: Quản lý giỏ hàng và đặt trải nghiệm
 */

function addToCart(productId) {
  let product = null;
  if (typeof getProductById === 'function') {
    product = getProductById(productId);
  } else if (typeof products !== 'undefined') {
    product = products.find(p => String(p.id) === String(productId));
  }

  const productName = product ? product.name : `Trải nghiệm #${productId}`;
  alert(`Đã thêm "${productName}" vào giỏ hàng thành công!`);
}
