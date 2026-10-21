# THIẾT KẾ VÀ XÂY DỰNG WEBSITE NÉT VIỆT HỖ TRỢ ĐẶT LỊCH TRẢI NGHIỆM VĂN HÓA BẢN ĐỊA VIỆT NAM 

## 1. Giới Thiệu Dự Án

Nét Việt là nền tảng website hỗ trợ người dùng khám phá và đặt lịch tham gia các trải nghiệm văn hóa bản địa tại Việt Nam, bao gồm: tham quan làng nghề truyền thống, thực hành làm đồ thủ công, trải nghiệm ẩm thực vùng miền, tìm hiểu phong tục và đời sống địa phương.

### Vấn Đề Cần Giải Quyết
Hiện nay, thông tin về các hoạt động trải nghiệm văn hóa còn nằm phân tán trên nhiều website và nền tảng mạng xã hội khác nhau. Điều này làm người dùng mất nhiều thời gian tìm kiếm, so sánh và kiểm tra lịch tổ chức. Việc thiếu thống nhất về giá cả, thời lượng, sức chứa cũng như điều kiện tham gia gây nhiều rào cản trong việc đưa ra quyết định đặt chỗ.

### Giải Pháp Nét Việt Mang Lại
Nét Việt cung cấp một nền tảng tập trung giúp:
* **Khám phá dễ dàng:** Phân loại theo vùng miền, tỉnh thành và loại hình hoạt động.
* **Thông tin minh bạch:** Cung cấp chi tiết nội dung, giá cả, thời lượng, sức chứa và kiểm tra số chỗ khả dụng theo thời gian thực.
* **Gắn kết giá trị:** Kết hợp nội dung giới thiệu chuyên sâu về ý nghĩa văn hóa bản địa đi kèm dịch vụ đặt lịch thực tế.

---

## 2. Khách Hàng Mục Tiêu

* **Người trẻ & Nhóm bạn (18–30 tuổi):** Sinh viên, người mới đi làm đam mê du lịch trải nghiệm, khám phá văn hóa và chụp ảnh lưu niệm.
* **Khách đi theo nhóm (25–50 tuổi):** Đại diện gia đình, trường học, doanh nghiệp có nhu cầu tổ chức hoạt động ngoại khóa, giáo dục trải nghiệm hoặc gắn kết tập thể (teambuilding).
* **Khách du lịch nước ngoài (20–60 tuổi):** Du khách quốc tế mong muốn tìm hiểu sâu về đời sống, làng nghề và ẩm thực truyền thống Việt Nam.

---

## 3. Chức Năng Hệ Thống

### 3.1. Dành Cho Khách Hàng (Customer Features)
* **Tài khoản & Hồ sơ:** Đăng ký, đăng nhập, khôi phục mật khẩu, quản lý thông tin cá nhân, danh sách yêu thích, nhận thông báo hệ thống.
* **Khám phá & Tìm kiếm:**
  * Xem trang chủ, bản đồ văn hóa Việt Nam và kho bài viết giới thiệu văn hóa.
  * Tìm kiếm, lọc (theo giá, địa điểm, loại hình), sắp xếp và xem chi tiết trải nghiệm.
* **Đặt lịch & Thanh toán:**
  * Chọn ngày, khung giờ, số lượng người, kiểm tra số chỗ còn trống.
  * Tạo booking, áp dụng mã ưu đãi (voucher) và ghi nhận thanh toán.
  * Quản lý danh sách/lịch sử đặt chỗ, xem trạng thái đơn và gửi yêu cầu hủy booking theo chính sách.
* **Tương tác & Đánh giá:** Gửi đánh giá/bình luận sau khi hoàn thành trải nghiệm, chia sẻ Dấu ấn Việt.
* **Thông tin chung:** Tra cứu câu hỏi thường gặp (FAQ), điều khoản, chính sách và liên hệ hỗ trợ.

### 3.2. Dành Cho Quản Trị Viên 
* **Dashboard:** Thống kê tổng quan về doanh thu, lượt đặt chỗ và người dùng.
* **Quản lý danh mục:** Trải nghiệm, vùng miền, tỉnh thành, địa điểm và loại hình văn hóa.
* **Quản lý vận hành:** Lịch tổ chức, sức chứa, danh sách booking và xử lý trạng thái đặt chỗ.
* **Quản lý tài chính & Khuyến mãi:** Dữ liệu thanh toán và chương trình mã giảm giá.
* **Quản lý nội dung & Người dùng:** Phân quyền khách hàng, kiểm duyệt đánh giá, quản lý bài viết văn hóa và cài đặt chính sách hệ thống.

