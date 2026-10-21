# PHẠM VI VÀ CHỨC NĂNG WEBSITE - NÉT VIỆT

## 1. Mục tiêu và phạm vi
Nét Việt là website hỗ trợ khách hàng khám phá các trải nghiệm văn hóa bản địa Việt Nam (làm đồ thủ công, tham quan làng nghề, thưởng thức đặc sản, tìm hiểu phong tục), chọn lịch tổ chức, đặt chỗ trực tuyến và theo dõi booking. Website có khu vực quản trị để Quản trị viên quản lý trải nghiệm, địa điểm, lịch tổ chức, sức chứa, booking, thanh toán mô phỏng và nội dung liên quan.

Nhóm xây dựng tập trung vào luồng thương mại điện tử cốt lõi:
- Tìm kiếm và khám phá trải nghiệm (theo từ khóa, khu vực, loại hình)
- Xem thông tin chi tiết, điều kiện tham gia và chính sách
- Chọn lịch, số người và kiểm tra chỗ còn lại
- Tạo booking và ghi nhận kết quả thanh toán mô phỏng
- Theo dõi trạng thái booking, yêu cầu hủy theo chính sách (trước 48 giờ), đánh giá sau trải nghiệm
- Quản trị viên quản lý trải nghiệm, lịch, sức chứa, booking và thanh toán mô phỏng
- Công bố chính sách và điều kiện tham gia

Cấu trúc website gồm: Trang chủ, Khám phá vùng miền, Loại trải nghiệm, Giới thiệu, Lịch đặt của tôi. Các trang dùng chung (đăng ký, đăng nhập, hồ sơ cá nhân, thông báo trong hệ thống) truy cập thông qua biểu tượng tài khoản.

---

## 2. Vai trò người dùng

| Vai trò | Nhiệm vụ chính | Quyền hạn dự kiến |
| :--- | :--- | :--- |
| **Khách chưa đăng nhập** | • Khám phá văn hóa theo vùng miền <br>• Tìm kiếm, lọc và xem trải nghiệm <br>• Xem lịch và số chỗ còn lại <br>• Đọc bài viết, đánh giá, FAQ, chính sách <br>• Đăng ký / Đăng nhập <br>• Gửi câu hỏi liên hệ qua biểu mẫu | • Xem toàn bộ thông tin công khai và gửi biểu mẫu liên hệ <br>• Không tạo booking, không thanh toán, không gửi đánh giá và không có dữ liệu cá nhân |
| **Khách hàng** | • Đặt lịch trải nghiệm, thực hiện thanh toán mô phỏng <br>• Theo dõi booking và lịch sử <br>• Yêu cầu hủy booking theo chính sách <br>• Gửi đánh giá sau khi trải nghiệm hoàn thành <br>• Quản lý hồ sơ và thông báo trong hệ thống | • Có toàn bộ quyền của khách chưa đăng nhập <br>• Chỉ xem và thao tác trên dữ liệu của chính mình (hồ sơ, booking, thông báo) <br>• Chỉ đánh giá trải nghiệm khi booking đã hoàn thành, mỗi booking tối đa một lần <br>• Không truy cập khu vực quản trị |
| **Quản trị viên (Admin)** | • Quản lý trải nghiệm, vùng miền và địa điểm, loại hình, lịch và sức chứa <br>• Xử lý booking và theo dõi thanh toán mô phỏng <br>• Quản lý khách hàng, kiểm duyệt đánh giá, quản lý bài viết văn hóa, liên hệ <br>• Xem báo cáo/thống kê cơ bản và cấu hình chính sách | • Đăng nhập khu vực quản trị riêng và thực hiện các nghiệp vụ quản trị <br>• Không tạo booking thay khách trên giao diện khách hàng |

* **Lưu ý về phân quyền:** 
  - Không thêm vai trò nhân viên bán hàng hoặc nhân viên xử lý đơn: số lượng booking do Quản trị viên xử lý trực tiếp.
  - Không thêm vai trò Nghệ nhân/Đối tác vì chưa có cổng quản lý riêng, thông tin nghệ nhân và người hướng dẫn do Quản trị viên nhập khi quản lý trải nghiệm và bài viết.

---

## 3. Bảng chức năng khách hàng

| Mã | Chức năng | Người sử dụng | Mức độ ưu tiên |
| :--- | :--- | :--- | :--- |
| **F01** | Đăng ký tài khoản | Khách | Bắt buộc |
| **F02** | Đăng nhập và đăng xuất | Khách, Khách hàng | Bắt buộc |
| **F03** | Quản lý hồ sơ cá nhân | Khách hàng | Bắt buộc |
| **F04** | Thông báo trong hệ thống | Khách hàng | Trung bình |
| **F05** | Xem trang chủ | Khách | Bắt buộc |
| **F06** | Tìm kiếm nhanh | Khách | Bắt buộc |
| **F07** | Xem bản đồ văn hóa Việt Nam (bản đồ tĩnh vùng/tỉnh) | Khách | Bắt buộc |
| **F08** | Xem vùng miền và tỉnh thành | Khách | Bắt buộc |
| **F09** | Xem chi tiết địa điểm | Khách | Bắt buộc |
| **F10** | Xem kho bài viết văn hóa | Khách | Bắt buộc hoặc theo phạm vi |
| **F11** | Xem danh mục và danh sách trải nghiệm | Khách | Bắt buộc |
| **F12** | Tìm kiếm, lọc và sắp xếp trải nghiệm | Khách | Bắt buộc |
| **F13** | Xem chi tiết trải nghiệm | Khách | Bắt buộc |
| **F14** | Chọn lịch và kiểm tra chỗ còn lại | Khách | Bắt buộc |
| **F15** | Tạo booking | Khách hàng | Bắt buộc |
| **F16** | Thanh toán mô phỏng và ghi nhận kết quả | Khách hàng | Bắt buộc |
| **F17** | Gửi đánh giá sau trải nghiệm (khi hoàn thành) | Khách hàng | Bắt buộc |
| **F18** | Xem thông tin giới thiệu Nét Việt | Khách | Bắt buộc |
| **F19** | Liên hệ và gửi câu hỏi qua biểu mẫu | Khách | Bắt buộc |
| **F20** | Xem câu hỏi thường gặp (FAQ) | Khách | Bắt buộc |
| **F21** | Xem điều khoản và chính sách | Khách | Bắt buộc |
| **F22** | Xem danh sách lịch đặt và lịch sử đặt chỗ | Khách hàng | Bắt buộc |
| **F23** | Xem chi tiết booking và trạng thái thanh toán | Khách hàng | Bắt buộc |
| **F24** | Yêu cầu hủy booking (theo chính sách 48 giờ) | Khách hàng | Bắt buộc |

