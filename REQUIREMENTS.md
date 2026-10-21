
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

## 7. Yêu cầu chức năng (Functional Requirements)

**Quy ước mức ưu tiên**

- **Cao:** Chức năng cốt lõi, cần thiết để website vận hành theo mục tiêu dự án.
- **Trung bình:** Chức năng hỗ trợ trải nghiệm hoặc quản trị, triển khai sau các chức năng cốt lõi.
- **Thấp:** Chức năng bổ sung, có thể loại bỏ nếu không đủ thời gian.

### 7.1. Tài khoản và truy cập

| ID | Tên chức năng | Mô tả | Người dùng | Ưu tiên | Tiêu chí nghiệm thu |
| --- | --- | --- | --- | --- | --- |
| FR-01 | Đăng ký tài khoản | Tạo tài khoản bằng họ tên, email và mật khẩu. | Khách hàng | Cao | Không cho đăng ký khi thiếu trường bắt buộc; email đúng định dạng và không trùng; mật khẩu đáp ứng quy tắc tối thiểu; tài khoản đăng ký thành công có thể đăng nhập; mật khẩu không lưu dạng văn bản thuần. |
| FR-02 | Đăng nhập và đăng xuất | Đăng nhập bằng thông tin hợp lệ và kết thúc phiên sử dụng khi đăng xuất. | Khách hàng, admin | Cao | Chỉ tài khoản hợp lệ mới đăng nhập được; thông báo lỗi không tiết lộ mật khẩu; người chưa đăng nhập không truy cập được chức năng yêu cầu xác thực; phiên đăng xuất không tiếp tục truy cập được trang cần xác thực. |
| FR-03 | Quản lý thông tin tài khoản | Xem và cập nhật thông tin cá nhân cơ bản. | Khách hàng | Trung bình | Khách xem được thông tin của mình; dữ liệu được kiểm tra trước khi lưu; không thể sửa thông tin tài khoản người khác. |

### 7.2. Khám phá trải nghiệm

| ID | Tên chức năng | Mô tả | Người dùng | Ưu tiên | Tiêu chí nghiệm thu |
| --- | --- | --- | --- | --- | --- |
| FR-04 | Xem danh sách trải nghiệm | Hiển thị trải nghiệm đang công khai, gồm tên, hình ảnh, địa điểm, loại hình và giá cơ bản. | Khách hàng, khách chưa đăng nhập | Cao | Chỉ hiển thị trải nghiệm đủ điều kiện công khai; mỗi mục có đường dẫn đến trang chi tiết; hiển thị trạng thái phù hợp khi không có kết quả. |
| FR-05 | Tìm kiếm và lọc trải nghiệm | Tìm theo từ khóa và lọc theo khu vực hoặc loại hình. | Khách hàng, khách chưa đăng nhập | Cao | Kết quả phù hợp từ khóa và bộ lọc; hỗ trợ kết hợp bộ lọc; có thể xóa bộ lọc; thông báo khi không có kết quả. |
| FR-06 | Xem chi tiết trải nghiệm | Hiển thị nội dung, hình ảnh, địa điểm, giá, thời lượng, người hướng dẫn/nghệ nhân và điều kiện tham gia. | Khách hàng, khách chưa đăng nhập | Cao | Dữ liệu lấy từ hệ thống; không tự tạo thông tin chưa được cung cấp; trải nghiệm không còn công khai không được đặt mới. |
| FR-07 | Xem lịch và sức chứa | Hiển thị lịch mở đặt chỗ, sức chứa tối đa, số người đã xác nhận và số chỗ còn lại. | Khách hàng, khách chưa đăng nhập | Cao | Số chỗ còn lại được tính theo quy tắc nghiệp vụ; lịch đã hủy, kết thúc hoặc hết chỗ không cho đặt mới; số chỗ không âm; kiểm tra lại sức chứa khi thanh toán mô phỏng thành công. |

### 7.3. Booking và thanh toán mô phỏng

