# KẾ HOẠCH THỰC HIỆN DỰ ÁN WEBSITE NÉT VIỆT

**Tên dự án:** Thiết kế và xây dựng website Nét Việt – nền tảng hỗ trợ khám phá và đặt lịch trải nghiệm văn hóa bản địa Việt Nam.  
**Quy mô nhóm:** 8 thành viên

---

## 1. Thành viên và vai trò

| STT | Họ và tên | MSSV | Vai trò dự kiến | Trách nhiệm |
| :---: | :--- | :---: | :--- | :--- |
| 1 | Phạm Nguyễn Minh Trang | 31241024211 | Nhóm trưởng | Điều phối dự án, thống nhất yêu cầu, phân công và theo dõi tiến độ, quản lý công việc trên GitHub, hỗ trợ tích hợp và rà soát sản phẩm trước khi nộp. |
| 2 | Đặng Thị Thảo Sương | 31241023887 | UI/UX | Khảo sát nhu cầu giao diện, thiết kế Figma cho các trang khám phá, vùng miền, địa điểm, loại hình và chi tiết trải nghiệm; phối hợp bàn giao thiết kế cho Frontend. |
| 3 | Ngô Mỹ Châu | 31241027476 | UI/UX | Thiết kế Figma cho các trang tài khoản, hồ sơ, đặt booking, thanh toán, lịch sử booking và các giao diện quản trị được phân công. |
| 4 | Lê Bảo Ngọc | 31241027960 | Frontend | Xây dựng giao diện người dùng cho trang chủ, tìm kiếm, khám phá, địa điểm, trải nghiệm và các trang nội dung liên quan theo thiết kế Figma. |
| 5 | Huỳnh Khánh An | 31241021983 | Frontend | Xây dựng giao diện tài khoản, hồ sơ, booking, thanh toán, lịch sử booking và các giao diện quản trị được phân công; kết nối giao diện với API. |
| 6 | Nguyễn Phúc Như | 31241023813 | Backend/Database | Thiết kế và triển khai cơ sở dữ liệu, xử lý Backend cho tài khoản, dữ liệu trải nghiệm, địa điểm, nội dung và các chức năng liên quan được phân công. |
| 7 | Lê Anh Khoa | 31231021929 | Backend/Database | Xây dựng Backend cho lịch tổ chức, sức chứa, booking, mã giảm giá, thanh toán, hủy booking và các chức năng quản trị, thống kê liên quan. |
| 8 | Trần Thị Kim Ngân | 31241027118 | Kiểm thử, tích hợp và tài liệu | Lập kế hoạch kiểm thử, xây dựng test case, kiểm tra chức năng, ghi nhận và theo dõi lỗi, hỗ trợ kiểm thử tích hợp và tổng hợp tài liệu dự án. |

### Nguyên tắc phối hợp
* Hai thành viên UI/UX thống nhất phong cách giao diện và bàn giao thiết kế theo từng nhóm trang.
* Hai thành viên Frontend triển khai giao diện dựa trên thiết kế đã thống nhất, phối hợp với Backend để kết nối API.
* Hai thành viên Backend/Database thống nhất cấu trúc dữ liệu, quy tắc nghiệp vụ và API trước khi tích hợp.
* Thành viên phụ trách kiểm thử phối hợp với người phát triển để xác nhận kết quả và kiểm tra lại sau khi sửa lỗi.
* Nhóm trưởng theo dõi tiến độ tổng thể, xử lý các vấn đề liên quan đến phân công, phụ thuộc và thay đổi phạm vi.

---

## 2. Các giai đoạn

| Giai đoạn | Thời gian | Nội dung thực hiện | Kết quả cần đạt |
| :--- | :--- | :--- | :--- |
| **Giai đoạn 1: Khảo sát và xác định yêu cầu** | 18/10 – 21/10/2026 | Rà soát yêu cầu dự án, thống nhất danh sách chức năng đã chốt, xác định phạm vi triển khai, phân công thành viên và thiết lập GitHub Repository, Issues, Projects. | Danh sách yêu cầu thống nhất, phân công rõ ràng và môi trường quản lý dự án sẵn sàng. |
| **Giai đoạn 2: Thiết kế giao diện** | 22/10 – 04/11/2026 | Hai thành viên UI/UX thiết kế các trang trên Figma; thống nhất bố cục, màu sắc, thành phần giao diện và luồng thao tác; trao đổi với Frontend về khả năng triển khai. | Bộ thiết kế Figma cho các trang và luồng nghiệp vụ chính được hoàn thiện, sẵn sàng bàn giao. |
| **Giai đoạn 3: Xây dựng các chức năng Frontend** | 05/11 – 25/11/2026 | Hai thành viên Frontend xây dựng các trang, thành phần giao diện, biểu mẫu, thao tác người dùng và kết nối API theo từng phần khi Backend sẵn sàng. | Giao diện các chức năng chính được triển khai, có thể kiểm tra và tích hợp với Backend. |
| **Giai đoạn 4: Phát triển Backend và cơ sở dữ liệu** | 05/11 – 25/11/2026 | Hai thành viên Backend/Database xây dựng cơ sở dữ liệu, quan hệ dữ liệu, API và xử lý nghiệp vụ cho tài khoản, trải nghiệm, lịch tổ chức, sức chứa, booking, thanh toán và quản trị. | Cơ sở dữ liệu và các API chính được triển khai, có thể kiểm tra độc lập và phục vụ tích hợp. |
| **Giai đoạn 5: Tích hợp và kiểm thử** | 26/11 – 09/12/2026 | Kết nối Frontend với Backend, kiểm tra các luồng nghiệp vụ, phân quyền, dữ liệu và trạng thái booking; lập test case, ghi nhận lỗi, sửa lỗi và kiểm thử lại. | Các chức năng chính hoạt động xuyên suốt; lỗi nghiêm trọng được xử lý và các luồng nghiệp vụ đạt yêu cầu. |
| **Giai đoạn 6: Triển khai và hoàn thiện** | 10/12 – 16/12/2026 | Hoàn thiện sản phẩm, kiểm tra lần cuối, chuẩn bị môi trường trình diễn hoặc triển khai theo yêu cầu môn học, hoàn thiện báo cáo và tài liệu, chuẩn bị nộp bài. | Sản phẩm và tài liệu hoàn chỉnh, được kiểm tra trước khi nộp đúng hạn 16/12/2026. |

