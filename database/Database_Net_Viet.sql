-- Cultural Tourism DB (MySQL 8.0.16+)  |  ERD gốc + các điều chỉnh đề xuất (đánh dấu [+])
-- CREATE DATABASE IF NOT EXISTS cultural_tourism CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
-- USE cultural_tourism;
-- SET FOREIGN_KEY_CHECKS = 0;
-- DROP TABLE IF EXISTS reviews, booking_details, bookings, users, experience_schedules, experience_pricing, experiences, locations, categories, regions;
-- SET FOREIGN_KEY_CHECKS = 1;

-- CREATE TABLE regions (
--   region_id INT AUTO_INCREMENT PRIMARY KEY,
--   region_name VARCHAR(100) NOT NULL UNIQUE,
--   description TEXT
-- );
-- CREATE TABLE categories (
--   category_id INT AUTO_INCREMENT PRIMARY KEY,
--   category_name VARCHAR(100) NOT NULL UNIQUE,
--   description TEXT
-- );
-- CREATE TABLE locations (
--   location_id INT AUTO_INCREMENT PRIMARY KEY,
--   region_id INT NOT NULL,
--   location_name VARCHAR(255) NOT NULL,
--   province VARCHAR(100),
--   district VARCHAR(100),
--   address VARCHAR(255),
--   latitude DECIMAL(9,6),
--   longitude DECIMAL(9,6),
--   FOREIGN KEY (region_id) REFERENCES regions(region_id),
--   UNIQUE KEY uq_location (location_name, province)
-- );
-- CREATE TABLE experiences (
--   experience_id INT AUTO_INCREMENT PRIMARY KEY,
--   experience_code VARCHAR(10) NOT NULL UNIQUE,            -- [+] giữ mã TN001... của file gốc
--   category_id INT NOT NULL,
--   location_id INT NOT NULL,
--   experience_name VARCHAR(255) NOT NULL,
--   name_en VARCHAR(255),
--   description TEXT,
--   detail TEXT,
--   duration_text VARCHAR(50),                              -- [+] chữ hiển thị: "2–3 giờ"
--   duration_min INT,
--   duration_max INT,
--   capacity_note VARCHAR(255),
--   target_audience VARCHAR(255),
--   rating_avg DECIMAL(2,1),                                -- [+] điểm TB đã tổng hợp (CSV có sẵn)
--   review_count INT NOT NULL DEFAULT 0,                    -- [+]
--   status VARCHAR(20) NOT NULL DEFAULT 'draft',
--   created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
--   updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
--   FOREIGN KEY (category_id) REFERENCES categories(category_id),
--   FOREIGN KEY (location_id) REFERENCES locations(location_id),
--   CHECK (status IN ('draft','active','hidden')),
--   CHECK (rating_avg IS NULL OR rating_avg BETWEEN 1 AND 5)
-- );
-- CREATE TABLE experience_pricing (
--   price_id INT AUTO_INCREMENT PRIMARY KEY,
--   experience_id INT NOT NULL,
--   price_from DECIMAL(12,2) NOT NULL,
--   price_to DECIMAL(12,2) NOT NULL,
--   price_unit VARCHAR(50) NOT NULL,
--   price_note VARCHAR(500),
--   price_label VARCHAR(255),                               -- [+] "Người lớn – VIP", "Nửa ngày"
--   age_group VARCHAR(20) NOT NULL DEFAULT 'all',           -- [+] adult / child / all
--   is_default TINYINT NOT NULL DEFAULT 1,                  -- [+] dòng giá hiển thị trên thẻ
--   effective_from DATE,
--   effective_to DATE,
--   FOREIGN KEY (experience_id) REFERENCES experiences(experience_id) ON DELETE CASCADE,
--   CHECK (price_to >= price_from)
-- );
-- CREATE TABLE experience_schedules (
--   schedule_id INT AUTO_INCREMENT PRIMARY KEY,
--   experience_id INT NOT NULL,
--   operating_days VARCHAR(100),
--   start_time TIME,
--   end_time TIME,
--   schedule_note VARCHAR(500),
--   FOREIGN KEY (experience_id) REFERENCES experiences(experience_id) ON DELETE CASCADE
-- );
-- CREATE TABLE users (
--   user_id INT AUTO_INCREMENT PRIMARY KEY,
--   full_name VARCHAR(100) NOT NULL,
--   email VARCHAR(150) NOT NULL UNIQUE,
--   phone VARCHAR(20),
--   password_hash VARCHAR(255) NOT NULL,
--   role VARCHAR(20) NOT NULL DEFAULT 'customer',           -- [+] customer / admin
--   created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
--   account_status VARCHAR(20) NOT NULL DEFAULT 'active',
--   CHECK (role IN ('customer','admin')),
--   CHECK (account_status IN ('active','locked'))
-- );
-- CREATE TABLE bookings (
--   booking_id INT AUTO_INCREMENT PRIMARY KEY,
--   user_id INT NOT NULL,
--   booking_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
--   total_amount DECIMAL(12,2) NOT NULL DEFAULT 0,
--   booking_status VARCHAR(20) NOT NULL DEFAULT 'pending',
--   payment_status VARCHAR(20) NOT NULL DEFAULT 'unpaid',
--   customer_note TEXT,
--   FOREIGN KEY (user_id) REFERENCES users(user_id),
--   CHECK (booking_status IN ('pending','confirmed','completed','cancelled')),
--   CHECK (payment_status IN ('unpaid','paid','refunded'))
-- );
-- CREATE TABLE booking_details (
--   booking_detail_id INT AUTO_INCREMENT PRIMARY KEY,
--   booking_id INT NOT NULL,
--   experience_id INT NOT NULL,
--   price_id INT,                                           -- [+] khách chọn hạng giá nào
--   schedule_id INT,                                        -- [+] khách chọn khung giờ nào
--   experience_date DATE NOT NULL,
--   quantity INT NOT NULL,
--   unit_price DECIMAL(12,2) NOT NULL,                      -- chụp lại giá tại lúc đặt
--   subtotal DECIMAL(12,2) NOT NULL,
--   FOREIGN KEY (booking_id) REFERENCES bookings(booking_id) ON DELETE CASCADE,
--   FOREIGN KEY (experience_id) REFERENCES experiences(experience_id),
--   FOREIGN KEY (price_id) REFERENCES experience_pricing(price_id),
--   FOREIGN KEY (schedule_id) REFERENCES experience_schedules(schedule_id),
--   CHECK (quantity > 0)
-- );
-- CREATE TABLE reviews (
--   review_id INT AUTO_INCREMENT PRIMARY KEY,
--   user_id INT NOT NULL,
--   experience_id INT NOT NULL,
--   booking_detail_id INT UNIQUE,                           -- UNIQUE => mỗi lượt đặt chỉ review 1 lần (0..1)
--   rating TINYINT NOT NULL,
--   comment TEXT,
--   created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
--   FOREIGN KEY (user_id) REFERENCES users(user_id),
--   FOREIGN KEY (experience_id) REFERENCES experiences(experience_id),
--   FOREIGN KEY (booking_detail_id) REFERENCES booking_details(booking_detail_id),
--   CHECK (rating BETWEEN 1 AND 5)
-- );
-- USE cultural_tourism;
-- SET NAMES utf8mb4;

-- BƯỚC 1: regions
-- INSERT INTO regions (region_id, region_name, description) VALUES
-- (1, 'Miền Bắc', 'Vùng đồng bằng sông Hồng và núi phía Bắc: làng nghề lâu đời, văn hóa dân tộc, núi non hùng vĩ.'),
-- (2, 'Miền Trung', 'Vùng di sản và biển đảo: cố đô Huế, phố cổ Hội An, ẩm thực xứ Quảng, vườn quốc gia.'),
-- (3, 'Miền Nam', 'Vùng sông nước và đô thị năng động: chợ nổi, miệt vườn, ẩm thực Nam Bộ, cao nguyên Đà Lạt.');

-- BƯỚC 2: categories
-- INSERT INTO categories (category_id, category_name, description) VALUES
-- (1, 'Làng nghề', 'Trải nghiệm làm nghề thủ công truyền thống cùng nghệ nhân bản địa.'),
-- (2, 'Thiên nhiên', 'Khám phá rừng, hồ, biển, hang động bằng các hoạt động ngoài trời.'),
-- (3, 'Ẩm thực', 'Đi chợ, học nấu ăn và thưởng thức đặc sản địa phương.'),
-- (4, 'Văn hóa', 'Di tích, lịch sử, nghệ thuật trình diễn và đời sống cộng đồng.');

-- BƯỚC 3: locations (latitude/longitude để NULL, bổ sung sau)
-- INSERT INTO locations (location_id, region_id, location_name, province, district, address) VALUES
-- (1, 1, 'Bắc Ninh', 'Bắc Ninh', NULL, 'Bắc Ninh'),
-- (2, 1, 'Làng gốm Bát Tràng', 'Hà Nội', 'Gia Lâm', 'Gia Lâm, Hà Nội'),
-- (3, 2, 'Làng hương Thủy Xuân', 'Huế', NULL, 'Huế'),
-- (4, 1, 'Vịnh Hạ Long', 'Quảng Ninh', NULL, 'Vịnh Hạ Long, Quảng Ninh'),
-- (5, 2, 'Huế', 'Huế', NULL, 'Huế'),
-- (6, 3, 'Chợ nổi Cái Răng', 'Cần Thơ', NULL, 'Cần Thơ'),
-- (7, 2, 'Phố cổ Hội An', 'Đà Nẵng', 'Hội An', 'Hội An, Quảng Nam'),
-- (8, 3, 'Rừng tràm Trà Sư', 'An Giang', NULL, 'An Giang'),
-- (9, 2, 'Làng gốm Thanh Hà', 'Đà Nẵng', 'Hội An', 'Làng gốm Thanh Hà – Hội An, Đà Nẵng'),
-- (10, 3, 'Làng lụa Tân Châu', 'An Giang', NULL, 'Làng lụa Tân Châu – An Giang'),
-- (11, 3, 'Làng chiếu Định Yên', 'Đồng Tháp', 'Lai Vung', 'Làng chiếu Định Yên – Lai Vung, Đồng Tháp'),
-- (12, 1, 'Làng hương Quảng Phú Cầu', 'Hà Nội', 'Ứng Hòa', 'Thôn Cầu Bầu, xã Quảng Phú Cầu, huyện Ứng Hòa, Hà Nội'),
-- (13, 1, 'Làng cổ Đường Lâm', 'Hà Nội', 'Sơn Tây', 'Làng cổ Đường Lâm, thị xã Sơn Tây, Hà Nội'),
-- (14, 3, 'Nội đô TP. Hồ Chí Minh', 'TP. Hồ Chí Minh', NULL, 'Quận 1, Quận 3, Quận 4, Quận 10, TP. Hồ Chí Minh'),
-- (15, 2, 'Chợ Bắc Mỹ An', 'Đà Nẵng', NULL, 'Chợ Bắc Mỹ An, Đà Nẵng'),
-- (16, 1, 'Rose Kitchen Hanoi', 'Hà Nội', 'Ba Đình', 'Ba Đình, Hà Nội'),
-- (17, 1, 'Hoang''s Cooking Class', 'Hà Nội', 'Hoàn Kiếm', 'Hoàn Kiếm, Hà Nội'),
-- (18, 1, 'Thị trấn Sa Pa', 'Lào Cai', NULL, 'Thị trấn Sa Pa'),
-- (19, 2, 'Sông Hương – Thành Nội Huế', 'Huế', NULL, 'Bờ Nam và Bờ Bắc sông Hương, TP. Huế (đón khách tại khách sạn trung tâm)'),
-- (20, 3, 'Bến Bạch Đằng – Cảng Sài Gòn', 'TP. Hồ Chí Minh', 'Quận 4', 'Bến Bạch Đằng hoặc Cảng Sài Gòn (Số 5 Nguyễn Tất Thành), Quận 4, TP. Hồ Chí Minh'),
-- (21, 3, 'Dinh Độc Lập', 'TP. Hồ Chí Minh', NULL, 'Dinh Độc Lập, cổng 135 Nam Kỳ Khởi Nghĩa, TP. Hồ Chí Minh'),
-- (22, 3, 'Nhà cổ Bình Thủy', 'Cần Thơ', NULL, 'Nhà cổ Bình Thủy, 144 Bùi Hữu Nghĩa, phường Bình Thủy, Cần Thơ'),
-- (23, 3, 'Di tích Nhà tù Phú Quốc', 'An Giang', 'Phú Quốc', 'Di tích Nhà tù Phú Quốc, Số 350 đường Nguyễn Văn Cừ, An Thới, Phú Quốc, tỉnh Kiên Giang'),
-- (24, 3, 'Địa đạo Củ Chi – Bến Đình', 'TP. Hồ Chí Minh', 'Củ Chi', 'Khu di tích Địa đạo Củ Chi, khu vực Bến Đình, TP.HCM'),
-- (25, 1, 'Sân khấu thực cảnh Sài Sơn', 'Hà Nội', 'Quốc Oai', 'Thôn Đa Phúc, xã Sài Sơn, huyện Quốc Oai, Hà Nội (chân núi Thầy)'),
-- (26, 1, 'Làng tranh Đông Hồ', 'Bắc Ninh', 'Thuận Thành', 'Làng tranh Đông Hồ, phường Song Hồ, thị xã Thuận Thành, tỉnh Bắc Ninh'),
-- (27, 2, 'Duyệt Thị Đường – Đại Nội Huế', 'Huế', NULL, 'Nhà hát Duyệt Thị Đường, khuôn viên Đại Nội Huế, thành phố Huế'),
-- (28, 2, 'Công viên Ấn Tượng Hội An – Đảo Ký Ức', 'Đà Nẵng', 'Hội An', 'Công viên Ấn Tượng Hội An - Đảo Ký Ức Hội An (200 Nguyễn Tri Phương rẽ trái), phường Cẩm Nam, thành phố Hội An'),
-- (29, 1, 'Vườn quốc gia Cúc Phương', 'Ninh Bình', NULL, 'Vườn quốc gia Cúc Phương, tỉnh Ninh Bình'),
-- (30, 1, 'Hồ Ba Bể', 'Thái Nguyên', 'Ba Bể', 'Hồ Ba Bể, xã Ba Bể, tỉnh Thái Nguyên'),
-- (31, 2, 'Vườn quốc gia Bạch Mã', 'Huế', NULL, 'Vườn quốc gia Bạch Mã, thành phố Huế'),
-- (32, 2, 'Cù Lao Chàm', 'Đà Nẵng', NULL, 'Cù Lao Chàm, thành phố Đà Nẵng'),
-- (33, 3, 'Hồ Tuyền Lâm', 'Lâm Đồng', 'Đà Lạt', 'Hồ Tuyền Lâm, phường Xuân Hương - Đà Lạt, tỉnh Lâm Đồng'),
-- (34, 3, 'Thác Datanla', 'Lâm Đồng', 'Đà Lạt', 'Khu du lịch thác Datanla, Đà Lạt, tỉnh Lâm Đồng'),
-- (35, 1, 'Vịnh Lan Hạ', 'Hải Phòng', 'Cát Bà', 'Vịnh Lan Hạ, quần đảo Cát Bà, Hải Phòng'),
-- (36, 2, 'Thung lũng Sinh Tồn – Hang E', 'Quảng Trị', NULL, 'Thung lũng Sinh Tồn, Vườn quốc gia Phong Nha - Kẻ Bàng, tỉnh Quảng Trị');

