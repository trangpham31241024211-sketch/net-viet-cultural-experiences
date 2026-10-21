
# Xác định phạm vi và chức năng website

## 1. Mục tiêu và phạm vi

Nét Việt là website hỗ trợ khách hàng khám phá các trải nghiệm văn hóa bản địa Việt Nam (làm đồ thủ công, tham quan làng nghề, thưởng thức đặc sản, tìm hiểu phong tục), chọn lịch tổ chức, đặt chỗ trực tuyến và theo dõi booking. Website có khu vực quản trị để Quản trị viên quản lý trải nghiệm, địa điểm, lịch tổ chức, sức chứa, booking, thanh toán và nội dung liên quan.

Nhóm xây dựng tập trung vào luồng thương mại điện tử:

- Tìm kiếm và khám phá trải nghiệm.
- Xem thông tin chi tiết, điều kiện tham gia và chính sách.
- Chọn lịch, số người và kiểm tra chỗ còn lại.
- Tạo booking và ghi nhận kết quả thanh toán.
- Theo dõi trạng thái booking, yêu cầu hủy theo chính sách, đánh giá sau trải nghiệm.
- Quản trị viên quản lý trải nghiệm, lịch, sức chứa, booking và thanh toán.
- Công bố chính sách và điều kiện tham gia.

Cấu trúc website gồm: Trang chủ, Khám phá vùng miền, Loại trải nghiệm, Dấu ấn Việt, Giới thiệu, Lịch đặt của tôi. Các trang dùng chung (đăng ký, đăng nhập, quên mật khẩu, hồ sơ cá nhân, yêu thích, thông báo) truy cập thông qua biểu tượng tài khoản.

## 2. Vai trò người dùng

| Vai trò | Nhiệm vụ chính | Quyền hạn dự kiến |
|---|---|---|
| Khách chưa đăng nhập | - Khám phá văn hóa theo vùng miền.<br>- Tìm kiếm, lọc và xem trải nghiệm.<br>- Xem lịch và số chỗ còn lại.<br>- Đọc bài viết, đánh giá, FAQ, chính sách.<br>- Đăng ký/đăng nhập.<br>- Gửi câu hỏi liên hệ. | - Xem toàn bộ thông tin công khai và gửi biểu mẫu liên hệ.<br>- Không tạo booking, không thanh toán, không gửi đánh giá và không có dữ liệu cá nhân. |
| Khách hàng | - Đặt lịch trải nghiệm, áp mã ưu đãi, thanh toán.<br>- Theo dõi booking và lịch sử.<br>- Yêu cầu hủy theo chính sách.<br>- Gửi đánh giá sau trải nghiệm.<br>- Quản lý hồ sơ, yêu thích và thông báo. | - Có toàn bộ quyền của khách chưa đăng nhập.<br>- Chỉ xem và thao tác trên dữ liệu của chính mình (hồ sơ, booking, yêu thích, thông báo).<br>- Chỉ đánh giá trải nghiệm có booking đã hoàn thành, mỗi booking một lần.<br>- Không truy cập khu vực quản trị. |
| Quản trị viên | - Quản lý trải nghiệm, vùng miền và địa điểm, loại trải nghiệm, lịch và sức chứa.<br>- Xử lý booking và theo dõi thanh toán.<br>- Quản lý mã ưu đãi, khách hàng, đánh giá, bài viết văn hóa, liên hệ.<br>- Xem báo cáo.<br>- Cấu hình chính sách. | - Đăng nhập khu vực quản trị riêng và thực hiện các nghiệp vụ quản trị.<br>- Không tạo booking thay khách trên giao diện khách hàng. |

**Phạm vi vai trò:**

- Không thêm vai trò nhân viên bán hàng hoặc nhân viên xử lý đơn: số lượng booking do Quản trị viên xử lý trực tiếp.
- Không thêm vai trò Nghệ nhân/Đối tác vì chưa có cổng quản lý riêng; thông tin nghệ nhân và người hướng dẫn do Quản trị viên nhập khi quản lý trải nghiệm và bài viết.

