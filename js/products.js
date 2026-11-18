/**
 * DỰ ÁN: NÉT VIỆT - TRẢI NGHIỆM VĂN HÓA BẢN ĐỊA VIỆT NAM
 * File: js/products.js
 * Mục đích: Lưu trữ dữ liệu 8 trải nghiệm dùng chung
 * và cung cấp các hàm tiện ích cho website.
 */
// ======================================================
// 1. DỮ LIỆU 8 TRẢI NGHIỆM
// ======================================================

const products = [
  {
    id: 1,
    name: "Làm tranh dân gian Đông Hồ",
    price: 350000,
    category: "craft",
    categoryName: "Làng nghề",
    region: "north",
    location: "Bắc Ninh",
    duration: "2 giờ",
    rating: 4.9,
    image: "images/related-3.jpg",
    description: "Tìm hiểu nghệ thuật tranh dân gian Đông Hồ, khám phá kỹ thuật in tranh bằng bản khắc gỗ và tự tay tạo nên một tác phẩm mang đậm bản sắc văn hóa Việt Nam."
  },
  {
    id: 2,
    name: "Tự tay làm gốm ở Bát Tràng",
    price: 250000,
    category: "craft",
    categoryName: "Làng nghề",
    region: "north",
    location: "Gia Lâm, Hà Nội",
    duration: "2,5 giờ",
    rating: 4.8,
    image: "images/pottery-main.jpg",
    description: "Trải nghiệm làm gốm tại làng nghề Bát Tràng, tự tay nhào nặn đất sét, tạo hình trên bàn xoay và trang trí sản phẩm dưới sự hướng dẫn của nghệ nhân."
  },
  {
    id: 3,
    name: "Ghé thăm làng hương Thủy Xuân",
    price: 180000,
    category: "craft",
    categoryName: "Làng nghề",
    region: "central",
    location: "Huế",
    duration: "1,5 giờ",
    rating: 4.9,
    image: "images/related-3.jpg",
    description: "Ghé thăm làng hương Thủy Xuân, tìm hiểu quy trình làm hương truyền thống và khám phá những bó hương rực rỡ sắc màu gắn liền với đời sống văn hóa xứ Huế."
  },
  {
    id: 4,
    name: "Ngắm bình minh trên vịnh Hạ Long",
    price: 650000,
    category: "nature",
    categoryName: "Thiên nhiên",
    region: "north",
    location: "Vịnh Hạ Long, Quảng Ninh",
    duration: "4 giờ",
    rating: 5.0,
    image: "images/about-landscape.jpg",
    description: "Khám phá cảnh quan thiên nhiên vịnh Hạ Long, chiêm ngưỡng ánh bình minh trên mặt biển và những dãy núi đá vôi hùng vĩ của vùng di sản."
  },
  {
    id: 5,
    name: "Vào bếp cùng người Huế",
    price: 420000,
    category: "food",
    categoryName: "Ẩm thực",
    region: "central",
    location: "Huế",
    duration: "3 giờ",
    rating: 4.9,
    image: "images/about-festival.jpg",
    description: "Khám phá nét đặc trưng của ẩm thực Huế thông qua hoạt động chuẩn bị nguyên liệu, chế biến món ăn truyền thống và thưởng thức thành quả cùng người địa phương."
  },
  {
    id: 6,
    name: "Bình minh trên chợ nổi Cái Răng",
    price: 390000,
    category: "culture",
    categoryName: "Văn hóa",
    region: "south",
    location: "Cần Thơ",
    duration: "3 giờ",
    rating: 4.8,
    image: "images/related-4.jpg",
    description: "Trải nghiệm không khí mua bán nhộn nhịp vào buổi sáng tại chợ nổi Cái Răng, tìm hiểu đời sống thương hồ và nét văn hóa sông nước đặc trưng của miền Tây Nam Bộ."
  },
  {
    id: 7,
    name: "Đêm phố cổ Hội An và đèn hoa đăng",
    price: 320000,
    category: "culture",
    categoryName: "Văn hóa",
    region: "central",
    location: "Hội An, Quảng Nam",
    duration: "2 giờ",
    rating: 4.9,
    image: "images/related-1.jpg",
    description: "Dạo bước qua những con phố cổ Hội An lung linh ánh đèn lồng, khám phá kiến trúc và đời sống văn hóa địa phương, đồng thời tham gia hoạt động thả đèn hoa đăng."
  },
  {
    id: 8,
    name: "Len lỏi rừng tràm Trà Sư xanh mát",
    price: 480000,
    category: "nature",
    categoryName: "Thiên nhiên",
    region: "south",
    location: "An Giang",
    duration: "3 giờ",
    rating: 4.8,
    image: "images/about-heritage.jpg",
    description: "Khám phá hệ sinh thái rừng tràm Trà Sư bằng thuyền, len lỏi qua những dòng nước phủ bèo xanh và tìm hiểu cảnh quan thiên nhiên đặc trưng của vùng đất An Giang."
  },
  {
    id: 9,
    name: "Tự tay làm gốm tại làng Thanh Hà",
    price: 290000,
    category: "craft",
    categoryName: "Làng nghề",
    region: "central",
    location: "Làng gốm Thanh Hà – Hội An, Đà Nẵng",
    duration: "2–3 giờ",
    rating: 4.9,
      image: "images/thanhhahoian-1.jpg",
    description: "Tự tay nhào nặn đất sét, khám phá nghề gốm truyền thống và sáng tạo sản phẩm thủ công mang dấu ấn riêng."
  },
  {
    id: 10,
    name: "Khám phá nghề làm hương truyền thống xứ Huế",
    price: 190000,
    category: "craft",
    categoryName: "Làng nghề",
    region: "central",
    location: "Làng hương Thủy Xuân – TP. Huế",
    duration: "1,5–2 giờ",
    rating: 4.8,
      image: "images/thuyxuanhue-1.jpg",
    description: "Khám phá sắc màu rực rỡ của làng hương xứ Huế, tìm hiểu nghề se hương và trải nghiệm nét văn hóa truyền thống cố đô."
  },
  {
    id: 11,
    name: "Khám phá sắc đen huyền thoại của lụa Tân Châu",
    price: 310000,
    category: "craft",
    categoryName: "Làng nghề",
    region: "south",
    location: "Làng lụa Tân Châu – An Giang",
    duration: "2–3 giờ",
    rating: 4.9,
      image: "images/tanchauag-2.jpg",
    description: "Khám phá nghệ thuật dệt lụa Lãnh Mỹ A, tìm hiểu kỹ thuật nhuộm vải từ trái mặc nưa và vẻ đẹp của nghề lụa truyền thống."
  },
  {
    id: 12,
    name: "Theo nhịp khung dệt chiếu Định Yên",
    price: 230000,
    category: "craft",
    categoryName: "Làng nghề",
    region: "south",
    location: "Làng chiếu Định Yên – Lai Vung, Đồng Tháp",
    duration: "2–2,5 giờ",
    rating: 4.7,
      image: "images/dinhyendt-3.jpg",
    description: "Trải nghiệm nghề dệt chiếu lác truyền thống, khám phá cách phối màu thủ công và tìm hiểu câu chuyện chợ chiếu đêm miền Tây."
  },
  {
    id: 13,
    name: "Tour nửa ngày khám phá Làng gốm Bát Tràng và tự tay làm gốm truyền thống (Bat Trang Pottery Village Half-Day Tour & Workshop)",
    price: 580000,
    category: "craft",
    categoryName: "Làng nghề",
    region: "north",
    location: "Làng gốm Bát Tràng, huyện Gia Lâm, Hà Nội",
    duration: "Khoảng 4 - 5 giờ",
    rating: 4.9,
      image: "images/gombattrang-1.jpg",
    description: "Hành trình khám phá làng gốm cổ truyền hơn 700 năm tuổi ven sông Hồng. Du khách dạo quanh ngõ xóm rêu phong, tìm hiểu quy trình chế tác gốm thủ công của nghệ nhân bản địa và tự tay vuốt nặn, tạo hình sản phẩm trên bàn xoay điện mang về làm kỷ niệm."
  },
  {
    id: 14,
    name: "Tour nửa ngày tham quan Làng hương đỏ Quảng Phú Cầu kết hợp Phố đường tàu (Quang Phu Cau Incense Village & Train Street Tour)",
    price: 630000,
    category: "craft",
    categoryName: "Làng nghề",
    region: "north",
    location: "Thôn Cầu Bầu, xã Quảng Phú Cầu, huyện Ứng Hòa, Hà Nội",
    duration: "Khoảng 5 giờ",
    rating: 4.9,
      image: "images/langhuong-2.jpg",
    description: "Khám phá làng nghề làm tăm hương truyền thống hơn 100 năm tuổi với những sân phơi xòe rộng như cánh hoa rực rỡ sắc đỏ và vàng. Du khách tìm hiểu từng công đoạn chẻ vầu, nhuộm màu, se hương thảo mộc và lưu lại những khung hình văn hóa độc đáo."
  },
  {
    id: 15,
    name: "Tour khám phá Làng cổ Đường Lâm & Trải nghiệm làm tương nếp truyền thống (Duong Lam Ancient Village & Traditional Craft Tour)",
    price: 890000,
    category: "craft",
    categoryName: "Làng nghề",
    region: "north",
    location: "Làng cổ Đường Lâm, thị xã Sơn Tây, Hà Nội",
    duration: "Khoảng 6 - 7 giờ",
    rating: 4.9,
      image: "images/duonglam-1.jpg",
    description: "Hành trình về thăm ngôi làng cổ đá ong độc nhất vô nhị của vùng đồng bằng Bắc Bộ. Du khách đạp xe qua những cổng làng rêu phong, thăm nhà cổ 300 năm, thưởng thức bữa trưa cơm quê và học bí quyết ủ tương nếp gia truyền cùng nghệ nhân."
  },
  {
    id: 16,
    name: "Tour ẩm thực đường phố Sài Gòn bằng xe máy cùng Saigon Adventure (Premium Street Food Tour & Sightseeing on Scooter Ho Chi Minh City)",
    price: 790000,
    category: "food",
    categoryName: "Ẩm thực",
    region: "south",
    location: "Quận 1, Quận 3, Quận 4, Quận 10, TP. Hồ Chí Minh",
    duration: "Khoảng 3,5 - 4 giờ",
    rating: 5.0,
      image: "images/amthuchcm-1.jpg",
    description: "Trải nghiệm ngồi sau tay lái xe máy lướt qua những con ngõ hẻm sôi động của Sài Gòn về đêm. Du khách thưởng thức trọn vẹn hơn 10 món ăn đặc sản đường phố và lắng nghe những câu chuyện văn hóa đời sống thú vị từ các bạn trẻ bản địa."
  },
  {
    id: 17,
    name: "Lớp học nấu 5 món truyền thống Đà Nẵng kết hợp đi chợ địa phương",
    price: 1009710,
    category: "food",
    categoryName: "Ẩm thực",
    region: "central",
    location: "Chợ Bắc Mỹ An, Đà Nẵng",
    duration: "4 giờ",
    rating: 5.0,
      image: "images/amthucdn-4.jpg",
    description: "Đây không chỉ là một buổi học nấu ăn mà còn là hành trình khám phá văn hóa ẩm thực miền Trung. Bạn sẽ được tự tay chọn nguyên liệu tươi sống tại chợ địa phương và chế biến trọn vẹn một bữa ăn 5 món từ khâu sơ chế đến trang trí."
  },
  {
    id: 18,
    name: "Lớp học nấu ăn tại Rose Kitchen Hanoi",
    price: 1150000,
    category: "food",
    categoryName: "Ẩm thực",
    region: "north",
    location: "Ba Đình, Hà Nội",
    duration: "4-5 giờ",
    rating: 4.9,
      image: "images/rosekitchen-2.jpg",
    description: "Hành trình khám phá ẩm thực và văn hóa Hà Nội trong không gian biệt thự cổ kính yên tĩnh tách biệt khỏi sự ồn ào của phố thị, kết hợp giữa việc dạo chợ dân sinh, nấu các món truyền thống và thưởng thức rượu quê theo mùa."
  },
  {
    id: 19,
    name: "Lớp học nấu ăn tại Hoang’s Cooking Class",
    price: 1200000,
    category: "food",
    categoryName: "Ẩm thực",
    region: "north",
    location: "Hoàn Kiếm, Hà Nội",
    duration: "3-4 giờ",
    rating: 4.9,
      image: "images/hoangkitchen-1.jpg",
    description: "Lớp học mang đến trải nghiệm ẩm thực đậm chất phố cổ Hà Nội, cho phép học viên tự chọn món muốn nấu từ danh sách gợi ý của đầu bếp và học cách tái hiện hương vị Việt ngay tại gian bếp gia đình."
  },
  {
    id: 20,
    name: "Khám phá ẩm thực vùng cao tại Sapa",
    price: 500000,
    category: "food",
    categoryName: "Ẩm thực",
    region: "north",
    location: "Thị trấn Sa Pa",
    duration: "3 giờ",
    rating: 4.9,
      image: "images/amthucsapa-5.jpg",
    description: "Trải nghiệm đưa bạn khám phá nền ẩm thực gắn liền với núi rừng Tây Bắc, tập trung vào cách người dân bản địa bảo quản thực phẩm, ủ men rượu và thưởng thức đặc sản trong không gian nhà sàn ấm cúng."
  },
  {
    id: 21,
    name: "Lớp học nấu ăn Huế và tham quan chợ Đông Ba cùng Madam Thu (Madam Thu Cooking Class and Market Visits in Hue)",
    price: 650000,
    category: "food",
    categoryName: "Ẩm thực",
    region: "central",
    location: "Bờ Nam và Bờ Bắc sông Hương, TP. Huế (đón khách tại khách sạn trung tâm)",
    duration: "Khoảng 3,5 - 4 giờ",
    rating: 4.8,
      image: "images/nauanhue-4.jpg",
    description: "Ngồi trên chiếc xích lô thong dong qua cầu Tràng Tiền ngắm sông Hương êm đềm và khám phá thiên đường ẩm thực Cố đô. Du khách thưởng thức các món bánh cung đình mộc mạc, bún bò trứ danh và kết thúc bằng ly chè hẻm thanh ngọt đậm nét văn hóa Huế."
  },
  {
    id: 22,
    name: "Tour ẩm thực đêm Phố cổ Hội An & Thả đèn hoa đăng trên sông Hoài (Hoi An Evening Street Food Tour & Lantern Boat)",
    price: 690000,
    category: "food",
    categoryName: "Ẩm thực",
    region: "central",
    location: "Khu phố cổ Hội An và bến thuyền sông Hoài, TP. Hội An, Quảng Nam",
    duration: "Khoảng 3,5 - 4 giờ",
    rating: 4.8,
      image: "images/amthuchoian-4.jpg",
    description: "Khám phá nét đẹp lung linh huyền ảo của phố Hội khi lên đèn. Du khách đi bộ qua những con hẻm cổ kính thưởng thức đặc sản xứ Quảng, nhâm nhi tách nước Mót thảo mộc và bước lên thuyền gỗ thả ngọn đèn hoa đăng cầu an trên dòng sông Hoài thơ mộng."
  },
  {
    id: 23,
    name: "Thưởng thức buffet ẩm thực Nam Bộ & Du ngoạn cảnh đêm sông Sài Gòn trên du thuyền (Saigon River Dinner Cruise & Night Sightseeing)",
    price: 620000,
    category: "food",
    categoryName: "Ẩm thực",
    region: "south",
    location: "Bến Bạch Đằng hoặc Cảng Sài Gòn (Số 5 Nguyễn Tất Thành), Quận 4, TP. Hồ Chí Minh",
    duration: "Khoảng 2,5 - 3 giờ",
    rating: 4.7,
      image: "images/duthuyen-2.jpg",
    description: "Trải nghiệm ẩm thực tiệc tối sang trọng lộng gió trên du thuyền Indochina Queen trôi chầm chậm dọc sông Sài Gòn. Du khách thưởng thức đại tiệc buffet hơn 30 món ăn Nam Bộ đặc sắc, ngắm Landmark 81 rực rỡ và lắng nghe ban nhạc biểu diễn trực tiếp."
  },
  {
    id: 24,
    name: "Tour Chợ nổi Cái Răng - Khám phá ẩm thực sông nước & Trải nghiệm lò hủ tiếu truyền thống (Can Tho Floating Market & Local Food Tour)",
    price: 550000,
    category: "food",
    categoryName: "Ẩm thực",
    region: "south",
    location: "Bến Ninh Kiều & Chợ nổi Cái Răng, TP. Cần Thơ",
    duration: "Khoảng 4 - 5 giờ",
    rating: 4.9,
      image: "images/chonoi-3.jpg",
    description: "Đón bình minh sông nước miền Tây trên chiếc ghe gỗ len lỏi giữa hàng trăm ghe thuyền Chợ nổi Cái Răng. Du khách thưởng thức bữa sáng hủ tiếu bồng bềnh sóng nước, nếm trái cây miệt vườn và tự tay tráng bánh, cắt sợi hủ tiếu tại làng nghề truyền thống."
  },
  {
    id: 25,
    name: "Dấu ấn ngày thống nhất – Khám phá Dinh Độc Lập",
    price: 80000,
    category: "culture",
    categoryName: "Văn hóa",
    region: "south",
    location: "Dinh Độc Lập, cổng 135 Nam Kỳ Khởi Nghĩa, TP. Hồ Chí Minh",
    duration: "1,5–2 giờ",
    rating: 4.8,
      image: "images/dinhdoclap-2.jpg",
    description: "Trở về những dấu mốc quan trọng của lịch sử Việt Nam tại Dinh Độc Lập. Khám phá các phòng làm việc, hầm chỉ huy, hiện vật lịch sử và không gian kiến trúc gắn liền với ngày 30/4/1975."
  },
  {
    id: 26,
    name: "Nếp nhà xưa Nam Bộ – Khám phá Nhà cổ Bình Thủy",
    price: 50000,
    category: "culture",
    categoryName: "Văn hóa",
    region: "south",
    location: "Nhà cổ Bình Thủy, 144 Bùi Hữu Nghĩa, phường Bình Thủy, Cần Thơ",
    duration: "45–60 phút",
    rating: 3.9,
      image: "images/nhacobinhthuy-2.jpg",
    description: "Bước vào ngôi nhà cổ hơn 150 năm tuổi để cảm nhận nếp sống của một gia đình Nam Bộ xưa. Chiêm ngưỡng kiến trúc Đông – Tây giao thoa, những bộ bàn ghế cổ, gian thờ gia tiên và các câu chuyện được lưu giữ qua nhiều thế hệ."
  },
  {
    id: 27,
    name: "Ký ức đảo Ngọc – Khám phá di tích Nhà tù Phú Quốc",
    price: 100000,
    category: "culture",
    categoryName: "Văn hóa",
    region: "south",
    location: "Di tích Nhà tù Phú Quốc, Số 350 đường Nguyễn Văn Cừ, An Thới, Phú Quốc, tỉnh Kiên Giang",
    duration: "1–2 giờ",
    rating: 4.3,
      image: "images/nhatuphuquoc-1.jpg",
    description: "Khám phá di tích Nhà tù Phú Quốc, nơi lưu giữ những dấu ấn lịch sử trong thời kỳ chiến tranh Việt Nam. Tham quan các khu giam giữ, tìm hiểu hiện vật và những câu chuyện về ý chí kiên cường của các chiến sĩ cách mạng qua từng giai đoạn lịch sử."
  },
  {
    id: 28,
    name: "Địa đạo Củ Chi – Theo dấu lịch sử dưới lòng đất",
    price: 100000,
    category: "culture",
    categoryName: "Văn hóa",
    region: "south",
    location: "Khu di tích Địa đạo Củ Chi, khu vực Bến Đình, TP.HCM",
    duration: "2-3 giờ",
    rating: 4.7,
      image: "images/diadaocuchi-1.jpg",
    description: "Trở về vùng đất thép Củ Chi để khám phá hệ thống địa đạo lịch sử từng là nơi sinh sống và chiến đấu trong thời chiến. Khám phá những đường hầm bí mật, công trình phòng thủ và câu chuyện về sức bền bỉ của con người Việt Nam."
  },
  {
    id: 29,
    name: "Show thực cảnh “Tinh hoa Bắc Bộ” trên sân khấu mặt nước giữa làng quê Sài Sơn",
    price: 450000,
    category: "culture",
    categoryName: "Văn hóa",
    region: "north",
    location: "Thôn Đa Phúc, xã Sài Sơn, huyện Quốc Oai, Hà Nội (chân núi Thầy)",
    duration: "Khoảng 2,5-3 giờ",
    rating: 4.8,
      image: "images/tinhhoabb-1.jpg",
    description: "Vở diễn thực cảnh trên mặt nước quy mô lớn tái hiện đời sống văn hóa, tín ngưỡng và tinh thần hiếu học của vùng châu thổ sông Hồng dưới chân núi Thầy. Hơn 200 diễn viên mà phần lớn là nông dân bản địa Sài Sơn trực tiếp trình diễn cùng hệ thống âm thanh, ánh sáng hiện đại giữa không gian làng quê Bắc Bộ."
  },
  {
    id: 30,
    name: "Workshop in tranh Đông Hồ tại làng tranh (Thuận Thành, Bắc Ninh)",
    price: 100000,
    category: "culture",
    categoryName: "Văn hóa",
    region: "north",
    location: "Làng tranh Đông Hồ, phường Song Hồ, thị xã Thuận Thành, tỉnh Bắc Ninh",
    duration: "Khoảng 2-3 giờ",
    rating: 4.9,
      image: "images/tranhdongho-1.jpg",
    description: "Hành trình về thăm cái nôi của dòng tranh khắc gỗ dân gian Đông Hồ bên bờ sông Đuống, nơi lưu giữ di sản văn hóa phi vật thể quốc gia. Du khách được trò chuyện trực tiếp với nghệ nhân, khám phá bí quyết tạo màu từ nguyên liệu tự nhiên và tự tay in hoàn thiện một bức tranh trên nền giấy điệp óng ánh."
  },
  {
    id: 31,
    name: "Dạ yến Hoàng cung - tiệc cung đình kết hợp Nhã nhạc tại Duyệt Thị Đường",
    price: 1700000,
    category: "culture",
    categoryName: "Văn hóa",
    region: "central",
    location: "Nhà hát Duyệt Thị Đường, khuôn viên Đại Nội Huế, thành phố Huế",
    duration: "Khoảng 2-2,5 giờ",
    rating: 4.9,
      image: "images/dayen-1.jpg",
    description: "Trải nghiệm văn hóa - ẩm thực cung đình cao cấp diễn ra ngay tại Duyệt Thị Đường, là nhà hát cổ nhất Việt Nam nằm trong lòng Tử Cấm Thành Huế. Du khách được thưởng thức các mỹ vị ngự thiện triều Nguyễn và đắm mình trong không gian Nhã nhạc cung đình Huế - Di sản văn hóa phi vật thể đại diện của nhân loại."
  },
  {
    id: 32,
    name: "Show thực cảnh “Ký ức Hội An” trên Đảo Ký Ức",
    price: 600000,
    category: "culture",
    categoryName: "Văn hóa",
    region: "central",
    location: "Công viên Ấn Tượng Hội An - Đảo Ký Ức Hội An (200 Nguyễn Tri Phương rẽ trái), phường Cẩm Nam, thành phố Hội An",
    duration: "Khoảng 3-4 giờ",
    rating: 4.9,
      image: "images/kyuchoian-1.jpg",
    description: "Chương trình biểu diễn nghệ thuật thực cảnh ngoài trời quy mô lớn với sân khấu rộng 25.000 m² và gần 500 diễn viên chuyên nghiệp. Thông qua hình tượng người con gái bên khung cửi dệt vải và con đường ánh sáng, vở diễn đưa khán giả ngược dòng thời gian 400 năm khám phá lịch sử thương cảng Faifo - Hội An sầm uất."
  },
  {
    id: 33,
    name: "Trekking khám phá rừng nguyên sinh và cây chò chỉ ngàn năm tại Cúc Phương",
    price: 700000,
    category: "nature",
    categoryName: "Thiên nhiên",
    region: "north",
    location: "Vườn quốc gia Cúc Phương, tỉnh Ninh Bình",
    duration: "Khoảng 6-7 giờ",
    rating: 4.9,
    image: "images/cucphuong-1.jpg",
    description: "Vườn quốc gia Cúc Phương là khu rừng nguyên sinh lâu đời với hệ sinh thái đa dạng, nhiều cây cổ thụ và các loài động thực vật quý hiếm. Trải nghiệm trekking đưa du khách rời xa không gian đô thị, đi bộ dưới những tán rừng xanh mát và khám phá vẻ đẹp tự nhiên của khu rừng, nổi bật là cây chò chỉ ngàn năm."
  },
  {
    id: 34,
    name: "Chèo kayak khám phá cảnh quan hồ Ba Bể",
    price: 50000,
    category: "nature",
    categoryName: "Thiên nhiên",
    region: "north",
    location: "Hồ Ba Bể, xã Ba Bể, tỉnh Thái Nguyên",
    duration: "Khoảng 2-3 giờ",
    rating: 4.7,
      image: "images/hobabe-1.jpg",
    description: "Hồ Ba Bể nổi bật với mặt nước xanh trong, những dãy núi đá vôi và cảnh quan rừng tự nhiên bao quanh. Trải nghiệm chèo kayak mang đến cơ hội khám phá hồ nước theo cách chủ động, giúp du khách tiếp cận gần hơn với cảnh quan thiên nhiên và tận hưởng không gian yên bình giữa núi rừng."
  },
  {
    id: 35,
    name: "Trekking khám phá Ngũ Hồ và thác Đỗ Quyên tại Vườn quốc gia Bạch Mã",
    price: 600000,
    category: "nature",
    categoryName: "Thiên nhiên",
    region: "central",
    location: "Vườn quốc gia Bạch Mã, thành phố Huế",
    duration: "Khoảng 1 ngày",
    rating: 4.8,
      image: "images/bachma-1.jpg",
    description: "Vườn quốc gia Bạch Mã sở hữu hệ sinh thái rừng núi phong phú, khí hậu mát mẻ và nhiều cảnh quan tự nhiên đặc sắc. Hành trình trekking đưa du khách khám phá những hồ nước tự nhiên giữa rừng, các con đường mòn dưới tán cây cổ thụ và thác Đỗ Quyên hùng vĩ, mang đến trải nghiệm hòa mình vào thiên nhiên miền Trung."
  },
  {
    id: 36,
    name: "Lặn ngắm san hô và khám phá hệ sinh thái biển Cù Lao Chàm",
    price: 550000,
    category: "nature",
    categoryName: "Thiên nhiên",
    region: "central",
    location: "Cù Lao Chàm, thành phố Đà Nẵng",
    duration: "Khoảng 6-6,5 giờ",
    rating: 4.8,
      image: "images/culaochao-1.jpg",
    description: "Cù Lao Chàm là khu dự trữ sinh quyển thế giới với hệ sinh thái biển đa dạng và những rạn san hô nhiều màu sắc. Trải nghiệm lặn ngắm san hô giúp du khách khám phá thế giới sinh vật dưới nước, quan sát các rạn san hô và tận hưởng vẻ đẹp của vùng biển đảo miền Trung."
  },
  {
    id: 37,
    name: "Chèo SUP khám phá hồ Tuyền Lâm",
    price: 490000,
    category: "nature",
    categoryName: "Thiên nhiên",
    region: "south",
    location: "Hồ Tuyền Lâm, phường Xuân Hương - Đà Lạt, tỉnh Lâm Đồng",
    duration: "1/2 ngày (khoảng 4 giờ)",
    rating: 5.0,
      image: "images/cheosup-1.jpg",
    description: "Hồ Tuyền Lâm nổi bật với mặt nước trong xanh và rừng thông bao quanh. Trải nghiệm chèo SUP giúp du khách khám phá cảnh quan thiên nhiên, thư giãn và tận hưởng không khí trong lành của Đà Lạt."
  },
  {
    id: 38,
    name: "Đu dây vượt thác Datanla",
    price: 1886000,
    category: "nature",
    categoryName: "Thiên nhiên",
    region: "south",
    location: "Khu du lịch thác Datanla, Đà Lạt, tỉnh Lâm Đồng",
    duration: "Khoảng 5-6 giờ",
    rating: 4.6,
      image: "images/duday-1.jpg",
    description: "Thác Datanla mang đến trải nghiệm khám phá thiên nhiên kết hợp thử thách thể lực. Du khách được tham gia các hoạt động đu dây vượt thác, trượt nước, leo vách đá và băng qua những dòng suối giữa rừng."
  },
  {
    id: 39,
    name: "Chèo kayak khám phá vịnh Lan Hạ",
    price: 450000,
    category: "nature",
    categoryName: "Thiên nhiên",
    region: "north",
    location: "Vịnh Lan Hạ, quần đảo Cát Bà, Hải Phòng",
    duration: "Nửa ngày đến 1 ngày",
    rating: 4.7,
    image: "images/lanha-1.jpg",
    description: "Vịnh Lan Hạ gây ấn tượng với làn nước xanh ngọc và những đảo đá vôi kỳ vĩ. Hoạt động chèo kayak giúp du khách len lỏi qua các hang nước, khám phá những bãi biển nhỏ và tận hưởng vẻ đẹp hoang sơ của vùng vịnh."
  },
  {
    id: 40,
    name: "Trekking khám phá thung lũng Sinh Tồn - Hang E",
    price: 1750000,
    category: "nature",
    categoryName: "Thiên nhiên",
    region: "central",
    location: "Thung lũng Sinh Tồn, Vườn quốc gia Phong Nha - Kẻ Bàng, tỉnh Quảng Trị",
    duration: "khoảng 9,5 giờ",
    rating: 5.0,
      image: "images/hange-1.jpg",
    description: "Hành trình đưa du khách băng qua rừng nguyên sinh, khám phá hệ thống hang động và cảnh quan núi đá vôi đặc trưng của Phong Nha. Điểm nhấn là trải nghiệm chèo SUP và khám phá dòng nước xanh ngọc bên trong Hang E."
  }  
];
// ==============================================================
// 2. CÁC HÀM TIỆN ÍCH DÙNG CHUNG CHO TOÀN NHÓM
// ==============================================================
/**
* Hàm định dạng tiền tệ Việt Nam (VNĐ)
* @param {number} amount - Số tiền dạng số (ví dụ: 250000)
* @returns {string} - Chuỗi định dạng (ví dụ: "250.000 đ")
*/
function formatCurrency(amount) {
 if (typeof amount !== 'number' || isNaN(amount)) return '0 đ';
 return amount.toLocaleString('vi-VN') + ' đ';
}
/**
* Hàm tìm kiếm một sản phẩm dựa vào ID
* (Dành cho Khánh An làm trang chi tiết và Phúc Như làm giỏ hàng)
* @param {number|string} id - Mã sản phẩm
* @returns {object|undefined} - Đối tượng sản phẩm hoặc undefined nếu không tìm thấy
*/
function getProductById(id) {
 return products.find(item => item.id === Number(id));
}