---

## 4. Công Nghệ Sử Dụng

| Hạng mục | Công nghệ | Mục đích sử dụng |
| :--- | :--- | :--- |
| **UI/UX Design** | Figma | Thiết kế giao diện, wireframe và prototype tương tác |
| **Frontend** | HTML, CSS, JavaScript | Xây dựng giao diện người dùng và xử lý logic phía client |
| **Backend** | Node.js, Express | Xây dựng RESTful API và xử lý logic nghiệp vụ |
| **Database** | MySQL | Lưu trữ dữ liệu hệ thống (người dùng, booking, trải nghiệm...) |
| **Quản lý dự án** | GitHub | Quản lý mã nguồn, phân công nhiệm vụ qua Issues & Projects |

---

## 5. Phân công công việc

| STT | Họ và Tên | Vai Trò | Phân Công Nhiệm Vụ |
| :---: | :--- | :--- | :--- |
| **1** | **Phạm Nguyễn Minh Trang** | **Nhóm trưởng** | Quản lý dự án, phân tích yêu cầu, phân công công việc, quản lý GitHub repository & tiến độ tích hợp. |
| **2** | **Đặng Thị Thảo Sương** | UI/UX Designer 1 | Thiết kế giao diện trang Khám phá, Vùng miền, Địa điểm và Chi tiết trải nghiệm. |
| **3** | **Ngô Mỹ Châu** | UI/UX Designer 2 | Thiết kế giao diện Tài khoản, Hồ sơ, Đặt chỗ, Thanh toán và Trang quản trị (Admin). |
| **4** | **Lê Bảo Ngọc** | Frontend Developer 1 | Phát triển giao diện Khám phá, Tìm kiếm, Địa điểm và Nội dung bài viết trải nghiệm. |
| **5** | **Huỳnh Khánh An** | Frontend Developer 2 | Phát triển giao diện Tài khoản, Đặt chỗ, Thanh toán, Lịch sử đặt chỗ và Quản trị. |
| **6** | **Nguyễn Phúc Như** | Backend Developer 1 | Thiết kế Database và phát triển API cho Tài khoản, Địa điểm, Trải nghiệm & Nội dung. |
| **7** | **Lê Anh Khoa** | Backend Developer 2 | Xây dựng API và logic nghiệp vụ cho Lịch tổ chức, Sức chứa, Booking, Mã ưu đãi & Thanh toán. |
| **8** | **Trần Thị Kim Ngân** | Tester & Integration | Lập kế hoạch kiểm thử (Test Plan), quản lý lỗi (Bugs), kiểm tra tích hợp và hoàn thiện tài liệu dự án. |

---

## 6. Kế hoạch thực hiện

### Chi Tiết Từng Giai Đoạn

1. **Khảo sát & Xác định yêu cầu (18/10 – 21/10/2026):** Khảo sát các trang web tham khảo, chốt phạm vi, tính năng và lập tài liệu yêu cầu hệ thống.
2. **Thiết kế UI/UX (22/10 – 08/11/2026):** Thiết kế giao diện chi tiết và tạo Prototype trên Figma.
3. **Phát triển Frontend & Backend (09/11 – 29/11/2026):** 
   * Frontend: Dựng giao diện bằng HTML/CSS/JS.
   * Backend: Xây dựng cơ sở dữ liệu MySQL, viết API bằng Node.js & Express.
4. **Tích hợp & Kiểm thử (30/11 – 10/12/2026):** Ghép nối API với Frontend, kiểm thử toàn bộ tính năng và sửa lỗi.
5. **Hoàn thiện & Bàn giao (11/12 – 16/12/2026):** Rà soát sản phẩm cuối cùng, đóng gói tài liệu và chuẩn bị báo cáo.

---

## 7. Liên Kết Tài Liệu

* [Tài liệu Bảng yêu cầu (REQUIREMENTS.md)](https://github.com/trangpham31241024211-sketch/net-viet-cultural-experiences/blob/main/REQUIREMENTS.md)
* [Tài liệu Kế hoạch thực hiện (PROJECT_PLAN.md)](https://github.com/trangpham31241024211-sketch/net-viet-cultural-experiences/blob/main/PROJECT_PLAN.md)