| ID | Tên chức năng | Mô tả | Người dùng | Ưu tiên | Tiêu chí nghiệm thu |
| --- | --- | --- | --- | --- | --- |
| FR-08 | Tạo booking | Chọn lịch, nhập số người tham gia và tạo booking. | Khách hàng | Cao | Khách phải đăng nhập; lịch và số người hợp lệ; kiểm tra sức chứa trước khi tiếp nhận; mỗi booking có mã riêng và lưu thông tin cần thiết; tạo booking chưa đồng nghĩa xác nhận chỗ. |
| FR-09 | Thanh toán mô phỏng | Giao diện mô phỏng cho phép chọn kết quả thành công hoặc thất bại. | Khách hàng | Cao | Ghi rõ đây không phải thanh toán thật; khách chọn được kết quả; lưu kết quả và mã giao dịch mô phỏng; kết quả thanh toán lưu riêng trạng thái booking; không thu hoặc hoàn tiền thật. |
| FR-10 | Xác nhận booking tự động | Sau khi thanh toán mô phỏng thành công, hệ thống kiểm tra lại sức chứa và quyết định xác nhận. | Hệ thống; khách hàng nhận kết quả | Cao | Đủ chỗ thì xác nhận booking; hết chỗ thì không xác nhận và lưu trạng thái không thể xác nhận do hết chỗ; lưu riêng kết quả thanh toán; thanh toán thất bại không xác nhận booking; không xác nhận trùng do thao tác lặp. |
| FR-11 | Thử lại thanh toán mô phỏng | Cho phép thử lại với booking còn ở trạng thái chờ thanh toán và chưa bị hủy. | Khách hàng | Trung bình | Booking đủ điều kiện được thử lại; booking đã xác nhận, đã hủy hoặc không còn đủ điều kiện không được thanh toán lại theo luồng thông thường; lưu lịch sử từng lần thử. |
| FR-12 | Xem lịch sử và chi tiết booking | Xem danh sách booking, trạng thái và chi tiết từng booking. | Khách hàng | Cao | Chỉ xem được booking của tài khoản đang đăng nhập; chi tiết có mã booking, trải nghiệm, lịch, số người, tổng tiền, trạng thái booking và kết quả thanh toán; trạng thái khớp dữ liệu đã lưu. |
| FR-13 | Hủy booking tự động theo quy định | Khách yêu cầu hủy trước giờ bắt đầu trải nghiệm ít nhất 48 giờ; hệ thống tự xử lý nếu đủ điều kiện. | Khách hàng, hệ thống | Cao | Kiểm tra thời hạn tại thời điểm gửi yêu cầu; đủ điều kiện thì hủy; không đủ điều kiện thì thông báo lý do; cập nhật số chỗ sau khi hủy; giữ lịch sử booking và thanh toán mô phỏng; không hoàn tiền thật. |
| FR-14 | Tự động hoàn thành booking | Xác định booking hoàn thành dựa trên thời điểm kết thúc lịch trải nghiệm. | Hệ thống | Trung bình | Lịch có thời gian bắt đầu và kết thúc; booking đã xác nhận được chuyển sang hoàn thành theo quy tắc; booking đã hủy không được hoàn thành; cơ chế cập nhật phải phù hợp với kiến trúc và được kiểm thử. |

### 7.4. Đánh giá và thông báo

| ID | Tên chức năng | Mô tả | Người dùng | Ưu tiên | Tiêu chí nghiệm thu |
| --- | --- | --- | --- | --- | --- |
| FR-15 | Đánh giá trải nghiệm | Cho phép đánh giá sau khi booking hoàn thành. | Khách hàng | Trung bình | Chỉ booking hoàn thành mới được đánh giá; mỗi booking có tối đa một đánh giá; kiểm tra nội dung và điểm trước khi lưu; liên kết đánh giá với booking và trải nghiệm. |
| FR-16 | Quản lý hiển thị đánh giá | Admin có thể ẩn hoặc gỡ đánh giá không phù hợp; đánh giá hợp lệ được hiển thị sau khi gửi. | Admin, hệ thống | Trung bình | Đánh giá hợp lệ được hiển thị; admin có thể ẩn hoặc gỡ; đánh giá đã ẩn/gỡ không xuất hiện công khai; lưu trạng thái kiểm duyệt. |
| FR-17 | Thông báo trong website | Hiển thị thông báo khi booking được xác nhận, booking bị hủy hoặc lịch bị hủy. | Hệ thống, khách hàng | Trung bình | Thông báo gắn đúng tài khoản và sự kiện; nội dung khớp trạng thái đã lưu; khách không xem được thông báo của người khác; không yêu cầu tích hợp email, SMS hoặc Zalo. |

