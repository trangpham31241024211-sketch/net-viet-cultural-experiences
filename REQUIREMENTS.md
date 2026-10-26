# PHẠM VI VÀ CHỨC NĂNG WEBSITE - NÉT VIỆT

## 1. Mục tiêu và phạm vi
Nét Việt là website hỗ trợ khách hàng khám phá các trải nghiệm văn hóa bản địa Việt Nam (làm đồ thủ công, tham quan làng nghề, thưởng thức đặc sản, tìm hiểu phong tục), chọn lịch tổ chức, đặt chỗ trực tuyến và theo dõi booking. Website có khu vực quản trị để Quản trị viên quản lý trải nghiệm, địa điểm, lịch tổ chức, sức chứa, booking, thanh toán và nội dung liên quan.

Nhóm xây dựng tập trung vào luồng thương mại điện tử:
- Tìm kiếm và khám phá trải nghiệm
- Xem thông tin chi tiết, điều kiện tham gia và chính sách
- Chọn lịch, số người và kiểm tra chỗ còn lại
- Tạo booking và ghi nhận kết quả thanh toán
- Theo dõi trạng thái booking, yêu cầu hủy theo chính sách, đánh giá sau trải nghiệm
- Quản trị viên quản lý trải nghiệm, lịch, sức chứa, booking và thanh toán
- Công bố chính sách và điều kiện tham gia

Cấu trúc website gồm: Trang chủ, Khám phá vùng miền, Loại trải nghiệm, Dấu ấn Việt, Giới thiệu, Lịch đặt của tôi. Các trang dùng chung (đăng ký, đăng nhập, quên mật khẩu, hồ sơ cá nhân, yêu thích, thông báo) truy cập thông qua biểu tượng tài khoản.

---

## 2. Vai trò người dùng

| Vai trò | Nhiệm vụ chính | Quyền hạn dự kiến |
| :--- | :--- | :--- |
| **Khách chưa đăng nhập** | • Khám phá văn hóa theo vùng miền <br>• Tìm kiếm, lọc và xem trải nghiệm <br>• Xem lịch và số chỗ còn lại <br>• Đọc bài viết, đánh giá, FAQ, chính sách <br>• Đăng ký/Đăng nhập <br>• Gửi câu hỏi liên hệ | • Xem toàn bộ thông tin công khai và gửi biểu mẫu liên hệ <br>• Không tạo booking, không thanh toán, không gửi đánh giá và không có dữ liệu cá nhân |
| **Khách hàng** | • Đặt lịch trải nghiệm, áp mã ưu đãi, thanh toán <br>• Theo dõi booking và lịch sử <br>• Yêu cầu hủy theo chính sách <br>• Gửi đánh giá sau trải nghiệm <br>• Quản lý hồ sơ, yêu thích và thông báo | • Có toàn bộ quyền của khách chưa đăng nhập <br>• Chỉ xem và thao tác trên dữ liệu chính mình (hồ sơ, booking, yêu thích, thông báo) <br>• Chỉ đánh giá trải nghiệm có booking đã hoàn thành, mỗi booking một lần <br>• Không truy cập khu vực quản trị |
| **Quản trị viên** | • Quản lý trải nghiệm, vùng miền và địa điểm, loại trải nghiệm, lịch và sức chứa <br>• Xử lý booking và theo dõi thanh toán <br>• Quản lý mã ưu đãi, khách hàng, đánh giá, bài viết văn hóa, liên hệ <br>• Xem báo cáo <br>• Cấu hình chính sách | • Đăng nhập khu vực quản trị riêng và thực hiện các nghiệp vụ quản trị <br>• Không tạo booking thay khách trên giao diện khách hàng |

- **Không thêm vai trò nhân viên bán hàng hoặc nhân viên xử lý đơn:** số lượng booking do Quản trị viên xử lý trực tiếp.  
- **Không thêm vai trò Nghệ nhân/Đối tác** vì chưa có cổng quản lý riêng, thông tin nghệ nhân và người hướng dẫn do Quản trị viên nhập khi quản lý trải nghiệm và bài viết.

---

## 3. Bảng chức năng khách hàng

| Mã | Chức năng | Người sử dụng | Mức độ ưu tiên |
| :--- | :--- | :--- | :--- |
| **F01** | Đăng ký tài khoản | Khách | Bắt buộc |
| **F02** | Đăng nhập, đăng xuất | Khách, Khách hàng | Bắt buộc |
| **F03** | Quản lý hồ sơ cá nhân | Khách hàng | Bắt buộc |
| **F04** | Thông báo trong hệ thống | Khách hàng | Bắt buộc hoặc theo phạm vi |
| **F05** | Xem trang chủ | Khách | Bắt buộc |
| **F06** | Tìm kiếm nhanh | Khách | Bắt buộc |
| **F07** | Xem bản đồ văn hóa Việt Nam | Khách | Bắt buộc hoặc theo phạm vi |
| **F08** | Xem vùng miền và tỉnh thành | Khách | Bắt buộc |
| **F09** | Xem chi tiết địa điểm | Khách | Bắt buộc |
| **F10** | Xem kho bài viết văn hóa | Khách | Bắt buộc hoặc theo phạm vi |
| **F11** | Xem danh mục và danh sách trải nghiệm | Khách | Bắt buộc |
| **F12** | Tìm kiếm, lọc và sắp xếp trải nghiệm | Khách | Bắt buộc |
| **F13** | Xem chi tiết trải nghiệm | Khách | Bắt buộc |
| **F14** | Chọn lịch và kiểm tra chỗ còn lại | Khách | Bắt buộc |
| **F15** | Tạo booking | Khách hàng | Bắt buộc |
| **F16** | Thanh toán và ghi nhận kết quả thanh toán | Khách hàng | Bắt buộc |
| **F17** | Tích hợp cổng thanh toán sandbox | Khách hàng | Nâng cao |
| **F18** | Xem đánh giá và chia sẻ Dấu ấn Việt | Khách | Bắt buộc |
| **F19** | Gửi đánh giá sau trải nghiệm | Khách hàng | Bắt buộc |
| **F20** | Xem thông tin giới thiệu Nét Việt | Khách | Bắt buộc |
| **F21** | Xem câu hỏi thường gặp (FAQ) | Khách | Bắt buộc |
| **F22** | Xem điều khoản và chính sách | Khách | Bắt buộc |
| **F23** | Xem danh sách lịch đặt và lịch sử đặt chỗ | Khách hàng | Bắt buộc |
| **F24** | Xem chi tiết booking và trạng thái thanh toán | Khách hàng | Bắt buộc |
| **F25** | Yêu cầu hủy booking | Khách hàng | Bắt buộc |

---

## 4. Bảng chức năng Quản trị viên

| Mã | Chức năng | Người sử dụng | Mức độ ưu tiên |
| :--- | :--- | :--- | :--- |
| **F26** | Đăng nhập khu vực quản trị | Quản trị viên | Bắt buộc |
| **F27** | Xem Dashboard tổng quan | Quản trị viên | Bắt buộc |
| **F28** | Quản lý trải nghiệm (xem, thêm, sửa, ẩn, xuất bản) | Quản trị viên | Bắt buộc |
| **F29** | Quản lý vùng miền và địa điểm | Quản trị viên | Bắt buộc |
| **F30** | Quản lý tổ chức và sức chứa | Quản trị viên | Bắt buộc |
| **F31** | Quản lý danh sách và chi tiết booking | Quản trị viên | Bắt buộc |
| **F32** | Xử lý booking | Quản trị viên | Bắt buộc |
| **F33** | Quản lý khách hàng | Quản trị viên | Bắt buộc |
| **F34** | Kiểm duyệt đánh giá | Quản trị viên | Bắt buộc |
| **F35** | Quản lý bài viết văn hóa | Quản trị viên | Bắt buộc |
| **F36** | Báo cáo và thống kê theo thời gian | Quản trị viên | Bắt buộc |
| **F37** | Quản lý liên hệ | Quản trị viên | Bắt buộc |
| **F38** | Cài đặt hệ thống và chính sách | Quản trị viên | Bắt buộc |

---

## 5. Danh sách hạng mục không triển khai

