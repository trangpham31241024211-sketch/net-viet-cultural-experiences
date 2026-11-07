
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


