# QUY TẮC CHUNG BUG REPORT 

## 1. Mục đích

Tài liệu BUG REPORT được xây dựng nhằm ghi nhận, quản lý và theo dõi các lỗi phát sinh trong quá trình phát triển, tích hợp và kiểm thử website Nét Việt.

Việc ghi nhận lỗi giúp nhóm xác định nguyên nhân, phân công người chịu trách nhiệm xử lý, theo dõi tiến độ khắc phục và đảm bảo chất lượng sản phẩm trước khi hoàn thiện dự án.

## 2. Quy định ghi nhận lỗi

Mỗi lỗi phát sinh cần được ghi nhận với một mã định danh riêng theo thứ tự: BUG-001, BUG-002, BUG-003,...

Thông tin cần ghi nhận bao gồm:

| Trường thông tin | Nội dung |
|---|---|
| Bug ID | Mã định danh lỗi |
| Ngày phát hiện | Ngày lỗi được ghi nhận |
| Người phát hiện | Thành viên phát hiện lỗi |
| Khu vực chức năng | Trang hoặc chức năng xảy ra lỗi |
| Mô tả lỗi | Biểu hiện và tình trạng lỗi |
| Nguyên nhân | Nguyên nhân gây ra lỗi (nếu đã xác định) |
| Hướng xử lý | Phương án khắc phục |
| Người phụ trách | Thành viên được giao sửa lỗi |
| Trạng thái | Tiến độ xử lý lỗi |

## 3. Danh sách lỗi phát sinh

### BUG-001: Lỗi giao diện Header sau khi Merge Pull Request

| Trường thông tin | Nội dung |
|---|---|
| Bug ID | BUG-001 |
| Ngày phát hiện | 25/11/2026 |
| Người phát hiện | Trang |
| Khu vực chức năng | Header – Trang chủ |
| Mức độ ưu tiên | Cao |
| Người phụ trách sửa lỗi | Ngọc |
| Người kiểm tra giao diện | An |
| Người review và Merge | Trang |
| Người kiểm thử | Ngân |
| Trạng thái | To do |

**Mô tả lỗi:**

Sau khi Merge Pull Request của thành viên Ngọc vào nhánh chính, giao diện website trên GitHub Pages xuất hiện các ký tự `<<<<<<<`, `=======`, `>>>>>>>` cùng nội dung `Updated upstream` và `Stashed changes` tại khu vực Header. Điều này khiến giao diện menu hiển thị sai và ảnh hưởng đến trải nghiệm điều hướng của người dùng.

Ngoài ra, hai trang Cẩm nang và Chính sách không hiển thị như mong đợi khi truy cập website.

**Nguyên nhân:**

Nội dung đánh dấu xung đột Git (Merge Conflict) vẫn còn tồn tại trong mã nguồn HTML sau quá trình xử lý xung đột và Merge Pull Request.

Nguyên nhân cụ thể khiến hai trang Cẩm nang và Chính sách không hiển thị hiện chưa được xác định và cần tiếp tục kiểm tra.

**Hướng xử lý:**

- Kiểm tra mã nguồn `index.html` và loại bỏ các dấu đánh dấu xung đột Git còn sót lại.
- Đối chiếu các thay đổi trong file Header trước và sau khi Merge Pull Request.
- Kiểm tra sự tồn tại và vị trí của hai file `guide.html` và `policies.html`.
- Kiểm tra lại đường dẫn liên kết từ menu đến các trang tương ứng.
- Kiểm thử giao diện Header và chức năng điều hướng sau khi sửa lỗi.
- Kiểm tra website trên GitHub Pages sau khi triển khai phiên bản đã khắc phục.

**Kết quả xử lý:**

Đang chờ sửa lỗi, review Pull Request và kiểm thử lại trên GitHub Pages.

---

## 4. Quy trình xử lý lỗi

Nhóm thống nhất quy trình xử lý lỗi như sau:

| Bước | Nội dung thực hiện | Người phụ trách |
|---|---|---|
| 1 | Phát hiện và ghi nhận lỗi vào BUG_REPORT.md | Thành viên phát hiện |
| 2 | Phân tích nguyên nhân và xác định hướng xử lý | Thành viên liên quan |
| 3 | Phân công người chịu trách nhiệm sửa lỗi | Nhóm trưởng |
| 4 | Tạo nhánh sửa lỗi riêng từ nhánh phát triển phù hợp | Người sửa lỗi |
| 5 | Tiến hành chỉnh sửa, kiểm tra và push code lên GitHub | Người sửa lỗi |
| 6 | Tạo Pull Request để review thay đổi | Người sửa lỗi |
| 7 | Kiểm tra code và thực hiện Merge khi đạt yêu cầu | Nhóm trưởng |
| 8 | Kiểm thử lại chức năng và giao diện sau khi Merge | Thành viên QA |
| 9 | Cập nhật trạng thái lỗi trong BUG_REPORT.md | Người phụ trách |

## 5. Quy ước trạng thái lỗi

| Trạng thái | Ý nghĩa |
|---|---|
| To do | Lỗi đã ghi nhận, chưa tiến hành sửa |
| In Progress | Đang trong quá trình xử lý |
| Fixed | Đã chỉnh sửa mã nguồn, chờ kiểm thử |
| Verified | Đã kiểm thử và xác nhận lỗi được khắc phục |
| Reopened | Lỗi vẫn còn hoặc xuất hiện trở lại sau khi sửa |

## 6. Quy định quản lý nhánh sửa lỗi

Để thuận tiện trong việc quản lý và phối hợp, nhóm sử dụng nhánh `fix/bug-fixes` làm nhánh tập hợp các thay đổi sửa lỗi.

Sau khi hoàn thành, thành viên push code và tạo Pull Request để nhóm trưởng review. Các thay đổi chỉ được Merge sau khi đã kiểm tra và đảm bảo không ảnh hưởng đến những chức năng hiện có.

## 7. Nguyên tắc cập nhật báo cáo

- Mỗi lỗi chỉ sử dụng một Bug ID duy nhất.
- Cập nhật trạng thái ngay khi có thay đổi về tiến độ xử lý.
- Bổ sung nguyên nhân và kết quả khắc phục sau khi xác định được.
- Chỉ chuyển sang trạng thái Verified khi đã kiểm thử và xác nhận lỗi được giải quyết.
- Nếu lỗi xuất hiện trở lại, chuyển trạng thái sang Reopened và tiếp tục theo dõi.

**Tài liệu được cập nhật xuyên suốt quá trình phát triển và kiểm thử website Nét Việt.**
