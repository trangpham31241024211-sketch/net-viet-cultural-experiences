(() => {
    const searchForm = document.querySelector("#experience-search");
    const keywordInput = document.querySelector("#keyword");
    const regionSelect = document.querySelector("#region");
    const categorySelect = document.querySelector("#experience-type");
    const durationSelect = document.querySelector("#duration");
    const budgetSelect = document.querySelector("#budget");
    const filterButtons = [...document.querySelectorAll(".filter-pill[data-filter]")];
    const cards = [...document.querySelectorAll("#product-grid .product-card")];
    const emptyState = document.querySelector("#empty-state");
    const resultCount = document.querySelector("#result-count");
    const pagination = document.querySelector("#pagination");
    const menuToggle = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector("#main-nav");
    const bookingDialog = document.querySelector("#booking-dialog");
    const bookingForm = document.querySelector("#booking-form");
    const dialogExperience = document.querySelector("#dialog-experience");
    const dialogNote = document.querySelector("#dialog-note");
    const toast = document.querySelector("#toast");
    const pageSize = 8;

    let activeCategory = "all";
    let currentPage = 1;
    let toastTimer;

    const normalize = (value) => value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d")
        .replace(/Đ/g, "D")
        .toLocaleLowerCase("vi")
        .trim();

    const syncFilterButtons = () => {
        filterButtons.forEach((button) => {
            const isActive = button.dataset.filter === activeCategory;
            button.classList.toggle("is-active", isActive);
            button.setAttribute("aria-pressed", String(isActive));
        });
    };

    const updateResults = () => {
        const keyword = normalize(keywordInput?.value || "");
        const region = regionSelect?.value || "";
        const category = categorySelect?.value || activeCategory;
        const duration = durationSelect?.value || "";
        const budget = budgetSelect?.value || "";
        const matches = cards.filter((card) => {
            const matchesKeyword = !keyword || normalize(
                `${card.dataset.search || ""} ${card.textContent}`
            ).includes(keyword);
            const matchesRegion = !region || card.dataset.region === region;
            const matchesCategory = category === "all" || card.dataset.category === category;
            const hours = Number(card.dataset.duration || 0);
            const price = Number(card.dataset.price || 0);
            const matchesDuration = !duration ||
                (duration === "short" && hours < 2) ||
                (duration === "half-day" && hours >= 2 && hours <= 4) ||
                (duration === "full-day" && hours > 4);
            const matchesBudget = !budget ||
                (budget === "under-300" && price < 300000) ||
                (budget === "300-500" && price >= 300000 && price <= 500000) ||
                (budget === "over-500" && price > 500000);
            return matchesKeyword && matchesRegion && matchesCategory && matchesDuration && matchesBudget;
        });

        const pageCount = Math.max(1, Math.ceil(matches.length / pageSize));
        currentPage = Math.min(currentPage, pageCount);
        const firstCard = (currentPage - 1) * pageSize;
        cards.forEach((card) => {
            const isMatch = matches.includes(card);
            const cardIndex = matches.indexOf(card);
            card.hidden = !isMatch || cardIndex < firstCard || cardIndex >= firstCard + pageSize;
        });

        const visibleCount = matches.filter((card) => !card.hidden).length;
        emptyState.hidden = matches.length > 0;
        resultCount.textContent = matches.length === 0
            ? "Không có trải nghiệm phù hợp."
            : `Đang hiển thị ${visibleCount} / ${matches.length} trải nghiệm`;
        pagination.hidden = matches.length <= pageSize;
        pagination.innerHTML = [
            `<button type="button" data-page="${currentPage - 1}" aria-label="Trang trước" ${currentPage === 1 ? "disabled" : ""}>‹</button>`,
            ...Array.from({ length: pageCount }, (_, index) => {
                const page = index + 1;
                return `<button type="button" data-page="${page}" ${page === currentPage ? 'class="is-active" aria-current="page"' : ""}>${page}</button>`;
            }),
            `<button type="button" data-page="${currentPage + 1}" aria-label="Trang tiếp theo" ${currentPage === pageCount ? "disabled" : ""}>›</button>`
        ].join("");
    };

    const showToast = (message) => {
        if (!toast) return;
        window.clearTimeout(toastTimer);
        toast.textContent = message;
        toast.classList.add("is-visible");
        toastTimer = window.setTimeout(() => {
            toast.classList.remove("is-visible");
        }, 3200);
    };

    if (searchForm && regionSelect && categorySelect) {
        const query = new URLSearchParams(window.location.search);
        keywordInput.value = query.get("keyword") || "";
        regionSelect.value = query.get("region") || "";
        const requestedCategory = query.get("category") || "all";
        categorySelect.value = requestedCategory;
        if (durationSelect) durationSelect.value = query.get("duration") || "";
        if (budgetSelect) budgetSelect.value = query.get("budget") || "";
        activeCategory = categorySelect.value || "all";
        syncFilterButtons();
        updateResults();

        searchForm.addEventListener("submit", (event) => {
            event.preventDefault();
            activeCategory = categorySelect.value || "all";
            currentPage = 1;
            syncFilterButtons();
            updateResults();
            document.querySelector("#danh-sach").scrollIntoView({ behavior: "smooth" });
        });

        [keywordInput, regionSelect, categorySelect, durationSelect, budgetSelect].filter(Boolean).forEach((control) => {
            control.addEventListener("input", () => {
                activeCategory = categorySelect.value || "all";
                currentPage = 1;
                syncFilterButtons();
                updateResults();
            });
            control.addEventListener("change", () => {
                activeCategory = categorySelect.value || "all";
                currentPage = 1;
                syncFilterButtons();
                updateResults();
            });
        });

        filterButtons.forEach((button) => {
            button.addEventListener("click", () => {
                activeCategory = button.dataset.filter;
                categorySelect.value = activeCategory === "all" ? "" : activeCategory;
                currentPage = 1;
                syncFilterButtons();
                updateResults();
            });
        });

        pagination.addEventListener("click", (event) => {
            const button = event.target.closest("button[data-page]");
            if (!button || button.disabled) return;
            currentPage = Number(button.dataset.page);
            updateResults();
        });
    }

    if (menuToggle && mainNav) {
        menuToggle.addEventListener("click", () => {
            const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
            menuToggle.setAttribute("aria-expanded", String(!isExpanded));
            menuToggle.setAttribute("aria-label", isExpanded ? "Mở menu" : "Đóng menu");
            mainNav.classList.toggle("is-open", !isExpanded);
        });

        mainNav.addEventListener("click", (event) => {
            if (event.target.closest("a")) {
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Mở menu");
                mainNav.classList.remove("is-open");
            }
        });
    }

    document.querySelectorAll(".favorite-button").forEach((button) => {
        button.addEventListener("click", () => {
            const isFavorite = button.getAttribute("aria-pressed") === "true";
            button.setAttribute("aria-pressed", String(!isFavorite));
            button.textContent = isFavorite ? "♡" : "♥";
            showToast(isFavorite ? "Đã bỏ khỏi danh sách yêu thích." : "Đã lưu vào danh sách yêu thích.");
        });
    });

    document.querySelectorAll("button.book-button").forEach((button) => {
        button.addEventListener("click", () => {
            dialogExperience.textContent = button.dataset.experience || "";
            dialogNote.textContent = "Giao diện minh họa: thông tin của bạn chưa được gửi đến hệ thống đặt chỗ.";
            bookingDialog.showModal();
        });
    });

    document.querySelector(".dialog-close")?.addEventListener("click", () => {
        bookingDialog.close();
    });

    bookingDialog?.addEventListener("click", (event) => {
        if (event.target === bookingDialog) bookingDialog.close();
    });

    bookingForm?.addEventListener("submit", (event) => {
        event.preventDefault();
        dialogNote.textContent = "Đây là bản minh họa; thông tin chưa được gửi và chưa có đặt chỗ nào được tạo.";
        showToast("Đây là bản minh họa; yêu cầu đặt chỗ chưa được gửi.");
    });

    const visitDate = document.querySelector("#visitDate");
    const guestCount = document.querySelector("#peopleCount");
    const bookingMessage = document.querySelector("#bookingMessage");
    const mainImage = document.querySelector("#mainImage");
    const lightbox = document.querySelector("#lightboxModal");
    let guests = 1;

    if (visitDate) {
        const today = new Date();
        today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
        visitDate.min = today.toISOString().slice(0, 10);
    }

    if (guestCount) {
        const minimumGuests = 1;
        const maximumGuests = 15;
        guests = Number(guestCount.textContent) || minimumGuests;
        const updateGuestCount = () => {
            guestCount.textContent = String(guests);
            document.querySelector("#minus").disabled = guests <= minimumGuests;
            document.querySelector("#plus").disabled = guests >= maximumGuests;
        };

        document.querySelector("#minus")?.addEventListener("click", () => {
            guests = Math.max(minimumGuests, guests - 1);
            updateGuestCount();
        });
        document.querySelector("#plus")?.addEventListener("click", () => {
            guests = Math.min(maximumGuests, guests + 1);
            updateGuestCount();
        });
        updateGuestCount();
    }

    const thumbnails = [...document.querySelectorAll("#galleryThumbs .thumb-item")];
    const galleryImages = mainImage
        ? [{ src: mainImage.src, alt: mainImage.alt }, ...thumbnails.map((thumbnail) => {
            const image = thumbnail.querySelector("img");
            return { src: image.src, alt: image.alt };
        })]
        : [];
    let activeImageIndex = 0;

    const updateGallery = () => {
        const image = galleryImages[activeImageIndex];
        if (!image) return;
        mainImage.src = image.src;
        mainImage.alt = image.alt;
        const lightboxImage = document.querySelector("#lightboxImg");
        if (lightboxImage) {
            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt;
        }
        const counter = document.querySelector("#lightboxCounter");
        if (counter) counter.textContent = `${activeImageIndex + 1} / ${galleryImages.length}`;
    };

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener("click", () => {
            activeImageIndex = index + 1;
            thumbnails.forEach((item, itemIndex) => {
                const isActive = itemIndex === index;
                item.classList.toggle("active", isActive);
                item.setAttribute("aria-pressed", String(isActive));
            });
            updateGallery();
        });
    });

    const closeLightbox = () => {
        lightbox?.classList.remove("show");
        lightbox?.setAttribute("aria-hidden", "true");
    };

    document.querySelector("#openGalleryBtn")?.addEventListener("click", () => {
        updateGallery();
        lightbox?.classList.add("show");
        lightbox?.setAttribute("aria-hidden", "false");
        document.querySelector("#closeLightbox")?.focus();
    });
    document.querySelector("#closeLightbox")?.addEventListener("click", closeLightbox);
    document.querySelector("#prevBtn")?.addEventListener("click", () => {
        activeImageIndex = (activeImageIndex - 1 + galleryImages.length) % galleryImages.length;
        updateGallery();
    });
    document.querySelector("#nextBtn")?.addEventListener("click", () => {
        activeImageIndex = (activeImageIndex + 1) % galleryImages.length;
        updateGallery();
    });
    lightbox?.addEventListener("click", (event) => {
        if (event.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") closeLightbox();
    });

    document.querySelector("#bookBtn")?.addEventListener("click", () => {
        if (!visitDate || !visitDate.reportValidity()) return;
        const selectedDate = new Date(`${visitDate.value}T00:00:00`).toLocaleDateString("vi-VN");
        bookingMessage.textContent = `Đây là bản minh họa: chưa tạo đặt chỗ. Bạn đã chọn ${guests} khách vào ngày ${selectedDate}.`;
    });

    const contactForm = document.querySelector("#contactForm");
    const formMessage = document.querySelector("#formMessage");
    contactForm?.addEventListener("submit", (event) => {
        event.preventDefault();
        formMessage.textContent = "Đây là bản minh họa; tin nhắn chưa được gửi. Vui lòng liên hệ qua email để được hỗ trợ.";
    });
})();