### 7.5. Quản trị

| ID | Tên chức năng | Mô tả | Người dùng | Ưu tiên | Tiêu chí nghiệm thu |
| --- | --- | --- | --- | --- | --- |
| FR-18 | Quản lý trải nghiệm | Thêm, chỉnh sửa, ngừng công khai trải nghiệm và quản lý loại hình, khu vực, giá, hình ảnh, nội dung, thông tin người hướng dẫn/nghệ nhân. | Admin | Cao | Thêm và chỉnh sửa được dữ liệu hợp lệ; kiểm tra trường bắt buộc; trải nghiệm ngừng công khai không được đặt mới; giữ thông tin cần thiết của trải nghiệm đã có booking. |
| FR-19 | Quản lý lịch và sức chứa | Tạo, chỉnh sửa, mở hoặc đóng lịch và thiết lập sức chứa tối đa. | Admin, hệ thống | Cao | Lịch có thời gian và sức chứa hợp lệ; sức chứa là số nguyên dương; cảnh báo nếu giảm sức chứa thấp hơn số người đã xác nhận; theo phương án thảo luận, admin có thể tiếp tục sau cảnh báo; không nhận booking mới nếu vượt sức chứa; không tự hủy booking đã xác nhận. |
| FR-20 | Hủy lịch và xử lý booking liên quan | Admin hủy lịch; hệ thống tự hủy booking chưa diễn ra liên quan. | Admin, hệ thống | Cao | Admin xác nhận thao tác; lịch đã hủy không nhận booking mới; booking chưa diễn ra được chuyển sang trạng thái hủy; giữ lịch sử booking và thanh toán mô phỏng; lưu lý do nếu có; không tự chuyển lịch hoặc hoàn tiền thật. |
| FR-21 | Quản lý booking | Xem danh sách và chi tiết booking để theo dõi hoạt động đặt chỗ. | Admin | Cao | Lọc/xem booking theo mã, trải nghiệm, lịch và trạng thái; xem được thông tin cần thiết; không tùy ý sửa trạng thái do hệ thống tự xác định; giữ lịch sử để tra cứu. |
| FR-22 | Xem kết quả thanh toán mô phỏng | Xem kết quả các lần thanh toán mô phỏng và booking tương ứng. | Admin | Trung bình | Xem được mã giao dịch mô phỏng, booking, kết quả và thời điểm; hiển thị riêng kết quả thanh toán với trạng thái booking; không thu tiền, hoàn tiền hoặc sửa kết quả tùy ý. |
| FR-23 | Quản lý nội dung văn hóa | Tạo, chỉnh sửa, công khai hoặc ngừng công khai bài viết giới thiệu văn hóa. | Admin, khách hàng | Thấp | Admin quản lý được tiêu đề, nội dung, hình ảnh và trạng thái; khách chỉ xem bài viết công khai; bài viết không bắt buộc liên kết với booking. |
| FR-24 | Xem thống kê cơ bản | Hiển thị số booking theo trạng thái, số trải nghiệm công khai và số lịch sắp diễn ra. | Admin | Thấp | Số liệu lấy từ dữ liệu hiện có; định nghĩa rõ để tránh đếm trùng; hiển thị 0/trạng thái trống khi chưa có dữ liệu; không thống kê giao dịch tài chính thật. |

## 8. Yêu cầu phi chức năng (Non-functional Requirements)

Các ngưỡng dưới đây là mục tiêu đề xuất để nhóm kiểm thử, chưa phải kết quả đo thực tế.