| Hạng mục không triển khai | Giới hạn của phiên bản hiện tại | Lý do | Phương án thay thế tối thiểu |
| :--- | :--- | :--- | :--- |
| **Cổng thanh toán production và hệ thống bên ngoài** (hóa đơn điện tử, kế toán, đồng bộ với Klook, Tripadvisor, Airbnb) | Không kết nối hệ thống nào ngoài cổng sandbox | Phụ thuộc tài khoản doanh nghiệp, tài liệu và quy trình duyệt của bên thứ ba. | Quản trị viên theo dõi giao dịch và booking trực tiếp ở F36, F38 |
| **Hoàn tiền tự động qua cổng thanh toán** | Không gọi API hoàn tiền | Gắn với thanh toán thật | Quản trị viên ghi nhận Đã hoàn tiền thủ công ở F38 theo chính sách đã công bố |
| **Bản đồ phụ thuộc dịch vụ bên thứ ba** (Google Maps, định vị, chỉ đường) | Bản đồ văn hóa là bản đồ Việt Nam tĩnh theo vùng và tỉnh. | Tránh khóa API, chi phí và lỗi phụ thuộc dịch vụ ngoài | F07 chọn vùng, tỉnh trên bản đồ tĩnh, địa chỉ địa điểm hiển thị dạng văn bản |
| **Gửi thông báo qua email, SMS, Zalo, push** | Không gửi thông báo ra ngoài hệ thống | Cần dịch vụ gửi tin, chi phí và cấu hình riêng | Thông báo trong hệ thống (F04) |
| **Cổng quản lý riêng cho nghệ nhân, đối tác** | Không có vai trò, đăng nhập hay màn hình riêng cho nghệ nhân hoặc đối tác | Tăng số vai trò, phân quyền và quy trình duyệt | Quản trị viên nhập, cập nhật thông tin nghệ nhân, trải nghiệm, lịch (F28, F35, F36) |
| **Đăng nhập mạng xã hội, OTP, xác thực hai lớp** | Chỉ đăng nhập bằng email và mật khẩu | Phụ thuộc nhà cung cấp ngoài | F02 xác thực nội bộ |
| **Gợi ý cá nhân hóa, tích điểm thành viên, báo giá riêng cho đoàn lớn, chat trực tuyến, ứng dụng di động riêng** | Không triển khai | Các chức năng này đòi hỏi thêm cơ chế xử lý dữ liệu và nghiệp vụ, làm tăng độ phức tạp trong quá trình phát triển, kiểm thử và vận hành. | Đặt theo nhóm bằng cách chọn số người trong giới hạn sức chứa (F14, F15) |

---

## 6. Chức năng nâng cao

| Mã | Chức năng | Người sử dụng | Mức độ ưu tiên |
|---|---|---|---|
| F45 | Tự động hết hạn giữ chỗ | Hệ thống | Nâng cao |

**Mô tả chức năng F45:** Hệ thống tự động hủy booking ở trạng thái Chờ thanh toán khi hết thời gian giữ chỗ mà khách hàng chưa hoàn tất thanh toán. Sau khi booking bị hủy, hệ thống cập nhật trạng thái booking và giải phóng số chỗ tương ứng trong lịch trải nghiệm. Thời gian giữ chỗ được cấu hình theo quy định của website.

---

## 7. Danh sách hạng mục không triển khai

Bảng này xác định các giới hạn để nhóm kiểm soát phạm vi. Các mục dưới đây áp dụng cho phiên bản MVP, trừ khi nhóm thống nhất thay đổi bằng văn bản.

| Hạng mục không triển khai | Giới hạn của phiên bản hiện tại | Lý do | Phương án thay thế tối thiểu |
| --- | --- | --- | --- |
| Cổng thanh toán production và tích hợp hệ thống bên ngoài (hóa đơn điện tử, kế toán, Klook, Tripadvisor, Airbnb) | Không kết nối hệ thống thương mại bên ngoài; thanh toán chỉ mô phỏng trong website. | Phụ thuộc tài khoản doanh nghiệp, tài liệu tích hợp và quy trình duyệt của bên thứ ba. | Admin xem booking và kết quả thanh toán mô phỏng trong khu vực quản trị. |
| Hoàn tiền tự động qua cổng thanh toán | Không gọi API hoàn tiền và không xử lý giao dịch tài chính thật. | Không có thanh toán thật để hoàn tiền; phát sinh nghiệp vụ tài chính ngoài phạm vi. | Lưu trạng thái xử lý theo chính sách đã công bố nếu cần minh họa. |
| Điều hướng bản đồ thời gian thực, định vị GPS, giao thông trực tiếp và tối ưu tuyến như ứng dụng dẫn đường | Tour Planner chỉ tạo lịch trình gợi ý dựa trên dữ liệu địa điểm, khoảng cách/thời lượng ước tính và quy tắc đơn giản; bản đồ có thể dùng dữ liệu tĩnh hoặc thư viện bản đồ nếu nhóm thống nhất. | Tránh phụ thuộc API trả phí, khóa API, dữ liệu giao thông và dịch vụ định tuyến bên ngoài. | Hiển thị thứ tự điểm đến, khoảng cách/thời lượng ước tính và tổng chi phí dự kiến; ghi rõ đây là ước tính. |
| Gợi ý tour bằng AI tạo sinh hoặc cá nhân hóa nâng cao | Không dùng mô hình AI bên ngoài để quyết định tuyến tour trong MVP. | Tăng độ phức tạp, chi phí, phụ thuộc dịch vụ và khó kiểm thử tính nhất quán. | Dùng quy tắc lọc/sắp xếp minh bạch trên dữ liệu JSON/MySQL đã chuẩn bị. |
| Đặt và thanh toán toàn bộ tour nhiều điểm bằng một booking duy nhất | Trong MVP, Tour Planner tạo lịch trình; người dùng đặt từng trải nghiệm theo luồng booking hiện có. | Booking gộp đòi hỏi thay đổi mô hình booking, giá, sức chứa, hủy và xử lý một phần tour. | Lưu lịch trình và liên kết các booking riêng lẻ với lịch trình nếu nhóm triển khai được. |
| Cổng quản lý riêng cho nghệ nhân/đối tác | Không có vai trò hoặc màn hình đăng nhập riêng cho nghệ nhân/đối tác. | Tăng số vai trò, phân quyền và quy trình quản lý. | Admin nhập và cập nhật thông tin trải nghiệm, lịch, nội dung câu đố và manh mối. |
| Gửi thông báo qua email, SMS, Zalo hoặc push | Không gửi thông báo ra ngoài hệ thống. | Cần dịch vụ gửi tin, chi phí và cấu hình riêng. | Dùng thông báo trong website nếu chức năng này được triển khai. |
| Đăng nhập mạng xã hội, OTP, xác thực hai lớp và khôi phục mật khẩu qua email/SMS | Chỉ triển khai cơ chế tài khoản nội bộ trong phạm vi đã thống nhất. | Phụ thuộc nhà cung cấp ngoài và thêm quy trình xác minh. | Đăng ký/đăng nhập bằng email và mật khẩu. |
| Lưu trữ ảnh quy mô lớn hoặc mạng xã hội ảnh | Ảnh nhật ký chỉ phục vụ demo với giới hạn loại tệp/dung lượng do nhóm quy định; không xây nền tảng lưu trữ ảnh quy mô lớn. | Tốn dung lượng, cấu hình lưu trữ và kiểm soát nội dung. | Dùng giải pháp lưu trữ phù hợp năng lực nhóm; nếu dùng dịch vụ ngoài, phải được nhóm chấp thuận và cấu hình an toàn. |
| Xác minh check-in bằng GPS, nhận diện khuôn mặt hoặc chống gian lận nâng cao | Không xác minh vị trí bằng GPS hoặc nhận diện sinh trắc học. | Rủi ro quyền riêng tư và tăng đáng kể độ phức tạp. | Có thể dùng mã check-in do admin/đơn vị tổ chức cung cấp tại điểm đến; nếu không triển khai được, ghi rõ check-in chỉ là dữ liệu người dùng tự khai. |
| Phần thưởng có giá trị tiền thật, mã giảm giá thương mại đang hoạt động hoặc quà tặng được tài trợ | Phần thưởng chỉ là mô phỏng trong đồ án, trừ khi có thỏa thuận thực tế riêng. | Chưa có ngân sách, đối tác hoặc hệ thống quản lý mã ưu đãi thật. | Hiển thị voucher minh họa và nêu rõ điều kiện áp dụng trong demo. |
| Chia sẻ nhật ký công khai phức tạp, bình luận, lượt thích và theo dõi người dùng | Không xây mạng xã hội hoặc hệ thống tương tác công khai cho nhật ký. | Phát sinh quyền riêng tư, kiểm duyệt và quản lý nội dung người dùng. | Ưu tiên nhật ký riêng tư; chia sẻ liên kết chỉ triển khai nếu còn thời gian và nhóm thống nhất. |
| Tích điểm thành viên, bảng xếp hạng, nhiệm vụ hằng ngày và cơ chế game hóa mở rộng | Không triển khai các hệ thống game hóa ngoài tiến độ manh mối và phần thưởng cơ bản của Hành Trình Giải Mã. | Dễ làm tăng phạm vi, tạo thêm quy tắc và dữ liệu cần quản lý. | Chỉ theo dõi tiến độ của một hành trình giải mã và một mức thưởng theo công thức đã công bố. |
| Ứng dụng di động riêng, chat trực tuyến và báo giá riêng cho đoàn lớn | Chỉ xây website đáp ứng các kích thước màn hình mục tiêu. | Vượt quá nguồn lực và thời gian đồ án. | Giao diện responsive và chọn số người trong giới hạn sức chứa của lịch trải nghiệm. |