// ==============================================================
// 3. HÀM HIỂN THỊ DANH SÁCH SẢN PHẨM (Phụ trách: Ngô Mỹ Châu)
// ==============================================================
/**
 * Hiển thị danh sách sản phẩm động ra giao diện HTML
 * @param {Array} productList - Mảng các sản phẩm cần hiển thị
 */
function renderProducts(productList) {
  const container = document.getElementById('products-grid');
  const emptyMessage = document.getElementById('no-products-message');

  // Nếu trang hiện tại không có container (ví dụ trang about hoặc cart) thì thoát
  if (!container) return;

  // TRƯỜNG HỢP 1: Danh sách không có sản phẩm nào
  if (!productList || productList.length === 0) {
    container.innerHTML = '';
    if (emptyMessage) emptyMessage.style.display = 'block';
    return;
  }

  // TRƯỜNG HỢP 2: Có sản phẩm -> Ẩn thông báo rỗng và vẽ danh sách
  if (emptyMessage) emptyMessage.style.display = 'none';

  // Dùng .map() và cú pháp template string để render từng sản phẩm
  container.innerHTML = productList.map(item => `
    <article class="product-card" data-id="${item.id}" data-category="${item.category}">
<a href="product-detail.html?id=${item.id}" class="product-visual" aria-label="Xem chi tiết ${item.name}" style="position: relative; display: block; overflow: hidden;">
     <img src="${item.image}" alt="${item.name}" loading="lazy" style="width: 100%; height: 220px; object-fit: cover; display: block;">
     <span class="product-badge" style="position: absolute; top: 12px; left: 12px; z-index: 2;">${item.categoryName ? item.categoryName.toUpperCase() : 'TRẢI NGHIỆM'}</span>
   </a>
      <div class="product-info" style="padding: 16px; display: flex; flex-direction: column; flex-grow: 1;">
        <small style="color: #666; font-size: 0.8rem; margin-bottom: 6px;">📍 ${item.location} • ⏱️ ${item.duration}</small>
        <h3 style="margin: 0 0 8px 0; font-size: 1.1rem; line-height: 1.4;">
          <a href="product-detail.html?id=${item.id}" style="color: inherit; text-decoration: none;">
            ${item.name}
          </a>
        </h3>
        <p style="font-size: 0.88rem; color: #555; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; margin-bottom: 14px; line-height: 1.5;">
          ${item.description}
        </p>
        <div class="product-bottom" style="display: flex; justify-content: space-between; align-items: center; margin-top: auto; padding-top: 10px; border-top: 1px solid #eee;">
          <span class="product-price">
            <small style="display: block; font-size: 0.75rem; color: #888;">Giá từ</small>
            <strong style="color: #b35e27; font-size: 1.15rem;">${formatCurrency(item.price)}</strong>
          </span>
          <a href="product-detail.html?id=${item.id}" class="button button-gold" style="padding: 6px 14px; font-size: 0.85rem; text-decoration: none; border-radius: 4px;">
            Xem chi tiết &rarr;
          </a>
        </div>
      </div>
    </article>
  `).join('');
}