| ID | Yêu cầu | Mô tả | Ưu tiên | Tiêu chí đánh giá |
| --- | --- | --- | --- | --- |
| NFR-01 | Hiệu năng | Trang và thao tác chính phản hồi trong thời gian phù hợp. | Cao | Trong môi trường kiểm thử, ít nhất 90% yêu cầu tải danh sách, chi tiết và lịch trả kết quả trong tối đa 3 giây với bộ dữ liệu demo đã thống nhất; tạo booking/cập nhật trạng thái phản hồi tối đa 3 giây trong điều kiện thông thường; ghi nhận bằng công cụ kiểm thử phù hợp. |
| NFR-02 | Tính dễ sử dụng | Giao diện rõ ràng, nhất quán và hỗ trợ người dùng hoàn thành thao tác chính. | Cao | Người dùng thực hiện được luồng tìm trải nghiệm, chọn lịch, tạo booking và thanh toán mô phỏng theo hướng dẫn trên giao diện; nút, trạng thái và lỗi dễ hiểu; biểu mẫu nêu trường bắt buộc và nguyên nhân dữ liệu không hợp lệ; nếu điều kiện cho phép, thử nghiệm với ít nhất 3 người và ghi nhận vấn đề. |
| NFR-03 | Tương thích thiết bị và trình duyệt | Website hoạt động trên các kích thước màn hình phổ biến và trình duyệt hiện đại. | Cao | Trang chính sử dụng được trên máy tính và điện thoại; không che khuất nội dung quan trọng hoặc buộc cuộn ngang ở kích thước mục tiêu; kiểm thử ít nhất hai trình duyệt hiện đại và một kích thước màn hình di động. |
| NFR-04 | Bảo mật và quyền riêng tư | Bảo vệ tài khoản, dữ liệu cá nhân và quyền truy cập theo vai trò. | Cao | Mật khẩu được băm, không lưu dạng văn bản thuần; trang quản trị yêu cầu xác thực quyền admin; khách không xem/sửa booking người khác bằng cách đổi mã booking; kiểm tra dữ liệu đầu vào ở phía máy chủ; không để lộ thông tin xác thực hoặc dữ liệu nhạy cảm trong thông báo lỗi. |
| NFR-05 | Tính nhất quán và toàn vẹn dữ liệu | Booking, sức chứa, kết quả thanh toán mô phỏng và lịch được cập nhật nhất quán. | Cao | Sử dụng quy tắc thống nhất để tính số chỗ; kiểm tra lại sức chứa khi xác nhận booking; xử lý nhất quán khi có nhiều thao tác đặt chỗ gần nhau để tránh vượt sức chứa; hủy booking/lịch không xóa lịch sử; kiểm thử các tình huống thanh toán thành công nhưng hết chỗ, thanh toán thất bại và hủy booking. |
| NFR-06 | Độ tin cậy và xử lý lỗi | Xử lý lỗi có kiểm soát và thông báo rõ ràng. | Cao | Dữ liệu không hợp lệ hoặc thao tác không được phép không làm sai lệch dữ liệu; thông báo lỗi không để lộ thông tin kỹ thuật nhạy cảm; thao tác thất bại không làm cập nhật dữ liệu dở dang gây sai trạng thái booking/sức chứa; ghi nhận kết quả kiểm thử các tình huống lỗi chính. |
| NFR-07 | Khả năng bảo trì và mở rộng | Mã nguồn và cấu trúc dự án dễ đọc, dễ sửa đổi và phù hợp nguồn lực nhóm. | Trung bình | Mã nguồn được tổ chức hợp lý; quy tắc nghiệp vụ quan trọng không bị viết lặp tùy tiện; tên biến, hàm và cấu trúc dữ liệu nhất quán; có hướng dẫn cài đặt/chạy dự án trong README; các quy tắc quan trọng được mô tả trong tài liệu. |
| NFR-08 | Khả năng kiểm thử | Yêu cầu có thể được kiểm tra bằng dữ liệu và kịch bản cụ thể. | Cao | Mỗi yêu cầu chức năng có tiêu chí nghiệm thu; có dữ liệu demo cho trường hợp thành công, thất bại, hết chỗ, hủy booking và hủy lịch; lưu kết quả kiểm thử để đối chiếu; luồng chính trình diễn được mà không cần giao dịch thật hoặc tích hợp dịch vụ bên ngoài. |