---

## 8. Yêu cầu chức năng (Functional Requirements)

Quy ước mức ưu tiên:

- **Cao:** chức năng cốt lõi hoặc điều kiện bắt buộc để luồng liên quan hoạt động.
- **Trung bình:** chức năng hỗ trợ quan trọng, triển khai sau các luồng cốt lõi.
- **Thấp — tùy chọn:** chỉ triển khai nếu nhóm còn đủ thời gian và đã hoàn thành các chức năng ưu tiên cao.
- Các FR-29 trở đi là **đề xuất bổ sung**, chưa tự động trở thành quyết định chính thức của nhóm cho đến khi được thống nhất.

### 8.1. Tài khoản và truy cập

| ID    | Tên chức năng               | Mô tả                                                                    | Người dùng        | Ưu tiên    | Tiêu chí nghiệm thu                                                                                                                                                                                                  |
| ----- | --------------------------- | ------------------------------------------------------------------------ | ----------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FR-01 | Đăng ký tài khoản           | Tạo tài khoản bằng họ tên, email và mật khẩu.                            | Khách hàng        | Cao        | Không cho đăng ký khi thiếu trường bắt buộc; email đúng định dạng và không trùng; mật khẩu đáp ứng quy tắc tối thiểu; tài khoản đăng ký thành công có thể đăng nhập; mật khẩu không lưu dạng văn bản thuần.          |
| FR-02 | Đăng nhập và đăng xuất      | Đăng nhập bằng thông tin hợp lệ và kết thúc phiên sử dụng khi đăng xuất. | Khách hàng, admin | Cao        | Chỉ tài khoản hợp lệ mới đăng nhập được; thông báo lỗi không tiết lộ mật khẩu; người chưa đăng nhập không truy cập được chức năng yêu cầu xác thực; phiên đăng xuất không tiếp tục truy cập được trang cần xác thực. |
| FR-03 | Quản lý thông tin tài khoản | Xem và cập nhật thông tin cá nhân cơ bản.                                | Khách hàng        | Trung bình | Khách xem được thông tin của mình; dữ liệu được kiểm tra trước khi lưu; không thể sửa thông tin tài khoản người khác.                                                                                                |

### 8.2. Khám phá trải nghiệm

| ID    | Tên chức năng               | Mô tả                                                                                                    | Người dùng                       | Ưu tiên | Tiêu chí nghiệm thu                                                                                                                                                               |
| ----- | --------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FR-04 | Xem danh sách trải nghiệm   | Hiển thị trải nghiệm đang công khai, gồm tên, hình ảnh, địa điểm, loại hình và giá cơ bản.               | Khách hàng, khách chưa đăng nhập | Cao     | Chỉ hiển thị trải nghiệm đủ điều kiện công khai; mỗi mục có đường dẫn đến trang chi tiết; hiển thị trạng thái phù hợp khi không có kết quả.                                       |
| FR-05 | Tìm kiếm và lọc trải nghiệm | Tìm theo từ khóa và lọc theo khu vực hoặc loại hình.                                                     | Khách hàng, khách chưa đăng nhập | Cao     | Kết quả phù hợp từ khóa và bộ lọc; hỗ trợ kết hợp bộ lọc; có thể xóa bộ lọc; thông báo khi không có kết quả.                                                                      |
| FR-06 | Xem chi tiết trải nghiệm    | Hiển thị nội dung, hình ảnh, địa điểm, giá, thời lượng, người hướng dẫn/nghệ nhân và điều kiện tham gia. | Khách hàng, khách chưa đăng nhập | Cao     | Dữ liệu lấy từ hệ thống; không tự tạo thông tin chưa được cung cấp; trải nghiệm không còn công khai không được đặt mới.                                                           |
| FR-07 | Xem lịch và sức chứa        | Hiển thị lịch mở đặt chỗ, sức chứa tối đa, số người đã xác nhận và số chỗ còn lại.                       | Khách hàng, khách chưa đăng nhập | Cao     | Số chỗ còn lại được tính theo quy tắc nghiệp vụ; lịch đã hủy, kết thúc hoặc hết chỗ không cho đặt mới; số chỗ không âm; kiểm tra lại sức chứa khi thanh toán mô phỏng thành công. |

### 8.3. Booking và thanh toán mô phỏng

| ID    | Tên chức năng                     | Mô tả                                                                                               | Người dùng                        | Ưu tiên    | Tiêu chí nghiệm thu                                                                                                                                                                                                      |
| ----- | --------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| FR-08 | Tạo booking                       | Chọn lịch, nhập số người tham gia và tạo booking.                                                   | Khách hàng                        | Cao        | Khách phải đăng nhập; lịch và số người hợp lệ; kiểm tra sức chứa trước khi tiếp nhận; mỗi booking có mã riêng và lưu thông tin cần thiết; tạo booking chưa đồng nghĩa xác nhận chỗ.                                      |
| FR-09 | Thanh toán mô phỏng               | Giao diện mô phỏng cho phép chọn kết quả thành công hoặc thất bại.                                  | Khách hàng                        | Cao        | Ghi rõ đây không phải thanh toán thật; khách chọn được kết quả; lưu kết quả và mã giao dịch mô phỏng; kết quả thanh toán lưu riêng trạng thái booking; không thu hoặc hoàn tiền thật.                                    |
| FR-10 | Xác nhận booking tự động          | Sau khi thanh toán mô phỏng thành công, hệ thống kiểm tra lại sức chứa và quyết định xác nhận.      | Hệ thống; khách hàng nhận kết quả | Cao        | Đủ chỗ thì xác nhận booking; hết chỗ thì không xác nhận và lưu trạng thái không thể xác nhận do hết chỗ; lưu riêng kết quả thanh toán; thanh toán thất bại không xác nhận booking; không xác nhận trùng do thao tác lặp. |
| FR-11 | Thử lại thanh toán mô phỏng       | Cho phép thử lại với booking còn ở trạng thái chờ thanh toán và chưa bị hủy.                        | Khách hàng                        | Trung bình | Booking đủ điều kiện được thử lại; booking đã xác nhận, đã hủy hoặc không còn đủ điều kiện không được thanh toán lại theo luồng thông thường; lưu lịch sử từng lần thử.                                                  |
| FR-12 | Xem lịch sử và chi tiết booking   | Xem danh sách booking, trạng thái và chi tiết từng booking.                                         | Khách hàng                        | Cao        | Chỉ xem được booking của tài khoản đang đăng nhập; chi tiết có mã booking, trải nghiệm, lịch, số người, tổng tiền, trạng thái booking và kết quả thanh toán; trạng thái khớp dữ liệu đã lưu.                             |
| FR-13 | Hủy booking tự động theo quy định | Khách yêu cầu hủy trước giờ bắt đầu trải nghiệm ít nhất 48 giờ; hệ thống tự xử lý nếu đủ điều kiện. | Khách hàng, hệ thống              | Cao        | Kiểm tra thời hạn tại thời điểm gửi yêu cầu; đủ điều kiện thì hủy; không đủ điều kiện thì thông báo lý do; cập nhật số chỗ sau khi hủy; giữ lịch sử booking và thanh toán mô phỏng; không hoàn tiền thật.                |
| FR-14 | Tự động hoàn thành booking        | Xác định booking hoàn thành dựa trên thời điểm kết thúc lịch trải nghiệm.                           | Hệ thống                          | Trung bình | Lịch có thời gian bắt đầu và kết thúc; booking đã xác nhận được chuyển sang hoàn thành theo quy tắc; booking đã hủy không được hoàn thành; cơ chế cập nhật phải phù hợp với kiến trúc và được kiểm thử.                  |

### 8.4. Đánh giá và thông báo

| ID    | Tên chức năng             | Mô tả                                                                                                                                                                                                                                 | Người dùng           | Ưu tiên    | Tiêu chí nghiệm thu                                                                                                                                                                                                                                                                                                                                                          |
| ----- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FR-15 | Đánh giá trải nghiệm      | Cho phép đánh giá sau khi booking hoàn thành.                                                                                                                                                                                         | Khách hàng           | Trung bình | Chỉ booking hoàn thành mới được đánh giá; mỗi booking có tối đa một đánh giá; kiểm tra nội dung và điểm trước khi lưu; liên kết đánh giá với booking và trải nghiệm.                                                                                                                                                                                                         |
| FR-16 | Quản lý hiển thị đánh giá | Admin có thể ẩn hoặc gỡ đánh giá không phù hợp; đánh giá hợp lệ được hiển thị sau khi gửi.                                                                                                                                            | Admin, hệ thống      | Trung bình | Đánh giá hợp lệ được hiển thị; admin có thể ẩn hoặc gỡ; đánh giá đã ẩn/gỡ không xuất hiện công khai; lưu trạng thái kiểm duyệt.                                                                                                                                                                                                                                              |
| FR-17 | Thông báo trong website   | Hệ thống tạo và hiển thị thông báo cho khách hàng khi booking được xác nhận, booking bị hủy hoặc lịch trải nghiệm đã đặt bị hủy. Thông báo giúp khách hàng cập nhật các thay đổi quan trọng liên quan đến hoạt động đặt chỗ của mình. | Hệ thống, khách hàng | Trung bình | Hệ thống tạo thông báo tương ứng khi xảy ra sự kiện; mỗi thông báo được liên kết với đúng tài khoản khách hàng và booking hoặc lịch liên quan; nội dung thông báo phản ánh chính xác sự kiện và trạng thái đã được lưu; khách hàng chỉ xem được thông báo thuộc tài khoản của mình; thông báo được lưu để khách hàng có thể xem lại; nếu tạo thông báo thất bại, hệ thống không làm sai lệch trạng thái booking và có cơ chế xử lý lỗi phù hợp. |