// Tự động kích hoạt hiển thị 8 sản phẩm khi trang web tải xong
document.addEventListener('DOMContentLoaded', () => {
  if (typeof products !== 'undefined' && Array.isArray(products)) {
    renderProducts(products);
  }
});
// ==============================================================

// ==============================================================

// ==============================================================
// 4. CHỨC NĂNG TÌM KIẾM, LỌC & SẮP XẾP (Phụ trách: Lê Bảo Ngọc)
// ==============================================================

function applyFilterAndSort() {
  const keywordInput = document.getElementById('keyword');
  const regionSelect = document.getElementById('region');
  const categorySelect = document.getElementById('experience-type');
  const sortPrice = document.getElementById('sort-price');

  const keyword = keywordInput ? keywordInput.value.trim().toLowerCase() : '';
  const selectedRegion = regionSelect ? regionSelect.value : '';
  const selectedCategory = categorySelect ? categorySelect.value : '';
  const sortOption = sortPrice ? sortPrice.value : 'default';

  // Luôn dùng spread operator [...] để bảo đảm không làm biến đổi mảng gốc
  let result = [...products];

  // 1. TÌM KIẾM THEO TÊN HOẶC ĐỊA ĐIỂM
  if (keyword !== '') {
    result = result.filter(item =>
      item.name.toLowerCase().includes(keyword) ||
      item.location.toLowerCase().includes(keyword)
    );
  }

  // 2. LỌC THEO VÙNG MIỀN (north / central / south)
  if (selectedRegion !== '') {
    result = result.filter(item => item.region === selectedRegion);
  }

  // 3. LỌC THEO DANH MỤC (craft / food / culture / nature)
  if (selectedCategory !== '' && selectedCategory !== 'all') {
    result = result.filter(item => item.category === selectedCategory);
  }

  // 4. SẮP XẾP THEO GIÁ TIỀN
  if (sortOption === 'low-to-high') {
    result.sort((a, b) => a.price - b.price); // Giá tăng dần
  } else if (sortOption === 'high-to-low') {
    result.sort((a, b) => b.price - a.price); // Giá giảm dần
  }

  // 5. HIỂN THỊ KẾT QUẢ RA LƯỚI SẢN PHẨM
  renderProducts(result);

  // Cập nhật số lượng kết quả tìm thấy
  const resultCount = document.getElementById('result-count');
  if (resultCount) {
    resultCount.textContent = `Tìm thấy ${result.length} trải nghiệm`;
  }
}