## 9. Giới hạn và giả định

### 9.1. Giới hạn

- Đây là đồ án website phục vụ học tập, không phải nền tảng booking thương mại đang vận hành thực tế.
- Thanh toán chỉ được mô phỏng bằng giao diện lựa chọn kết quả thành công hoặc thất bại.
- Không có chức năng thu tiền, hoàn tiền hoặc đối soát tài chính thật.
- Không có tích hợp email, SMS, Zalo hoặc cổng thanh toán bên ngoài.
- Nhóm ưu tiên quy tắc nghiệp vụ cốt lõi thay vì chức năng nâng cao.
- Khả năng chịu tải và độ an toàn chỉ được đánh giá trong phạm vi môi trường kiểm thử của đồ án.
- Thời gian thực hiện dự án giới hạn trong 9 tuần, vì vậy nhóm cần ưu tiên các chức năng cốt lõi và kiểm soát phạm vi để bảo đảm tiến độ.
- Nguồn lực của nhóm gồm 8 thành viên, với thời gian và năng lực kỹ thuật có giới hạn; các chức năng cần được lựa chọn phù hợp với khả năng thực hiện của nhóm.

### 9.2. Giả định nghiệp vụ

- Mỗi booking thuộc về một khách hàng và một lịch trải nghiệm cụ thể.
- Khách hàng phải đăng nhập để tạo booking.
- Booking chỉ được xác nhận sau khi thanh toán mô phỏng thành công và hệ thống kiểm tra đủ sức chứa.
- Kết quả thanh toán mô phỏng và trạng thái booking được lưu độc lập.
- Theo phương án đang thảo luận, khách có thể hủy booking nếu yêu cầu được gửi trước giờ bắt đầu ít nhất 48 giờ.
- Lịch bị hủy sẽ không nhận booking mới; các booking chưa diễn ra liên quan được hệ thống tự động hủy.
- Khách không được đổi lịch trực tiếp; nếu muốn tham gia lịch khác, khách phải hủy booking cũ theo quy định rồi tạo booking mới.
- Đánh giá chỉ được gửi khi booking hoàn thành và mỗi booking có tối đa một đánh giá.
- Các phương án nghiệp vụ trên cần được nhóm thống nhất trước khi triển khai chính thức.

## 10. Quy tắc nghiệp vụ trọng yếu cần thống nhất

| Mã | Quy tắc đề xuất | Lý do |
| --- | --- | --- |
| BR-01 | Chỉ khách hàng đăng nhập mới được tạo booking. | Xác định chủ sở hữu booking. |
| BR-02 | Booking chỉ được xác nhận khi thanh toán mô phỏng thành công và sức chứa còn đủ. | Tránh xác nhận vượt số chỗ. |
| BR-03 | Số chỗ còn lại được tính từ sức chứa và số người đang chiếm chỗ theo trạng thái booking. | Bảo đảm cách tính nhất quán. |
| BR-04 | Hủy booking thành công phải cập nhật số chỗ và giữ lại lịch sử booking. | Tránh mất dữ liệu và sai số sức chứa. |
| BR-05 | Hủy lịch tự động hủy booking chưa diễn ra liên quan; không xóa lịch sử thanh toán mô phỏng. | Giảm thao tác thủ công và giữ dấu vết dữ liệu. |
| BR-06 | Khách hủy booking trước giờ bắt đầu ít nhất 48 giờ; hệ thống tự kiểm tra điều kiện. | Chuẩn hóa quy trình hủy. |
| BR-07 | Booking đã hoàn thành mới được đánh giá; mỗi booking tối đa một đánh giá. | Bảo đảm đánh giá gắn với trải nghiệm thực tế. |
| BR-08 | Khi sức chứa giảm thấp hơn số người đã xác nhận, hệ thống cảnh báo và không nhận booking mới nếu không còn chỗ hợp lệ. | Hạn chế đặt vượt sức chứa. |
| BR-09 | Kết quả thanh toán mô phỏng là dữ liệu kiểm thử, không đại diện cho giao dịch tài chính thật. | Tránh hiểu sai chức năng. |