### 8.5. Quản trị

| ID    | Tên chức năng                       | Mô tả                                                                                                                                     | Người dùng        | Ưu tiên    | Tiêu chí nghiệm thu                                                                                                                                                                                                                                                    |
| ----- | ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FR-18 | Quản lý trải nghiệm                 | Thêm, chỉnh sửa, ngừng công khai trải nghiệm và quản lý loại hình, khu vực, giá, hình ảnh, nội dung, thông tin người hướng dẫn/nghệ nhân. | Admin             | Cao        | Thêm và chỉnh sửa được dữ liệu hợp lệ; kiểm tra trường bắt buộc; trải nghiệm ngừng công khai không được đặt mới; giữ thông tin cần thiết của trải nghiệm đã có booking.                                                                                                |
| FR-19 | Quản lý lịch và sức chứa            | Tạo, chỉnh sửa, mở hoặc đóng lịch và thiết lập sức chứa tối đa.                                                                           | Admin, hệ thống   | Cao        | Lịch có thời gian và sức chứa hợp lệ; sức chứa là số nguyên dương; cảnh báo nếu giảm sức chứa thấp hơn số người đã xác nhận; theo phương án thảo luận, admin có thể tiếp tục sau cảnh báo; không nhận booking mới nếu vượt sức chứa; không tự hủy booking đã xác nhận. |
| FR-20 | Hủy lịch và xử lý booking liên quan | Admin hủy lịch; hệ thống tự hủy booking chưa diễn ra liên quan.                                                                           | Admin, hệ thống   | Cao        | Admin xác nhận thao tác; lịch đã hủy không nhận booking mới; booking chưa diễn ra được chuyển sang trạng thái hủy; giữ lịch sử booking và thanh toán mô phỏng; lưu lý do nếu có; không tự chuyển lịch hoặc hoàn tiền thật.                                             |
| FR-21 | Quản lý booking                     | Xem danh sách và chi tiết booking để theo dõi hoạt động đặt chỗ.                                                                          | Admin             | Cao        | Lọc/xem booking theo mã, trải nghiệm, lịch và trạng thái; xem được thông tin cần thiết; không tùy ý sửa trạng thái do hệ thống tự xác định; giữ lịch sử để tra cứu.                                                                                                    |
| FR-22 | Xem kết quả thanh toán mô phỏng     | Xem kết quả các lần thanh toán mô phỏng và booking tương ứng.                                                                             | Admin             | Trung bình | Xem được mã giao dịch mô phỏng, booking, kết quả và thời điểm; hiển thị riêng kết quả thanh toán với trạng thái booking; không thu tiền, hoàn tiền hoặc sửa kết quả tùy ý.                                                                                             |
| FR-23 | Quản lý nội dung văn hóa            | Tạo, chỉnh sửa, công khai hoặc ngừng công khai bài viết giới thiệu văn hóa.                                                               | Admin, khách hàng | Thấp       | Admin quản lý được tiêu đề, nội dung, hình ảnh và trạng thái; khách chỉ xem bài viết công khai; bài viết không bắt buộc liên kết với booking.                                                                                                                          |
| FR-24 | Xem thống kê cơ bản                 | Hiển thị số booking theo trạng thái, số trải nghiệm công khai và số lịch sắp diễn ra.                                                     | Admin             | Thấp       | Số liệu lấy từ dữ liệu hiện có; định nghĩa rõ để tránh đếm trùng; hiển thị 0/trạng thái trống khi chưa có dữ liệu; không thống kê giao dịch tài chính thật.                                                                                                            |

### 8.6. Khám phá văn hóa và địa điểm

| ID    | Tên chức năng  | Mô tả                                                                                        | Người dùng                 | Ưu tiên    | Tiêu chí nghiệm thu                                                                                                                                                                                                    |
| ----- | -------------- | -------------------------------------------------------------------------------------------- | -------------------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FR-25 | Bản đồ văn hóa | Hiển thị bản đồ giúp người dùng khám phá các địa điểm văn hóa và trải nghiệm thuộc Nét Việt. | Khách hàng, khách truy cập | Trung bình | Bản đồ hiển thị các địa điểm đã được công khai và có dữ liệu hợp lệ; người dùng có thể chọn địa điểm để xem thông tin liên quan; nếu chưa có dữ liệu hoặc bản đồ không tải được, hệ thống hiển thị trạng thái phù hợp. |

### 8.7. Liên hệ và thông tin hỗ trợ

| ID    | Tên chức năng                | Mô tả                                                                                                                   | Người dùng                 | Ưu tiên    | Tiêu chí nghiệm thu                                                                                                                                                                                                |
| ----- | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------- | -------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| FR-26 | Gửi yêu cầu liên hệ          | Cho phép khách hàng hoặc khách truy cập gửi câu hỏi, góp ý hoặc yêu cầu hỗ trợ thông qua biểu mẫu liên hệ trên website. | Khách hàng, khách truy cập | Trung bình | Kiểm tra các trường bắt buộc và định dạng dữ liệu; chỉ lưu yêu cầu hợp lệ; thông báo kết quả gửi; yêu cầu được lưu để admin xem và xử lý; không thông báo gửi thành công nếu xảy ra lỗi lưu dữ liệu.               |
| FR-27 | Xem câu hỏi thường gặp (FAQ) | Cung cấp trang câu hỏi thường gặp về cách sử dụng website, đặt chỗ và các quy định liên quan.                           | Khách hàng, khách truy cập | Thấp       | Người dùng xem được FAQ mà không cần đăng nhập; chỉ hiển thị nội dung đã được công khai; nội dung dễ đọc; hiển thị trạng thái phù hợp nếu chưa có câu hỏi và câu trả lời.                                          |
| FR-28 | Xem chính sách và điều khoản | Cung cấp các trang chính sách và điều khoản liên quan đến sử dụng website, đặt chỗ và hủy đặt chỗ.                      | Khách hàng, khách truy cập | Trung bình | Người dùng xem được nội dung mà không cần đăng nhập; chỉ hiển thị nội dung đã được công khai; chính sách đặt chỗ và hủy đặt chỗ nhất quán với quy tắc nghiệp vụ; hiển thị trạng thái phù hợp nếu chưa có nội dung. |




### 8.8. Lập kế hoạch và ghép tour thông minh — Nét Việt Tour Planner

> **Trạng thái:** Đề xuất bổ sung theo idea nhóm đã chốt; cần nhóm xác nhận phạm vi MVP trước khi chuyển thành yêu cầu chính thức.
>
> **Nguyên tắc phạm vi:** Tour Planner tạo lịch trình gợi ý từ dữ liệu trải nghiệm có sẵn. Trong phiên bản tối thiểu, việc tạo lịch trình **không tự động tạo một booking gộp hoặc thu tiền cho toàn tour**. Người dùng vẫn đặt từng trải nghiệm theo quy trình booking hiện có ở FR-08 đến FR-14.

