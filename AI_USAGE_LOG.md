
## Quy ước ghi nhật ký
- Ghi nhận các lần sử dụng AI có ảnh hưởng đến kết quả dự án.
- Ghi đúng công cụ và prompt đã thực sự sử dụng.
- Tóm tắt kết quả theo nội dung thực tế nhận được.
- Phân biệt rõ nội dung AI đề xuất và quyết định của nhóm.
- Ghi cách kiểm chứng, kể cả khi kết quả chưa được xác minh đầy đủ.
- Cập nhật nhật ký xuyên suốt dự án.

## Số lần sử dụng: (...)

### 1. Thông tin chung
- Thành viên thực hiện: [Tên thành viên]
- Ngày sử dụng: [YYYY-MM-DD]
- Công cụ AI: [Tên công cụ thực tế]
- Mục đích: [Công việc cần hỗ trợ]

### 2. Prompt chính
(Ghi prompt thực tế đã sử dụng hoặc tóm tắt trung thực nội dung prompt.)

### 3. Kết quả nhận được
(Tóm tắt các đề xuất hoặc kết quả thực tế từ AI)

### 4. Kiểm chứng
- Phương pháp kiểm chứng: (Nguồn đối chiếu, chạy thử, kiểm thử hoặc rà soát)
- Kết quả kiểm chứng: (Kết quả thực tế)
- Nội dung chưa xác minh: (Ghi rõ nếu có; nếu không có, nêu căn cứ xác nhận)

### 5. Phản biện
- Công cụ hoặc người phản biện: (Nêu rõ tên)
- Ý kiến phản biện: (Nội dung thực tế hoặc "Chưa thực hiện")
- Cách xử lý ý kiến: (Giữ lại, điều chỉnh, bác bỏ hoặc chờ xác minh)

### 6. Đánh giá của thành viên
(Nhận xét về tính chính xác, mức độ phù hợp, giới hạn và rủi ro của kết quả AI)

### 7. Quyết định của nhóm
- Nội dung giữ lại: (Nội dung được chấp thuận)
- Nội dung điều chỉnh: (Nội dung được sửa)
- Nội dung loại bỏ: (Nội dung bị từ chối)
- Trạng thái: (Đã thống nhất/Chờ xác minh/Chưa thống nhất)

### 8. Người kiểm tra
- Người chịu trách nhiệm xác minh: (Tên thành viên)
- Kết quả kiểm tra: (Kết quả thực tế hoặc Chưa kiểm tra)
- Minh chứng liên quan: (Link tài liệu, commit, test hoặc nguồn tham khảo nếu có)

Nhật ký sử dụng AI
Lê Anh Khoa

# AI Usage Log — Dự án Nét Việt

## Lần sử dụng 1: Phân tích yêu cầu dự án

### Công cụ

Tên công cụ AI: ChatGPT
### Mục đích

Phân tích yêu cầu của Task 4 và xây dựng bản yêu cầu ban đầu cho website Nét Việt, bao gồm mục tiêu, phạm vi, nhóm người dùng, yêu cầu chức năng, yêu cầu phi chức năng và quy tắc nghiệp vụ.
### Prompt

**Bản khôi phục nội dung chính của prompt:**
> “Tôi đang thực hiện Task 4 của môn Phát triển ứng dụng thương mại điện tử. Hãy hỗ trợ tôi xây dựng tài liệu yêu cầu cho dự án Nét Việt, một website giúp người dùng khám phá và đặt chỗ các trải nghiệm văn hóa Việt Nam. Tài liệu cần có mục tiêu, phạm vi, nhóm người dùng, yêu cầu chức năng, yêu cầu phi chức năng và tiêu chí nghiệm thu. Các chức năng phải phù hợp với quy mô đồ án sinh viên và khả năng triển khai thực tế của nhóm.”
### Kết quả đề xuất

ChatGPT hỗ trợ xây dựng cấu trúc tài liệu yêu cầu, xác định các nhóm người dùng và đề xuất các chức năng chính như khám phá trải nghiệm, xem lịch và sức chứa, tạo booking, thanh toán mô phỏng, hủy booking, đánh giá và quản trị hệ thống.
### Phản biện

Bản yêu cầu ban đầu cần được rà soát thêm về phạm vi, sự trùng lặp giữa các chức năng và tính nhất quán của các quy tắc nghiệp vụ. Một số tình huống như thanh toán thành công nhưng hết chỗ, hủy booking và cập nhật trạng thái cần được làm rõ.
### Quyết định của nhóm

Tiếp tục sử dụng bản yêu cầu làm cơ sở thảo luận. Các đề xuất được rà soát và điều chỉnh theo khả năng triển khai của nhóm; không mặc định mọi đề xuất AI đều là quyết định cuối cùng.
### Người kiểm tra