// ==============================================================
// 5. KHỞI TẠO VÀ ĐỒNG BỘ TÌM KIẾM TỪ TRANG CHỦ & TRANG DANH SÁCH
// ==============================================================
document.addEventListener('DOMContentLoaded', () => {
  const keywordInput = document.getElementById('keyword');
  const regionSelect = document.getElementById('region');
  const categorySelect = document.getElementById('experience-type');
  const sortPrice = document.getElementById('sort-price');
  const searchForm = document.getElementById('experience-search');
  const filterPills = document.querySelectorAll('.filter-pill');

  // 1. ĐỌC THAM SỐ TRUYỀN TỪ TRANG CHỦ INDEX.HTML (keyword, region, category)
  const urlParams = new URLSearchParams(window.location.search);
  const urlKeyword = urlParams.get('keyword');
  const urlRegion = urlParams.get('region');
  const urlCategory = urlParams.get('category');

  if (urlKeyword && keywordInput) keywordInput.value = urlKeyword;
  if (urlRegion && regionSelect) regionSelect.value = urlRegion;
  if (urlCategory && categorySelect) categorySelect.value = urlCategory;

  // Đồng bộ trạng thái active của các nút pill nếu có category từ URL
  if (urlCategory) {
    filterPills.forEach(pill => {
      const isActive = pill.dataset.filter === urlCategory;
      pill.classList.toggle('is-active', isActive);
      pill.setAttribute('aria-pressed', String(isActive));
    });
  }

  // Chạy lọc ngay lập tức (nếu có URL params thì lọc theo params, nếu không thì hiển thị 8 món)
  applyFilterAndSort();

  // 2. LẮNG NGHE SỰ KIỆN GÕ PHÍM VÀ THAY ĐỔI TRÊN GIAO DIỆN
  if (keywordInput) {
    keywordInput.addEventListener('input', applyFilterAndSort);
  }

  if (regionSelect) {
    regionSelect.addEventListener('change', applyFilterAndSort);
  }

  if (categorySelect) {
    categorySelect.addEventListener('change', () => {
      const val = categorySelect.value || 'all';
      filterPills.forEach(pill => {
        const isActive = (pill.dataset.filter === val) || (val === '' && pill.dataset.filter === 'all');
        pill.classList.toggle('is-active', isActive);
        pill.setAttribute('aria-pressed', String(isActive));
      });
      applyFilterAndSort();
    });
  }

  if (sortPrice) {
    sortPrice.addEventListener('change', applyFilterAndSort);
  }

  // 3. KẾT NỐI CÁC NÚT DANH MỤC DẠNG PILL (Tất cả, Làng nghề, Ẩm thực...)
  filterPills.forEach(pill => {
    pill.addEventListener('click', (e) => {
      e.preventDefault();
      const filterVal = pill.dataset.filter;

      filterPills.forEach(p => {
        p.classList.remove('is-active');
        p.setAttribute('aria-pressed', 'false');
      });
      pill.classList.add('is-active');
      pill.setAttribute('aria-pressed', 'true');

      if (categorySelect) {
        categorySelect.value = filterVal === 'all' ? '' : filterVal;
      }
      applyFilterAndSort();
    });
  });

  // 4. NGĂN FORM SUBMIT RELOAD TRANG KHI BẤM NÚT TÌM KIẾM TRÊN PRODUCTS.HTML
  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      applyFilterAndSort();
      const target = document.getElementById('danh-sach');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  }
});