| ID | Tên chức năng | Mô tả | Người dùng | Ưu tiên đề xuất | Tiêu chí nghiệm thu |
| --- | --- | --- | --- | --- | --- |
| FR-29 | Nhập nhu cầu lập tour | Cho phép người dùng chọn khu vực, khoảng thời gian, ngân sách dự kiến, số người và sở thích trải nghiệm văn hóa để tạo yêu cầu lập tour. | Khách hàng, khách truy cập | Cao | Có kiểm tra trường bắt buộc và định dạng; ngân sách và số người phải hợp lệ; người dùng có thể sửa nhu cầu trước khi tạo gợi ý; hệ thống thông báo rõ khi dữ liệu không hợp lệ hoặc không có đủ dữ liệu phù hợp. |
| FR-30 | Tạo lịch trình tour gợi ý | Hệ thống lọc các trải nghiệm đang công khai và có dữ liệu hợp lệ, sau đó ghép các điểm đến theo khu vực, thời lượng, sở thích và ngân sách; hiển thị thứ tự gợi ý, thời lượng dự kiến và chi phí dự kiến. | Hệ thống, khách hàng, khách truy cập | Cao | Chỉ dùng dữ liệu trải nghiệm hiện có; không đưa trải nghiệm đã ngừng công khai hoặc lịch không thể đặt vào danh sách đặt chỗ; tổng chi phí được tính theo quy tắc hiển thị rõ; nếu không tìm được phương án phù hợp, hiển thị lý do và cho phép thay đổi tiêu chí; kết quả được ghi rõ là gợi ý, không bảo đảm chỗ còn trống cho đến khi kiểm tra lịch/booking. |
| FR-31 | Chỉnh sửa và tính lại lịch trình | Cho phép người dùng bỏ hoặc thay một điểm đến, thay đổi thứ tự trong phạm vi hợp lý và yêu cầu hệ thống tính lại thời lượng, chi phí và lịch trình. | Khách hàng, khách truy cập | Trung bình | Sau mỗi thay đổi, tổng chi phí và thời lượng được cập nhật từ dữ liệu hiện có; không giữ thông tin tính toán cũ sau khi thay đổi; nếu lịch trình mới vượt ngân sách hoặc thời gian, hiển thị cảnh báo; người dùng có thể quay lại phương án gợi ý ban đầu trong phiên làm việc. |
| FR-32 | Lưu lịch trình tour | Cho phép khách hàng đã đăng nhập lưu một lịch trình gợi ý vào tài khoản để xem lại và dùng làm cơ sở cho Nhật Ký Hành Trình hoặc Hành Trình Giải Mã. | Khách hàng | Trung bình | Lịch trình lưu được gắn với đúng tài khoản; lưu danh sách và thứ tự trải nghiệm cùng thông tin tổng quan tại thời điểm lưu; người dùng chỉ xem/sửa lịch trình của mình; khách chưa đăng nhập được yêu cầu đăng nhập trước khi lưu; lịch trình lưu không đồng nghĩa với booking đã được xác nhận. |

### 8.9. Nhật Ký Hành Trình

> **Trạng thái:** Đề xuất bổ sung theo idea nhóm đã chốt; cần nhóm thống nhất quyền riêng tư, điều kiện tạo nhật ký và phạm vi chia sẻ.
>
> **Nguyên tắc phạm vi:** Nhật ký được khởi tạo từ lịch trình đã lưu và có thể liên kết với các booking của những trải nghiệm trong lịch trình. Việc lưu lịch trình không tự chứng minh rằng người dùng đã tham gia; trạng thái hoàn thành chỉ được cập nhật khi người dùng thực hiện check-in theo quy tắc nhóm thống nhất.

| ID | Tên chức năng | Mô tả | Người dùng | Ưu tiên đề xuất | Tiêu chí nghiệm thu |
| --- | --- | --- | --- | --- | --- |
| FR-33 | Tạo nhật ký từ lịch trình | Tạo một nhật ký gắn với lịch trình tour do khách hàng đã đăng nhập lưu. Nhật ký hiển thị tên hành trình, các điểm đến và thứ tự dự kiến theo lịch trình. | Hệ thống, khách hàng | Trung bình | Mỗi nhật ký liên kết với một lịch trình và đúng chủ tài khoản; các điểm đến được lấy từ lịch trình đã lưu, không tự sinh địa điểm; nhật ký mới có trạng thái ban đầu chưa hoàn thành; không tự đánh dấu đã tham gia chỉ vì nhật ký được tạo. |
| FR-34 | Check-in tại điểm đến | Cho phép người dùng chọn một điểm đến trong nhật ký, tải lên ảnh check-in và ghi cảm nhận ngắn; sau đó gửi check-in để cập nhật tiến độ điểm đến. | Khách hàng | Trung bình | Chỉ chủ nhật ký mới được thêm hoặc sửa nội dung; kiểm tra loại/kích thước tệp theo giới hạn do nhóm quy định; kiểm tra độ dài cảm nhận; người dùng nhìn thấy thông báo khi lưu thành công hoặc thất bại; trạng thái check-in chỉ đổi khi dữ liệu được lưu thành công; hệ thống không tuyên bố đã xác minh sự hiện diện thực tế nếu không có cơ chế xác minh riêng. |
| FR-35 | Tự động trình bày album hành trình | Tự động sắp xếp tên địa điểm, ảnh, cảm nhận và trạng thái check-in thành giao diện nhật ký theo timeline hoặc mẫu scrapbook có sẵn. | Hệ thống, khách hàng | Trung bình | Nội dung được sắp xếp theo thứ tự điểm đến trong lịch trình; điểm chưa check-in hiển thị trạng thái chưa hoàn thành; khi ảnh hoặc cảm nhận được cập nhật, album phản ánh dữ liệu mới; giao diện không yêu cầu người dùng tự sắp xếp bố cục. |
| FR-36 | Xem và chỉnh sửa nhật ký | Cho phép người dùng xem lại các nhật ký của mình và chỉnh sửa ảnh/cảm nhận đã lưu. | Khách hàng | Trung bình | Người dùng chỉ xem/sửa nhật ký của mình; thay đổi được lưu và hiển thị nhất quán; không cho sửa chủ sở hữu hoặc tự ý thay đổi lịch trình/booking gốc thông qua nhật ký; nếu chưa có nhật ký, hiển thị trạng thái trống và hướng dẫn phù hợp. |
| FR-37 | Chọn quyền riêng tư nhật ký | Cho phép người dùng đặt nhật ký ở chế độ riêng tư; chế độ công khai hoặc chia sẻ bằng liên kết chỉ triển khai nếu nhóm thống nhất đủ thời gian và quy tắc bảo vệ dữ liệu. | Khách hàng | Thấp — tùy chọn | Mặc định nhật ký ở chế độ riêng tư; nhật ký riêng tư không hiển thị cho người dùng khác; nếu triển khai chia sẻ, giao diện phải thể hiện rõ trạng thái công khai và người dùng có thể tắt chia sẻ; không để lộ ảnh/cảm nhận riêng tư qua đường dẫn công khai. |

### 8.10. Hành Trình Giải Mã

> **Trạng thái:** Đề xuất bổ sung theo idea nhóm đã chốt; cần nhóm thống nhất cơ chế xác nhận tham gia, số lần trả lời và chính sách phần thưởng.
>
> **Nguyên tắc phạm vi:** Tính năng này liên kết với các trải nghiệm trong lịch trình Tour Planner, nhưng không phụ thuộc Nhật Ký Hành Trình. Trong MVP, người dùng có thể tham gia giải mã nếu đã đặt và hoàn thành các trải nghiệm đủ điều kiện, kể cả khi không tạo hoặc không sử dụng nhật ký.

| ID | Tên chức năng | Mô tả | Người dùng | Ưu tiên đề xuất | Tiêu chí nghiệm thu |
| --- | --- | --- | --- | --- | --- |
| FR-38 | Xem hành trình giải mã và tiến độ | Hiển thị chủ đề hành trình, danh sách trải nghiệm đủ điều kiện, trạng thái từng thử thách, số manh mối đã thu thập và điều kiện mở câu đố cuối. | Khách hàng | Trung bình | Tiến độ được lấy từ dữ liệu đã lưu; người dùng chỉ xem tiến độ thuộc tài khoản của mình; nêu rõ trải nghiệm nào cần hoàn thành và điều kiện mở khóa; không đánh dấu thu thập manh mối khi người dùng chưa đáp ứng điều kiện. |
| FR-39 | Mở thử thách gắn với trải nghiệm | Cung cấp câu hỏi/thử thách liên quan đến nội dung văn hóa hoặc chi tiết được quan sát trong trải nghiệm. Thử thách chỉ mở khi booking liên quan đã hoàn thành và đáp ứng điều kiện xác minh do nhóm lựa chọn. | Hệ thống, khách hàng | Cao | Chỉ hiển thị thử thách đã được quản trị viên công khai; thử thách gắn đúng trải nghiệm; booking bị hủy, chưa xác nhận hoặc chưa hoàn thành không đủ điều kiện; nếu dùng mã check-in/xác nhận tại địa điểm, mã phải được kiểm tra trước khi mở thử thách; giao diện nêu rõ yêu cầu trước khi bắt đầu. |
| FR-40 | Trả lời thử thách và nhận manh mối | Cho phép người dùng chọn đáp án và gửi câu trả lời; đáp án đúng mở khóa manh mối tương ứng. Để tránh đoán lặp vô hạn, đề xuất mỗi thử thách chỉ nhận một câu trả lời chính thức cho mỗi người dùng. | Khách hàng, hệ thống | Cao | Câu hỏi có các lựa chọn được cấu hình sẵn và chỉ có một đáp án đúng theo dữ liệu quản trị; sau khi gửi, hệ thống lưu kết quả; câu trả lời đúng mở manh mối; câu trả lời sai không mở manh mối và không cho gửi lại thử thách đó; thao tác gửi lặp không tạo nhiều lượt; người dùng được thông báo rõ kết quả. |
| FR-41 | Mở câu đố cuối và giải mã | Khi người dùng thu thập đủ các manh mối theo điều kiện hành trình, hệ thống mở câu đố cuối để người dùng chọn đáp án và hoàn tất hành trình giải mã. | Khách hàng, hệ thống | Trung bình | Câu đố cuối chỉ mở khi đủ điều kiện; manh mối được tính từ các thử thách hợp lệ đã hoàn thành; kết quả được lưu; người dùng không thể tự mở khóa bằng cách thay đổi URL hoặc gửi yêu cầu không hợp lệ; số lần trả lời câu đố cuối cần theo quy tắc nhóm thống nhất và phải được thông báo trước. |
| FR-42 | Tính và hiển thị phần thưởng | Xác định mức thưởng dựa trên kết quả các thử thách và điều kiện hoàn thành; hiển thị phần thưởng mô phỏng hoặc mã ưu đãi dùng cho lần đặt trải nghiệm tiếp theo. | Hệ thống, khách hàng | Trung bình | Mức thưởng được tính theo một công thức đã công bố; cùng một kết quả luôn cho cùng một mức thưởng; mỗi hành trình chỉ cấp một phần thưởng theo quy tắc; mã thưởng mô phỏng được gắn với tài khoản/hành trình; giao diện ghi rõ phần thưởng là mô phỏng nếu chưa tích hợp hệ thống mã ưu đãi thực tế. |
| FR-43 | Quản lý nội dung giải mã | Cho phép admin tạo/chỉnh sửa/ẩn hành trình giải mã, câu hỏi, lựa chọn, đáp án đúng, manh mối, câu đố cuối, điều kiện mở khóa và quy tắc phần thưởng. | Admin | Trung bình | Chỉ admin được quản lý; dữ liệu bắt buộc phải đầy đủ trước khi công khai; mỗi câu hỏi có đáp án đúng xác định; nội dung chưa hoàn chỉnh không thể công khai; thay đổi nội dung không được làm sai lệch kết quả đã ghi nhận của người dùng trước đó nếu nhóm chọn giữ lịch sử. |