> **Lưu ý:** Giai đoạn 3 và Giai đoạn 4 được thực hiện song song để tiết kiệm thời gian. Giai đoạn 5 có thể bắt đầu kiểm tra từng phần ngay khi có chức năng sẵn sàng, không nhất thiết chờ toàn bộ Frontend và Backend hoàn thành.

---

## 3. Công việc

Trạng thái ban đầu của các công việc được đặt là `To do`. Thành viên cập nhật trạng thái trên GitHub khi bắt đầu thực hiện, chuyển sang `In Progress` và khi đã hoàn thành chọn `Done`.

| Mã CV | Công việc | Người phụ trách | Kết quả cần đạt | Thời hạn | Trạng thái |
| :---: | :--- | :--- | :--- | :---: | :---: |
| T01 | Khảo sát và thống nhất yêu cầu, phạm vi chức năng | Khánh An, Anh Khoa | Danh sách chức năng, phạm vi triển khai và tiêu chí hoàn thành được thống nhất. | 21/10/2026 | Done |
| T02 | Thiết lập GitHub Repository, Issues, Projects và quy tắc Git | Minh Trang | Kho mã nguồn và bảng quản lý công việc sẵn sàng sử dụng. | 21/10/2026 | Done |
| T03 | Thiết kế Figma cho nhóm trang khám phá và nội dung | Thảo Sương | Thiết kế các trang khám phá, vùng miền, địa điểm và trải nghiệm. | 04/11/2026 | To do |
| T04 | Thiết kế Figma cho nhóm tài khoản và booking | Mỹ Châu | Thiết kế các trang tài khoản, booking, thanh toán và giao diện liên quan. | 04/11/2026 | To do |
| T05 | Xây dựng giao diện Frontend cho trang chủ, tìm kiếm, khám phá, địa điểm, trải nghiệm và nội dung liên quan | Bảo Ngọc | Hoàn thiện giao diện nhóm khám phá và trải nghiệm theo thiết kế Figma, đảm bảo hiển thị và thao tác cơ bản. | 25/11/2026 | To do |
| T06 | Xây dựng giao diện Frontend cho tài khoản, hồ sơ, booking, thanh toán, lịch sử booking và giao diện quản trị | Khánh An | Hoàn thiện giao diện nhóm tài khoản và booking; chuẩn bị kết nối với các API tương ứng. | 25/11/2026 | To do |
| T07 | Thiết kế và triển khai cơ sở dữ liệu, Backend cho tài khoản, địa điểm, trải nghiệm và nội dung | Phúc Như | Hoàn thiện cấu trúc dữ liệu và các API phục vụ tài khoản, địa điểm, trải nghiệm và nội dung liên quan. | 25/11/2026 | To do |
| T08 | Phát triển Backend cho lịch tổ chức, sức chứa, booking, mã giảm giá, thanh toán, hủy booking và chức năng quản trị | Anh Khoa | Hoàn thiện API và xử lý nghiệp vụ cho lịch tổ chức, sức chứa, booking, thanh toán và các chức năng liên quan. | 25/11/2026 | To do |
| T09 | Tích hợp Frontend với Backend | Bảo Ngọc, Khánh An, Phúc Như, Anh Khoa | Các giao diện kết nối với API; dữ liệu được truyền nhận đúng và các luồng nghiệp vụ chính hoạt động xuyên suốt. | 04/12/2026 | To do |
| T10 | Lập kế hoạch kiểm thử và xây dựng test case | Kim Ngân | Có bộ test case bao phủ các chức năng chính, bao gồm tài khoản, tìm kiếm, booking, thanh toán và quản trị. | 30/11/2026 | To do |
| T11 | Kiểm thử chức năng, ghi nhận lỗi và phối hợp sửa lỗi | Kim Ngân | Danh sách lỗi được ghi nhận, phân loại theo mức độ ảnh hưởng; các lỗi được chuyển đến thành viên phụ trách để xử lý. | 07/12/2026 | To do |
| T12 | Kiểm thử tích hợp và kiểm thử lại sau khi sửa lỗi | Kim Ngân | Các luồng nghiệp vụ chính được kiểm tra lại; lỗi nghiêm trọng được xử lý trước khi hoàn thiện sản phẩm. | 09/12/2026 | To do |
| T13 | Hoàn thiện sản phẩm và chuẩn bị môi trường trình diễn hoặc triển khai | Cả nhóm | Website được kiểm tra lần cuối, các chức năng chính hoạt động ổn định. | 12/12/2026 | To do |
| T14 | Hoàn thiện báo cáo và tài liệu dự án | Kim Ngân, Minh Trang | Hoàn thiện báo cáo, tài liệu kiểm thử, hướng dẫn sử dụng và nội dung cần nộp. | 14/12/2026 | To do |
| T15 | Rà soát cuối cùng và nộp bài | Minh Trang | Kiểm tra sản phẩm, tài liệu và các yêu cầu nộp bài; hoàn thành việc nộp đúng hạn. | 16/12/2026 | To do |
| T16 | Phát triển tính năng nâng cao: tự động hết hạn booking chưa thanh toán | Anh Khoa, Phúc Như | Nếu các chức năng chính đã ổn định và còn đủ thời gian, triển khai cơ chế tự động xử lý booking quá hạn và cập nhật sức chứa tương ứng. | Sau khi hoàn thành các chức năng chính | Backlog |