Lê Anh Khoa

## Lần sử dụng 2: Rà soát phạm vi và quy tắc nghiệp vụ

### Công cụ

Tên công cụ AI: ChatGPT
### Mục đích

Làm rõ phạm vi chức năng và phân tích các quy tắc nghiệp vụ quan trọng để hạn chế độ phức tạp của đồ án.
### Prompt

**Bản khôi phục nội dung chính của prompt:**
> “Hãy giúp tôi rà soát phạm vi dự án website Nét Việt, tập trung vào nghiệp vụ khám phá trải nghiệm, đặt chỗ, thanh toán mô phỏng, hủy booking, quản lý lịch và sức chứa. Phân tích những chức năng cần thiết, những chức năng có thể để sau hoặc loại bỏ. Đặc biệt, hãy làm rõ mối quan hệ giữa trạng thái booking, kết quả thanh toán và sức chứa. Đề xuất phương án phù hợp với đồ án sinh viên và chỉ ra các nội dung cần nhóm thảo luận thêm.”
### Kết quả đề xuất

ChatGPT hỗ trợ xác định các luồng nghiệp vụ cốt lõi và đề xuất các quy tắc liên quan đến xác nhận booking, xử lý sức chứa, hủy booking, hủy lịch và đánh giá trải nghiệm.
### Phản biện

Các quy tắc cần được kiểm tra ở cả trường hợp thành công và thất bại. Đặc biệt, không được xác nhận booking nếu sức chứa không còn đủ; kết quả thanh toán mô phỏng phải được lưu riêng với trạng thái booking. Các chức năng bổ sung cần được đánh giá để tránh vượt phạm vi đồ án.
### Quyết định của nhóm

Đưa các phương án vào tài liệu yêu cầu để tiếp tục thảo luận. Các nội dung về thời hạn hủy, cách xử lý booking liên quan và phạm vi chức năng chỉ được xem là quyết định chính thức khi nhóm thống nhất.
### Người kiểm tra

Lê Anh Khoa

## Lần sử dụng 3: Phản biện bản REQUIREMENTS.md bằng Claude

### Công cụ

Tên công cụ AI: Claude
### Mục đích

Sử dụng công cụ AI thứ hai để phản biện độc lập bản yêu cầu đã được xây dựng, nhằm phát hiện các điểm chưa rõ ràng, mâu thuẫn nghiệp vụ, rủi ro dữ liệu và chức năng có thể vượt phạm vi dự án.
### Prompt

**Cần đối chiếu prompt gốc trong cuộc trò chuyện Claude. Nội dung khôi phục mục đích sử dụng:**
> “Tôi đang xây dựng tài liệu REQUIREMENTS.md cho website Nét Việt. Hãy đóng vai trò phản biện độc lập đối với tài liệu tôi cung cấp. Rà soát tính đầy đủ và nhất quán của các yêu cầu; vòng đời booking và thanh toán mô phỏng; cách xử lý sức chứa, hủy booking, hủy lịch và hoàn thành booking; điều kiện đánh giá; các chức năng trùng lặp hoặc vượt phạm vi. Với từng vấn đề, hãy giải thích rủi ro và đề xuất phương án xử lý phù hợp với đồ án sinh viên. Phân biệt lỗi thực sự với những lựa chọn thiết kế cần cân nhắc.”
### Kết quả đề xuất

Claude phản biện các vấn đề liên quan đến trạng thái booking, kết quả thanh toán mô phỏng, xử lý sức chứa, điều kiện hủy, cơ chế hoàn thành booking, đánh giá, mã ưu đãi, thông báo, nội dung “Dấu ấn Việt” và phạm vi quản trị.
### Phản biện

Các nhận xét của Claude cũng cần được đánh giá theo bối cảnh đồ án. Không phải mọi đề xuất đều bắt buộc phải thực hiện; một số nội dung chỉ là lựa chọn thiết kế hoặc vấn đề cần xác minh với yêu cầu môn học.
### Quyết định của nhóm

Sử dụng phản biện để rà soát và điều chỉnh bản yêu cầu. Các hướng xử lý được đưa vào bảng theo dõi đề xuất AI và quyết định của nhóm; những nội dung chưa được thống nhất tiếp tục giữ trạng thái đề xuất.
### Người kiểm tra

Lê Anh Khoa

## Lần sử dụng 4: Hoàn thiện yêu cầu sau phản biện

### Công cụ

Tên công cụ AI: ChatGPT
### Mục đích

Tổng hợp các nhận xét phản biện và điều chỉnh bản REQUIREMENTS.md, đồng thời làm rõ những nội dung được giữ lại, chỉnh sửa, loại bỏ hoặc để ở mức tùy chọn.
### Prompt