## 11. Bảng theo dõi đề xuất AI và quyết định của nhóm

Bảng này là khung theo dõi. Các phương án trong cột ChatGPT và Claude cần được đối chiếu với đầu ra AI thực tế; cột quyết định của nhóm chỉ được cập nhật sau khi các thành viên thống nhất.

### Bảng tổng hợp đề xuất AI và quyết định của nhóm — Nét Việt

| Nội dung | AI thứ nhất đề xuất (ChatGPT) | AI thứ hai phản biện (Claude) | Quyết định của nhóm |
| --- | --- | --- | --- |
| Tìm kiếm và lọc trải nghiệm | Có chức năng tìm kiếm theo từ khóa, khu vực và loại hình trải nghiệm. | Claude lưu ý một số chức năng tìm kiếm nhanh có thể trùng với chức năng tìm kiếm và lọc chính. | Giữ lại, gộp các thao tác tìm kiếm và lọc vào một chức năng chính. |
| Đăng ký và đăng nhập | Có tài khoản khách hàng để quản lý booking và thông tin cá nhân. | Claude chỉ ra cần làm rõ xác minh email và cơ chế quên mật khẩu khi không tích hợp email/SMS thật. | Giữ lại đăng ký và đăng nhập; chức năng quên mật khẩu cần giới hạn theo khả năng triển khai. |
| Tạo booking | Khách hàng đăng nhập, chọn lịch, nhập số người và tạo booking. | Claude yêu cầu xác định rõ vòng đời booking, trạng thái và quan hệ giữa booking với thanh toán. | Giữ lại, bổ sung sơ đồ trạng thái booking và tiêu chí nghiệm thu. |
| Xác nhận booking | Hệ thống tự xác nhận khi thanh toán mô phỏng thành công và còn đủ chỗ. | Claude nhấn mạnh phải tách trạng thái booking khỏi kết quả thanh toán và kiểm tra sức chứa nhất quán. | Giữ lại sau khi chỉnh sửa, hệ thống kiểm tra sức chứa trước khi xác nhận và tránh xác nhận trùng. |
| Thanh toán mô phỏng | Cho khách chọn kết quả mô phỏng thành công hoặc thất bại. | Claude đề nghị kiểm tra với giảng viên xem đồ án có bắt buộc tích hợp cổng thanh toán sandbox hay không. | Triển khai theo giai đoạn: ưu tiên mô phỏng; chỉ tích hợp sandbox nếu yêu cầu môn học bắt buộc và nhóm đủ khả năng. |
| Thanh toán thành công nhưng hết chỗ | Không xác nhận booking; lưu kết quả thanh toán mô phỏng riêng. | Claude yêu cầu xác định trạng thái cuối cùng, cách thông báo và tránh dữ liệu booking/sức chứa mâu thuẫn. | Kiểm tra và cập nhật sức chứa nhất quán tại thời điểm xác nhận booking; chỉ xác nhận khi còn đủ chỗ hợp lệ. Nếu không đủ chỗ, không xác nhận booking và ghi nhận riêng kết quả thanh toán mô phỏng để xử lý theo quy trình đã thống nhất. |
| Hủy booking | Cho khách hủy theo thời hạn quy định; phương án đang thảo luận là tự động xử lý nếu đáp ứng điều kiện 48 giờ. | Claude yêu cầu xác định thời điểm kiểm tra hạn hủy, trạng thái sau hủy và cách giải phóng sức chứa. | Giữ lại sau khi chỉnh sửa. Với booking đã xác nhận, hệ thống kiểm tra điều kiện hủy theo chính sách 48 giờ; nếu hợp lệ thì cập nhật trạng thái và giải phóng sức chứa. Booking chờ thanh toán được xử lý theo quy tắc hủy riêng, không mặc nhiên áp dụng điều kiện 48 giờ. |
| Hủy lịch trải nghiệm | Khi admin hủy lịch, hệ thống tự hủy booking chưa diễn ra liên quan. | Claude lưu ý phải giữ lịch sử booking, xử lý kết quả thanh toán mô phỏng và tránh mâu thuẫn trạng thái. | Giữ lại, không xóa lịch sử và không thực hiện hoàn tiền thật. |
| Đổi lịch booking | Không hỗ trợ đổi trực tiếp; khách hủy booking cũ rồi tạo booking mới nếu còn chỗ. | Phù hợp với hướng giảm các luồng nghiệp vụ phức tạp liên quan đến chuyển chỗ và cập nhật trạng thái. | Loại bỏ chức năng đổi lịch trực tiếp; giữ quy trình hủy và tạo booking mới. |
| Thay đổi sức chứa sau khi có booking | Cho admin sửa sức chứa thấp hơn số người đã xác nhận nhưng phải cảnh báo. | Claude cảnh báo cần xử lý tình huống sức chứa mới thấp hơn số khách đã xác nhận và tránh đặt vượt chỗ. | Chỉnh sửa, giữ phương án cho phép admin tiếp tục sau cảnh báo, nhưng ngừng nhận booking mới khi không còn chỗ hợp lệ. |
| Tự động hoàn thành booking | Hệ thống xác định booking hoàn thành theo thời điểm kết thúc lịch. | Claude lưu ý nếu không có tác vụ nền thì không thể mặc nhiên cho rằng trạng thái tự cập nhật đúng thời điểm. | Chỉnh sửa, chỉ triển khai cơ chế cập nhật phù hợp với kiến trúc thực tế; không xây tác vụ nền phức tạp nếu không cần. |
| Đánh giá trải nghiệm | Chỉ booking hoàn thành mới được đánh giá; mỗi booking một đánh giá; admin có thể ẩn/gỡ sau khi đăng. | Claude yêu cầu làm rõ điều kiện đánh giá và cơ chế kiểm duyệt; đồng thời cần thống nhất các chức năng phụ thuộc. | Giữ lại sau khi chỉnh sửa, giới hạn một đánh giá mỗi booking hoàn thành và áp dụng kiểm duyệt sau khi đăng. |
| Mã ưu đãi | Ban đầu có chức năng áp dụng và quản lý mã ưu đãi. | Claude lưu ý nếu giữ mã ưu đãi thì phải làm rõ thời điểm ghi nhận lượt dùng, khả năng dùng lại và giá trị đơn hàng được lưu. | Loại bỏ chức năng áp dụng và quản lý mã ưu đãi để giảm phạm vi và tránh phát sinh quy tắc phụ. |
| Thông báo | Có hộp thông báo trong website về trạng thái booking và các sự kiện quan trọng. | Claude lưu ý cần làm rõ đây là chức năng tùy chọn hay chức năng chính, cùng các chức năng phụ thuộc. | Giữ ở mức tùy chọn, triển khai sau các luồng booking cốt lõi; không tích hợp email/SMS/Zalo. |
| Nội dung “Dấu ấn Việt” | Có mục nội dung mang tên “Dấu ấn Việt”. | Claude nhận xét tên gọi chưa được định nghĩa rõ, không có chức năng quản trị tương ứng và có thể trùng với đánh giá hoặc bài viết. | Loại bỏ. |
| Quản trị trải nghiệm và lịch | Admin quản lý thông tin trải nghiệm, lịch tổ chức và sức chứa. | Claude phát hiện chức năng quản trị có chỗ trùng lặp và thiếu mô tả rõ dữ liệu người hướng dẫn/nghệ nhân. | Giữ lại sau khi gộp, làm rõ trường thông tin và tránh tạo nhiều chức năng trùng nhau. |
| Thống kê và báo cáo | Có thống kê cơ bản phục vụ admin. | Claude chỉ ra một số nội dung dashboard và thống kê có thể chồng lấn. | Tùy chọn, chỉ giữ số liệu tổng quan đơn giản nếu hoàn thành các chức năng cốt lõi. |