## 3. Bảng chức năng khách hàng

| Mã | Chức năng | Người sử dụng | Mức độ ưu tiên |
|---|---|---|---|
| F01 | Đăng ký tài khoản | Khách | Bắt buộc |
| F02 | Đăng nhập, đăng xuất | Khách, Khách hàng | Bắt buộc |
| F03 | Quên mật khẩu | Khách | Bắt buộc |
| F04 | Quản lý hồ sơ cá nhân | Khách hàng | Bắt buộc |
| F05 | Quản lý danh sách yêu thích | Khách hàng | Bắt buộc hoặc theo phạm vi |
| F06 | Thông báo trong hệ thống | Khách hàng | Bắt buộc hoặc theo phạm vi |
| F07 | Xem trang chủ | Khách | Bắt buộc |
| F08 | Tìm kiếm nhanh | Khách | Bắt buộc |
| F09 | Xem bản đồ văn hóa Việt Nam | Khách | Bắt buộc hoặc theo phạm vi |
| F10 | Xem vùng miền và tỉnh thành | Khách | Bắt buộc |
| F11 | Xem chi tiết địa điểm | Khách | Bắt buộc |
| F12 | Xem kho bài viết văn hóa | Khách | Bắt buộc hoặc theo phạm vi |
| F13 | Xem danh mục và danh sách trải nghiệm | Khách | Bắt buộc |
| F14 | Tìm kiếm, lọc và sắp xếp trải nghiệm | Khách | Bắt buộc |
| F15 | Xem chi tiết trải nghiệm | Khách | Bắt buộc |
| F16 | Chọn lịch và kiểm tra chỗ còn lại | Khách | Bắt buộc |
| F17 | Tạo booking | Khách hàng | Bắt buộc |
| F18 | Áp mã ưu đãi | Khách hàng | Bắt buộc hoặc theo phạm vi |
| F19 | Thanh toán và ghi nhận kết quả thanh toán | Khách hàng | Bắt buộc |
| F20 | Tích hợp cổng thanh toán sandbox | Khách hàng | Nâng cao |
| F21 | Xem đánh giá và chia sẻ Dấu ấn Việt | Khách | Bắt buộc |
| F22 | Gửi đánh giá sau trải nghiệm | Khách hàng | Bắt buộc |
| F23 | Xem thông tin giới thiệu Nét Việt | Khách | Bắt buộc |
| F24 | Liên hệ và gửi câu hỏi | Khách | Bắt buộc |
| F25 | Xem câu hỏi thường gặp (FAQ) | Khách | Bắt buộc |
| F26 | Xem điều khoản và chính sách | Khách | Bắt buộc |
| F27 | Xem danh sách lịch đặt và lịch sử đặt chỗ | Khách hàng | Bắt buộc |
| F28 | Xem chi tiết booking và trạng thái thanh toán | Khách hàng | Bắt buộc |
| F29 | Yêu cầu hủy booking | Khách hàng | Bắt buộc |

## 4. Bảng chức năng Quản trị viên

| Mã | Chức năng | Người sử dụng | Mức độ ưu tiên |
|---|---|---|---|
| F30 | Đăng nhập khu vực quản trị | Quản trị viên | Bắt buộc |
| F31 | Xem Dashboard tổng quan | Quản trị viên | Bắt buộc |
| F32 | Quản lý trải nghiệm (xem, thêm, sửa, ẩn, xuất bản) | Quản trị viên | Bắt buộc |
| F33 | Quản lý vùng miền và địa điểm | Quản trị viên | Bắt buộc |
| F34 | Quản lý tổ chức và sức chứa | Quản trị viên | Bắt buộc |
| F35 | Quản lý danh sách và chi tiết booking | Quản trị viên | Bắt buộc |
| F36 | Xử lý booking | Quản trị viên | Bắt buộc |
| F37 | Quản lý thanh toán | Quản trị viên | Bắt buộc |
| F38 | Quản lý mã ưu đãi | Quản trị viên | Bắt buộc |
| F39 | Quản lý khách hàng | Quản trị viên | Bắt buộc |
| F40 | Kiểm duyệt đánh giá | Quản trị viên | Bắt buộc |
| F41 | Quản lý bài viết văn hóa | Quản trị viên | Bắt buộc |
| F42 | Báo cáo và thống kê theo thời gian | Quản trị viên | Bắt buộc |
| F43 | Quản lý liên hệ | Quản trị viên | Bắt buộc |
| F44 | Cài đặt hệ thống và chính sách | Quản trị viên | Bắt buộc |