### 8.11. Liên kết giữa ba tính năng mới

| Liên kết | Quy tắc liên kết đề xuất | Phạm vi cần thống nhất |
| --- | --- | --- |
| Tour Planner → Nhật Ký Hành Trình | Lịch trình được lưu ở FR-32 là nguồn dữ liệu để khởi tạo nhật ký ở FR-33; nhật ký lấy danh sách và thứ tự điểm đến từ lịch trình. | Nhóm cần xác nhận nhật ký được tạo ngay khi lưu lịch trình hay chỉ khi có ít nhất một booking được xác nhận. Đề xuất MVP: chỉ cho tạo nhật ký từ lịch trình đã lưu của tài khoản; trạng thái tham gia/check-in vẫn độc lập. |
| Tour Planner → Hành Trình Giải Mã | Các trải nghiệm trong lịch trình có thể được gắn với các thử thách; người dùng chỉ thu thập manh mối khi đáp ứng điều kiện booking/hoàn thành và điều kiện xác minh đã công bố. | Nhóm cần xác nhận người dùng có thể tham gia giải mã từ booking trải nghiệm đơn lẻ hay bắt buộc phải lưu lịch trình Tour Planner. Đề xuất MVP: hành trình giải mã có thể gắn với lịch trình đã lưu; điều kiện từng thử thách vẫn dựa trên booking đủ điều kiện. |
| Nhật Ký Hành Trình ↔ Hành Trình Giải Mã | Không bắt buộc liên kết trực tiếp; cả hai cùng có thể dùng dữ liệu lịch trình/booking nhưng vận hành độc lập. | Không yêu cầu người dùng hoàn thành nhật ký mới được giải đố, hoặc giải đố mới được dùng nhật ký. |



---

## 9. Yêu cầu phi chức năng (Non-functional Requirements)

Các ngưỡng dưới đây là mục tiêu đề xuất để nhóm kiểm thử, chưa phải kết quả đo thực tế. Các yêu cầu liên quan đến ảnh, lịch trình và câu đố chỉ áp dụng nếu các tính năng tương ứng được nhóm chốt triển khai.

| ID | Yêu cầu | Mô tả | Ưu tiên | Tiêu chí đánh giá |
| --- | --- | --- | --- | --- |
| NFR-01 | Hiệu năng | Trang và thao tác chính phản hồi trong thời gian phù hợp. | Cao | Trong môi trường kiểm thử, ít nhất 90% yêu cầu tải danh sách, chi tiết, lịch và lịch trình gợi ý trả kết quả trong tối đa 3 giây với bộ dữ liệu demo đã thống nhất; tạo booking, lưu lịch trình và cập nhật tiến độ phản hồi trong tối đa 3 giây trong điều kiện thông thường, không tính thời gian tải ảnh từ mạng ngoài. |
| NFR-02 | Tính dễ sử dụng | Giao diện rõ ràng, nhất quán và hỗ trợ người dùng hoàn thành các luồng chính. | Cao | Người dùng có thể tìm trải nghiệm, lập lịch trình, hiểu tổng chi phí dự kiến, đặt trải nghiệm, xem nhật ký và hiểu điều kiện giải mã theo hướng dẫn trên giao diện; lỗi và trạng thái có thông báo rõ; nếu điều kiện cho phép, thử nghiệm với ít nhất 3 người và ghi nhận vấn đề. |
| NFR-03 | Tương thích thiết bị và trình duyệt | Website hoạt động trên các kích thước màn hình phổ biến và trình duyệt hiện đại. | Cao | Các luồng chính dùng được trên máy tính và một kích thước màn hình di động; nội dung quan trọng không bị che khuất hoặc buộc cuộn ngang tại kích thước mục tiêu; kiểm thử ít nhất hai trình duyệt hiện đại. |
| NFR-04 | Bảo mật và quyền riêng tư | Bảo vệ tài khoản, dữ liệu cá nhân, ảnh/cảm nhận và quyền truy cập theo vai trò. | Cao | Mật khẩu được băm; trang quản trị yêu cầu quyền admin; người dùng không xem/sửa booking, lịch trình, nhật ký hoặc tiến độ giải mã của người khác bằng cách đổi ID; kiểm tra dữ liệu đầu vào ở máy chủ; nhật ký mặc định riêng tư nếu có chức năng nhật ký; không để lộ dữ liệu riêng tư qua URL công khai ngoài ý muốn. |
| NFR-05 | Tính nhất quán và toàn vẹn dữ liệu | Booking, sức chứa, lịch trình, nhật ký, manh mối và phần thưởng được cập nhật nhất quán. | Cao | Số chỗ được tính theo quy tắc thống nhất; lịch trình và chi phí được tính lại sau khi sửa điểm đến; check-in chỉ cập nhật khi lưu thành công; manh mối chỉ mở khi đủ điều kiện; cùng một thử thách không được ghi nhận nhiều câu trả lời chính thức do thao tác lặp; mỗi hành trình chỉ cấp phần thưởng theo quy tắc đã chốt. |
| NFR-06 | Độ tin cậy và xử lý lỗi | Xử lý lỗi có kiểm soát và thông báo rõ ràng. | Cao | Dữ liệu không hợp lệ hoặc thao tác không được phép không làm sai lệch dữ liệu; nếu tải ảnh/lưu nhật ký thất bại thì không báo thành công; lỗi tạo lịch trình hoặc tính chi phí phải có thông báo phù hợp; thông báo lỗi không để lộ thông tin kỹ thuật nhạy cảm. |
| NFR-07 | Khả năng bảo trì và mở rộng | Mã nguồn và cấu trúc dự án dễ đọc, dễ sửa và phù hợp nguồn lực nhóm. | Trung bình | Mã nguồn được tổ chức hợp lý; quy tắc ghép tour, điều kiện mở khóa và tính thưởng không bị viết lặp tùy tiện; tên biến/hàm và cấu trúc dữ liệu nhất quán; README có hướng dẫn cài đặt/chạy; các quy tắc quan trọng được mô tả trong tài liệu. |
| NFR-08 | Khả năng kiểm thử | Yêu cầu có thể được kiểm tra bằng dữ liệu và kịch bản cụ thể. | Cao | Có dữ liệu demo cho booking thành công/thất bại/hết chỗ/hủy; lịch trình trong và ngoài ngân sách; nhật ký chưa check-in/đã check-in; câu trả lời đúng/sai; điều kiện chưa đủ/đủ để mở câu đố cuối; phần thưởng theo từng mức. Lưu kết quả kiểm thử các luồng đã triển khai. |
| NFR-09 | Giới hạn tệp tải lên | Kiểm soát tệp ảnh trong nhật ký để giảm lỗi và rủi ro lưu trữ. | Trung bình nếu triển khai nhật ký | Chỉ chấp nhận định dạng ảnh được nhóm cho phép; giới hạn dung lượng tối đa được công bố trên giao diện; từ chối tệp không hợp lệ; tên tệp và dữ liệu tải lên được xử lý an toàn; kiểm thử cả trường hợp hợp lệ và bị từ chối. |
| NFR-10 | Minh bạch của lịch trình và phần thưởng | Giúp người dùng hiểu kết quả là ước tính và phần thưởng tuân theo quy tắc nào. | Trung bình | Tour Planner nêu rõ thời lượng/chi phí là dự kiến; không cam kết còn chỗ trước khi kiểm tra booking; Hành Trình Giải Mã công bố điều kiện tham gia, số lần trả lời và công thức phần thưởng trước khi người dùng bắt đầu; voucher demo được đánh dấu là mô phỏng. |