**Bản khôi phục nội dung chính của prompt:**
> “Dựa trên bản REQUIREMENTS.md và các nhận xét phản biện của Claude, hãy giúp tôi phân tích từng vấn đề và đề xuất phương án xử lý phù hợp với phạm vi dự án Nét Việt. Phân biệt nội dung giữ nguyên, chỉnh sửa, loại bỏ và tiếp tục thảo luận. Giải thích lý do và ảnh hưởng đến các yêu cầu liên quan. Không tự khẳng định nhóm đã thống nhất nếu tôi chưa xác nhận.”
### Kết quả đề xuất

ChatGPT hỗ trợ tổng hợp bảng theo dõi đề xuất AI và quyết định của nhóm, điều chỉnh các mô tả yêu cầu, làm rõ tiêu chí nghiệm thu và phân biệt các trạng thái booking với kết quả thanh toán mô phỏng.
### Phản biện

Các thay đổi cần được đối chiếu lại với toàn bộ tài liệu để tránh mâu thuẫn giữa yêu cầu chức năng, yêu cầu phi chức năng, giới hạn, giả định và quy tắc nghiệp vụ.
### Quyết định của nhóm

Giữ lại các nghiệp vụ cốt lõi; đề xuất loại bỏ mã ưu đãi và nội dung “Dấu ấn Việt”; không hỗ trợ đổi lịch trực tiếp theo phương án đang thảo luận; ưu tiên thanh toán mô phỏng. Các phương án nghiệp vụ khác tiếp tục chờ nhóm xác nhận trước khi triển khai chính thức.
### Người kiểm tra

Lê Anh Khoa

## Lần sử dụng 5: Rà soát cấu trúc và tài liệu bàn giao

### Công cụ

Tên công cụ AI: ChatGPT
### Mục đích

Rà soát cách tổ chức tài liệu Markdown, mã định danh yêu cầu và bảng theo dõi quá trình sử dụng AI để chuẩn bị cho việc bàn giao tài liệu dự án.
### Prompt

**Bản khôi phục nội dung chính của prompt:**
> “Hãy rà soát cấu trúc tài liệu REQUIREMENTS.md và AI_USAGE_LOG.md của dự án Nét Việt. Giữ nguyên nội dung đã thống nhất, bảo đảm cách đánh số nhất quán, các mã FR/NFR/BR không bị thay đổi và bảng theo dõi AI phân biệt rõ đề xuất ban đầu, phản biện và quyết định của nhóm. Không tự bổ sung quyết định hoặc kết quả kiểm thử chưa có.”
### Kết quả đề xuất

ChatGPT hỗ trợ chuẩn hóa cách trình bày tài liệu, tổ chức các mục và rà soát sự nhất quán giữa các phần.
### Phản biện

Việc định dạng tài liệu không thay thế việc xác minh nội dung. Cần kiểm tra các mã yêu cầu, số thứ tự, quyết định thực tế của nhóm và tính chính xác của các nội dung ghi trong nhật ký AI.
### Quyết định của nhóm

Sử dụng tài liệu đã rà soát làm bản dự thảo bàn giao. Trước khi nộp, nhóm cần kiểm tra lại nội dung cuối cùng, bổ sung prompt gốc nếu có thể truy xuất và xác nhận các quyết định nghiệp vụ.
### Người kiểm tra

Lê Anh Khoa

## Lần sử dụng 6: Phát triển ba ý tưởng chức năng mới cho dự án Nét Việt

### Công cụ

Tên công cụ AI: ChatGPT

### Mục đích

Phát triển các ý tưởng chức năng mới nhằm tạo điểm khác biệt cho website Nét Việt so với một website đặt dịch vụ thông thường. Đồng thời, phân tích cách hoạt động, giá trị mang lại, tính khả thi và mối quan hệ giữa các ý tưởng.

### Prompt

**Bản khôi phục nội dung chính của prompt:**
> “Hãy giúp tôi phát triển ba ý tưởng chức năng mới cho dự án Nét Việt, bao gồm Tour Planner – Ghép tour thông minh, Nhật Ký Hành Trình – Lưu giữ những trải nghiệm văn hóa và Hành Trình Giải Mã – Khám phá văn hóa qua những manh mối. Phân tích cách hoạt động, chức năng chính, giá trị mang lại, công nghệ có thể sử dụng và tính khả thi khi triển khai trong đồ án sinh viên. Làm rõ mối quan hệ giữa ba ý tưởng để tạo thành một hệ thống có liên kết nhưng không phụ thuộc hoàn toàn vào nhau.”

### Kết quả đề xuất

ChatGPT đề xuất cách phát triển ba chức năng:

- **Tour Planner:** Hỗ trợ người dùng lựa chọn địa điểm trải nghiệm dựa trên khu vực, ngân sách, thời gian và sở thích, từ đó gợi ý lịch trình phù hợp.
- **Nhật Ký Hành Trình:** Hỗ trợ người dùng lưu lại hình ảnh, cảm nhận và những trải nghiệm tại các địa điểm trong hành trình.
- **Hành Trình Giải Mã:** Kết hợp hoạt động khám phá văn hóa với các câu hỏi và manh mối gắn với địa điểm trải nghiệm, tạo động lực để người dùng tìm hiểu sâu hơn về văn hóa bản địa.

Mối quan hệ được đề xuất theo mô hình một chức năng trung tâm kết nối với hai chức năng riêng biệt: Tour Planner có thể kết nối với Nhật Ký Hành Trình và Hành Trình Giải Mã. Hai chức năng sau không phụ thuộc trực tiếp vào nhau.

### Phản biện

Các ý tưởng giúp tăng tính khác biệt cho dự án, nhưng cần cân nhắc khối lượng công việc và khả năng triển khai thực tế. Tour Planner cần có dữ liệu địa điểm và quy tắc gợi ý hợp lý; Nhật Ký Hành Trình cần xử lý việc lưu trữ hình ảnh và nội dung; Hành Trình Giải Mã cần xây dựng câu hỏi phù hợp với trải nghiệm thực tế. Không nên bổ sung quá nhiều chức năng nâng cao nếu vượt quá thời gian và năng lực của nhóm.

### Quyết định của nhóm

Lựa chọn ba ý tưởng trên để tiếp tục phát triển cho dự án Nét Việt. Mối quan hệ giữa các chức năng được định hướng theo mô hình Tour Planner làm trung tâm, kết nối riêng với hai chức năng còn lại. Các quy tắc chi tiết và phạm vi triển khai tiếp tục được xem xét trong quá trình hoàn thiện yêu cầu của nhóm.

### Người kiểm tra

Lê Anh Khoa

---

## Lần sử dụng 7: Cập nhật bản dự thảo REQUIREMENTS.md theo các ý tưởng mới

### Công cụ

Tên công cụ AI: ChatGPT

### Mục đích

Hỗ trợ cập nhật tài liệu REQUIREMENTS.md dựa trên phạm vi dự án hiện có và ba ý tưởng chức năng mới đã được nhóm lựa chọn để phát triển, đồng thời hạn chế sự trùng lặp và mâu thuẫn giữa các yêu cầu.

### Prompt

**Bản khôi phục nội dung chính của prompt:**
> “Dựa trên tài liệu REQUIREMENTS.md hiện có của dự án Nét Việt và ba ý tưởng chức năng mới gồm Tour Planner, Nhật Ký Hành Trình và Hành Trình Giải Mã, hãy hỗ trợ cập nhật bản dự thảo tài liệu. Làm rõ chức năng chính của từng ý tưởng, mối quan hệ giữa chúng, phạm vi thực hiện và những vấn đề cần tiếp tục thảo luận. Phân biệt các nội dung được đề xuất với những yêu cầu đã được nhóm thống nhất, tránh tự động xem mọi đề xuất của AI là quyết định chính thức.”

### Kết quả đề xuất

ChatGPT hỗ trợ xây dựng bản dự thảo REQUIREMENTS.md có bổ sung nội dung liên quan đến ba chức năng mới. Các nội dung được đề xuất tập trung vào cách hoạt động của từng chức năng, mối liên hệ với quy trình đặt trải nghiệm hiện có và những yêu cầu cần xem xét trước khi triển khai.

Bản dự thảo cũng hướng đến việc giữ rõ ràng giữa chức năng hiện có, chức năng đề xuất bổ sung và các vấn đề chưa được nhóm thống nhất.

### Phản biện

Việc bổ sung chức năng mới có thể làm tăng độ phức tạp của hệ thống và phát sinh các yêu cầu liên quan đến dữ liệu, quyền người dùng, quy tắc xử lý và khả năng tích hợp. Vì vậy, cần kiểm tra lại tính nhất quán giữa các mục, tránh trùng lặp yêu cầu và đánh giá mức độ phù hợp với phạm vi đồ án. Nội dung do AI đề xuất không thay thế việc nhóm tự rà soát và thống nhất.

### Quyết định của nhóm

Sử dụng bản dự thảo làm cơ sở để tiếp tục rà soát và hoàn thiện tài liệu REQUIREMENTS.md. Các yêu cầu chỉ được xem là chính thức khi nhóm thống nhất. Những nội dung chưa được xác nhận tiếp tục được ghi nhận là đề xuất cần thảo luận; việc tạo bản dự thảo không đồng nghĩa với việc tài liệu đã được cập nhật lên GitHub hoặc các chức năng đã được triển khai và kiểm thử.

### Người kiểm tra

Lê Anh Khoa
