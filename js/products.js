
/**
 * DỰ ÁN: NÉT VIỆT - TRẢI NGHIỆM VĂN HÓA BẢN ĐỊA VIỆT NAM
 * File: js/products.js
 * Mục đích: Lưu trữ dữ liệu 8 trải nghiệm dùng chung
 * và cung cấp các hàm tiện ích cho website.
 */
// ======================================================
// 1. DỮ LIỆU 8 TRẢI NGHIỆM
// ======================================================

const products = [
  {
    id: 1,
    name: "Làm tranh dân gian Đông Hồ",
    price: 350000,
    category: "craft",
    categoryName: "Làng nghề",
    region: "north",
    location: "Bắc Ninh",
    duration: "2 giờ",
    rating: 4.9,
    image: "images/related-3.jpg",
    description: "Tìm hiểu nghệ thuật tranh dân gian Đông Hồ, khám phá kỹ thuật in tranh bằng bản khắc gỗ và tự tay tạo nên một tác phẩm mang đậm bản sắc văn hóa Việt Nam."
  },
  {
    id: 2,
    name: "Tự tay làm gốm ở Bát Tràng",
    price: 250000,
    category: "craft",
    categoryName: "Làng nghề",
    region: "north",
    location: "Gia Lâm, Hà Nội",
    duration: "2,5 giờ",
    rating: 4.8,
    image: "images/pottery-main.jpg",
    description: "Trải nghiệm làm gốm tại làng nghề Bát Tràng, tự tay nhào nặn đất sét, tạo hình trên bàn xoay và trang trí sản phẩm dưới sự hướng dẫn của nghệ nhân."
  },
  {
    id: 3,
    name: "Ghé thăm làng hương Thủy Xuân",
    price: 180000,
    category: "craft",
    categoryName: "Làng nghề",
    region: "central",
    location: "Huế",
    duration: "1,5 giờ",
    rating: 4.9,
    image: "images/related-3.jpg",
    description: "Ghé thăm làng hương Thủy Xuân, tìm hiểu quy trình làm hương truyền thống và khám phá những bó hương rực rỡ sắc màu gắn liền với đời sống văn hóa xứ Huế."
  },
  {
    id: 4,
    name: "Ngắm bình minh trên vịnh Hạ Long",
    price: 650000,
    category: "nature",
    categoryName: "Thiên nhiên",
    region: "north",
    location: "Vịnh Hạ Long, Quảng Ninh",
    duration: "4 giờ",
    rating: 5.0,
    image: "images/about-landscape.jpg",
    description: "Khám phá cảnh quan thiên nhiên vịnh Hạ Long, chiêm ngưỡng ánh bình minh trên mặt biển và những dãy núi đá vôi hùng vĩ của vùng di sản."
  },
  {
    id: 5,
    name: "Vào bếp cùng người Huế",
    price: 420000,
    category: "food",
    categoryName: "Ẩm thực",
    region: "central",
    location: "Huế",
    duration: "3 giờ",
    rating: 4.9,
    image: "images/about-festival.jpg",
    description: "Khám phá nét đặc trưng của ẩm thực Huế thông qua hoạt động chuẩn bị nguyên liệu, chế biến món ăn truyền thống và thưởng thức thành quả cùng người địa phương."
  },
  {
    id: 6,
    name: "Bình minh trên chợ nổi Cái Răng",
    price: 390000,
    category: "culture",
    categoryName: "Văn hóa",
    region: "south",
    location: "Cần Thơ",
    duration: "3 giờ",
    rating: 4.8,
    image: "images/related-4.jpg",
    description: "Trải nghiệm không khí mua bán nhộn nhịp vào buổi sáng tại chợ nổi Cái Răng, tìm hiểu đời sống thương hồ và nét văn hóa sông nước đặc trưng của miền Tây Nam Bộ."
  },
  {
    id: 7,
    name: "Đêm phố cổ Hội An và đèn hoa đăng",
    price: 320000,
    category: "culture",
    categoryName: "Văn hóa",
    region: "central",
    location: "Hội An, Quảng Nam",
    duration: "2 giờ",
    rating: 4.9,
    image: "images/related-1.jpg",
    description: "Dạo bước qua những con phố cổ Hội An lung linh ánh đèn lồng, khám phá kiến trúc và đời sống văn hóa địa phương, đồng thời tham gia hoạt động thả đèn hoa đăng."
  },
  {
    id: 8,
    name: "Len lỏi rừng tràm Trà Sư xanh mát",
    price: 480000,
    category: "nature",
    categoryName: "Thiên nhiên",
    region: "south",
    location: "An Giang",
    duration: "3 giờ",
    rating: 4.8,
    image: "images/about-heritage.jpg",
    description: "Khám phá hệ sinh thái rừng tràm Trà Sư bằng thuyền, len lỏi qua những dòng nước phủ bèo xanh và tìm hiểu cảnh quan thiên nhiên đặc trưng của vùng đất An Giang."
  }
];
// ==============================================================
// 2. CÁC HÀM TIỆN ÍCH DÙNG CHUNG CHO TOÀN NHÓM
// ==============================================================
/**
* Hàm định dạng tiền tệ Việt Nam (VNĐ)
* @param {number} amount - Số tiền dạng số (ví dụ: 250000)
* @returns {string} - Chuỗi định dạng (ví dụ: "250.000 đ")
*/
function formatCurrency(amount) {
 if (typeof amount !== 'number' || isNaN(amount)) return '0 đ';
 return amount.toLocaleString('vi-VN') + ' đ';
}
/**
* Hàm tìm kiếm một sản phẩm dựa vào ID
* (Dành cho Khánh An làm trang chi tiết và Phúc Như làm giỏ hàng)
* @param {number|string} id - Mã sản phẩm
* @returns {object|undefined} - Đối tượng sản phẩm hoặc undefined nếu không tìm thấy
*/
function getProductById(id) {
 return products.find(item => item.id === Number(id));
}