---

## 10. Giới hạn và giả định

### 10.1. Giới hạn

- Đây là đồ án website phục vụ học tập, không phải nền tảng booking thương mại đang vận hành thực tế.
- Thanh toán chỉ được mô phỏng bằng giao diện lựa chọn kết quả thành công hoặc thất bại; không thu, hoàn tiền hoặc đối soát tài chính thật.
- Không tích hợp email, SMS, Zalo, cổng thanh toán production hoặc hệ thống thương mại bên ngoài.
- Tour Planner trong MVP sử dụng dữ liệu địa điểm/trải nghiệm đã được chuẩn bị và quy tắc ghép tour đơn giản; không sử dụng dữ liệu giao thông thời gian thực hoặc cam kết là tuyến đường tối ưu tuyệt đối.
- Trong MVP, lịch trình Tour Planner không phải một booking gộp nhiều điểm. Người dùng đặt từng trải nghiệm theo quy trình booking hiện có; việc liên kết booking với lịch trình cần được triển khai và kiểm thử nếu nhóm chốt.
- Nhật Ký Hành Trình tập trung vào ảnh, cảm nhận, check-in và bố cục scrapbook/timeline có sẵn; không xây mạng xã hội hoặc hệ thống chỉnh sửa ảnh chuyên nghiệp.
- Nếu có tải ảnh, nhóm cần giới hạn định dạng/dung lượng và lựa chọn cách lưu trữ phù hợp nguồn lực. Không cam kết khả năng lưu trữ quy mô lớn.
- Check-in không được coi là bằng chứng chắc chắn về sự hiện diện thực tế nếu nhóm không triển khai mã xác nhận tại địa điểm hoặc cơ chế xác minh tương đương.
- Hành Trình Giải Mã chỉ quản lý câu hỏi, đáp án, manh mối, tiến độ và phần thưởng cơ bản; không triển khai chống gian lận nâng cao hoặc phần thưởng có giá trị tiền thật.
- Mọi phần thưởng/mã voucher trong demo chỉ là mô phỏng, trừ khi nhóm có thỏa thuận thực tế riêng.
- Thời gian thực hiện dự án là 9 tuần; nhóm có 8 thành viên với thời gian và năng lực kỹ thuật có giới hạn. Các tính năng mới phải được ưu tiên theo khả năng triển khai, không mặc định tất cả tùy chọn đều bắt buộc.

### 10.2. Giả định nghiệp vụ hiện có

- Mỗi booking hiện tại thuộc về một khách hàng và một lịch trải nghiệm cụ thể.
- Khách hàng phải đăng nhập để tạo booking.
- Booking chỉ được xác nhận sau khi thanh toán mô phỏng thành công và hệ thống kiểm tra đủ sức chứa.
- Kết quả thanh toán mô phỏng và trạng thái booking được lưu độc lập.
- Phương án hủy booking trước giờ bắt đầu ít nhất 48 giờ vẫn cần nhóm xác nhận chính thức trước khi triển khai.
- Lịch bị hủy không nhận booking mới; các booking chưa diễn ra liên quan được xử lý theo quy tắc hủy đã thống nhất, đồng thời giữ lịch sử.
- Không hỗ trợ đổi lịch trực tiếp; người dùng cần hủy booking cũ theo quy định và tạo booking mới nếu muốn tham gia lịch khác.
- Chỉ booking hoàn thành mới được đánh giá; mỗi booking có tối đa một đánh giá.

### 10.3. Giả định nghiệp vụ đề xuất cho ba tính năng mới

Các giả định sau **chưa phải quyết định cuối cùng của nhóm**:

- Tour Planner dùng dữ liệu trải nghiệm đã công khai, khu vực, thời lượng, giá, sức chứa/lịch và các nhãn sở thích đã được nhập sẵn. Nếu dữ liệu không đủ, hệ thống phải thông báo thay vì tự tạo thông tin.
- Lịch trình do Tour Planner tạo là gợi ý; người dùng cần kiểm tra lịch và đặt từng trải nghiệm riêng. Lưu lịch trình không giữ chỗ và không bảo đảm lịch còn chỗ.
- Nhật ký được tạo từ lịch trình đã lưu. Nhóm cần chọn một trong hai quy tắc: (A) cho tạo nhật ký ngay sau khi lưu lịch trình; hoặc (B) chỉ cho tạo nhật ký khi có ít nhất một booking liên quan được xác nhận. Đề xuất MVP: chọn B để tránh tạo nhật ký cho lịch trình chưa có ý định tham gia, nhưng không đánh dấu điểm đến hoàn thành khi chưa check-in.
- Check-in là nội dung do người dùng gửi. Nếu cần gắn với trải nghiệm thực tế, nhóm có thể dùng mã check-in do admin/đơn vị tổ chức cung cấp tại địa điểm; nếu không có mã, phải ghi rõ đây là check-in tự khai.
- Hành Trình Giải Mã không phụ thuộc Nhật Ký Hành Trình. Điều kiện mở thử thách dựa trên booking đã hoàn thành và cơ chế xác minh đã thống nhất.
- Đề xuất mỗi thử thách có một lần trả lời chính thức cho mỗi người dùng; trả lời sai không mở manh mối và không được thử lại. Quy tắc số lần trả lời câu đố cuối phải được quyết định riêng và thông báo trước.
- Công thức phần thưởng cần được nhóm chốt trước khi triển khai. Mọi voucher trong bản demo đều là mô phỏng và không có giá trị thanh toán thực.
- Các điểm đến, câu hỏi và manh mối phải được admin/nhóm nội dung xác minh trước khi công khai; không sử dụng câu hỏi đòi hỏi thông tin thực tế mà dữ liệu demo không hỗ trợ.

---

## 11. Quy tắc nghiệp vụ trọng yếu cần thống nhất

