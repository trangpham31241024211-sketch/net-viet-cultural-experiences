/**
 * NÉT VIỆT - TOUR PLANNER
 * Lọc dữ liệu trải nghiệm hiện có và dựng lịch trình gợi ý trên journey.html.
 * Lịch được tạo ở mức minh họa; dữ liệu hiện tại chưa xác nhận lịch tổ chức thực tế.
 */
(function () {
  'use strict';

  const regionNames = {
    north: 'Miền Bắc',
    central: 'Miền Trung',
    south: 'Miền Nam'
  };

  const interestCategories = {
    'Làng nghề truyền thống': ['craft'],
    'Ẩm thực địa phương': ['food'],
    'Di sản và lịch sử': ['culture'],
    'Thiên nhiên': ['nature'],
    'Lễ hội và văn hóa': ['culture']
  };

  const styleKeywords = {
    'Khám phá': {
      positive: ['khám phá', 'trekking', 'kayak', 'sup', 'lặn', 'địa đạo', 'di tích', 'rừng', 'vịnh', 'tour'],
      negative: []
    },
    'Nghỉ ngơi': {
      positive: ['thư giãn', 'bình minh', 'hồ', 'vịnh', 'rừng tràm', 'thưởng thức', 'du thuyền', 'nhà cổ'],
      negative: ['trekking', 'đu dây', 'lặn ngắm', 'vượt thác']
    },
    'Trải nghiệm': {
      positive: ['tự tay', 'workshop', 'lớp học', 'làm gốm', 'nấu ăn', 'chế biến', 'chèo', 'trải nghiệm', 'nghệ nhân'],
      negative: []
    },
    'Thư giãn': {
      positive: ['ẩm thực', 'thưởng thức', 'du thuyền', 'bình minh', 'nhà cổ', 'phố cổ', 'hồ', 'rừng tràm'],
      negative: ['trekking', 'đu dây', 'vượt thác', 'địa đạo']
    }
  };

  // Bốn điểm dừng này được chuyển từ lịch trình Bát Tràng tĩnh vốn có trong journey.html.
  const batTrangStops = [
    {
      id: 'bt-market',
      name: 'Tham quan chợ gốm Bát Tràng',
      category: 'culture',
      categoryName: 'Di sản – văn hóa',
      region: 'north',
      location: 'Làng gốm Bát Tràng, Gia Lâm, Hà Nội',
      duration: '1 giờ 30 phút',
      price: 0,
      image: 'images/gate.jpg',
      description: 'Khám phá không gian mua bán gốm và các sản phẩm thủ công tại làng nghề Bát Tràng.'
    },
    {
      id: 'bt-workshop',
      productId: 2,
      name: 'Trải nghiệm làm gốm thủ công',
      category: 'craft',
      categoryName: 'Làng nghề',
      region: 'north',
      location: 'Làng gốm Bát Tràng, Gia Lâm, Hà Nội',
      duration: '1 giờ 30 phút',
      price: 300000,
      image: 'images/pottery-main.jpg',
      description: 'Tự tay nhào nặn đất sét và tạo hình sản phẩm trên bàn xoay cùng nghệ nhân.'
    },
    {
      id: 'bt-food',
      name: 'Thưởng thức ẩm thực cổ Bát Tràng',
      category: 'food',
      categoryName: 'Ẩm thực',
      region: 'north',
      location: 'Khu ẩm thực Bát Tràng, Gia Lâm, Hà Nội',
      duration: '1 giờ 30 phút',
      price: 200000,
      image: 'images/am-thuc-co-bat-trang.webp',
      description: 'Dành thời gian khám phá và thưởng thức các món ăn địa phương tại Bát Tràng.'
    },
    {
      id: 'bt-museum',
      name: 'Tham quan Bảo tàng gốm Bát Tràng',
      category: 'culture',
      categoryName: 'Di sản – văn hóa',
      region: 'north',
      location: 'Số 28, thôn 5, Bát Tràng, Gia Lâm, Hà Nội',
      duration: '1 giờ 30 phút',
      price: 350000,
      image: 'images/product-hero.jpg',
      description: 'Tìm hiểu câu chuyện nghề gốm và các giá trị văn hóa được lưu giữ tại Bát Tràng.'
    }
  ];

  const mapCoordinates = [
    [90, 110], [210, 70], [350, 105], [500, 150],
    [430, 270], [280, 285], [130, 270], [65, 205],
    [175, 165], [315, 205], [460, 65], [545, 285]
  ];
  const timeSlots = ['08:30', '10:30', '13:30', '15:30'];

  function byId(id) {
    return document.getElementById(id);
  }

  function normalizeText(value) {
    return String(value || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd')
      .replace(/Đ/g, 'D')
      .toLowerCase()
      .trim();
  }

  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, (char) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    })[char]);
  }

  function formatMoney(value) {
    return `${Number(value || 0).toLocaleString('vi-VN')}đ`;
  }

  function formatDate(isoDate) {
    if (!isoDate) return 'Chưa chọn';
    const [year, month, day] = isoDate.split('-');
    return `${day}/${month}/${year}`;
  }

  function dateToLocalIso(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  function getTripDays(startIso, endIso) {
    if (!startIso || !endIso) return 1;
    const start = new Date(`${startIso}T00:00:00`);
    const end = new Date(`${endIso}T00:00:00`);
    return Math.max(1, Math.round((end - start) / 86400000) + 1);
  }

  function getCatalogExperiences() {
    if (typeof products === 'undefined' || !Array.isArray(products)) return [];
    return products.map((item) => ({
      id: `product-${item.id}`,
      productId: item.id,
      name: item.displayName || item.name,
      category: item.category,
      categoryName: item.categoryName || 'Trải nghiệm văn hóa',
      region: item.region,
      location: item.location,
      duration: item.duration || 'Theo chương trình',
      price: Number(item.price) || 0,
      image: item.image || 'images/about-hero.jpg',
      description: item.description || ''
    }));
  }

  function getStyleScore(item, style) {
    const keywords = styleKeywords[style] || styleKeywords['Khám phá'];
    const content = normalizeText(`${item.name} ${item.description} ${item.categoryName}`);
    const positive = keywords.positive.reduce((score, word) => score + (content.includes(normalizeText(word)) ? 2 : 0), 0);
    const negative = keywords.negative.reduce((score, word) => score + (content.includes(normalizeText(word)) ? 3 : 0), 0);
    return positive - negative;
  }

  function matchesDestination(item, destination) {
    const query = normalizeText(destination);
    if (!query) return true;

    // Với địa chỉ đầy đủ như "Bát Tràng, Gia Lâm, Hà Nội", ưu tiên tên điểm đầu tiên.
    const primaryPlace = normalizeText(destination.split(',')[0]);
    const searchable = normalizeText(`${item.name} ${item.location} ${item.description}`);
    return searchable.includes(primaryPlace);
  }

  function matchesNotes(item, notes) {
    const query = normalizeText(notes);
    if (!query) return true;
    const searchable = normalizeText(`${item.name} ${item.location} ${item.description} ${item.categoryName}`);
    const terms = String(notes).split(/[,;]+/).map(normalizeText).filter(Boolean);
    return terms.some((term) => searchable.includes(term));
  }

  function getCandidateExperiences(criteria) {
    const useBatTrangStops = normalizeText(criteria.destination).includes('bat trang') &&
      (criteria.region === 'Tất cả' || criteria.region === 'Miền Bắc');
    const source = useBatTrangStops ? batTrangStops : getCatalogExperiences();
    const categoryValues = interestCategories[criteria.interest] || [];

    return source.filter((item) => {
      if (criteria.region !== 'Tất cả' && regionNames[item.region] !== criteria.region) return false;
      if (categoryValues.length && !categoryValues.includes(item.category)) return false;
      if (!matchesDestination(item, criteria.destination)) return false;
      if (!matchesNotes(item, criteria.notes)) return false;
      return item.price <= criteria.budgetCap;
    }).map((item) => ({ ...item, styleScore: getStyleScore(item, criteria.style) }));
  }

  function getDurationMinutes(durationText) {
    const source = normalizeText(durationText);
    if (source.includes('nua ngay den 1 ngay')) return 360;
    if (source.includes('nua ngay') && !source.includes('gio')) return 240;
    if (/\b1\s*ngay\b/.test(source) && !source.includes('gio')) return 480;

    const hourMatch = source.match(/(\d+(?:[.,]\d+)?)\s*(?:-|–|den)?\s*(\d+(?:[.,]\d+)?)?\s*gio/);
    if (hourMatch) {
      const first = Number(hourMatch[1].replace(',', '.'));
      const second = hourMatch[2] ? Number(hourMatch[2].replace(',', '.')) : first;
      return Math.max(30, Math.round(((first + second) / 2) * 60));
    }

    const minuteMatch = source.match(/(\d+)\s*(?:-|–|den)?\s*(\d+)?\s*phut/);
    if (minuteMatch) {
      const first = Number(minuteMatch[1]);
      const second = minuteMatch[2] ? Number(minuteMatch[2]) : first;
      return Math.max(30, Math.round((first + second) / 2));
    }
    return 120;
  }

  function formatTime(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
  }

  function chooseWithinBudget(candidates, criteria) {
    const days = getTripDays(criteria.startDate, criteria.endDate);
    const maxStopsPerDay = 4;
    const maxActivityMinutesPerDay = 9 * 60;
    const dayStartMinutes = 8 * 60 + 30;
    const breakMinutes = 30;
    const sorted = [...candidates].sort((a, b) => {
      if (b.styleScore !== a.styleScore) return b.styleScore - a.styleScore;
      if (a.price !== b.price) return a.price - b.price;
      return a.name.localeCompare(b.name, 'vi');
    });

    const selected = [];
    let runningCost = 0;
    let dayIndex = 0;
    let dayActivityMinutes = 0;
    let dayStopCount = 0;
    let nextStartMinutes = dayStartMinutes;

    for (const item of sorted) {
      const durationMinutes = getDurationMinutes(item.duration);
      if (durationMinutes > maxActivityMinutesPerDay) continue;
      if (runningCost + item.price > criteria.budgetCap) continue;

      const needsNextDay = dayStopCount >= maxStopsPerDay ||
        dayActivityMinutes + durationMinutes > maxActivityMinutesPerDay ||
        nextStartMinutes + durationMinutes > 19 * 60;

      if (needsNextDay) {
        dayIndex += 1;
        if (dayIndex >= days) continue;
        dayActivityMinutes = 0;
        dayStopCount = 0;
        nextStartMinutes = dayStartMinutes;
      }

      selected.push({
        ...item,
        dayIndex,
        time: formatTime(nextStartMinutes),
        durationMinutes
      });
      runningCost += item.price;
      dayActivityMinutes += durationMinutes;
      dayStopCount += 1;
      nextStartMinutes += durationMinutes + breakMinutes;
    }

    return { items: selected, perPersonCost: runningCost, days };
  }

  function getCriteria() {
    return {
      region: byId('region').value,
      startPoint: byId('start-point').value.trim(),
      destination: byId('destination').value.trim(),
      startDate: byId('start-date').value,
      endDate: byId('end-date').value,
      interest: byId('interest').value,
      style: byId('style').value,
      notes: byId('notes').value.trim(),
      budgetCap: Number(byId('budget').value) || 850000,
      travellers: Math.max(1, Number(byId('travellers').value) || 1)
    };
  }

  function updateSummary(criteria, result) {
    const regionText = criteria.region === 'Tất cả' ? 'Tất cả khu vực' : criteria.region;
    const routeText = [criteria.startPoint, criteria.destination].filter(Boolean).join(' → ');
    byId('suggestedRegion').textContent = routeText ? `${regionText} – ${routeText}` : regionText;
    byId('suggestedTime').textContent = `${formatDate(criteria.startDate)} - ${formatDate(criteria.endDate)}`;
    byId('suggestedBudget').textContent = `${formatMoney(result.perPersonCost)}/người`;
    byId('suggestedTravellers').textContent = `${criteria.travellers} người`;
    byId('suggestedBudgetNote').textContent = result.items.length
      ? `Tổng dự kiến cho ${criteria.travellers} người: ${formatMoney(result.perPersonCost * criteria.travellers)}. Chi phí và lịch trình chỉ mang tính ước tính; cần kiểm tra lịch tổ chức và chỗ trống trước khi đặt từng trải nghiệm.`
      : `Ngân sách tối đa đang chọn: ${formatMoney(criteria.budgetCap)}/người. Hãy thử tăng ngân sách hoặc thay đổi tiêu chí.`;
  }

  function renderDayHeading(dayIndex, dateIso) {
    return `<div class="timeline-day-heading">Ngày ${dayIndex + 1} · ${formatDate(dateIso)}</div>`;
  }

  function getDateForOffset(startIso, offset) {
    const date = new Date(`${startIso}T00:00:00`);
    date.setDate(date.getDate() + offset);
    return dateToLocalIso(date);
  }

  function renderTimeline(items, criteria) {
    const timeline = byId('suggestedTimeline');
    if (!items.length) {
      timeline.innerHTML = `
        <div class="timeline-empty">
          <i class="fa-solid fa-compass" aria-hidden="true"></i>
          <h3>Chưa tìm thấy trải nghiệm phù hợp</h3>
          <p>Không có trải nghiệm nào khớp với khu vực, chủ đề, địa điểm và ngân sách hiện tại. Hãy thử đổi một vài tiêu chí.</p>
          <button type="button" class="btn-edit-criteria" data-edit-criteria>Điều chỉnh tiêu chí</button>
        </div>`;
      return;
    }

    const html = [];
    let currentDay = -1;
    items.forEach((item, index) => {
      const dayIndex = item.dayIndex;
      const time = item.time || timeSlots[index % 4];
      if (dayIndex !== currentDay) {
        currentDay = dayIndex;
        html.push(renderDayHeading(dayIndex, getDateForOffset(criteria.startDate, dayIndex)));
      }

      const priceText = item.price === 0 ? 'Miễn phí' : `${formatMoney(item.price)}/người`;
      const link = item.productId
        ? `product-detail.html?id=${encodeURIComponent(item.productId)}`
        : 'products.html';
      const transitText = index < items.length - 1 ? '<span class="transit-pill">Tiếp tục đến điểm dừng tiếp theo</span>' : '';

      html.push(`
        <article class="timeline-step">
          <div class="timeline-hour">${time}</div>
          <div class="timeline-axis">
            <span class="timeline-dot"></span>
            ${index < items.length - 1 ? '<span class="timeline-line"></span>' : ''}
          </div>
          <div class="timeline-body">
            <span class="timeline-category">${escapeHtml(item.categoryName)}</span>
            <h4>${escapeHtml(item.name)}</h4>
            <p><i class="fa-solid fa-location-dot" aria-hidden="true"></i> <strong>Địa điểm:</strong> ${escapeHtml(item.location)}</p>
            <p><i class="fa-regular fa-clock" aria-hidden="true"></i> <strong>Thời lượng:</strong> ${escapeHtml(item.duration)}</p>
            <p><i class="fa-solid fa-ticket" aria-hidden="true"></i> <strong>Chi phí tham khảo:</strong> ${priceText}</p>
            ${item.description ? `<p class="timeline-description">${escapeHtml(item.description)}</p>` : ''}
            ${transitText}
            <a class="timeline-detail-link" href="${escapeHtml(link)}">Xem trải nghiệm <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>
          </div>
          <img class="timeline-thumb" src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}" loading="lazy" onerror="this.src='images/about-hero.jpg'">
        </article>`);
    });
    timeline.innerHTML = html.join('');
  }

  function renderMap(items, criteria) {
    const svg = byId('journeyMapSvg');
    const title = byId('journeyMapTitle');
    const subtitle = byId('journeyMapSubtitle');
    const legend = byId('journeyMapLegend');
    const target = criteria.destination || (criteria.region === 'Tất cả' ? 'Việt Nam' : criteria.region);
    legend.innerHTML = `${criteria.startPoint ? '<span>Ⓢ Điểm xuất phát</span>' : ''}<span>● Điểm trải nghiệm</span><span>--- Tuyến di chuyển gợi ý</span>`;

    title.textContent = `Bản đồ hành trình${items.length ? '' : ' đề xuất'}`;
    const originText = criteria.startPoint ? `Xuất phát: ${criteria.startPoint} → ` : '';
    subtitle.textContent = items.length
      ? `${originText}${items.length} điểm dừng · ${target}`
      : `Chưa có điểm dừng phù hợp tại ${target}`;

    const base = `
      <rect width="600" height="350" fill="#E8F1DC"/>
      <path d="M475 0 Q435 105 495 190 T520 350 L600 350 L600 0 Z" fill="#BCE0DD"/>
      <ellipse cx="145" cy="95" rx="58" ry="26" fill="#C4DCB4"/>
      <ellipse cx="350" cy="72" rx="64" ry="28" fill="#C4DCB4"/>
      <ellipse cx="125" cy="285" rx="52" ry="22" fill="#C4DCB4"/>
      <ellipse cx="365" cy="292" rx="68" ry="28" fill="#C4DCB4"/>
      <path d="M0 135 L485 105 M0 245 L495 215 M95 0 L165 350 M290 0 L245 350 M405 0 L435 350" stroke="#FFFFFF" stroke-width="11" fill="none"/>
      <path d="M0 310 Q170 265 270 300 T600 265" fill="none" stroke="#FFFFFF" stroke-width="5" opacity=".7"/>`;

    if (!items.length) {
      svg.innerHTML = `${base}<text x="300" y="185" text-anchor="middle" fill="#527064" font-size="22" font-weight="700">Chưa có điểm dừng</text>`;
      svg.setAttribute('aria-label', 'Chưa có điểm dừng phù hợp với tiêu chí đã chọn');
      return;
    }

    const points = items.map((item, index) => mapCoordinates[index % mapCoordinates.length]);
    const originPoint = criteria.startPoint ? [45, 310] : null;
    const routePoints = originPoint ? [originPoint, ...points] : points;
    const route = routePoints.map(([x, y]) => `${x},${y}`).join(' ');
    const startMarker = originPoint ? `
      <g transform="translate(${originPoint[0]},${originPoint[1]})">
        <circle r="17" fill="#FFFFFF" stroke="#14533E" stroke-width="4"/>
        <text x="0" y="6" text-anchor="middle" fill="#14533E" font-size="15" font-weight="700">S</text>
      </g>` : '';
    const markers = points.map(([x, y], index) => `
      <g transform="translate(${x},${y})">
        <circle r="19" fill="#C97A2B" stroke="#FFFFFF" stroke-width="4"/>
        <text x="0" y="6" text-anchor="middle" fill="#FFFFFF" font-size="16" font-weight="700">${index + 1}</text>
      </g>`).join('');
    const areaLabel = escapeHtml(target).slice(0, 48);

    svg.innerHTML = `${base}
      <polyline points="${route}" fill="none" stroke="#14533E" stroke-width="5" stroke-dasharray="10 9" stroke-linecap="round" stroke-linejoin="round"/>
      ${startMarker}
      ${markers}
      <text x="22" y="32" fill="#2E5442" font-size="16" font-weight="700">${areaLabel}</text>
      <text x="535" y="175" fill="#3B7A78" font-size="13" font-weight="600" transform="rotate(82 535 175)">Tuyến gợi ý</text>`;
    svg.setAttribute('aria-label', `Sơ đồ minh họa ${criteria.startPoint ? `điểm xuất phát ${criteria.startPoint} và ` : ''}${items.length} điểm dừng tại ${target}`);
  }

  function updateJourney({ announce = false } = {}) {
    const criteria = getCriteria();
    if (criteria.startDate && criteria.endDate && criteria.endDate < criteria.startDate) {
      byId('journeyMessage').textContent = 'Ngày kết thúc cần sau ngày bắt đầu. Vui lòng kiểm tra lại.';
      return null;
    }

    const candidates = getCandidateExperiences(criteria);
    const result = chooseWithinBudget(candidates, criteria);
    updateSummary(criteria, result);
    renderTimeline(result.items, criteria);
    renderMap(result.items, criteria);

    byId('suggestedCount').textContent = `Tìm thấy ${result.items.length} trải nghiệm phù hợp`;
    byId('fitBadge').textContent = result.items.length ? '+ PHÙ HỢP VỚI BẠN' : 'CẦN ĐIỀU CHỈNH';
    byId('fitBadge').classList.toggle('is-empty', result.items.length === 0);

    if (announce) {
      byId('journeyMessage').textContent = result.items.length
        ? `Đã cập nhật ${result.items.length} trải nghiệm theo tiêu chí bạn chọn. Xem lịch trình đề xuất bên dưới.`
        : 'Chưa có trải nghiệm phù hợp. Bạn có thể thay đổi khu vực, chủ đề, địa điểm hoặc ngân sách.';
    }

    byId('confirmMessage').textContent = '';
    return result;
  }

  function syncChipButtons(targetId, value) {
    document.querySelectorAll(`.chip-btn[data-target="${targetId}"]`).forEach((button) => {
      const active = button.dataset.value === value;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  }

  function scrollToForm() {
    byId('tao-hanh-trinh').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function initializeJourney() {
    const form = byId('journeyForm');
    if (!form) return;

    const today = dateToLocalIso(new Date());
    const startDate = byId('start-date');
    const endDate = byId('end-date');
    const regionSelect = byId('region');
    let previousRegion = regionSelect.value;
    startDate.value = today;
    endDate.value = today;
    startDate.min = today;
    endDate.min = today;

    function handleRegionChange() {
      if (regionSelect.value === previousRegion) return;
      const destination = byId('destination');
      if (normalizeText(destination.value).includes('bat trang')) destination.value = '';
      destination.placeholder = regionSelect.value === 'Miền Trung'
        ? 'Ví dụ: Huế, Hội An, Đà Nẵng...'
        : regionSelect.value === 'Miền Nam'
          ? 'Ví dụ: TP. Hồ Chí Minh, Cần Thơ, An Giang...'
          : 'Ví dụ: Bát Tràng, Hà Nội, Huế, Hội An...';
      previousRegion = regionSelect.value;
    }

    document.querySelectorAll('.chip-btn').forEach((button) => {
      button.setAttribute('aria-pressed', String(button.classList.contains('active')));
      button.addEventListener('click', () => {
        const targetId = button.dataset.target;
        const select = byId(targetId);
        if (!select) return;
        select.value = button.dataset.value;
        syncChipButtons(targetId, select.value);
        if (targetId === 'region') handleRegionChange();
        updateJourney();
      });
    });

    form.querySelectorAll('input, select').forEach((field) => {
      field.addEventListener('input', () => {
        if (field.id === 'start-date') {
          endDate.min = field.value || today;
          if (endDate.value && endDate.value < field.value) endDate.value = field.value;
        }
        updateJourney();
      });
      field.addEventListener('change', () => {
        if (field.id === 'region') handleRegionChange();
        updateJourney();
      });
    });

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const result = updateJourney({ announce: true });
      if (!result) return;
      byId('hanh-trinh-goi-y').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    byId('editJourney').addEventListener('click', scrollToForm);
    byId('editJourneyMap').addEventListener('click', scrollToForm);
    byId('suggestedTimeline').addEventListener('click', (event) => {
      if (event.target.closest('[data-edit-criteria]')) scrollToForm();
    });

    byId('confirmJourney').addEventListener('click', () => {
      const result = updateJourney();
      byId('confirmMessage').textContent = result && result.items.length
        ? `Đã xác nhận ${result.items.length} điểm dừng trên bản demo. Hành trình chưa được lưu vào tài khoản hoặc đặt chỗ.`
        : 'Chưa thể xác nhận vì chưa có trải nghiệm phù hợp với tiêu chí hiện tại.';
    });

    updateJourney();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeJourney);
  } else {
    initializeJourney();
  }
})();