---

## 4. Bảng chức năng Quản trị viên

| Mã | Chức năng | Người sử dụng | Mức độ ưu tiên |
| :--- | :--- | :--- | :--- |
| **F25** | Đăng nhập khu vực quản trị | Quản trị viên | Bắt buộc |
| **F26** | Xem Dashboard tổng quan | Quản trị viên | Bắt buộc |
| **F27** | Quản lý trải nghiệm (xem, thêm, sửa, ẩn, xuất bản) | Quản trị viên | Bắt buộc |
| **F28** | Quản lý vùng miền và địa điểm | Quản trị viên | Bắt buộc |
| **F29** | Quản lý lịch tổ chức và sức chứa | Quản trị viên | Bắt buộc |
| **F30** | Quản lý danh sách và chi tiết booking | Quản trị viên | Bắt buộc |
| **F31** | Xử lý booking và quản lý thanh toán mô phỏng | Quản trị viên | Bắt buộc |
| **F32** | Quản lý khách hàng | Quản trị viên | Bắt buộc |
| **F33** | Kiểm duyệt đánh giá | Quản trị viên | Bắt buộc |
| **F34** | Quản lý bài viết văn hóa | Quản trị viên | Bắt buộc |
| **F35** | Báo cáo và thống kê cơ bản theo thời gian | Quản trị viên | Bắt buộc |
| **F36** | Quản lý liên hệ | Quản trị viên | Bắt buộc |
| **F37** | Cài đặt hệ thống và chính sách | Quản trị viên | Bắt buộc |

---

## 5. Danh sách hạng mục không triển khai

| Hạng mục không triển khai | Giới hạn của phiên bản hiện tại | Lý do | Phương án thay thế tối thiểu |
| :--- | :--- | :--- | :--- |
| **Cổng thanh toán production và hệ thống ngoài** (hóa đơn điện tử, kế toán, Klook, Tripadvisor, Airbnb) | Không kết nối hệ thống nào ngoài giao diện mô phỏng | Phụ thuộc tài khoản doanh nghiệp, tài liệu và quy trình duyệt của bên thứ ba | Quản trị viên theo dõi giao dịch mô phỏng và booking trực tiếp trên hệ thống |
| **Hoàn tiền tự động qua cổng thanh toán** | Không gọi API hoàn tiền | Gắn với thanh toán thật | Quản trị viên ghi nhận trạng thái hoàn tiền thủ công theo chính sách đã công bố |
| **Bản đồ phụ thuộc dịch vụ bên thứ ba** (Google Maps, định vị, chỉ đường) | Bản đồ văn hóa là bản đồ Việt Nam tĩnh theo vùng và tỉnh | Tránh khóa API, chi phí và lỗi phụ thuộc dịch vụ ngoài | Chọn vùng, tỉnh trên bản đồ tĩnh; địa chỉ địa điểm hiển thị dạng văn bản |
| **Gửi thông báo qua email, SMS, Zalo, push** | Không gửi thông báo ra ngoài hệ thống | Cần dịch vụ gửi tin, chi phí và cấu hình riêng | Sử dụng hệ thống thông báo nội bộ trong website (F04) |
| **Cổng quản lý riêng cho nghệ nhân, đối tác** | Không có vai trò, đăng nhập hay màn hình riêng | Tăng số vai trò, phân quyền và quy trình duyệt phức tạp | Quản trị viên trực tiếp nhập và cập nhật thông tin nghệ nhân, trải nghiệm, lịch |
| **Đăng nhập mạng xã hội, OTP, xác thực hai lớp** | Chỉ hỗ trợ đăng nhập bằng email và mật khẩu | Phụ thuộc nhà cung cấp bên ngoài | Sử dụng cơ chế xác thực nội bộ qua tài khoản đăng ký |
| **Mã ưu đãi (Discount code)** | Không triển khai mã giảm giá/ưu đãi | Giảm phạm vi, tránh phát sinh các quy tắc phụ thuộc giá trị đơn hàng | Không áp dụng mã ưu đãi trong phiên bản đồ án này |
| **Gợi ý cá nhân hóa, chat trực tuyến, app di động riêng** | Không triển khai | Đòi hỏi cơ chế xử lý dữ liệu lớn, làm tăng độ phức tạp kiểm thử | Đặt theo nhóm bằng cách chọn số người trong giới hạn sức chứa |