| Mã | Quy tắc đề xuất | Lý do / nội dung cần xác nhận |
| --- | --- | --- |
| BR-01 | Chỉ khách hàng đăng nhập mới được tạo booking. | Xác định chủ sở hữu booking. |
| BR-02 | Booking chỉ được xác nhận khi thanh toán mô phỏng thành công và sức chứa còn đủ. | Tránh xác nhận vượt số chỗ. |
| BR-03 | Số chỗ còn lại được tính từ sức chứa và số người đang chiếm chỗ theo trạng thái booking. | Bảo đảm cách tính nhất quán. |
| BR-04 | Hủy booking thành công phải cập nhật số chỗ và giữ lại lịch sử booking. | Tránh mất dữ liệu và sai sức chứa. |
| BR-05 | Hủy lịch phải ngừng nhận booking mới và xử lý booking chưa diễn ra theo quy tắc đã thống nhất; không xóa lịch sử thanh toán mô phỏng. | Giữ dấu vết dữ liệu và tránh trạng thái mâu thuẫn. |
| BR-06 | Thời hạn hủy booking đã xác nhận dự kiến là ít nhất 48 giờ trước giờ bắt đầu; booking chờ thanh toán cần quy tắc riêng. | Cần nhóm xác nhận chính thức. |
| BR-07 | Booking đã hoàn thành mới được đánh giá; mỗi booking tối đa một đánh giá. | Bảo đảm đánh giá gắn với trải nghiệm thực tế. |
| BR-08 | Khi sức chứa giảm thấp hơn số người đã xác nhận, hệ thống cảnh báo; không nhận booking mới nếu không còn chỗ hợp lệ. | Không tự hủy booking đã xác nhận. |
| BR-09 | Kết quả thanh toán mô phỏng là dữ liệu kiểm thử, không đại diện cho giao dịch tài chính thật. | Tránh hiểu sai chức năng. |
| BR-10 | Tour Planner chỉ dùng dữ liệu trải nghiệm hợp lệ đã có; lịch trình và tổng chi phí được tính từ dữ liệu đó. | Tránh tạo thông tin địa điểm, giá hoặc thời lượng không có căn cứ. |
| BR-11 | Lịch trình Tour Planner là gợi ý, không giữ chỗ; booking từng trải nghiệm vẫn theo luồng hiện có. | Tránh hiểu nhầm lịch trình đã tạo là tour đã đặt. |
| BR-12 | Chỉnh sửa điểm đến phải làm mới thứ tự, thời lượng và tổng chi phí dự kiến. | Tránh hiển thị số liệu cũ sau chỉnh sửa. |
| BR-13 | Nhật ký lấy điểm đến từ lịch trình đã lưu; chỉ chủ nhật ký được xem/sửa nội dung cá nhân. | Bảo vệ quyền riêng tư và giữ liên kết dữ liệu. |
| BR-14 | Tạo nhật ký hoặc tải ảnh lên không tự chứng minh người dùng đã tham gia trải nghiệm. | Phân biệt nội dung tự khai với check-in đã xác minh. |
| BR-15 | Hành Trình Giải Mã có thể vận hành độc lập với Nhật Ký Hành Trình. | Hai tính năng cùng liên kết Tour Planner nhưng không phụ thuộc trực tiếp vào nhau. |
| BR-16 | Chỉ booking đáp ứng điều kiện hoàn thành mới mở thử thách gắn với trải nghiệm đó. | Gắn thử thách với trải nghiệm đã tham gia, thay vì chỉ cho đoán từ xa. |
| BR-17 | Mỗi thử thách chỉ nhận một câu trả lời chính thức cho mỗi người dùng nếu nhóm chốt cơ chế không cho thử lại. | Tránh gửi đáp án lặp vô hạn; phải công bố trước khi bắt đầu. |
| BR-18 | Chỉ cấp manh mối khi câu trả lời đúng; câu đố cuối chỉ mở khi đủ manh mối theo cấu hình hành trình. | Bảo đảm tiến độ giải mã nhất quán. |
| BR-19 | Phần thưởng được tính theo công thức đã công bố; mỗi hành trình chỉ cấp phần thưởng theo số lần/điều kiện đã thống nhất. | Tránh cấp trùng và tranh chấp về mức thưởng. |
| BR-20 | Nội dung câu đố, đáp án và manh mối phải được kiểm tra trước khi công khai; thay đổi không được tùy tiện sửa kết quả người dùng đã hoàn thành. | Bảo đảm câu hỏi rõ ràng, có đáp án xác định và giữ lịch sử. |
| BR-21 | Nhật ký mặc định ở chế độ riêng tư nếu nhóm triển khai quyền riêng tư. | Giảm nguy cơ vô tình công khai ảnh và cảm nhận cá nhân. |

---

## 12. Bảng theo dõi đề xuất AI và quyết định của nhóm

Bảng này dùng để phân biệt ý tưởng tham khảo với quyết định chính thức. Không ghi một công cụ AI là đã phản biện hoặc đưa ra kết luận nếu nhóm chưa thực sự sử dụng và đối chiếu đầu ra của công cụ đó. Các dòng về ba tính năng mới dưới đây được đánh dấu **chờ nhóm xác nhận**.

### 12.1. Các nội dung nền tảng đã có trong tài liệu

| Nội dung | Đề xuất/nhận xét đã được ghi trong bản trước | Quyết định hiện có trong tài liệu | Trạng thái cần lưu ý |
| --- | --- | --- | --- |
| Tìm kiếm và lọc trải nghiệm | Tìm theo từ khóa, khu vực và loại hình. | Gộp tìm kiếm và lọc vào một chức năng chính. | Đã phản ánh ở FR-05. |
| Đăng ký và đăng nhập | Tài khoản khách hàng để quản lý booking và thông tin cá nhân. | Giữ đăng ký/đăng nhập; chức năng phụ thuộc email/SMS bị giới hạn. | Đã phản ánh ở FR-01 đến FR-03; rà soát lại nếu thêm chức năng khôi phục mật khẩu. |
| Booking và thanh toán | Cần làm rõ vòng đời booking và quan hệ giữa booking với thanh toán. | Tách kết quả thanh toán mô phỏng khỏi trạng thái booking; kiểm tra sức chứa trước khi xác nhận. | Đã phản ánh ở FR-08 đến FR-14. |
| Hủy booking/hủy lịch | Cần quy định thời điểm kiểm tra, giải phóng sức chứa và giữ lịch sử. | Giữ lịch sử; không hoàn tiền thật; hủy booking theo quy tắc đã thống nhất. | Mốc 48 giờ và xử lý booking chờ thanh toán vẫn cần xác nhận chính thức. |
| Đổi lịch trực tiếp | Có thể phát sinh nhiều luồng chuyển chỗ và cập nhật trạng thái. | Không hỗ trợ đổi lịch trực tiếp; hủy booking cũ rồi tạo booking mới. | Được nêu trong giả định nghiệp vụ. |
| Mã ưu đãi/Dấu ấn Việt | Có thể làm phát sinh quy tắc phụ hoặc trùng lặp chức năng. | Loại bỏ mã ưu đãi chung và mục “Dấu ấn Việt” độc lập ở phạm vi cũ. | Phần voucher của Hành Trình Giải Mã là một đề xuất mới, cần nhóm quyết định riêng; không mặc định khôi phục hệ thống mã ưu đãi tổng quát. |
| Quản trị trải nghiệm/lịch | Cần tránh chức năng quản trị trùng lặp và làm rõ dữ liệu. | Admin quản lý trải nghiệm, lịch, sức chứa và booking. | Đã phản ánh ở FR-18 đến FR-24. |

### 12.2. Ba tính năng mới do nhóm chốt đưa vào thảo luận

| Nội dung | Ý tưởng đã thống nhất để phát triển | Phương án triển khai tối thiểu đề xuất | Quyết định của nhóm |
| --- | --- | --- | --- |
| Nét Việt Tour Planner | Người dùng nhập khu vực, ngân sách, thời gian và sở thích; hệ thống lọc, ghép địa điểm, sắp xếp lịch trình và tính chi phí dự kiến; có thể thay đổi điểm đến để tính lại. | Dùng dữ liệu mẫu có cấu trúc; quy tắc lọc/sắp xếp minh bạch; lưu lịch trình cho người dùng đăng nhập; không đặt tour nhiều điểm bằng một booking trong MVP. | **Chờ nhóm xác nhận** phạm vi, dữ liệu đầu vào và có cần bản đồ tương tác hay không. |
| Nhật Ký Hành Trình | Tạo nhật ký từ lịch trình đã đặt/lưu; người dùng check-in, tải ảnh và ghi cảm nhận; hệ thống tự sắp xếp thành album/timeline. | Mẫu scrapbook/timeline có sẵn; lưu ảnh và cảm nhận theo từng điểm; ưu tiên nhật ký riêng tư; chia sẻ liên kết là tùy chọn. | **Chờ nhóm xác nhận** điều kiện tạo nhật ký, cơ chế lưu ảnh và có triển khai chia sẻ hay không. |
| Hành Trình Giải Mã | Người dùng hoàn thành trải nghiệm, trả lời thử thách thực tế, thu thập manh mối; đủ manh mối thì mở câu đố cuối và phần thưởng. | Gắn câu hỏi với booking đủ điều kiện; mỗi thử thách một lần trả lời chính thức nếu nhóm chọn; admin quản lý câu hỏi/đáp án/manh mối; voucher mô phỏng. | **Chờ nhóm xác nhận** cách xác minh tham gia, số lần trả lời câu đố cuối và công thức phần thưởng. |
| Mối liên kết giữa ba tính năng | Tour Planner liên kết đồng thời với Nhật Ký Hành Trình và Hành Trình Giải Mã; hai tính năng sau không bắt buộc liên kết trực tiếp. | Dùng lịch trình lưu làm nguồn điểm đến; từng tính năng mở rộng độc lập; không buộc người dùng phải hoàn thành nhật ký mới được giải mã. | **Chờ nhóm xác nhận** quan hệ giữa lịch trình, booking và điều kiện tham gia hai tính năng mở rộng. |

### 12.3. Nguyên tắc cập nhật quyết định

- Chỉ chuyển nội dung từ “đề xuất” sang “quyết định chính thức” sau khi nhóm thống nhất.
- Nếu loại bỏ hoặc thu hẹp một chức năng, ghi lý do và cập nhật các FR/BR/NFR liên quan.
- Nếu thay đổi ID hoặc gộp yêu cầu, rà soát liên kết trong tài liệu, sơ đồ, giao diện và kiểm thử.
- Không ghi kết quả phản biện của Claude hoặc công cụ AI khác nếu chưa thực sự nhập prompt và xem đầu ra tương ứng.
- Trước khi lập trình, nhóm nên chốt tối thiểu: (1) Tour Planner có chỉ gợi ý hay có booking gộp; (2) điều kiện tạo nhật ký; (3) cách xác nhận trải nghiệm thực tế; (4) số lần trả lời câu đố; (5) công thức và giới hạn phần thưởng; (6) tính năng nào được xếp ưu tiên thấp và có thể bỏ nếu thiếu thời gian.