// ==============================================================
// 3. HÀM HIỂN THỊ DANH SÁCH SẢN PHẨM (Phụ trách: Ngô Mỹ Châu)
// ==============================================================
/**
 * Hiển thị danh sách sản phẩm động ra giao diện HTML
 * @param {Array} productList - Mảng các sản phẩm cần hiển thị
 */
function renderProducts(productList) {
  const container = document.getElementById('products-grid');
  const emptyMessage = document.getElementById('no-products-message');

  // Nếu trang hiện tại không có container (ví dụ trang about hoặc cart) thì thoát
  if (!container) return;

  // TRƯỜNG HỢP 1: Danh sách không có sản phẩm nào
  if (!productList || productList.length === 0) {
    container.innerHTML = '';
    if (emptyMessage) emptyMessage.style.display = 'block';
    return;
  }

  // TRƯỜNG HỢP 2: Có sản phẩm -> Ẩn thông báo rỗng và vẽ danh sách
  if (emptyMessage) emptyMessage.style.display = 'none';

  // Dùng .map() và cú pháp template string để render từng sản phẩm
  container.innerHTML = productList.map(item => `
    <article class="product-card" data-id="${item.id}" data-category="${item.category}">
<a href="product-detail.html?id=${item.id}" class="product-visual" aria-label="Xem chi tiết ${item.name}" style="position: relative; display: block; overflow: hidden;">
     <img src="${item.image}" alt="${item.name}" loading="lazy" style="width: 100%; height: 220px; object-fit: cover; display: block;">
     <span class="product-badge" style="position: absolute; top: 12px; left: 12px; z-index: 2;">${item.categoryName ? item.categoryName.toUpperCase() : 'TRẢI NGHIỆM'}</span>
   </a>
      <div class="product-info" style="padding: 16px; display: flex; flex-direction: column; flex-grow: 1;">
        <small style="color: #666; font-size: 0.8rem; margin-bottom: 6px;">📍 ${item.location} • ⏱️ ${item.duration}</small>
        <h3 style="margin: 0 0 8px 0; font-size: 1.1rem; line-height: 1.4;">
          <a href="product-detail.html?id=${item.id}" style="color: inherit; text-decoration: none;">
            ${item.name}
          </a>
        </h3>
        <p style="font-size: 0.88rem; color: #555; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; margin-bottom: 14px; line-height: 1.5;">
          ${item.description}
        </p>
        <div class="product-bottom" style="display: flex; justify-content: space-between; align-items: center; margin-top: auto; padding-top: 10px; border-top: 1px solid #eee;">
          <span class="product-price">
            <small style="display: block; font-size: 0.75rem; color: #888;">Giá từ</small>
            <strong style="color: #b35e27; font-size: 1.15rem;">${formatCurrency(item.price)}</strong>
          </span>
          <a href="product-detail.html?id=${item.id}" class="button button-gold" style="padding: 6px 14px; font-size: 0.85rem; text-decoration: none; border-radius: 4px;">
            Xem chi tiết &rarr;
          </a>
        </div>
      </div>
    </article>
  `).join('');
}

// Tự động kích hoạt hiển thị 8 sản phẩm khi trang web tải xong
document.addEventListener('DOMContentLoaded', () => {
  if (typeof products !== 'undefined' && Array.isArray(products)) {
    renderProducts(products);
  }
});
// ==============================================================

// ==============================================================
// 4. CHỨC NĂNG TÌM KIẾM, LỌC & SẮP XẾP
// (Phụ trách: Lê Bảo Ngọc)
// ==============================================================