---

## 4. Rủi ro

| Mã | Rủi ro | Mức độ ảnh hưởng | Phương án xử lý |
| :---: | :--- | :---: | :--- |
| R01 | Yêu cầu chức năng chưa rõ ràng hoặc các thành viên hiểu khác nhau. | Cao | Sử dụng danh sách chức năng đã chốt làm căn cứ triển khai; trao đổi với nhóm trưởng khi có điểm chưa thống nhất, không tự ý thay đổi phạm vi. |
| R02 | Thiết kế Figma chậm, ảnh hưởng đến tiến độ Frontend. | Trung bình | Ưu tiên thiết kế các trang và luồng nghiệp vụ chính; bàn giao từng phần để Frontend có thể bắt đầu triển khai sớm. |
| R03 | Frontend và Backend không thống nhất cấu trúc API hoặc dữ liệu. | Cao | Thống nhất tài liệu API, kiểu dữ liệu và quy ước phản hồi trước khi tích hợp; thông báo cho các bên liên quan khi có thay đổi. |
| R04 | Thành viên chậm tiến độ hoặc không hoàn thành công việc đúng hạn. | Cao | Chia nhỏ công việc trên GitHub Issues, cập nhật trạng thái thường xuyên và báo sớm cho nhóm trưởng để điều phối hỗ trợ. |
| R05 | Xung đột mã nguồn khi nhiều thành viên cùng phát triển. | Trung bình | Mỗi thành viên làm việc trên nhánh riêng, thường xuyên đồng bộ mã nguồn và tạo Pull Request để kiểm tra trước khi gộp vào nhánh chính. |
| R06 | Sai lệch dữ liệu hoặc trạng thái trong quy trình booking, thanh toán và hủy booking. | Cao | Xác định rõ trạng thái nghiệp vụ; kiểm tra sức chứa trước khi đặt chỗ; kiểm thử việc cập nhật số chỗ và trạng thái sau khi thanh toán hoặc hủy booking. |
| R07 | Lỗi phân quyền khiến người dùng truy cập dữ liệu hoặc chức năng không phù hợp. | Cao | Kiểm tra quyền truy cập ở Backend; bảo đảm khách hàng chỉ thao tác trên dữ liệu được phép và khu vực quản trị chỉ dành cho tài khoản có quyền quản trị. |
| R08 | Phát sinh lỗi khi tích hợp các chức năng riêng lẻ. | Cao | Tích hợp theo từng nhóm chức năng, kiểm thử ngay sau mỗi lần tích hợp và dành thời gian sửa lỗi trước hạn nộp. |
| R09 | Không đủ thời gian hoàn thiện tất cả chức năng hoặc tính năng nâng cao. | Cao | Ưu tiên hoàn thành các chức năng chính đã chốt; chỉ triển khai tự động hết hạn booking khi luồng booking, thanh toán, hủy booking và cập nhật sức chứa đã ổn định. |

### Nguyên tắc xử lý rủi ro
* Khi phát hiện rủi ro, thành viên cần cập nhật GitHub Issue, mô tả nguyên nhân, mức độ ảnh hưởng và hướng xử lý dự kiến. Nhóm trưởng theo dõi các vấn đề ảnh hưởng đến tiến độ chung và điều phối hỗ trợ khi cần thiết.
* Nhóm ưu tiên hoàn thành các chức năng chính và bảo đảm sản phẩm hoạt động ổn định trước khi triển khai tính năng nâng cao. Mục tiêu cuối cùng là hoàn thành sản phẩm, tài liệu và nộp bài đúng hạn **16/12/2026**.