## 5. Chức năng nâng cao

| Mã | Chức năng | Người sử dụng | Mức độ ưu tiên |
|---|---|---|---|
| F45 | Tự động hết hạn giữ chỗ | Hệ thống | Nâng cao |

**Mô tả chức năng F45:** Hệ thống tự động hủy booking ở trạng thái Chờ thanh toán khi hết thời gian giữ chỗ mà khách hàng chưa hoàn tất thanh toán. Sau khi booking bị hủy, hệ thống cập nhật trạng thái booking và giải phóng số chỗ tương ứng trong lịch trải nghiệm. Thời gian giữ chỗ được cấu hình theo quy định của website.

## 6. Danh sách hạng mục không triển khai

| Hạng mục không triển khai | Giới hạn của phiên bản hiện tại | Lý do | Phương án thay thế tối thiểu |
|---|---|---|---|
| Cổng thanh toán production và hệ thống bên ngoài (hóa đơn điện tử, kế toán, đồng bộ với Klook, Tripadvisor, Airbnb) | Không kết nối hệ thống nào ngoài cổng sandbox. | Phụ thuộc tài khoản doanh nghiệp, tài liệu và quy trình duyệt của bên thứ ba. | Quản trị viên theo dõi giao dịch và booking trực tiếp ở F35, F37. |
| Hoàn tiền tự động qua cổng thanh toán | Không gọi API hoàn tiền. | Gắn với thanh toán thật. | Quản trị viên ghi nhận trạng thái Đã hoàn tiền thủ công ở F37 theo chính sách đã công bố. |
| Bản đồ phụ thuộc dịch vụ bên thứ ba (Google Maps, định vị, chỉ đường) | Bản đồ văn hóa là bản đồ Việt Nam tĩnh theo vùng và tỉnh. | Tránh khóa API, chi phí và lỗi phụ thuộc dịch vụ ngoài. | F09 cho phép chọn vùng, tỉnh trên bản đồ tĩnh; địa chỉ địa điểm hiển thị dạng văn bản. |
| Gửi thông báo qua email, SMS, Zalo, push | Không gửi thông báo ra ngoài hệ thống. | Cần dịch vụ gửi tin, chi phí và cấu hình riêng. | Sử dụng thông báo trong hệ thống (F06). |
| Cổng quản lý riêng cho nghệ nhân, đối tác | Không có vai trò, đăng nhập hay màn hình riêng cho nghệ nhân hoặc đối tác. | Tăng số vai trò, phân quyền và quy trình duyệt. | Quản trị viên nhập, cập nhật thông tin nghệ nhân, trải nghiệm và lịch (F32, F34, F41). |
| Đăng nhập mạng xã hội, OTP, xác thực hai lớp | Chỉ đăng nhập bằng email và mật khẩu. | Phụ thuộc nhà cung cấp ngoài. | Sử dụng cơ chế xác thực nội bộ (F02). |
| Gợi ý cá nhân hóa, tích điểm thành viên, báo giá riêng cho đoàn lớn, chat trực tuyến, ứng dụng di động riêng | Không triển khai trong phiên bản hiện tại. | Các chức năng này đòi hỏi thêm cơ chế xử lý dữ liệu và nghiệp vụ, làm tăng độ phức tạp trong quá trình phát triển, kiểm thử và vận hành. Nhóm ưu tiên hoàn thiện các chức năng cốt lõi của website trong phạm vi thời gian và nguồn lực của dự án. | Đặt theo nhóm bằng cách chọn số người trong giới hạn sức chứa (F16, F17). |