function applyFilterAndSort() {
    const searchInput = document.getElementById('search-input');
    const keywordInput = document.getElementById('keyword');

    const categoryFilter = document.getElementById('category-filter');
    const experienceType = document.getElementById('experience-type');

    const sortPrice = document.getElementById('sort-price');

    // Lấy từ khóa tìm kiếm
    const keyword = (
        (searchInput && searchInput.value) ||
        (keywordInput && keywordInput.value) ||
        ''
    ).trim().toLowerCase();

    // Lấy danh mục được chọn
    let selectedCategory = 'all';

    if (categoryFilter && categoryFilter.value !== 'all') {
        selectedCategory = categoryFilter.value;
    } else if (experienceType && experienceType.value !== '') {
        selectedCategory = experienceType.value;
    }

    // Lấy lựa chọn sắp xếp giá
    const sortOption = sortPrice ? sortPrice.value : 'default';

    // Sao chép dữ liệu gốc
    let result = [...products];

    // 1. TÌM KIẾM THEO TÊN VÀ ĐỊA ĐIỂM
    if (keyword !== '') {
        result = result.filter(item =>
            item.name.toLowerCase().includes(keyword) ||
            item.location.toLowerCase().includes(keyword)
        );
    }

    // 2. LỌC THEO DANH MỤC
    if (selectedCategory !== 'all') {
        result = result.filter(item =>
            item.category === selectedCategory
        );
    }

    // 3. SẮP XẾP THEO GIÁ
    if (sortOption === 'low-to-high') {
        result.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'high-to-low') {
        result.sort((a, b) => b.price - a.price);
    }

    // 4. HIỂN THỊ KẾT QUẢ
    renderProducts(result);

    // Cập nhật số lượng kết quả
    const resultCount = document.getElementById('result-count');

    if (resultCount) {
        resultCount.textContent =
            `Tìm thấy ${result.length} trải nghiệm`;
    }
}


// ==============================================================
// 5. KHỞI TẠO SỰ KIỆN TÌM KIẾM VÀ LỌC
// ==============================================================

document.addEventListener('DOMContentLoaded', () => {

    const searchInput = document.getElementById('search-input');
    const keywordInput = document.getElementById('keyword');

    const categoryFilter = document.getElementById('category-filter');
    const experienceType = document.getElementById('experience-type');

    const sortPrice = document.getElementById('sort-price');

    const searchForm = document.getElementById('experience-search');

    const filterPills = document.querySelectorAll('.filter-pill');


    // 1. KẾT NỐI HAI Ô TÌM KIẾM
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            if (keywordInput) {
                keywordInput.value = searchInput.value;
            }

            applyFilterAndSort();
        });
    }

    if (keywordInput) {
        keywordInput.addEventListener('input', () => {
            if (searchInput) {
                searchInput.value = keywordInput.value;
            }

            applyFilterAndSort();
        });
    }

    // Ngăn form tìm kiếm tải lại trang
    if (searchForm) {
        searchForm.addEventListener('submit', event => {
            event.preventDefault();

            if (searchInput && keywordInput) {
                searchInput.value = keywordInput.value;
            }

            applyFilterAndSort();

            document.getElementById('danh-sach')
                ?.scrollIntoView({ behavior: 'smooth' });
        });
    }


    // 2. KẾT NỐI BỘ LỌC DANH MỤC
    function updateCategory(value) {
        if (categoryFilter) {
            categoryFilter.value = value;
        }

        if (experienceType) {
            experienceType.value = value === 'all' ? '' : value;
        }

        filterPills.forEach(pill => {
            const isActive = pill.dataset.filter === value;

            pill.classList.toggle('is-active', isActive);
            pill.setAttribute('aria-pressed', String(isActive));
        });

        applyFilterAndSort();
    }

    if (categoryFilter) {
        categoryFilter.addEventListener('change', () => {
            updateCategory(categoryFilter.value);
        });
    }

    if (experienceType) {
        experienceType.addEventListener('change', () => {
            updateCategory(experienceType.value || 'all');
        });
    }

    // Kết nối các nút lọc dạng pill
    filterPills.forEach(pill => {
        pill.addEventListener('click', () => {
            updateCategory(pill.dataset.filter);
        });
    });


    // 3. KẾT NỐI SẮP XẾP GIÁ
    if (sortPrice) {
        sortPrice.addEventListener('change', applyFilterAndSort);
    }


    // 4. ĐỌC DANH MỤC TỪ ĐƯỜNG DẪN URL
    const urlParams = new URLSearchParams(window.location.search);
    const categoryFromURL = urlParams.get('category');

    if (categoryFromURL) {
        updateCategory(categoryFromURL);
    } else {
        applyFilterAndSort();
    }

});
