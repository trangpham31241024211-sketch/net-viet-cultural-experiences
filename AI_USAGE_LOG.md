
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

Lần sử dụng 6: Phát triển và liên kết ba ý tưởng tính năng mới

Công cụ

Tên công cụ AI: ChatGPT

Mục đích

Hỗ trợ phân tích ba ý tưởng tính năng mới do các thành viên đề xuất sau khi nhóm nhận phản hồi rằng phiên bản ý tưởng ban đầu của Nét Việt chưa đủ mới. Mục tiêu là làm rõ giá trị, cách hoạt động và mối quan hệ giữa các tính năng mà không thay đổi định hướng chính của dự án là website hỗ trợ khám phá và đặt lịch trải nghiệm văn hóa bản địa Việt Nam.

Prompt

Bản khôi phục nội dung chính của prompt:

“Nhóm tôi đang phát triển website Nét Việt hỗ trợ khám phá và đặt lịch trải nghiệm văn hóa bản địa Việt Nam. Sau khi nhận góp ý rằng ý tưởng ban đầu chưa đủ mới, nhóm đang xem xét ba tính năng: Nét Việt Tour Planner – ghép tour thông minh; Nhật Ký Hành Trình – tự động tạo nhật ký từ tour đã đặt, gồm check-in, hình ảnh và cảm nhận; Hành Trình Giải Mã – câu đố gắn với trải nghiệm thực tế, thu thập manh mối và mở khóa nội dung hoặc phần thưởng. Hãy giúp tôi làm rõ mô tả, luồng hoạt động, giá trị và mối liên kết giữa các tính năng. Không biến ba tính năng thành một chuỗi bắt buộc nếu nghiệp vụ không yêu cầu; phân biệt đề xuất với quyết định đã được nhóm thống nhất và cân nhắc khả năng triển khai trong đồ án sinh viên.”

Kết quả đề xuất

ChatGPT hỗ trợ làm rõ ba hướng chức năng:

Nét Việt Tour Planner: Nhận thông tin nhu cầu, lọc và ghép các địa điểm thành lịch trình cùng chi phí dự kiến.

Nhật Ký Hành Trình: Sử dụng tour đã đặt làm cơ sở tạo nhật ký, cho phép check-in, tải ảnh và ghi cảm nhận, sau đó trình bày thành album theo dòng thời gian.

Hành Trình Giải Mã: Gắn câu hỏi hoặc thử thách với trải nghiệm thực tế, cho phép người dùng thu thập manh mối và mở khóa nội dung hoặc phần thưởng khi đáp ứng điều kiện.

Mối liên kết được làm rõ theo hướng Tour Planner có thể kết nối riêng với Nhật Ký Hành Trình và Hành Trình Giải Mã. Hai tính năng sau không mặc định phụ thuộc trực tiếp vào nhau.

Phản biện

Các mô tả ý tưởng chưa tự động chứng minh tính khả thi hoặc tính mới trên thị trường. Nhóm cần kiểm tra khả năng triển khai trong thời gian và nguồn lực thực tế; xác định dữ liệu địa điểm, quy tắc ghép tour, cách xác minh check-in, điều kiện mở khóa câu đố và giới hạn phần thưởng. Những chức năng như bản đồ tương tác, tải ảnh lên dịch vụ lưu trữ bên ngoài, chia sẻ công khai và voucher có giá trị thực có thể làm tăng độ phức tạp, nên cần xem xét giới hạn hoặc mô phỏng.

Quyết định của nhóm

Theo thông tin được cung cấp, nhóm đã lựa chọn cả ba ý tưởng để phát triển tiếp. Tuy nhiên, các chi tiết nghiệp vụ và mức độ triển khai của từng chức năng vẫn cần được nhóm xác nhận trong tài liệu yêu cầu. Không xem mọi chi tiết do AI đề xuất là quyết định chính thức.

Người kiểm tra

Lê Anh Khoa

Lần sử dụng 7: Cập nhật REQUIREMENTS.md theo ba ý tưởng mới

Công cụ

Tên công cụ AI: ChatGPT

Mục đích

Cập nhật bản dự thảo tài liệu REQUIREMENTS.md để phản ánh ba tính năng mới đã được nhóm lựa chọn phát triển tiếp; rà soát sự liên quan giữa yêu cầu chức năng, yêu cầu phi chức năng, phạm vi ngoài dự án, giả định và quy tắc nghiệp vụ. Đồng thời, hạn chế việc lặp lại các chức năng đã có và giữ các quyết định chưa chốt ở trạng thái cần thảo luận.

Prompt

Bản khôi phục nội dung chính của prompt:

“Tôi sẽ cung cấp nội dung REQUIREMENTS.md hiện tại của dự án Nét Việt và thông tin ba ý tưởng mới của nhóm: Nét Việt Tour Planner, Nhật Ký Hành Trình và Hành Trình Giải Mã. Hãy giúp tôi cập nhật tài liệu hiện tại một cách có hệ thống, giữ lại các yêu cầu cũ không cần sửa, tránh trùng lặp, bổ sung các yêu cầu liên quan đến ba tính năng mới và rà soát ảnh hưởng đến phạm vi, giả định, quy tắc nghiệp vụ và yêu cầu phi chức năng. Giữ mã định danh hiện có khi phù hợp; phân biệt rõ phương án đề xuất với quyết định chính thức; không tự khẳng định nhóm đã thống nhất những chi tiết tôi chưa xác nhận. Cân nhắc khả năng triển khai trong phạm vi đồ án sinh viên.”

Kết quả đề xuất

ChatGPT tạo một bản dự thảo Markdown cập nhật, trong đó đề xuất bổ sung các yêu cầu chức năng mới cho Tour Planner, Nhật Ký Hành Trình và Hành Trình Giải Mã; đồng thời rà soát các phần liên quan để nêu giới hạn, giả định và quy tắc nghiệp vụ cần xem xét. Bản dự thảo được cung cấp dưới dạng tệp riêng để nhóm kiểm tra và đối chiếu trước khi cập nhật repository.

Phản biện

Bản do AI tạo vẫn cần được đối chiếu với phiên bản REQUIREMENTS.md thực tế trong repository. Nhóm cần kiểm tra mã FR/NFR/BR, tính nhất quán giữa các mục, tiêu chí nghiệm thu, khả năng triển khai và việc có vô tình biến đề xuất thành quyết định chính thức hay không. Các yêu cầu mới cũng cần được rà soát với kế hoạch phân công và thời gian thực hiện của nhóm.

Quyết định của nhóm

Trạng thái hiện tại: bản cập nhật do ChatGPT đề xuất, cần nhóm review trước khi merge vào nhánh chính. Chưa ghi nhận việc toàn bộ yêu cầu mới đã được nhóm phê duyệt hoặc đã được triển khai, kiểm thử thành công. Sau khi nhóm thống nhất, cần cập nhật nội dung quyết định chính thức và trạng thái tương ứng trong REQUIREMENTS.md.

Người kiểm tra

Lê Anh Khoa