-- BƯỚC 4: experiences
-- INSERT INTO experiences (experience_id, experience_code, category_id, location_id, experience_name, name_en, description, detail, duration_text, duration_min, duration_max, capacity_note, target_audience, rating_avg, review_count, status) VALUES
-- (1, 'TN001', 1, 1, 'Làm tranh dân gian Đông Hồ', NULL, 'Tìm hiểu nghệ thuật tranh dân gian Đông Hồ.', 'Khám phá kỹ thuật in tranh bằng bản khắc gỗ và tự tay tạo nên tác phẩm mang bản sắc văn hóa Việt Nam.', '2 giờ', 120, 120, NULL, NULL, NULL, 0, 'draft'),
-- (2, 'TN002', 1, 2, 'Tự tay làm gốm ở Bát Tràng', NULL, 'Trải nghiệm làm gốm tại làng nghề Bát Tràng.', 'Tự tay nhào nặn đất sét, tạo hình trên bàn xoay và trang trí sản phẩm dưới sự hướng dẫn của nghệ nhân.', '2,5 giờ', 150, 150, NULL, NULL, NULL, 0, 'draft'),
-- (3, 'TN003', 1, 3, 'Ghé thăm làng hương Thủy Xuân', NULL, 'Ghé thăm làng hương Thủy Xuân.', 'Tìm hiểu quy trình làm hương truyền thống và khám phá những bó hương rực rỡ sắc màu gắn liền với đời sống văn hóa xứ Huế.', '1,5 giờ', 90, 90, NULL, NULL, NULL, 0, 'draft'),
-- (4, 'TN004', 2, 4, 'Ngắm bình minh trên vịnh Hạ Long', NULL, 'Khám phá cảnh quan thiên nhiên vịnh Hạ Long.', 'Chiêm ngưỡng ánh bình minh trên mặt biển và những dãy núi đá vôi hùng vĩ của vùng di sản.', '4 giờ', 240, 240, NULL, NULL, NULL, 0, 'draft'),
-- (5, 'TN005', 3, 5, 'Vào bếp cùng người Huế', NULL, 'Khám phá nét đặc trưng của ẩm thực Huế.', 'Chuẩn bị nguyên liệu, chế biến món ăn truyền thống và thưởng thức thành quả cùng người địa phương.', '3 giờ', 180, 180, NULL, NULL, NULL, 0, 'draft'),
-- (6, 'TN006', 4, 6, 'Bình minh trên chợ nổi Cái Răng', NULL, 'Trải nghiệm không khí mua bán nhộn nhịp vào buổi sáng tại chợ nổi Cái Răng.', 'Tìm hiểu đời sống thương hồ và nét văn hóa sông nước đặc trưng của miền Tây Nam Bộ.', '3 giờ', 180, 180, NULL, NULL, NULL, 0, 'draft'),
-- (7, 'TN007', 4, 7, 'Đêm phố cổ Hội An và đèn hoa đăng', NULL, 'Dạo bước qua những con phố cổ Hội An lung linh ánh đèn lồng.', 'Khám phá kiến trúc, đời sống văn hóa địa phương và tham gia hoạt động thả đèn hoa đăng.', '2 giờ', 120, 120, NULL, NULL, NULL, 0, 'draft'),
-- (8, 'TN008', 2, 8, 'Len lỏi rừng tràm Trà Sư xanh mát', NULL, 'Khám phá hệ sinh thái rừng tràm Trà Sư bằng thuyền.', 'Len lỏi qua những dòng nước phủ bèo xanh và tìm hiểu cảnh quan thiên nhiên đặc trưng của vùng đất An Giang.', '3 giờ', 180, 180, NULL, NULL, NULL, 0, 'draft'),
-- (9, 'TN009', 1, 9, 'Tự tay làm gốm tại làng Thanh Hà', NULL, 'Tự tay nhào nặn đất sét, khám phá nghề gốm truyền thống và sáng tạo sản phẩm thủ công mang dấu ấn riêng.', 'Nằm bên dòng sông Thu Bồn, làng gốm Thanh Hà là một trong những làng nghề truyền thống lâu đời của vùng Hội An, hình thành từ khoảng thế kỷ XVI. Nghề gốm nơi đây nổi bật với những sản phẩm mộc mạc, phản ánh đời sống sinh hoạt và kỹ thuật chế tác được gìn giữ qua nhiều thế hệ.
--  Hành trình đưa du khách tham quan các xưởng gốm, tìm hiểu quy trình chuẩn bị đất, tạo hình và nung sản phẩm. Dưới sự hướng dẫn của nghệ nhân, du khách có cơ hội trải nghiệm bàn xoay, tự tay nặn đồ vật nhỏ và sáng tạo sản phẩm thủ công. Hoạt động giúp khám phá giá trị lao động truyền thống, đồng thời nâng cao nhận thức về việc bảo tồn nghề gốm địa phương.', '2–3 giờ', 120, 180, '2–12 người', 'Gia đình, học sinh từ 8 tuổi, sinh viên, du khách yêu thủ công.', 4.9, 128, 'active'),
-- (10, 'TN010', 1, 3, 'Khám phá nghề làm hương truyền thống xứ Huế', NULL, 'Khám phá sắc màu rực rỡ của làng hương xứ Huế, tìm hiểu nghề se hương và trải nghiệm nét văn hóa truyền thống cố đô.', 'Làng hương Thủy Xuân là một địa điểm nổi bật của Huế, gắn liền với nghề làm hương trầm truyền thống. Những bó hương được sắp xếp thành nhiều sắc màu tạo nên khung cảnh đặc trưng, đồng thời thể hiện sự khéo léo và tỉ mỉ của người làm nghề.
--  Trong chuyến tham quan, du khách được tìm hiểu nguyên liệu tạo hương, quan sát quy trình sản xuất và thử thực hiện công đoạn se hương dưới sự hướng dẫn của người thợ. Bên cạnh đó, trải nghiệm còn giới thiệu vai trò của hương trầm trong tín ngưỡng, phong tục thờ cúng và đời sống tinh thần của người Việt. Du khách có thể tham quan, chụp ảnh và lựa chọn sản phẩm hương truyền thống làm quà lưu niệm.', '1,5–2 giờ', 90, 120, '2–15 người', 'Mọi lứa tuổi, gia đình, học sinh, khách yêu văn hóa và nhiếp ảnh.', 4.8, 96, 'active'),
-- (11, 'TN011', 1, 10, 'Khám phá sắc đen huyền thoại của lụa Tân Châu', NULL, 'Khám phá nghệ thuật dệt lụa Lãnh Mỹ A, tìm hiểu kỹ thuật nhuộm vải từ trái mặc nưa và vẻ đẹp của nghề lụa truyền thống.', 'Làng lụa Tân Châu nằm tại vùng đất ven sông Tiền, nổi tiếng với nghề dệt tơ lụa và sản phẩm Lãnh Mỹ A mang sắc đen óng đặc trưng. Sản phẩm được tạo nên qua quá trình dệt và nhuộm công phu, sử dụng trái mặc nưa như một nguyên liệu tự nhiên gắn với kỹ thuật chế tác truyền thống.
--  Trải nghiệm đưa du khách khám phá các công đoạn làm nên tấm lụa, từ lựa chọn sợi, dệt vải đến nhuộm và hoàn thiện sản phẩm. Tại cơ sở sản xuất phù hợp, du khách được quan sát nghệ nhân thao tác, tìm hiểu đặc điểm của lụa Lãnh Mỹ A và khám phá giá trị thẩm mỹ của sản phẩm thủ công. Hành trình đồng thời giới thiệu vai trò của nghề dệt trong văn hóa địa phương và những nỗ lực duy trì, bảo tồn nghề lụa truyền thống tại An Giang.', '2–3 giờ', 120, 180, '4–10 người', 'Sinh viên, người yêu thời trang, nghệ thuật dệt may và văn hóa truyền thống.', 4.9, 67, 'active'),
-- (12, 'TN012', 1, 11, 'Theo nhịp khung dệt chiếu Định Yên', NULL, 'Trải nghiệm nghề dệt chiếu lác truyền thống, khám phá cách phối màu thủ công và tìm hiểu câu chuyện chợ chiếu đêm miền Tây.', 'Làng chiếu Định Yên là một làng nghề truyền thống tiêu biểu của Đồng Tháp, nổi tiếng với kỹ thuật dệt chiếu lác được lưu truyền qua nhiều thế hệ. Nghề dệt chiếu tại đây được công nhận là Di sản văn hóa phi vật thể quốc gia vào năm 2013, gắn bó với đời sống sinh hoạt và hoạt động thương mại của người dân địa phương.
--  Trong hành trình trải nghiệm, du khách được tìm hiểu cách chuẩn bị nguyên liệu lác, nhuộm màu, phơi sợi và dệt chiếu trên khung truyền thống. Dưới sự hướng dẫn của nghệ nhân, du khách có thể thử những thao tác dệt cơ bản, quan sát kỹ thuật phối màu và khám phá câu chuyện về chợ chiếu đêm Định Yên. Trải nghiệm góp phần giới thiệu giá trị lao động thủ công, sự sáng tạo và nét đặc sắc trong đời sống văn hóa vùng Đồng bằng sông Cửu Long.', '2–2,5 giờ', 120, 150, '4–12 người', 'Gia đình, học sinh từ 8 tuổi, sinh viên, du khách yêu văn hóa dân gian.', 4.7, 83, 'active'),
-- (13, 'TN013', 1, 2, 'Tour nửa ngày khám phá Làng gốm Bát Tràng và tự tay làm gốm truyền thống', 'Bat Trang Pottery Village Half-Day Tour & Workshop', 'Hành trình khám phá làng gốm cổ truyền hơn 700 năm tuổi ven sông Hồng. Du khách dạo quanh ngõ xóm rêu phong, tìm hiểu quy trình chế tác gốm thủ công của nghệ nhân bản địa và tự tay vuốt nặn, tạo hình sản phẩm trên bàn xoay điện mang về làm kỷ niệm.', 'Xe đón du khách tại Phố Cổ Hà Nội đến làng gốm Bát Tràng. Đoàn đi bộ tham quan đình làng Bát Tràng, nhà cổ Vạn Vân và lò gốm cổ, nghe thuyết minh về lịch sử làng nghề. Tại xưởng gốm gia truyền, nghệ nhân hướng dẫn kỹ thuật chuốt gốm thủ công. Mỗi khách có bàn xoay điện riêng để tự tay tạo hình bát, đĩa, bình hoa theo ý thích dưới sự chỉ dẫn 1-1. Sản phẩm sau đó được hong khô, nung lò đóng gói gửi về. Cuối buổi, đoàn tự do dạo chợ gốm Bát Tràng mua quà lưu niệm.', '4–5 giờ', 240, 300, 'Tour nhóm nhỏ 10-15 người/đoàn, mỗi khách 1 bàn xoay', 'Mọi lứa tuổi, phù hợp người lớn, trẻ em từ 5 tuổi, gia đình, cặp đôi và khách quốc tế.', 4.9, 750, 'active'),
-- (14, 'TN014', 1, 12, 'Tour nửa ngày tham quan Làng hương đỏ Quảng Phú Cầu kết hợp Phố đường tàu', 'Quang Phu Cau Incense Village & Train Street Tour', 'Khám phá làng nghề làm tăm hương truyền thống hơn 100 năm tuổi với những sân phơi xòe rộng như cánh hoa rực rỡ sắc đỏ và vàng. Du khách tìm hiểu từng công đoạn chẻ vầu, nhuộm màu, se hương thảo mộc và lưu lại những khung hình văn hóa độc đáo.', 'Xe đón khách tại trung tâm Hà Nội đến làng Quảng Phú Cầu. Hướng dẫn viên dẫn đoàn đi qua các xưởng gia đình để tìm hiểu quy trình sản xuất hương thơm tâm linh: từ chọn thân vầu, chẻ tăm, nhuộm chân hương màu đỏ thắm, đến trộn bột thảo mộc tự nhiên và se hương. Du khách tự tay bó tăm hương, phơi xòe hương trên sân gạch và chụp ảnh tại cụm sắp đặt nghệ thuật hình bản đồ Việt Nam. Trên đường về, đoàn dừng chân thưởng thức cà phê trứng tại Phố đường tàu Hà Nội.', '5 giờ', 300, 300, 'Nhóm tiêu chuẩn 10-15 người/đoàn', 'Khách du lịch tự túc, bạn trẻ yêu thích nhiếp ảnh văn hóa, gia đình và khách nước ngoài.', 4.9, 1500, 'active'),
-- (15, 'TN015', 1, 13, 'Tour khám phá Làng cổ Đường Lâm & Trải nghiệm làm tương nếp truyền thống', 'Duong Lam Ancient Village & Traditional Craft Tour', 'Hành trình về thăm ngôi làng cổ đá ong độc nhất vô nhị của vùng đồng bằng Bắc Bộ. Du khách đạp xe qua những cổng làng rêu phong, thăm nhà cổ 300 năm, thưởng thức bữa trưa cơm quê và học bí quyết ủ tương nếp gia truyền cùng nghệ nhân.', 'Khởi hành từ Hà Nội đến Cổng làng Mông Phụ. Du khách nhận xe đạp thong dong qua các con ngõ lát gạch nghiêng, viếng Đình Mông Phụ, Chùa Mía và Đền thờ Phùng Hưng, Ngô Quyền. Buổi trưa, đoàn dùng bữa cơm quê (gà mía, thịt quay đòn, rau luộc chấm tương nếp) trong nhà cổ hơn 300 năm. Buổi chiều, nghệ nhân hướng dẫn quy trình ủ tương trong chum sành ngoài sân (làm mốc xôi nếp, ngâm đậu tương, phơi nắng canh men). Du khách tự tay khuấy tương và nhận 1 chai tương nếp mang về.', '6–7 giờ', 360, 420, 'Nhóm từ 8-15 người/đoàn', 'Gia đình, người yêu thích lịch sử, kiến trúc cổ xưa và văn hóa nông thôn Bắc Bộ.', 4.9, 850, 'active'),
-- (16, 'TN016', 3, 14, 'Tour ẩm thực đường phố Sài Gòn bằng xe máy cùng Saigon Adventure', 'Premium Street Food Tour & Sightseeing on Scooter Ho Chi Minh City', 'Trải nghiệm ngồi sau tay lái xe máy lướt qua những con ngõ hẻm sôi động của Sài Gòn về đêm. Du khách thưởng thức trọn vẹn hơn 10 món ăn đặc sản đường phố và lắng nghe những câu chuyện văn hóa đời sống thú vị từ các bạn trẻ bản địa.', 'Tài xế kiêm hướng dẫn viên đón khách tại khách sạn bằng xe máy. Lộ trình đưa bạn qua Quận 3, Quận 4 và Quận 10. Điểm dừng đầu tiên là khu chung cư cổ Nguyễn Thiện Thuật thưởng thức Bánh xèo miền Tây và Bánh khọt tôm thịt. Tiếp đó, đoàn qua chợ hoa Hồ Thị Kỷ thử Bò nướng lá lốt, Nem nướng sả và Bánh tráng nướng. Sau đó băng qua hẻm ẩm thực Quận 4 ăn Bún bò Huế hoặc Chuối nướng mỡ hành nước cốt dừa. Kết thúc bằng ly chè tráng miệng thanh mát trước khi về lại khách sạn.', '3,5–4 giờ', 210, 240, 'Mỗi khách 1 tài xế riêng, đoàn nhóm nhỏ 4-12 khách', 'Khách du lịch tự túc, nhóm bạn trẻ, cặp đôi, du khách nước ngoài muốn trải nghiệm nhịp sống đô thị.', 5.0, 4800, 'active'),
-- (17, 'TN017', 3, 15, 'Lớp học nấu 5 món truyền thống Đà Nẵng kết hợp đi chợ địa phương', NULL, 'Đây không chỉ là một buổi học nấu ăn mà còn là hành trình khám phá văn hóa ẩm thực miền Trung. Bạn sẽ được tự tay chọn nguyên liệu tươi sống tại chợ địa phương và chế biến trọn vẹn một bữa ăn 5 món từ khâu sơ chế đến trang trí.', 'Tham gia trải nghiệm này, bạn sẽ bắt đầu bằng việc cùng đầu bếp dạo quanh Chợ Bắc Mỹ An để tìm hiểu nét sinh hoạt mua bán bản địa, cách nhận biết các loại rau thơm, gia vị đặc trưng và trực tiếp chọn lựa nguyên liệu tươi ngon nhất. Sau khi trở về gian bếp, bạn được nghe chia sẻ những câu chuyện thú vị về nguồn gốc, ý nghĩa văn hóa của ẩm thực miền Trung cũng như học các kỹ thuật sơ chế, cắt tỉa và pha chế nước chấm cốt lõi. Tiếp đó, dưới sự hướng dẫn tận tình của đầu bếp, bạn sẽ tự tay chế biến trọn vẹn thực đơn 5 món tiêu biểu gồm Bún bò Huế, Bánh xèo, Tam hữu Hội An, Gỏi mít non và món tráng miệng Kem bơ (thực đơn có thể thay đổi linh hoạt cho người ăn chay). Cuối buổi học, bạn cùng mọi người thưởng thức thành quả bữa ăn trong không gian ấm cúng và nhận chứng nhận hoàn thành khóa học kèm cuốn sách công thức nấu ăn mang về làm kỷ niệm.', '4 giờ', 240, 240, 'Tối đa 30 người', 'Trẻ em từ 8 tuổi (có người lớn đi cùng), người lớn từ 18 tuổi, gia đình, nhóm bạn.', 5.0, 550, 'active'),
-- (18, 'TN018', 3, 16, 'Lớp học nấu ăn tại Rose Kitchen Hanoi', NULL, 'Hành trình khám phá ẩm thực và văn hóa Hà Nội trong không gian biệt thự cổ kính yên tĩnh tách biệt khỏi sự ồn ào của phố thị, kết hợp giữa việc dạo chợ dân sinh, nấu các món truyền thống và thưởng thức rượu quê theo mùa.', 'Bắt đầu hành trình, xe đón bạn tại khu vực Phố Cổ để di chuyển đến khu chợ dân sinh địa phương, nơi người hướng dẫn giúp bạn tìm hiểu nếp sinh hoạt mua bán của người Hà Nội và chọn mua rau củ, gia vị tươi sống. Sau đó, bạn trở về gian bếp sân vườn tại Ngọc Hà để lắng nghe những câu chuyện văn hóa gắn liền với mâm cơm Bắc Bộ và học kỹ thuật sơ chế nguyên liệu. Dưới sự chỉ dẫn trực tiếp của đầu bếp, bạn sẽ tự tay chế biến thực đơn gồm Nộm hoa chuối, Nem rán Hà Nội, Bún chả thịt nướng và tự pha chế món Cà phê trứng trứ danh. Kết thúc buổi học, cả nhóm cùng quây quần thưởng thức bữa ăn bên ly rượu quê truyền thống và nhận sách công thức điện tử qua email.', '4–5 giờ', 240, 300, 'Tối đa 14 người', 'Trẻ em từ 8 tuổi (có người lớn đi cùng), người lớn từ 18 tuổi, gia đình, nhóm bạn.', 4.9, 1023, 'active'),
-- (19, 'TN019', 3, 17, 'Lớp học nấu ăn tại Hoang’s Cooking Class', NULL, 'Lớp học mang đến trải nghiệm ẩm thực đậm chất phố cổ Hà Nội, cho phép học viên tự chọn món muốn nấu từ danh sách gợi ý của đầu bếp và học cách tái hiện hương vị Việt ngay tại gian bếp gia đình.', 'Sau khi thưởng thức đồ uống chào mừng, bạn cùng hướng dẫn viên đi bộ tham quan khu chợ truyền thống gần phố cổ để nếm thử một số món ăn vặt địa phương và chọn nguyên liệu cho buổi học. Quay trở lại gian bếp trên phố Hàng Buồm, đầu bếp hướng dẫn bạn cách sơ chế, tẩm ướp và tự tay thực hiện 3 món ăn tự chọn trong danh sách 9 món đặc trưng như Phở bò/gà, Gỏi xoài xanh, Bánh xèo hoặc Nem rán. Điểm nhấn cuối buổi là màn trình diễn và tự tay pha chế Cà phê trứng hoặc Cà phê cốt dừa, sau đó bạn cùng thưởng thức thành quả bữa ăn và nhận chứng chỉ hoàn thành kèm bản công thức chi tiết.', '3–4 giờ', 180, 240, 'Tối đa 14 người', 'Mọi lứa tuổi', 4.9, 1342, 'active'),
-- (20, 'TN020', 3, 18, 'Khám phá ẩm thực vùng cao tại Sapa', NULL, 'Trải nghiệm đưa bạn khám phá nền ẩm thực gắn liền với núi rừng Tây Bắc, tập trung vào cách người dân bản địa bảo quản thực phẩm, ủ men rượu và thưởng thức đặc sản trong không gian nhà sàn ấm cúng.', 'Cùng hướng dẫn viên người dân tộc bản địa, bạn sẽ tham quan chợ phiên vùng cao để tìm hiểu các loại gia vị rừng như mắc khén, hạt dổi, thảo quả và nếm thử các món ăn đặc trưng như phở cốn sủi, bánh hạt dẻ nóng hoặc thắng cố. Trong không gian nhà gỗ truyền thống bên bếp lửa, bạn được mời thưởng thức thịt trâu gác bếp, lợn bản nướng xiên, xôi nếp nương, nghe kể về tập tục hiếu khách của người vùng cao và nhâm nhi chén rượu ngô hoặc rượu táo mèo truyền thống.', '3 giờ', 180, 180, 'Tối đa 10 người', 'Mọi lứa tuổi', 4.9, 1282, 'active'),
-- (21, 'TN021', 3, 19, 'Lớp học nấu ăn Huế và tham quan chợ Đông Ba cùng Madam Thu', 'Madam Thu Cooking Class and Market Visits in Hue', 'Ngồi trên chiếc xích lô thong dong qua cầu Tràng Tiền ngắm sông Hương êm đềm và khám phá thiên đường ẩm thực Cố đô. Du khách thưởng thức các món bánh cung đình mộc mạc, bún bò trứ danh và kết thúc bằng ly chè hẻm thanh ngọt đậm nét văn hóa Huế.', 'Bác tài xích lô đón khách tại khách sạn lúc hoàng hôn buông xuống. Xe lăn bánh chầm chậm qua cầu Trường Tiền rực rỡ ánh đèn tiến vào bờ Bắc Thành Nội. Điểm dừng chân đầu tiên là quán bánh gia truyền để thưởng thức khay bánh Cố đô: Bánh bèo chén tôm cháy, Bánh nậm gói lá dong, Bánh lọc trong suốt nhân tôm thịt và Bánh ram ít giòn dẻo. Tiếp tục hành trình, xích lô đưa bạn đến góc phố cổ thưởng thức Nem lụi nướng than hoa cuộn bánh tráng và tô Bún bò Huế thơm nồng mùi sả ruốc. Điểm dừng cuối cùng là quán Chè hẻm trứ danh của mệ Huế, nơi bạn được nếm thử món Chè bột lọc bọc heo quay độc nhất vô nhị hoặc chè hạt sen nhãn lồng thanh tao trước khi xe đưa về khách sạn.', '3,5–4 giờ', 210, 240, 'Mỗi khách 1 xích lô riêng, đoàn nhỏ 4-10 khách', 'Mọi lứa tuổi, thích hợp cho khách du lịch tự túc, gia đình, cặp đôi thích khám phá ẩm thực đường phố nhẹ nhàng', 4.8, 350, 'active'),
-- (22, 'TN022', 3, 7, 'Tour ẩm thực đêm Phố cổ Hội An & Thả đèn hoa đăng trên sông Hoài', 'Hoi An Evening Street Food Tour & Lantern Boat', 'Khám phá nét đẹp lung linh huyền ảo của phố Hội khi lên đèn. Du khách đi bộ qua những con hẻm cổ kính thưởng thức đặc sản xứ Quảng, nhâm nhi tách nước Mót thảo mộc và bước lên thuyền gỗ thả ngọn đèn hoa đăng cầu an trên dòng sông Hoài thơ mộng.', 'Hướng dẫn viên địa phương đón đoàn tại điểm hẹn trung tâm phố cổ. Khởi đầu bằng chuyến tản bộ dọc đường Trần Phú, đoàn ghé quán nhỏ thưởng thức món Cao lầu sợi vàng dai đậm đà xá xíu, sau đó nếm thử Bánh mì Hội An giòn rụm với nước sốt bí truyền (Bánh mì Phượng hoặc Madam Khánh). Tiếp tục dạo bước qua các giàn hoa giấy, đoàn ghé gánh hàng rong thử Bánh hoa hồng trắng (bánh bao, bánh vạc) và uống ly nước Mót sen thơm mát giải nhiệt. Đúng 20:00, đoàn xuống bến sông Hoài, bước lên thuyền gỗ thả trôi giữa dòng nước lung linh, tự tay thắp sáng và thả đèn hoa đăng mang theo ước nguyện bình an, may mắn.', '3,5–4 giờ', 210, 240, 'Nhóm đi bộ thân mật 8-15 khách', 'Cặp đôi, gia đình, bạn trẻ thích chụp ảnh và khám phá văn hóa phố cổ về đêm.', 4.8, 1200, 'active'),
-- (23, 'TN023', 3, 20, 'Thưởng thức buffet ẩm thực Nam Bộ & Du ngoạn cảnh đêm sông Sài Gòn trên du thuyền', 'Saigon River Dinner Cruise & Night Sightseeing', 'Trải nghiệm ẩm thực tiệc tối sang trọng lộng gió trên du thuyền Indochina Queen trôi chầm chậm dọc sông Sài Gòn. Du khách thưởng thức đại tiệc buffet hơn 30 món ăn Nam Bộ đặc sắc, ngắm Landmark 81 rực rỡ và lắng nghe ban nhạc biểu diễn trực tiếp.', 'Khách làm thủ tục lên du thuyền tại bến Bạch Đằng trong tiếng đàn chào mừng của các nghệ sĩ. Khi du thuyền nhổ neo xuôi dòng sông Sài Gòn, du khách bắt đầu thưởng thức đại tiệc buffet phong phú gồm chả giò tôm cua, gỏi củ hủ dừa tôm thịt, cá chẽm hấp nấm, hải sản nướng, bò lúc lắc và các món chè Nam Bộ. Trong suốt hải trình 2 giờ, du khách vừa dùng tiệc vừa phóng tầm mắt chiêm ngưỡng toàn cảnh các công trình thế kỷ: cầu Ba Son uốn lượn, tháp Landmark 81 cao nhất Việt Nam và bán đảo Thủ Thiêm lung linh. Điểm nhấn là màn trình diễn nhạc cụ dân tộc sống động (đàn tranh, sáo trúc) do các nhạc công biểu diễn tại chỗ.', '2,5–3 giờ', 150, 180, 'Du thuyền sức chứa 200-300 khách, xếp bàn riêng theo từng nhóm', 'Gia đình nhiều thế hệ, cặp đôi hẹn hò, đoàn công ty, du khách thích ăn tối ngắm cảnh sang trọng.', 4.7, 6500, 'active'),
-- (24, 'TN024', 3, 6, 'Tour Chợ nổi Cái Răng - Khám phá ẩm thực sông nước & Trải nghiệm lò hủ tiếu truyền thống', 'Can Tho Floating Market & Local Food Tour', 'Đón bình minh sông nước miền Tây trên chiếc ghe gỗ len lỏi giữa hàng trăm ghe thuyền Chợ nổi Cái Răng. Du khách thưởng thức bữa sáng hủ tiếu bồng bềnh sóng nước, nếm trái cây miệt vườn và tự tay tráng bánh, cắt sợi hủ tiếu tại làng nghề truyền thống.', '05:30 sáng, tàu gỗ đón khách tại bến Ninh Kiều khi trời còn mờ sương. Tàu chạy khoảng 30 phút đưa bạn đến Chợ nổi Cái Răng giữa lúc chợ họp đông vui nhất. Du khách được hòa mình vào tiếng cười nói, ngắm những "cây bẹo" treo lủng lẳng dưa hấu, khóm, xoài chào hàng. Khách gọi ngay một tô Hủ tiếu thịt bằm hoặc Bún riêu cua nóng hổi từ chiếc ghe bán đồ ăn cặp sát mạn thuyền, nhâm nhi ly Cà phê kho sông nước độc đáo. Rời chợ nổi, thuyền ghé Lò hủ tiếu truyền thống Sáu Hoài; tại đây bạn được nghệ nhân chỉ dẫn cách xay bột gạo, tráng bánh trên lò trấu, phơi bánh và tự tay quay máy cắt sợi hủ tiếu ngũ sắc, sau đó thưởng thức món "Pizza hủ tiếu chiên giòn" độc lạ.', '4–5 giờ', 240, 300, 'Đoàn đi thuyền gỗ từ 10-18 người/chuyến', 'Khách du lịch yêu thích trải nghiệm văn hóa sông nước miền Tây, gia đình và nhóm bạn trẻ.', 4.9, 2100, 'active'),
-- (25, 'TN025', 4, 21, 'Dấu ấn ngày thống nhất – Khám phá Dinh Độc Lập', NULL, 'Trở về những dấu mốc quan trọng của lịch sử Việt Nam tại Dinh Độc Lập. Khám phá các phòng làm việc, hầm chỉ huy, hiện vật lịch sử và không gian kiến trúc gắn liền với ngày 30/4/1975.', 'Hành trình đưa du khách khám phá những không gian từng phục vụ hoạt động của chính quyền Việt Nam Cộng hòa trước năm 1975. Từ phòng khánh tiết, phòng họp nội các, phòng làm việc đến hệ thống hầm chỉ huy dưới lòng đất, mỗi khu vực đều lưu giữ những dấu ấn về lịch sử và đời sống chính trị Sài Gòn trong thế kỷ XX. Ngoài tòa nhà chính, du khách còn có thể tham quan khu trưng bày chuyên đề về quá trình hình thành, phát triển của công trình từ Dinh Norodom đến Dinh Độc Lập, qua đó tìm hiểu những thay đổi của đô thị Sài Gòn qua các giai đoạn lịch sử. Tham quan các phòng chức năng được bảo tồn; khám phá hầm chỉ huy và thiết bị liên lạc; xem hiện vật, tư liệu và triển lãm lịch sử; tìm hiểu kiến trúc do Ngô Viết Thụ thiết kế. Gìn giữ ký ức lịch sử dân tộc, giúp các thế hệ tìm hiểu về những bước ngoặt của đất nước, đồng thời giới thiệu một công trình tiêu biểu của kiến trúc Việt Nam hiện đại.', '1,5–2 giờ', 90, 120, 'Không công bố giới hạn khách tối đa cho mỗi lượt tham quan', 'Mọi lứa tuổi, gia đình, nhóm bạn, học sinh – sinh viên, khách nước ngoài', 4.0, 10469, 'active'),
-- (26, 'TN026', 4, 22, 'Nếp nhà xưa Nam Bộ – Khám phá Nhà cổ Bình Thủy', NULL, 'Bước vào ngôi nhà cổ hơn 150 năm tuổi để cảm nhận nếp sống của một gia đình Nam Bộ xưa. Chiêm ngưỡng kiến trúc Đông – Tây giao thoa, những bộ bàn ghế cổ, gian thờ gia tiên và các câu chuyện được lưu giữ qua nhiều thế hệ.', 'Nhà cổ Bình Thủy là công trình kiến trúc nổi tiếng của gia đình họ Dương tại Cần Thơ, được hình thành từ cuối thế kỷ XIX và tiếp tục xây dựng, hoàn thiện trong những năm đầu thế kỷ XX. Ngôi nhà mang vẻ đẹp độc đáo nhờ sự kết hợp giữa kiến trúc phương Tây và truyền thống sinh hoạt Nam Bộ. Mặt tiền nổi bật với những ô cửa vòm, họa tiết trang trí và cầu thang đối xứng mang ảnh hưởng kiến trúc Pháp. Trong khi đó, không gian bên trong vẫn giữ cách bố trí quen thuộc của nhà cổ Việt Nam với những gian phòng sử dụng nội thất gỗ, hoa văn chạm khắc và khu vực thờ cúng tổ tiên. Trong hành trình, du khách được quan sát những vật dụng sinh hoạt xưa, tìm hiểu về cách tổ chức không gian sống, văn hóa thờ cúng gia tiên và dấu ấn của các gia đình khá giả miền Tây đầu thế kỷ XX. Chiêm ngưỡng kiến trúc Đông – Tây; tham quan nội thất và các vật dụng cổ; tìm hiểu văn hóa thờ cúng tổ tiên; khám phá câu chuyện lịch sử của gia đình họ Dương. Bảo tồn không gian sinh hoạt gia đình truyền thống, phản ánh đời sống vật chất, tinh thần của người dân Nam Bộ và sự giao thoa văn hóa Việt – Pháp trong giai đoạn cuối thế kỷ XIX, đầu thế kỷ XX', '45–60 phút', 45, 60, 'Không công bố giới hạn khách tối đa cho mỗi lượt tham quan', 'Mọi lứa tuổi, gia đình, nhóm bạn, người yêu thích kiến trúc cổ', 3.9, 200, 'active'),
-- (27, 'TN027', 4, 23, 'Ký ức đảo Ngọc – Khám phá di tích Nhà tù Phú Quốc', NULL, 'Khám phá di tích Nhà tù Phú Quốc, nơi lưu giữ những dấu ấn lịch sử trong thời kỳ chiến tranh Việt Nam. Tham quan các khu giam giữ, tìm hiểu hiện vật và những câu chuyện về ý chí kiên cường của các chiến sĩ cách mạng qua từng giai đoạn lịch sử.', 'Phú Quốc không chỉ nổi tiếng với những bãi biển mà còn lưu giữ nhiều địa điểm mang ý nghĩa lịch sử, tín ngưỡng và văn hóa địa phương. Trong chương trình tham quan phía nam đảo, du khách đến Nhà tù Phú Quốc để tìm hiểu về hệ thống trại giam từng tồn tại trong thời kỳ chiến tranh. Tại di tích, những mô hình tái hiện, hình ảnh và hiện vật giúp người tham quan hiểu hơn về điều kiện giam giữ và cuộc sống của các tù nhân trong chiến tranh.', '1–2 giờ', 60, 120, 'Không giới hạn khách tối đa cho mỗi lượt tham quan', 'Mọi lứa tuổi, Học sinh, sinh viên, Nhóm bạn trẻ, công ty, gia đình, khách nước ngoài', 4.3, 9900, 'active'),
-- (28, 'TN028', 4, 24, 'Địa đạo Củ Chi – Theo dấu lịch sử dưới lòng đất', NULL, 'Trở về vùng đất thép Củ Chi để khám phá hệ thống địa đạo lịch sử từng là nơi sinh sống và chiến đấu trong thời chiến. Khám phá những đường hầm bí mật, công trình phòng thủ và câu chuyện về sức bền bỉ của con người Việt Nam.', 'Địa đạo Củ Chi là một trong những di tích lịch sử tiêu biểu gắn với thời kỳ kháng chiến tại miền Nam Việt Nam. Hệ thống đường hầm nằm dưới lòng đất được xây dựng và mở rộng qua nhiều giai đoạn, phục vụ việc liên lạc, trú ẩn, sinh hoạt và tổ chức hoạt động quân sự.Trong hành trình tham quan khu vực Bến Đình, du khách được hướng dẫn tìm hiểu cấu trúc đặc biệt của hệ thống địa đạo, những lối vào được ngụy trang và các công trình phục vụ đời sống trong điều kiện chiến tranh. Người tham gia có thể quan sát những dấu tích phòng thủ, tìm hiểu cách cư dân và lực lượng kháng chiến tổ chức sinh hoạt dưới lòng đất. Một số đoạn hầm được mở phục vụ khách tham quan, cho phép du khách trải nghiệm trực tiếp không gian chật hẹp và điều kiện di chuyển bên trong. Chương trình còn kết hợp giới thiệu các hiện vật chiến tranh, phương tiện quân sự và thưởng thức những món ăn được phục vụ trong khu tham quan.', '2–3 giờ', 120, 180, 'Không giới hạn khách tối đa cho mỗi lượt tham quan', 'Mọi lứa tuổi, Học sinh, sinh viên, Nhóm bạn trẻ, công ty, gia đình, khách nước ngoài', 4.7, 24800, 'active'),
-- (29, 'TN029', 4, 25, 'Show thực cảnh “Tinh hoa Bắc Bộ” trên sân khấu mặt nước giữa làng quê Sài Sơn', NULL, 'Vở diễn thực cảnh trên mặt nước quy mô lớn tái hiện đời sống văn hóa, tín ngưỡng và tinh thần hiếu học của vùng châu thổ sông Hồng dưới chân núi Thầy. Hơn 200 diễn viên mà phần lớn là nông dân bản địa Sài Sơn trực tiếp trình diễn cùng hệ thống âm thanh, ánh sáng hiện đại giữa không gian làng quê Bắc Bộ.', 'Du khách có mặt tại khu vực tổ chức từ cuối giờ chiều để dạo bước qua các gian hàng chợ quê truyền thống, thưởng thức quà vặt dân dã và tham gia các trò chơi dân gian trước giờ mở màn. Khi màn đêm buông xuống, chương trình nghệ thuật chính thức bắt đầu trên sân khấu mặt nước rộng 4.300 m² với 6 phần nối tiếp nhau: Thi ca, Cõi Phật, Hoài cổ, Nhạc họa, An vui và Ngày hội. Trong suốt 75 phút, khán giả được tìm hiểu câu chuyện về Thiền sư Từ Đạo Hạnh (ông tổ nghề múa rối nước), truyền thống khoa bảng xưa, nghệ thuật ca trù, dân ca quan họ và khung cảnh lao động bình dị của người nông dân Bắc Bộ.', '2,5–3 giờ', 150, 180, 'Sức chứa khán đài khoảng 2.500 chỗ ngồi; nhận đặt vé lẻ cá nhân và đoàn lớn (trường học, doanh nghiệp, gia đình)', 'Mọi lứa tuổi; phù hợp với người trẻ yêu thích văn hóa bản địa, gia đình nhiều thế hệ, đoàn thể công ty và du khách quốc tế', 4.8, 1200, 'active'),
-- (30, 'TN030', 4, 26, 'Workshop in tranh Đông Hồ tại làng tranh (Thuận Thành, Bắc Ninh)', NULL, 'Hành trình về thăm cái nôi của dòng tranh khắc gỗ dân gian Đông Hồ bên bờ sông Đuống, nơi lưu giữ di sản văn hóa phi vật thể quốc gia. Du khách được trò chuyện trực tiếp với nghệ nhân, khám phá bí quyết tạo màu từ nguyên liệu tự nhiên và tự tay in hoàn thiện một bức tranh trên nền giấy điệp óng ánh.', 'Bắt đầu trải nghiệm, du khách ghé thăm không gian bảo tồn tại tư gia của nghệ nhân để nghe giới thiệu về lịch sử hàng trăm năm của dòng tranh Đông Hồ cùng ý nghĩa nhân sinh sâu sắc ẩn sau các tác phẩm nổi tiếng như Đám cưới chuột, Vinh hoa phú quý, Chăn trâu thổi sáo. Nghệ nhân sẽ giới thiệu quy trình làm giấy dó quét hồ điệp lấp lánh, cách chế tác màu tự nhiên (màu đỏ từ sỏi son, màu vàng từ hoa hòe, màu đen từ than lá tre, màu xanh từ lá chàm) và sự khác biệt giữa ván in màu với ván in nét. Tiếp đó, dưới sự hướng dẫn trực tiếp của nghệ nhân, du khách tự tay dùng thét (chổi lá thông) phết màu lên ván khắc gỗ, đặt giấy điệp, dùng xơ mướp chà đều để màu thấm vào giấy, phơi khô từng lớp màu và đóng bản nét đen cuối cùng để hoàn thiện tác phẩm mang về.', '2–3 giờ', 120, 180, 'Tối đa 25-30 người/lượt để bảo đảm không gian thực hành và sự hướng dẫn sát sao từ nghệ nhân', 'Học sinh, sinh viên, nhóm bạn trẻ, gia đình có trẻ em từ 6 tuổi trở lên, đoàn ngoại khóa trường học, công ty và khách du lịch nước ngoài', 4.9, 320, 'active'),
-- (31, 'TN031', 4, 27, 'Dạ yến Hoàng cung - tiệc cung đình kết hợp Nhã nhạc tại Duyệt Thị Đường', NULL, 'Trải nghiệm văn hóa - ẩm thực cung đình cao cấp diễn ra ngay tại Duyệt Thị Đường, là nhà hát cổ nhất Việt Nam nằm trong lòng Tử Cấm Thành Huế. Du khách được thưởng thức các mỹ vị ngự thiện triều Nguyễn và đắm mình trong không gian Nhã nhạc cung đình Huế - Di sản văn hóa phi vật thể đại diện của nhân loại.', 'Du khách tiến vào Đại Nội Huế qua cửa Hiển Nhơn khi hoàng hôn buông xuống, dạo bước giữa không gian cung điện cổ kính lên đèn và được đội ngũ nhân viên trong trang phục truyền thống nghênh đón tại tiền sảnh nhà hát Duyệt Thị Đường. Trước khi nhập tiệc, du khách tham quan không gian trưng bày trang phục, nhạc cụ, mặt nạ tuồng cổ và nghe thuyết minh về lịch sử gần 200 năm của nhà hát hoàng gia dưới triều Nguyễn. Khi dạ yến bắt đầu, thực khách lần lượt thưởng thức thực đơn các món ăn cung đình được chế biến công phu, trình bày tinh xảo theo quy chuẩn ngự thiện xưa. Song hành cùng từng món ăn là các tiết mục Nhã nhạc cung đình Huế (Tiểu nhạc, Đại nhạc), múa cung đình (Lục cúng hoa đăng, Trình tường tập khánh) và trích đoạn Tuồng cổ do các nghệ sĩ Nhà hát Nghệ thuật Truyền thống Cung đình Huế biểu diễn.', '2–2,5 giờ', 120, 150, 'Giới hạn tối đa 130 khách/đêm', 'Người trưởng thành, gia đình, cặp đôi, đoàn khách doanh nghiệp và du khách quốc tế muốn tìm hiểu chiều sâu văn hóa - ẩm thực cố đô', 4.9, 210, 'active'),
-- (32, 'TN032', 4, 28, 'Show thực cảnh “Ký ức Hội An” trên Đảo Ký Ức', NULL, 'Chương trình biểu diễn nghệ thuật thực cảnh ngoài trời quy mô lớn với sân khấu rộng 25.000 m² và gần 500 diễn viên chuyên nghiệp. Thông qua hình tượng người con gái bên khung cửi dệt vải và con đường ánh sáng, vở diễn đưa khán giả ngược dòng thời gian 400 năm khám phá lịch sử thương cảng Faifo - Hội An sầm uất.', 'Hành trình bắt đầu từ 17:00 khi du khách đi qua cây cầu Ánh Trăng để bước vào Công viên Ấn Tượng Hội An, tự do khám phá các phân khu kiến trúc tái hiện thương cảng cổ, làng Việt, khu tâm linh và thưởng thức chuỗi minishow đường phố đặc sắc. Đúng 20:00, du khách ổn định vị trí theo hạng vé (ECO, HIGH hoặc VIP) tại khán đài chính để thưởng thức 5 màn diễn liên hoàn kéo dài 60 phút: màn 1 "Sinh mệnh" tái hiện thuở khai hoang lập ấp; màn 2 "Đám cưới" khắc họa lễ rước dâu của Công chúa Huyền Trân và Vua Chế Mân mang đậm sắc màu văn hóa Chăm Pa; màn 3 "Thuyền và Biển" kể chuyện tình thủy chung của người phụ nữ Hội An qua những vũ điệu nón lá, áo dài; màn 4 "Bến bờ" tái hiện thương cảng quốc tế Faifo thế kỷ 16-17 nhộn nhịp thuyền buôn đa quốc gia; và màn 5 "Áo dài" khép lại bằng hình ảnh thiếu nữ Việt Nam duyên dáng bước đi trên con đường ánh sáng kết nối quá khứ với hiện tại.', '3–4 giờ', 180, 240, 'Sức chứa khán đài lên tới 3.300 chỗ ngồi (chia theo 3 khu vực hạng vé ECO, HIGH và VIP); phù hợp cho cả khách lẻ, nhóm bạn và đoàn khách số lượng lớn', 'Mọi lứa tuổi; rất phù hợp với người trẻ thích khám phá văn hóa qua nghệ thuật trình diễn, gia đình, đoàn công ty và du khách quốc tế', 4.9, 3500, 'active'),
-- (33, 'TN033', 2, 29, 'Trekking khám phá rừng nguyên sinh và cây chò chỉ ngàn năm tại Cúc Phương', NULL, 'Vườn quốc gia Cúc Phương là khu rừng nguyên sinh lâu đời với hệ sinh thái đa dạng, nhiều cây cổ thụ và các loài động thực vật quý hiếm. Trải nghiệm trekking đưa du khách rời xa không gian đô thị, đi bộ dưới những tán rừng xanh mát và khám phá vẻ đẹp tự nhiên của khu rừng, nổi bật là cây chò chỉ ngàn năm.', 'Hành trình bắt đầu tại cổng Vườn quốc gia Cúc Phương, nơi du khách được giới thiệu khái quát về hệ sinh thái và các quy định khi tham quan rừng. Sau đó, đoàn di chuyển đến điểm bắt đầu tuyến trekking và đi bộ xuyên qua những tán rừng nguyên sinh, quan sát thảm thực vật, các loài cây cổ thụ và dấu vết sinh sống của động vật hoang dã. Điểm nhấn của hành trình là cây chò chỉ ngàn năm - một trong những cây cổ thụ nổi bật tại Cúc Phương. Trên đường đi, hướng dẫn viên chia sẻ về đặc điểm sinh học, vai trò của rừng đối với môi trường và những nỗ lực bảo tồn đa dạng sinh học. Sau khi tham quan, chụp ảnh và nghỉ ngơi tại khu vực cây cổ thụ, đoàn quay trở lại điểm xuất phát, kết thúc hành trình khám phá rừng.', '6–7 giờ', 360, 420, '15 người/đoàn', 'Trẻ em từ 12 tuổi (có người lớn đi cùng), người lớn từ 18 tuổi, gia đình, nhóm bạn và người yêu thích trekking, khám phá rừng tự nhiên.', NULL, 0, 'active'),
-- (34, 'TN034', 2, 30, 'Chèo kayak khám phá cảnh quan hồ Ba Bể', NULL, 'Hồ Ba Bể nổi bật với mặt nước xanh trong, những dãy núi đá vôi và cảnh quan rừng tự nhiên bao quanh. Trải nghiệm chèo kayak mang đến cơ hội khám phá hồ nước theo cách chủ động, giúp du khách tiếp cận gần hơn với cảnh quan thiên nhiên và tận hưởng không gian yên bình giữa núi rừng.', 'Khi đến khu vực bến thuyền ven hồ, du khách được hướng dẫn cách sử dụng mái chèo, điều khiển kayak và trang bị áo phao trước khi bắt đầu hành trình. Sau khi làm quen với kỹ thuật chèo cơ bản, du khách tự mình điều khiển kayak trên mặt hồ, len qua những khu vực có cảnh quan đẹp và ngắm nhìn các dãy núi đá vôi phản chiếu xuống mặt nước. Trong quá trình trải nghiệm, du khách có thể dừng lại nghỉ ngơi, chụp ảnh và quan sát cảnh quan tự nhiên xung quanh. Kayak là phương tiện phù hợp để khám phá hồ ở khoảng cách gần, tạo cảm giác tự do và thư giãn hơn so với hình thức tham quan bằng thuyền máy. Kết thúc hành trình, du khách quay về bến và bàn giao thiết bị cho đơn vị cung cấp dịch vụ.', '2–3 giờ', 120, 180, '2 người/thuyền kayak; tối đa 20 người/đoàn', 'Trẻ em từ 6 tuổi (có người lớn đi cùng), người lớn từ 18 tuổi, gia đình, nhóm bạn và người yêu thích chèo thuyền, khám phá cảnh quan hồ nước.', NULL, 0, 'active'),
-- (35, 'TN035', 2, 31, 'Trekking khám phá Ngũ Hồ và thác Đỗ Quyên tại Vườn quốc gia Bạch Mã', NULL, 'Vườn quốc gia Bạch Mã sở hữu hệ sinh thái rừng núi phong phú, khí hậu mát mẻ và nhiều cảnh quan tự nhiên đặc sắc. Hành trình trekking đưa du khách khám phá những hồ nước tự nhiên giữa rừng, các con đường mòn dưới tán cây cổ thụ và thác Đỗ Quyên hùng vĩ, mang đến trải nghiệm hòa mình vào thiên nhiên miền Trung.', 'Du khách tập trung tại khu vực Vườn quốc gia Bạch Mã và được hướng dẫn viên phổ biến về lộ trình, các quy định bảo vệ rừng và nguyên tắc an toàn khi trekking. Hành trình bắt đầu bằng việc di chuyển qua những tuyến đường rừng, khám phá khu vực Ngũ Hồ - hệ thống năm hồ nước tự nhiên nằm giữa rừng nguyên sinh. Tại đây, du khách có thể nghỉ chân, ngắm cảnh, chụp ảnh và tận hưởng không khí trong lành. Tiếp tục hành trình, đoàn di chuyển đến khu vực thác Đỗ Quyên, một trong những điểm cảnh quan nổi bật của Bạch Mã với dòng thác cao khoảng 300 m. Du khách có thể quan sát thác từ các điểm ngắm cảnh và tìm hiểu thêm về hệ sinh thái rừng núi tại khu vực này. Sau thời gian tham quan và nghỉ ngơi, đoàn quay trở lại điểm tập trung, kết thúc chuyến trekking.', '1 ngày', NULL, NULL, '15 người/đoàn', 'Người từ 15 tuổi trở lên có sức khỏe tốt; người dưới 18 tuổi cần có người lớn đi cùng; nhóm bạn và người yêu thích trekking, khám phá rừng núi, thác nước.', NULL, 0, 'active'),
-- (36, 'TN036', 2, 32, 'Lặn ngắm san hô và khám phá hệ sinh thái biển Cù Lao Chàm', NULL, 'Cù Lao Chàm là khu dự trữ sinh quyển thế giới với hệ sinh thái biển đa dạng và những rạn san hô nhiều màu sắc. Trải nghiệm lặn ngắm san hô giúp du khách khám phá thế giới sinh vật dưới nước, quan sát các rạn san hô và tận hưởng vẻ đẹp của vùng biển đảo miền Trung.', 'Hành trình bắt đầu tại cảng Cửa Đại, Hội An, nơi du khách làm thủ tục và di chuyển bằng cano cao tốc đến Cù Lao Chàm. Sau khi đến khu vực tổ chức hoạt động, hướng dẫn viên phổ biến các nguyên tắc an toàn dưới nước và hướng dẫn sử dụng mặt nạ, ống thở cùng áo phao. Du khách bắt đầu hoạt động snorkeling tại các khu vực có rạn san hô như Hòn Dài hoặc Bãi Xếp, quan sát những đàn cá nhỏ và hệ sinh thái biển trong môi trường tự nhiên. Trong quá trình trải nghiệm, hướng dẫn viên hỗ trợ du khách làm quen với việc thở qua ống thở, di chuyển trên mặt nước và giữ khoảng cách an toàn với các rạn san hô. Sau hoạt động lặn ngắm san hô, du khách có thời gian nghỉ ngơi, tham quan khu vực đảo và thưởng thức bữa trưa theo chương trình tour. Cuối ngày, đoàn di chuyển bằng cano trở lại cảng Cửa Đại, kết thúc hành trình.', '6–6,5 giờ', 360, 390, '20 người/đoàn', 'Trẻ em từ 6 tuổi (có người lớn đi cùng), người lớn từ 18 tuổi, gia đình, nhóm bạn và người yêu thích khám phá biển đảo, lặn ngắm san hô.', 4.8, 980, 'active'),
-- (37, 'TN037', 2, 33, 'Chèo SUP khám phá hồ Tuyền Lâm', NULL, 'Hồ Tuyền Lâm nổi bật với mặt nước trong xanh và rừng thông bao quanh. Trải nghiệm chèo SUP giúp du khách khám phá cảnh quan thiên nhiên, thư giãn và tận hưởng không khí trong lành của Đà Lạt.', 'Khi tham gia trải nghiệm, du khách được hướng dẫn cách sử dụng ván SUP, mái chèo và các thiết bị bảo hộ như áo phao, dây buộc chân và túi chống nước. Sau khi làm quen với kỹ thuật chèo và các nguyên tắc an toàn, đoàn bắt đầu hành trình di chuyển trên mặt hồ, khám phá những khu vực có cảnh quan đẹp, rừng thông và các bãi cỏ lau ven hồ. Trong quá trình trải nghiệm, du khách có thể dừng chân chụp ảnh, ngắm cảnh bình minh hoặc hoàng hôn tùy theo khung giờ đăng ký. Chương trình phù hợp với những người muốn kết hợp vận động nhẹ nhàng và thư giãn giữa thiên nhiên.', 'Nửa ngày (khoảng 4 giờ)', 240, 240, '20 người/đoàn', 'Trẻ em từ 6 tuổi (có người lớn đi cùng), người lớn từ 18 tuổi, gia đình, nhóm bạn.', 5.0, 3387, 'active'),
-- (38, 'TN038', 2, 34, 'Đu dây vượt thác Datanla', NULL, 'Thác Datanla mang đến trải nghiệm khám phá thiên nhiên kết hợp thử thách thể lực. Du khách được tham gia các hoạt động đu dây vượt thác, trượt nước, leo vách đá và băng qua những dòng suối giữa rừng.', 'Du khách bắt đầu hành trình bằng việc di chuyển đến khu vực thác và được hướng dẫn viên phổ biến các nguyên tắc an toàn, cách sử dụng dây đai, mũ bảo hiểm, áo phao và các thiết bị chuyên dụng. Sau phần hướng dẫn, người tham gia lần lượt trải nghiệm leo vách đá khô, đu dây xuống thác nước, trượt theo dòng nước tự nhiên, vượt zipline qua khu vực thác và bơi lội tại những hồ nước dưới chân thác. Một số thử thách yêu cầu người tham gia sử dụng kỹ thuật kiểm soát cơ thể và phối hợp với hướng dẫn viên để vượt qua các đoạn địa hình khác nhau. Kết thúc hành trình, du khách được nghỉ ngơi và thưởng thức bữa ăn theo chương trình tour.', '5–6 giờ', 300, 360, '10 người/đoàn', 'Người từ 18-60 tuổi, nhóm bạn và người yêu thích vận động mạo hiểm.', NULL, 0, 'active'),
-- (39, 'TN039', 2, 35, 'Chèo kayak khám phá vịnh Lan Hạ', NULL, 'Vịnh Lan Hạ gây ấn tượng với làn nước xanh ngọc và những đảo đá vôi kỳ vĩ. Hoạt động chèo kayak giúp du khách len lỏi qua các hang nước, khám phá những bãi biển nhỏ và tận hưởng vẻ đẹp hoang sơ của vùng vịnh.', 'Du khách di chuyển từ bến Bèo bằng tàu đến khu vực tổ chức hoạt động chèo kayak. Tại đây, hướng dẫn viên phổ biến cách sử dụng mái chèo, cách điều khiển thuyền và trang bị áo phao cho người tham gia. Sau khi được hướng dẫn, du khách bắt đầu chèo thuyền qua những vùng nước xanh, khám phá các đảo đá vôi, hang nước và những áng nước kín giữa lòng núi đá. Trong hành trình, du khách có thể dừng chân tại các bãi biển nhỏ để nghỉ ngơi, chụp ảnh và tận hưởng cảnh quan thiên nhiên. Đây là trải nghiệm phù hợp với những người muốn khám phá biển đảo theo cách chủ động, gần gũi và có nhiều cơ hội tương tác với môi trường tự nhiên.', 'Nửa ngày đến 1 ngày', NULL, NULL, '20 người/đoàn', 'Trẻ em từ 6 tuổi (có người lớn đi cùng), người lớn từ 18 tuổi, gia đình, nhóm bạn.', NULL, 0, 'active'),
-- (40, 'TN040', 2, 36, 'Trekking khám phá thung lũng Sinh Tồn - Hang E', NULL, 'Hành trình đưa du khách băng qua rừng nguyên sinh, khám phá hệ thống hang động và cảnh quan núi đá vôi đặc trưng của Phong Nha. Điểm nhấn là trải nghiệm chèo SUP và khám phá dòng nước xanh ngọc bên trong Hang E.', 'Du khách bắt đầu hành trình bằng việc di chuyển đến điểm tập trung tại Phong Nha, nghe hướng dẫn viên giới thiệu về lộ trình và các nguyên tắc an toàn. Sau đó, đoàn đi bộ khoảng 3 km xuyên qua khu rừng nguyên sinh, băng qua những đoạn đường đá vôi và rừng tre nứa để đến cửa Hang E. Tại đây, du khách được trang bị áo phao và hướng dẫn sử dụng SUP để khám phá dòng nước bên trong hang với quãng đường khoảng 1,2-1,5 km. Sau hoạt động khám phá hang động, đoàn nghỉ ngơi và dùng bữa trưa tại khu vực bãi trại. Buổi chiều, du khách có thể tiếp tục chèo SUP, bơi lội, lặn ngắm cá và thư giãn tại hồ nước tự nhiên trước cửa hang. Cuối hành trình, đoàn đi bộ trở ra khỏi khu rừng và kết thúc chuyến tham quan tại Phong Nha.', '9,5 giờ', 570, 570, '15 người/đoàn', 'Trẻ em từ 5 tuổi vào mùa khô, từ 10 tuổi vào mùa mưa (có người lớn đi cùng), người lớn, gia đình, nhóm bạn.', 5.0, 1000, 'active');

-- BƯỚC 5: experience_pricing
-- INSERT INTO experience_pricing (price_id, experience_id, price_from, price_to, price_unit, price_note, price_label, age_group, is_default) VALUES
-- (1, 1, 350000, 350000, 'người', NULL, '350.000 VND', 'all', 1),
-- (2, 2, 250000, 250000, 'người', NULL, '250.000 VND', 'all', 1),
-- (3, 3, 180000, 180000, 'người', NULL, '180.000 VND', 'all', 1),
-- (4, 4, 650000, 650000, 'người', NULL, '650.000 VND', 'all', 1),
-- (5, 5, 420000, 420000, 'người', NULL, '420.000 VND', 'all', 1),
-- (6, 6, 390000, 390000, 'người', NULL, '390.000 VND', 'all', 1),
-- (7, 7, 320000, 320000, 'người', NULL, '320.000 VND', 'all', 1),
-- (8, 8, 480000, 480000, 'người', NULL, '480.000 VND', 'all', 1),
-- (9, 9, 290000, 290000, 'người', NULL, '290.000 VND', 'all', 1),
-- (10, 10, 190000, 190000, 'người', NULL, '190.000 VND', 'all', 1),
-- (11, 11, 310000, 310000, 'người', NULL, '310.000 VND', 'all', 1),
-- (12, 12, 230000, 230000, 'người', NULL, '230.000 VND', 'all', 1),
-- (13, 13, 580000, 580000, 'người', NULL, '580.000 VND', 'all', 1),
-- (14, 14, 630000, 630000, 'người', NULL, '630.000 VND', 'all', 1),
-- (15, 15, 890000, 890000, 'người', NULL, '890.000 VND', 'all', 1),
-- (16, 16, 790000, 790000, 'người', NULL, '790.000 VND', 'all', 1),
-- (17, 17, 1009710, 1009710, 'người', NULL, '1.009.710 VND', 'all', 1),
-- (18, 18, 1150000, 1150000, 'người', NULL, '1.150.000 VND', 'all', 1),
-- (19, 19, 1200000, 1200000, 'người', NULL, '1.200.000 VND', 'all', 1),
-- (20, 20, 500000, 500000, 'người', NULL, '500.000 VND', 'all', 1),
-- (21, 21, 650000, 650000, 'người', NULL, '650.000 VND', 'all', 1),
-- (22, 22, 690000, 690000, 'người', NULL, '690.000 VND', 'all', 1),
-- (23, 23, 620000, 620000, 'người', NULL, '620.000 VND', 'all', 1),
-- (24, 24, 550000, 550000, 'người', NULL, '550.000 VND', 'all', 1),
-- (25, 25, 80000, 80000, 'người', NULL, '80.000 VND', 'all', 1),
-- (26, 26, 50000, 50000, 'người', NULL, '50.000 VND', 'all', 1),
-- (27, 27, 0, 0, 'người', 'Miễn phí vào cửa. Thuê hướng dẫn viên/thuyết minh tại quầy ban quản lý (tùy chọn): 100.000–200.000 VND/buổi.', 'Miễn phí (thuyết minh tùy chọn 100.000–200.000 VND/buổi)', 'all', 1),
-- (28, 27, 100000, 200000, 'buổi', NULL, 'Thuyết minh (tùy chọn)', 'all', 0),
-- (29, 28, 100000, 100000, 'người', NULL, '100.000 VND', 'all', 1),
-- (30, 29, 450000, 900000, 'người lớn', 'Người lớn: Bạc 450.000–500.000; Vàng 540.000–600.000; Bạch Kim 810.000–900.000. Trẻ em 90cm–<130cm: Bạc 220.000–250.000; Vàng 270.000–300.000; Bạch Kim 400.000–450.000. Dưới 90cm: miễn phí.', '450.000–900.000 VND', 'all', 1),
-- (31, 29, 450000, 500000, 'người', NULL, 'Người lớn – Bạc', 'adult', 0),
-- (32, 29, 540000, 600000, 'người', NULL, 'Người lớn – Vàng', 'adult', 0),
-- (33, 29, 810000, 900000, 'người', NULL, 'Người lớn – Bạch Kim', 'adult', 0),
-- (34, 29, 220000, 250000, 'người', NULL, 'Trẻ em 90–130cm – Bạc', 'child', 0),
-- (35, 29, 270000, 300000, 'người', NULL, 'Trẻ em 90–130cm – Vàng', 'child', 0),
-- (36, 29, 400000, 450000, 'người', NULL, 'Trẻ em 90–130cm – Bạch Kim', 'child', 0),
-- (37, 30, 100000, 300000, 'người', 'Giá bao gồm phí hướng dẫn, nguyên liệu giấy điệp, màu tự nhiên, 1 bức tranh mang về. Giá ghi "khoảng".', '100.000–300.000 VND', 'all', 1),
-- (38, 31, 1700000, 1700000, 'người', 'Trọn gói vé vào Đại Nội ban đêm, thực đơn yến tiệc cung đình và chương trình biểu diễn.', '1.700.000 VND', 'all', 1),
-- (39, 32, 600000, 1200000, 'người lớn', 'Giá niêm yết người lớn: ECO 600.000; HIGH 750.000; VIP 1.200.000. Giá ưu đãi online: ECO 540.000; HIGH 670.000–675.000; VIP 1.080.000. Trẻ em 1,0–1,39m: ECO 300.000; HIGH 375.000; VIP 600.000 (online 270.000 / 340.000–360.000 / 560.000–570.000). Dưới 1,0m miễn phí. Đã gồm vé vào Công viên Ấn Tượng Hội An.', '600.000–1.200.000 VND', 'all', 1),
-- (40, 32, 600000, 600000, 'người', NULL, 'Người lớn – ECO', 'adult', 0),
-- (41, 32, 750000, 750000, 'người', NULL, 'Người lớn – HIGH', 'adult', 0),
-- (42, 32, 1200000, 1200000, 'người', NULL, 'Người lớn – VIP', 'adult', 0),
-- (43, 32, 300000, 300000, 'người', NULL, 'Trẻ em 1,0–1,39m – ECO', 'child', 0),
-- (44, 32, 375000, 375000, 'người', NULL, 'Trẻ em 1,0–1,39m – HIGH', 'child', 0),
-- (45, 32, 600000, 600000, 'người', NULL, 'Trẻ em 1,0–1,39m – VIP', 'child', 0),
-- (46, 33, 700000, 1500000, 'người', 'Tour trekking một ngày, tùy lịch trình và dịch vụ. Giá ghi "khoảng".', '700.000–1.500.000 VND', 'all', 1),
-- (47, 34, 50000, 100000, 'người/giờ', 'Giá thuê kayak tham khảo, tính theo giờ (khác đơn vị với các trải nghiệm còn lại). Giá ghi "khoảng".', '50.000–100.000 VND', 'all', 1),
-- (48, 35, 600000, 1500000, 'người', 'Giá tour có hướng dẫn viên tham khảo, tùy lịch trình. Giá ghi "khoảng".', '600.000–1.500.000 VND', 'all', 1),
-- (49, 36, 550000, 590000, 'người', 'Tour tiêu chuẩn tham khảo. Giá ghi "khoảng".', '550.000–590.000 VND', 'all', 1),
-- (50, 37, 490000, 490000, 'người', NULL, '490.000 VND', 'all', 1),
-- (51, 38, 1886000, 1886000, 'người', NULL, '1.886.000 VND', 'all', 1),
-- (52, 39, 450000, 950000, 'người', 'Nửa ngày: 450.000–650.000; 1 ngày: 750.000–950.000.', 'Nửa ngày 450.000–650.000 VND; 1 ngày 750.000–950.000 VND', 'all', 1),
-- (53, 39, 450000, 650000, 'người', NULL, 'Nửa ngày', 'all', 0),
-- (54, 39, 750000, 950000, 'người', NULL, '1 ngày', 'all', 0),
-- (55, 40, 1750000, 1750000, 'người', NULL, '1.750.000 VND', 'all', 1);

-- BƯỚC 6: experience_schedules
-- INSERT INTO experience_schedules (schedule_id, experience_id, operating_days, start_time, end_time, schedule_note) VALUES
-- (1, 9, 'Hằng ngày', '08:30:00', '11:00:00', 'Hằng ngày; 08:30–11:00 hoặc 14:00–16:30'),
-- (2, 9, 'Hằng ngày', '14:00:00', '16:30:00', 'Hằng ngày; 08:30–11:00 hoặc 14:00–16:30'),
-- (3, 10, 'Hằng ngày', '08:30:00', '10:30:00', 'Hằng ngày; 08:30–10:30 hoặc 14:00–16:00'),
-- (4, 10, 'Hằng ngày', '14:00:00', '16:00:00', 'Hằng ngày; 08:30–10:30 hoặc 14:00–16:00'),
-- (5, 11, 'Theo lịch hẹn', '08:30:00', '11:30:00', 'Theo lịch hẹn; 08:30–11:30 hoặc 13:30–16:30'),
-- (6, 11, 'Theo lịch hẹn', '13:30:00', '16:30:00', 'Theo lịch hẹn; 08:30–11:30 hoặc 13:30–16:30'),
-- (7, 12, 'Hằng ngày', '08:30:00', '11:00:00', 'Hằng ngày; 08:30–11:00 hoặc 14:00–16:30'),
-- (8, 12, 'Hằng ngày', '14:00:00', '16:30:00', 'Hằng ngày; 08:30–11:00 hoặc 14:00–16:30'),
-- (9, 13, 'Hằng ngày', '08:00:00', '12:30:00', 'Hằng ngày: Ca sáng 08:00 - 12:30 hoặc Ca chiều 13:00 - 17:30'),
-- (10, 13, 'Hằng ngày', '13:00:00', '17:30:00', 'Hằng ngày: Ca sáng 08:00 - 12:30 hoặc Ca chiều 13:00 - 17:30'),
-- (11, 14, 'Hằng ngày', '07:30:00', '12:30:00', 'Hằng ngày: Ca sáng 07:30 - 12:30 hoặc Ca chiều 12:30 - 17:30'),
-- (12, 14, 'Hằng ngày', '12:30:00', '17:30:00', 'Hằng ngày: Ca sáng 07:30 - 12:30 hoặc Ca chiều 12:30 - 17:30'),
-- (13, 15, 'Hằng ngày', '08:00:00', '15:30:00', '08:00 - 15:30 hằng ngày'),
-- (14, 16, 'Hằng ngày', '13:00:00', '17:00:00', 'Hằng ngày: Ca chiều 13:00 - 17:00 hoặc Ca tối 17:30 - 21:30'),
-- (15, 16, 'Hằng ngày', '17:30:00', '21:30:00', 'Hằng ngày: Ca chiều 13:00 - 17:00 hoặc Ca tối 17:30 - 21:30'),
-- (16, 17, NULL, '09:00:00', '20:00:00', '09:00–20:00'),
-- (17, 18, NULL, '09:00:00', '20:00:00', '09:00–20:00'),
-- (18, 19, NULL, '09:00:00', '20:00:00', '09:00–20:00'),
-- (19, 20, NULL, '07:00:00', '18:00:00', '07:00–18:00'),
-- (20, 21, 'Hằng ngày', '17:30:00', '21:00:00', 'Hằng ngày: 17:30 - 21:00'),
-- (21, 22, 'Hằng ngày', '17:00:00', '20:30:00', 'Hằng ngày: 17:00 - 20:30'),
-- (22, 23, 'Hằng ngày', '19:45:00', '21:15:00', 'Hằng ngày: Đón khách từ 18:30, tàu chạy 19:45 - 21:15'),
-- (23, 24, 'Hằng ngày', '05:30:00', '10:00:00', 'Hằng ngày: 05:30 - 10:00 sáng'),
-- (24, 25, 'Hằng ngày', '07:00:00', '18:00:00', 'Thứ Hai – Chủ nhật, 07:00–18:00'),
-- (25, 26, 'Hằng ngày', '08:00:00', '16:00:00', 'Thứ Hai – Chủ nhật, 08:00–16:00'),
-- (26, 27, 'Cuối tuần, dịp lễ hoặc theo lịch mở bán', '07:30:00', '11:30:00', 'Sáng 07:30–11:30; chiều 13:30–17:00 (hoặc 16:30 tùy ngày); mở cửa tất cả các ngày kể cả cuối tuần và lễ'),
-- (27, 27, 'Cuối tuần, dịp lễ hoặc theo lịch mở bán', '13:30:00', '17:00:00', 'Sáng 07:30–11:30; chiều 13:30–17:00 (hoặc 16:30 tùy ngày); mở cửa tất cả các ngày kể cả cuối tuần và lễ'),
-- (28, 28, 'Hằng ngày', '07:00:00', '17:00:00', '07:00–17:00, hằng ngày'),
-- (29, 29, 'Thứ Tư, Thứ Bảy, Chủ Nhật', '19:30:00', '20:45:00', 'Thứ Tư, Thứ Bảy và Chủ Nhật hằng tuần; đón khách trải nghiệm chợ quê từ 17:30, thời gian biểu diễn chính từ 19:30 - 20:45'),
-- (30, 30, 'Hằng ngày', '08:00:00', '17:00:00', 'Tổ chức hằng ngày trong khung giờ 08:00 - 17:00'),
-- (31, 31, 'Cuối tuần, dịp lễ hoặc theo lịch mở bán', '18:30:00', '21:00:00', '18:30 - 21:00 vào các tối cuối tuần, dịp lễ/Festival Huế hoặc theo lịch mở bán định kỳ'),
-- (32, 32, 'Hằng ngày trừ Thứ Ba', '20:00:00', '21:00:00', 'Tất cả các ngày trong tuần trừ Thứ Ba; Công viên mở cửa từ 17:00, show thực cảnh diễn ra từ 20:00 - 21:00'),
-- (33, 33, 'Hằng ngày', '08:00:00', '11:00:00', '08:00–11:00, hằng ngày'),
-- (34, 34, 'Hằng ngày', '08:00:00', '10:00:00', '08:00–10:00 hoặc 14:00–16:00, hằng ngày'),
-- (35, 34, 'Hằng ngày', '14:00:00', '16:00:00', '08:00–10:00 hoặc 14:00–16:00, hằng ngày'),
-- (36, 35, 'Hằng ngày', '07:30:00', '17:00:00', '07:30–17:00, hằng ngày'),
-- (37, 36, NULL, '07:30:00', '12:00:00', '07:30–12:00 hoặc 13:30–18:00, tùy chuyến'),
-- (38, 36, NULL, '13:30:00', '18:00:00', '07:30–12:00 hoặc 13:30–18:00, tùy chuyến'),
-- (39, 37, 'Hằng ngày', '13:30:00', NULL, 'Khởi hành hằng ngày lúc 13:30'),
-- (40, 38, NULL, '08:00:00', '11:00:00', 'Khởi hành trong khoảng 08:00-11:00; cần đặt trước ít nhất 2 giờ'),
-- (41, 39, NULL, '08:00:00', '12:00:00', '08:00-12:00; 13:00-17:00'),
-- (42, 39, NULL, '13:00:00', '17:00:00', '08:00-12:00; 13:00-17:00'),
-- (43, 40, NULL, '08:00:00', '17:30:00', '8:00-17:30');
USE cultural_tourism;
SET NAMES utf8mb4;
-- Chạy sau 01 và 02. Có DROP để chạy lại được nếu trước đó đã tạo bảng bản cũ.
DROP TABLE IF EXISTS experience_images;
CREATE TABLE experience_images (
    image_id INT AUTO_INCREMENT PRIMARY KEY,
    experience_id INT NOT NULL,
    image_url VARCHAR(500) NOT NULL,
    is_main BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (experience_id)
        REFERENCES experiences(experience_id)
        ON DELETE CASCADE
);

-- Đường dẫn lấy từ js/products.js của repo net-viet-cultural-experiences (main = ảnh chính)
INSERT INTO experience_images (experience_id, image_url, is_main) VALUES
(1, 'images/tranhdongho-1.jpg', 1),
(1, 'images/tranhdongho-2.jpg', 0),
(1, 'images/tranhdongho-3.jpg', 0),
(1, 'images/tranhdongho-4.jpg', 0),
(2, 'images/pottery-main.jpg', 1),
(2, 'images/pottery-thumb-1.jpg', 0),
(2, 'images/pottery-thumb-2.jpg', 0),
(2, 'images/pottery-thumb-3.jpg', 0),
(2, 'images/pottery-thumb-4.jpg', 0),
(3, 'images/thuyxuanhue-1.jpg', 1),
(3, 'images/thuyxuanhue-2.jpg', 0),
(3, 'images/thuyxuanhue-3.jpg', 0),
(4, 'images/lanha-1.jpg', 1),
(4, 'images/lanha-2.jpg', 0),
(4, 'images/lanha-3.jpg', 0),
(4, 'images/lanha-4.jpg', 0),
(5, 'images/nauanhue-4.jpg', 1),
(5, 'images/nauanhue-1.jpg', 0),
(5, 'images/nauanhue-2.jpg', 0),
(5, 'images/nauanhue-3.jpg', 0),
(6, 'images/chonoi-3.jpg', 1),
(6, 'images/chonoi-1.jpg', 0),
(6, 'images/chonoi-2.jpg', 0),
(6, 'images/chonoi-4.jpg', 0),
(6, 'images/chonoi-5.jpg', 0),
(7, 'images/amthuchoian-1.png', 1),
(7, 'images/amthuchoian-2.jpg', 0),
(7, 'images/amthuchoian-3.jpg', 0),
(7, 'images/amthuchoian-4.jpg', 0),
(7, 'images/amthuchoian-5.jpg', 0),
(8, 'images/hobabe-1.jpg', 1),
(8, 'images/hobabe-2.jpg', 0),
(8, 'images/hobabe-3.jpg', 0),
(9, 'images/thanhhahoian-1.jpg', 1),
(9, 'images/thanhhahoian-2.jpg', 0),
(9, 'images/thanhhahoian-3.jpg', 0),
(9, 'images/thanhhahoian-4.jpg', 0),
(10, 'images/thuyxuanhue-1.jpg', 1),
(10, 'images/thuyxuanhue-2.jpg', 0),
(10, 'images/thuyxuanhue-3.jpg', 0),
(11, 'images/tanchauag-2.jpg', 1),
(11, 'images/tanchauag-1.jpg', 0),
(11, 'images/tanchauag-3.jpg', 0),
(12, 'images/dinhyendt-3.jpg', 1),
(12, 'images/dinhyendt-1.jpg', 0),
(12, 'images/dinhyendt-2.jpg', 0),
(12, 'images/dinhyendt-4.jpg', 0),
(13, 'images/gombattrang-1.jpg', 1),
(13, 'images/gombattrang-2.jpg', 0),
(13, 'images/gombattrang-3.png', 0),
(14, 'images/langhuong-2.jpg', 1),
(14, 'images/langhuong-1.jpg', 0),
(14, 'images/langhuong-3.jpg', 0),
(15, 'images/duonglam-1.jpg', 1),
(15, 'images/duonglam-2.jpg', 0),
(15, 'images/duonglam-3.jpg', 0),
(16, 'images/amthuchcm-1.jpg', 1),
(16, 'images/amthuchcm-2.jpg', 0),
(16, 'images/amthuchcm-3.jpg', 0),
(17, 'images/amthucdn-4.jpg', 1),
(17, 'images/amthucdn-1.jpg', 0),
(17, 'images/amthucdn-2.jpg', 0),
(17, 'images/amthucdn-3.jpg', 0),
(17, 'images/amthucdn-5.jpg', 0),
(18, 'images/rosekitchen-2.jpg', 1),
(18, 'images/rosekitchen-1.jpg', 0),
(18, 'images/rosekitchen-3.jpg', 0),
(18, 'images/rosekitchen-4.jpg', 0),
(19, 'images/hoangkitchen-1.jpg', 1),
(19, 'images/hoangkitchen-2.jpg', 0),
(19, 'images/hoangkitchen-3.jpg', 0),
(19, 'images/hoangkitchen-4.jpg', 0),
(20, 'images/amthucsapa-5.jpg', 1),
(20, 'images/amthucsapa-1.jpg', 0),
(20, 'images/amthucsapa-2.jpg', 0),
(20, 'images/amthucsapa-3.jpg', 0),
(20, 'images/amthucsapa-4.jpg', 0),
(21, 'images/nauanhue-4.jpg', 1),
(21, 'images/nauanhue-1.jpg', 0),
(21, 'images/nauanhue-2.jpg', 0),
(21, 'images/nauanhue-3.jpg', 0),
(22, 'images/amthuchoian-4.jpg', 1),
(22, 'images/amthuchoian-1.png', 0),
(22, 'images/amthuchoian-2.jpg', 0),
(22, 'images/amthuchoian-3.jpg', 0),
(22, 'images/amthuchoian-5.jpg', 0),
(23, 'images/duthuyen-2.jpg', 1),
(23, 'images/duthuyen-1.jpg', 0),
(23, 'images/duthuyen-3.jpg', 0),
(23, 'images/duthuyen-4.jpg', 0),
(23, 'images/duthuyen-5.jpg', 0),
(24, 'images/chonoi-3.jpg', 1),
(24, 'images/chonoi-1.jpg', 0),
(24, 'images/chonoi-2.jpg', 0),
(24, 'images/chonoi-4.jpg', 0),
(24, 'images/chonoi-5.jpg', 0),
(25, 'images/dinhdoclap-2.jpg', 1),
(25, 'images/dinhdoclap-1.jpg', 0),
(25, 'images/dinhdoclap-3.jpg', 0),
(25, 'images/dinhdoclap-4.jpg', 0),
(26, 'images/nhacobinhthuy-2.jpg', 1),
(26, 'images/nhacobinhthuy-1.jpg', 0),
(26, 'images/nhacobinhthuy-3.jpg', 0),
(26, 'images/nhacobinhthuy-4.jpg', 0),
(27, 'images/nhatuphuquoc-1.jpg', 1),
(27, 'images/nhatuphuquoc-2.jpg', 0),
(27, 'images/nhatuphuquoc-3.jpg', 0),
(27, 'images/nhatuphuquoc-4.jpg', 0),
(27, 'images/nhatuphuquoc-5.jpg', 0),
(28, 'images/diadaocuchi-1.jpg', 1),
(28, 'images/diadaocuchi-2.jpg', 0),
(28, 'images/diadaocuchi-3.jpg', 0),
(28, 'images/diadaocuchi-4.jpg', 0),
(28, 'images/diadaocuchi-5.jpg', 0),
(29, 'images/tinhhoabb-1.jpg', 1),
(29, 'images/tinhhoabb-2.jpg', 0),
(29, 'images/tinhhoabb-3.jpg', 0),
(29, 'images/tinhhoabb-4.jpg', 0),
(30, 'images/tranhdongho-1.jpg', 1),
(30, 'images/tranhdongho-2.jpg', 0),
(30, 'images/tranhdongho-3.jpg', 0),
(30, 'images/tranhdongho-4.jpg', 0),
(31, 'images/dayen-1.jpg', 1),
(31, 'images/dayen-2.jpg', 0),
(31, 'images/dayen-3.jpg', 0),
(31, 'images/dayen-4.jpg', 0),
(32, 'images/kyuchoian-1.jpg', 1),
(32, 'images/kyuchoian-2.jpg', 0),
(32, 'images/kyuchoian-3.jpg', 0),
(32, 'images/kyuchoian-4.jpg', 0),
(33, 'images/cucphuong-1.jpg', 1),
(33, 'images/cucphuong-2.jpg', 0),
(33, 'images/cucphuong-3.jpg', 0),
(34, 'images/hobabe-1.jpg', 1),
(34, 'images/hobabe-2.jpg', 0),
(34, 'images/hobabe-3.jpg', 0),
(35, 'images/bachma-1.jpg', 1),
(35, 'images/bachma-2.jpg', 0),
(35, 'images/bachma-3.jpg', 0),
(36, 'images/culaochao-1.jpg', 1),
(36, 'images/culaochao-2.jpg', 0),
(36, 'images/culaochao-3.jpg', 0),
(37, 'images/cheosup-1.jpg', 1),
(37, 'images/cheosup-2.jpg', 0),
(37, 'images/cheosup-3.jpg', 0),
(37, 'images/cheosup-4.jpg', 0),
(38, 'images/duday-1.jpg', 1),
(38, 'images/duday-2.jpg', 0),
(38, 'images/duday-3.jpg', 0),
(38, 'images/duday-4.jpg', 0),
(39, 'images/lanha-1.jpg', 1),
(39, 'images/lanha-2.jpg', 0),
(39, 'images/lanha-3.jpg', 0),
(39, 'images/lanha-4.jpg', 0),
(40, 'images/hange-1.jpg', 1),
(40, 'images/hange-2.jpg', 0),
(40, 'images/hange-3.jpg', 0),
(40, 'images/hange-4.jpg', 0);

-- 1. Đủ 158 ảnh
SELECT COUNT(*) FROM experience_images;

-- 2. Mỗi trải nghiệm có đúng 1 ảnh chính (không ra dòng nào là đúng)
SELECT experience_id, SUM(is_main) AS so_anh_chinh
FROM experience_images GROUP BY experience_id HAVING so_anh_chinh <> 1;

-- 3. Xem ảnh chính của 10 trải nghiệm đầu
SELECT e.experience_code, e.experience_name, i.image_url
FROM experiences e
JOIN experience_images i ON i.experience_id = e.experience_id AND i.is_main = 1
ORDER BY e.experience_id LIMIT 10;