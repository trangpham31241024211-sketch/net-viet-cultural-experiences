(() => {
    "use strict";

    const PROFILE_KEY = "netviet_account_profile_v1";
    const SETTINGS_KEY = "netviet_account_settings_v1";
    const STORAGE_NOTE = "Thông tin này chỉ được lưu trên thiết bị hiện tại; chưa kết nối máy chủ.";
    const toast = document.querySelector("#account-toast");
    const tabs = [...document.querySelectorAll(".account-tab[data-tab]")];
    const panels = [...document.querySelectorAll(".account-panel[data-panel]")];
    const menuToggle = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector("#main-nav");
    let toastTimer;
    let avatarObjectUrl = "";

    const showToast = (message) => {
        if (!toast) return;
        window.clearTimeout(toastTimer);
        toast.textContent = message;
        toast.classList.add("is-visible");
        toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 3600);
    };

    const readStored = (key) => {
        try {
            const value = window.localStorage.getItem(key);
            return value ? JSON.parse(value) : null;
        } catch (error) {
            console.error(`Không thể đọc dữ liệu tài khoản (${key}).`, error);
            showToast("Không thể đọc dữ liệu đã lưu trên thiết bị này.");
            return null;
        }
    };

    const writeStored = (key, value) => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (error) {
            console.error(`Không thể lưu dữ liệu tài khoản (${key}).`, error);
            showToast("Không thể lưu thay đổi. Hãy kiểm tra dung lượng lưu trữ của trình duyệt.");
            return false;
        }
    };

    const normalizeName = (name) => {
        const parts = name.trim().split(/\s+/).filter(Boolean);
        if (parts.length === 0) return "NV";
        if (parts.length === 1) return parts[0].slice(0, 2).toLocaleUpperCase("vi");
        return `${parts[0][0]}${parts[parts.length - 1][0]}`.toLocaleUpperCase("vi");
    };

    const syncProfileIdentity = () => {
        const name = document.querySelector("#profile-name")?.value.trim() || "Nguyễn Văn A";
        const email = document.querySelector("#profile-email")?.value.trim() || "";
        document.querySelectorAll("[data-profile-name]").forEach((element) => {
            element.textContent = name;
        });
        document.querySelectorAll("[data-avatar-initials]").forEach((element) => {
            element.textContent = normalizeName(name);
        });
        const settingsEmail = document.querySelector("[data-settings-email]");
        if (settingsEmail) {
            settingsEmail.textContent = email
                ? `${email} · Dùng để nhận thông tin tài khoản.`
                : "Chưa cập nhật email.";
        }
    };

    const activateTab = (name, options = {}) => {
        const target = tabs.find((tab) => tab.dataset.tab === name);
        const targetPanel = panels.find((panel) => panel.dataset.panel === name);
        if (!target || !targetPanel) return;

        tabs.forEach((tab) => {
            const isSelected = tab === target;
            tab.setAttribute("aria-selected", String(isSelected));
            tab.tabIndex = isSelected ? 0 : -1;
        });
        panels.forEach((panel) => {
            panel.hidden = panel !== targetPanel;
        });

        if (options.focus) target.focus();
        if (options.updateHash && window.location.hash !== `#${name}`) {
            window.history.replaceState(null, "", `#${name}`);
        }
    };

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => activateTab(tab.dataset.tab));
        tab.addEventListener("keydown", (event) => {
            const currentIndex = tabs.indexOf(tab);
            let nextIndex;
            if (event.key === "ArrowRight" || event.key === "ArrowDown") {
                nextIndex = (currentIndex + 1) % tabs.length;
            } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
                nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
            } else if (event.key === "Home") {
                nextIndex = 0;
            } else if (event.key === "End") {
                nextIndex = tabs.length - 1;
            } else {
                return;
            }
            event.preventDefault();
            activateTab(tabs[nextIndex].dataset.tab, { focus: true });
        });
    });

    document.querySelectorAll("[data-open-tab]").forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            activateTab(link.dataset.openTab);
        });
    });

    const initialTab = window.location.hash.slice(1);
    activateTab(tabs.some((tab) => tab.dataset.tab === initialTab) ? initialTab : "profile", {
        updateHash: false
    });

    window.addEventListener("hashchange", () => {
        const name = window.location.hash.slice(1);
        if (tabs.some((tab) => tab.dataset.tab === name)) {
            activateTab(name, { updateHash: false });
        }
    });

    if (menuToggle && mainNav) {
        const closeMenu = () => {
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Mở menu");
            mainNav.classList.remove("is-open");
        };
        menuToggle.addEventListener("click", () => {
            const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
            menuToggle.setAttribute("aria-expanded", String(!isExpanded));
            menuToggle.setAttribute("aria-label", isExpanded ? "Mở menu" : "Đóng menu");
            mainNav.classList.toggle("is-open", !isExpanded);
        });
        mainNav.addEventListener("click", (event) => {
            if (event.target.closest("a")) closeMenu();
        });
    }

    const profileForm = document.querySelector("#profile-form");
    const profileMessage = document.querySelector("#profile-message");
    const profileFields = ["name", "email", "phone", "birthday", "gender", "city", "address"];
    const savedProfile = readStored(PROFILE_KEY);

    if (savedProfile && typeof savedProfile === "object") {
        profileFields.forEach((field) => {
            const input = profileForm?.elements.namedItem(field);
            const value = savedProfile[field];
            if (input && typeof value === "string") input.value = value;
        });
    }
    syncProfileIdentity();

    const birthdayInput = document.querySelector("#profile-birthday");
    if (birthdayInput) {
        const today = new Date();
        today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
        birthdayInput.max = today.toISOString().slice(0, 10);
    }

    profileForm?.addEventListener("input", (event) => {
        if (event.target.matches("input, select")) syncProfileIdentity();
    });
    profileForm?.addEventListener("submit", (event) => {
        event.preventDefault();
        if (!profileForm.reportValidity()) return;

        const profile = {};
        profileFields.forEach((field) => {
            profile[field] = String(profileForm.elements.namedItem(field).value).trim();
        });
        if (writeStored(PROFILE_KEY, profile)) {
            syncProfileIdentity();
            if (profileMessage) profileMessage.textContent = `Đã lưu trên thiết bị này. ${STORAGE_NOTE}`;
            showToast("Thông tin hồ sơ đã được lưu trên thiết bị này.");
        }
    });

    document.querySelector("#avatar-file")?.addEventListener("change", (event) => {
        const [file] = event.target.files;
        if (!file) return;
        if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
            event.target.value = "";
            showToast("Vui lòng chọn ảnh JPG, PNG hoặc WebP.");
            return;
        }
        if (file.size > 3 * 1024 * 1024) {
            event.target.value = "";
            showToast("Ảnh đại diện cần có dung lượng tối đa 3 MB.");
            return;
        }

        if (avatarObjectUrl) URL.revokeObjectURL(avatarObjectUrl);
        avatarObjectUrl = URL.createObjectURL(file);
        document.querySelectorAll("[data-avatar-initials]").forEach((avatar) => {
            avatar.textContent = "";
            avatar.style.backgroundImage = `url("${avatarObjectUrl}")`;
            avatar.style.backgroundPosition = "center";
            avatar.style.backgroundSize = "cover";
        });
        showToast("Ảnh xem trước đã cập nhật. Ảnh chưa được tải lên máy chủ.");
    });

    const settingsForm = document.querySelector("#settings-form");
    const settingsMessage = document.querySelector("#settings-message");
    const savedSettings = readStored(SETTINGS_KEY);
    const settingsControls = settingsForm
        ? [...settingsForm.querySelectorAll("[name]")]
        : [];

    if (savedSettings && typeof savedSettings === "object") {
        settingsControls.forEach((control) => {
            if (control.type === "checkbox" && typeof savedSettings[control.name] === "boolean") {
                control.checked = savedSettings[control.name];
            } else if (control.tagName === "SELECT" && typeof savedSettings[control.name] === "string") {
                control.value = savedSettings[control.name];
            }
        });
    }

    settingsControls.forEach((control) => {
        control.addEventListener("change", () => {
            if (settingsMessage) settingsMessage.textContent = "Có thay đổi chưa được lưu.";
        });
    });
    settingsForm?.addEventListener("submit", (event) => {
        event.preventDefault();
        const settings = {};
        settingsControls.forEach((control) => {
            settings[control.name] = control.type === "checkbox" ? control.checked : control.value;
        });
        if (writeStored(SETTINGS_KEY, settings)) {
            if (settingsMessage) settingsMessage.textContent = STORAGE_NOTE;
            showToast("Cài đặt đã được lưu trên thiết bị này.");
        }
    });

    const journeyCards = [...document.querySelectorAll(".journey-card[data-journey-status]")];
    const journeyFilters = [...document.querySelectorAll("[data-journey-filter]")];
    const journeyPagination = document.querySelector("#journey-pagination");
    const journeyEmpty = document.querySelector("#journey-empty");
    const journeyPageSize = 2;
    let journeyFilter = "all";
    let journeyPage = 1;

    const updateJourneyList = () => {
        const matches = journeyCards.filter((card) =>
            journeyFilter === "all" || card.dataset.journeyStatus === journeyFilter
        );
        const pageCount = Math.max(1, Math.ceil(matches.length / journeyPageSize));
        journeyPage = Math.min(journeyPage, pageCount);
        const start = (journeyPage - 1) * journeyPageSize;
        journeyCards.forEach((card) => {
            const matchIndex = matches.indexOf(card);
            card.hidden = matchIndex < 0 || matchIndex < start || matchIndex >= start + journeyPageSize;
        });
        if (journeyEmpty) journeyEmpty.hidden = matches.length > 0;
        if (!journeyPagination) return;

        journeyPagination.hidden = matches.length <= journeyPageSize;
        journeyPagination.innerHTML = [
            `<button type="button" data-journey-page="${journeyPage - 1}" aria-label="Trang trước" ${journeyPage === 1 ? "disabled" : ""}>‹</button>`,
            ...Array.from({ length: pageCount }, (_, index) => {
                const page = index + 1;
                return `<button type="button" data-journey-page="${page}" ${page === journeyPage ? 'aria-current="page"' : ""}>${page}</button>`;
            }),
            `<button type="button" data-journey-page="${journeyPage + 1}" aria-label="Trang tiếp theo" ${journeyPage === pageCount ? "disabled" : ""}>›</button>`
        ].join("");
    };

    journeyFilters.forEach((button) => {
        button.addEventListener("click", () => {
            journeyFilter = button.dataset.journeyFilter;
            journeyPage = 1;
            journeyFilters.forEach((filter) => {
                filter.setAttribute("aria-pressed", String(filter === button));
            });
            updateJourneyList();
        });
    });
    journeyPagination?.addEventListener("click", (event) => {
        const button = event.target.closest("button[data-journey-page]");
        if (!button || button.disabled) return;
        journeyPage = Number(button.dataset.journeyPage);
        updateJourneyList();
        document.querySelector("#journey-list")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    updateJourneyList();

    const experienceList = document.querySelector("#experience-list");
    const experienceFilters = [...document.querySelectorAll("[data-experience-filter]")];
    const experienceEmpty = document.querySelector("#experience-empty");
    const experienceStatusLabels = {
        upcoming: "Sắp diễn ra",
        ongoing: "Đang trải nghiệm",
        completed: "Đã hoàn thành",
        cancelled: "Đã hủy"
    };
    const experienceFilterLabels = {
        all: "Tất cả",
        ...experienceStatusLabels
    };
    const demoExperienceRecords = [
        { productId: 2, status: "upcoming", date: "Lịch mẫu · 30/11/2026", guests: 2 },
        { productId: 7, status: "completed", date: "Lịch mẫu · 20/10/2026", guests: 2 },
        { productId: 5, status: "cancelled", date: "Lịch mẫu · 05/11/2026", guests: 2 }
    ];
    const catalogProducts = typeof products !== "undefined" && Array.isArray(products)
        ? products
        : null;
    let activeExperienceFilter = "all";

    const createExperienceElement = (tagName, className, text) => {
        const element = document.createElement(tagName);
        if (className) element.className = className;
        if (text !== undefined) element.textContent = text;
        return element;
    };

    const experienceEntries = catalogProducts
        ? demoExperienceRecords.map((record) => ({
            record,
            product: catalogProducts.find((product) => product.id === record.productId)
        }))
        : [];
    const invalidExperienceIds = experienceEntries
        .filter((entry) => !entry.product)
        .map((entry) => entry.record.productId);

    if (!catalogProducts || invalidExperienceIds.length > 0) {
        console.error("Không thể đồng bộ trải nghiệm tài khoản với danh mục sản phẩm.", {
            catalogLoaded: Boolean(catalogProducts),
            missingProductIds: invalidExperienceIds
        });
        if (experienceEmpty) {
            experienceEmpty.hidden = false;
            experienceEmpty.textContent = "Không tải được danh mục trải nghiệm. Vui lòng tải lại trang.";
        }
    } else if (experienceList) {
        const fragment = document.createDocumentFragment();
        experienceEntries.forEach(({ record, product }) => {
            const card = createExperienceElement("article", "experience-card");
            card.dataset.experienceStatus = record.status;

            const photo = createExperienceElement("div", "experience-photo");
            const image = createExperienceElement("img");
            image.src = product.image;
            image.alt = product.name;
            image.loading = "lazy";
            photo.append(image);

            const info = createExperienceElement("div", "experience-info");
            const topline = createExperienceElement("div", "experience-topline");
            topline.append(createExperienceElement("h3", "", product.name));
            const statusClass = record.status === "completed" || record.status === "cancelled"
                ? `status-badge ${record.status}`
                : "status-badge";
            topline.append(createExperienceElement(
                "span",
                statusClass,
                experienceStatusLabels[record.status] || "Chưa xác định"
            ));

            const metadata = createExperienceElement("div", "experience-meta");
            metadata.append(
                createExperienceElement("span", "", `▣ ${record.date}`),
                createExperienceElement("span", "", `♧ ${record.guests} người`),
                createExperienceElement(
                    "span",
                    "",
                    `◷ ${Number(product.price).toLocaleString("vi-VN")}đ/người`
                )
            );
            const location = createExperienceElement(
                "span",
                "experience-location",
                `⌖ ${product.location} · ${product.categoryName} · ${product.duration}`
            );

            const actions = createExperienceElement("div", "experience-actions");
            const detailLink = createExperienceElement("a", "quiet-button", "Xem chi tiết");
            detailLink.href = `product-detail.html?id=${encodeURIComponent(product.id)}`;
            const actionButton = createExperienceElement("button", "quiet-button", "•••");
            actionButton.type = "button";
            actionButton.dataset.experienceAction = record.status;
            actionButton.setAttribute("aria-label", `Tùy chọn: ${product.name}`);
            actions.append(detailLink, actionButton);

            info.append(topline, metadata, location, actions);
            card.append(photo, info);
            fragment.append(card);
        });
        experienceList.replaceChildren(fragment);
    }

    const experienceCards = [...document.querySelectorAll(".experience-card[data-experience-status]")];

    experienceFilters.forEach((button) => {
        const filter = button.dataset.experienceFilter;
        const count = filter === "all"
            ? experienceCards.length
            : experienceCards.filter((card) => card.dataset.experienceStatus === filter).length;
        button.textContent = `${experienceFilterLabels[filter] || filter} (${count})`;
    });

    experienceFilters.forEach((button) => {
        button.addEventListener("click", () => {
            activeExperienceFilter = button.dataset.experienceFilter;
            let visibleCount = 0;
            experienceCards.forEach((card) => {
                const isVisible = activeExperienceFilter === "all" ||
                    card.dataset.experienceStatus === activeExperienceFilter;
                card.hidden = !isVisible;
                if (isVisible) visibleCount += 1;
            });
            experienceFilters.forEach((filter) => {
                filter.setAttribute("aria-pressed", String(filter === button));
            });
            if (experienceEmpty) experienceEmpty.hidden = visibleCount > 0;
        });
    });
    if (experienceEmpty && experienceCards.length > 0) experienceEmpty.hidden = true;

    experienceList?.addEventListener("click", (event) => {
        const button = event.target.closest("[data-experience-action]");
        if (!button) return;
        const status = button.dataset.experienceAction;
        if (status === "upcoming") {
            showToast("Thông tin đặt chỗ đang ở chế độ minh họa; yêu cầu hủy chưa được gửi.");
        } else if (status === "completed") {
            showToast("Đây là trải nghiệm đã hoàn thành. Cảm ơn bạn đã đồng hành cùng Nét Việt!");
        } else {
            showToast("Đây là thông tin lịch sử; đặt chỗ chưa kết nối với hệ thống.");
        }
    });

    document.querySelector("[data-password]")?.addEventListener("click", () => {
        showToast("Đổi mật khẩu chưa khả dụng vì trang chưa kết nối hệ thống đăng nhập.");
    });
    document.querySelector("[data-view-privacy]")?.addEventListener("click", () => {
        showToast(`Các lựa chọn quyền riêng tư được lưu trên thiết bị này. ${STORAGE_NOTE}`);
    });
    document.querySelector("[data-delete-account]")?.addEventListener("click", () => {
        const confirmed = window.confirm("Trang minh họa chưa kết nối hệ thống tài khoản. Không có yêu cầu xóa nào được gửi. Bạn có muốn tiếp tục xem thông báo này không?");
        if (confirmed) showToast("Chưa gửi yêu cầu xóa tài khoản vì chưa có hệ thống tài khoản kết nối.");
    });
    document.querySelector("[data-signout]")?.addEventListener("click", () => {
        showToast("Trang hiện chưa kết nối đăng nhập; chưa có phiên tài khoản nào được đăng xuất.");
    });

    const updateCartBadge = () => {
        const badge = document.querySelector("#cart-count-badge");
        if (!badge) return;
        try {
            const cart = JSON.parse(window.localStorage.getItem("netviet_cart") || "[]");
            if (!Array.isArray(cart)) throw new TypeError("Dữ liệu giỏ hàng không phải danh sách.");
            const count = cart.reduce((total, item) => {
                const quantity = Number(item?.quantity);
                return total + (Number.isFinite(quantity) && quantity > 0 ? quantity : 0);
            }, 0);
            badge.textContent = String(count);
            badge.closest("a")?.setAttribute("aria-label", `Giỏ hàng, ${count} sản phẩm`);
        } catch (error) {
            console.error("Không thể đọc dữ liệu giỏ hàng.", error);
            badge.textContent = "!";
            badge.setAttribute("aria-label", "Không thể đọc số lượng sản phẩm trong giỏ");
        }
    };
    updateCartBadge();
    window.addEventListener("storage", (event) => {
        if (event.key === "netviet_cart") updateCartBadge();
    });
})();