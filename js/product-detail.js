/**
 * DỰ ÁN: NÉT VIỆT
 * File: js/product-detail.js
 * Phụ trách: Huỳnh Khánh An
 * Nhiệm vụ: Đọc ID từ URL, tìm sản phẩm và hiển thị thông tin chi tiết
 */
const params = new URLSearchParams(window.location.search);
const productId = params.get('id');
const mainContent = document.getElementById('product-main') || document.querySelector('main');

if (!productId) {
  showNotFound(mainContent);
} else {
  const product = typeof getProductById === 'function' ? getProductById(productId) : null;

  if (!product) {
    showNotFound(mainContent);
  } else {
    const displayName = product.displayName || product.name;
    document.title = `${displayName} | Nét Việt`;

    const imgElem = document.getElementById('mainImage') || document.getElementById('detail-image');
    const titleElem = document.getElementById('detail-title') || document.querySelector('.product-title');
    const catElem = document.getElementById('detail-category') || document.querySelector('.product-meta-tag');
    const locElem = document.getElementById('detail-location') || document.querySelector('.product-location');
    const priceElem = document.getElementById('detail-price') || document.querySelector('.product-price strong');
    const descElem = document.getElementById('detail-description') || document.querySelector('.product-overview p');
    const ratingElem = document.getElementById('detail-rating');
    const durationElem = document.getElementById('detail-duration');
    const thumbnailsElem = document.getElementById('galleryThumbs');
    const thumbnails = Array.isArray(product.thumbnails) ? product.thumbnails : [];

    if (imgElem) {
      imgElem.src = product.image;
      imgElem.alt = displayName;
    }
    if (titleElem) {
      titleElem.textContent = displayName;
      if (displayName !== product.name) titleElem.title = product.name;
    }
    if (catElem) catElem.textContent = product.categoryName;
    if (locElem) locElem.textContent = product.location;
    if (priceElem && typeof formatCurrency === 'function') {
      priceElem.textContent = formatCurrency(product.price);
    }
    if (descElem) descElem.textContent = product.description;
    if (ratingElem) ratingElem.textContent = `★ ${Number(product.rating).toFixed(1)}`;
    if (durationElem) durationElem.textContent = product.duration;

    if (thumbnailsElem) {
      thumbnailsElem.replaceChildren();
      thumbnails.forEach((imagePath, index) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'thumb-item';
        button.setAttribute('aria-label', `Xem ảnh ${index + 2}: ${displayName}`);
        button.setAttribute('aria-pressed', 'false');

        const image = document.createElement('img');
        image.src = imagePath;
        image.alt = `${displayName} - Ảnh ${index + 2}`;
        image.loading = 'lazy';
        button.append(image);
        thumbnailsElem.append(button);
      });
      thumbnailsElem.hidden = thumbnails.length === 0;
    }

    const lightbox = document.getElementById('lightboxModal');
    if (lightbox) lightbox.setAttribute('aria-label', `Thư viện ảnh ${displayName}`);

    const lightboxImage = document.getElementById('lightboxImg');
    if (lightboxImage) {
      lightboxImage.src = product.image;
      lightboxImage.alt = displayName;
    }
    const lightboxCounter = document.getElementById('lightboxCounter');
    if (lightboxCounter) lightboxCounter.textContent = `1 / ${thumbnails.length + 1}`;

    const storySection = document.getElementById('bat-trang-story');
    if (storySection) {
      storySection.hidden = !/bát tràng/i.test(`${product.name} ${product.location}`);
    }

    const relatedContainer = document.getElementById('related-experiences');
    if (relatedContainer) {
      const relatedCandidates = products
        .filter((candidate) => candidate.id !== product.id && candidate.category === product.category)
        .sort((first, second) =>
          Math.abs(first.price - product.price) - Math.abs(second.price - product.price)
        );
      const relatedImagePaths = new Set([product.image, ...thumbnails]);
      const relatedProducts = relatedCandidates.filter((candidate) => {
        if (relatedImagePaths.has(candidate.image)) return false;
        relatedImagePaths.add(candidate.image);
        return true;
      }).slice(0, 4);

      relatedContainer.replaceChildren();
      relatedProducts.forEach((relatedProduct) => {
        const relatedName = relatedProduct.displayName || relatedProduct.name;
        const card = document.createElement('article');
        card.className = 'product-card';

        const image = document.createElement('img');
        image.className = 'product-card-img';
        image.src = relatedProduct.image;
        image.alt = relatedName;
        image.loading = 'lazy';
        card.append(image);

        const body = document.createElement('div');
        body.className = 'product-card-body';

        const title = document.createElement('div');
        title.className = 'product-card-title';
        const link = document.createElement('a');
        link.href = `product-detail.html?id=${encodeURIComponent(relatedProduct.id)}`;
        link.textContent = relatedName;
        if (relatedName !== relatedProduct.name) link.title = relatedProduct.name;
        title.append(link);
        body.append(title);

        const location = document.createElement('div');
        location.style.cssText = 'font-size: 0.8rem; color: var(--text-muted);';
        const locationIcon = document.createElement('i');
        locationIcon.className = 'fa-solid fa-location-dot';
        locationIcon.setAttribute('aria-hidden', 'true');
        location.append(locationIcon, document.createTextNode(` ${relatedProduct.location}`));
        body.append(location);

        const meta = document.createElement('div');
        meta.className = 'product-card-meta';
        const duration = document.createElement('span');
        duration.textContent = `⏱ ${relatedProduct.duration}`;
        const price = document.createElement('span');
        price.style.cssText = 'font-weight: 700; color: var(--accent-gold);';
        price.textContent = `${formatCurrency(relatedProduct.price)}/người`;
        meta.append(duration, price);
        body.append(meta);

        card.append(body);
        relatedContainer.append(card);
      });
    }

    const getSelectedQuantity = () => {
      const countElem = document.getElementById('peopleCount');
      return countElem ? (parseInt(countElem.textContent, 10) || 1) : 1;
    };

    const btnAddToCart = document.getElementById('btn-add-to-cart') || document.getElementById('detail-add-to-cart');
    if (btnAddToCart) {
      btnAddToCart.addEventListener('click', (event) => {
        event.preventDefault();
        const quantity = getSelectedQuantity();
        if (typeof addToCart === 'function') {
          addToCart(product.id, quantity);
        } else {
          alert(`Đã thêm ${quantity} vé "${product.name}" vào giỏ hàng!`);
        }
      });
    }

    const btnBookNow = document.getElementById('btn-book-now');
    if (btnBookNow) {
      btnBookNow.addEventListener('click', (event) => {
        event.preventDefault();
        const quantity = getSelectedQuantity();
        if (typeof addToCart === 'function') {
          addToCart(product.id, quantity);
        }
        window.location.href = 'cart.html';
      });
    }
  }
}

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
