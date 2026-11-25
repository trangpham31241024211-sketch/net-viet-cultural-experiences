(() => {
    "use strict";

    const views = [...document.querySelectorAll("[data-auth-view]")];
    const modeLinks = [...document.querySelectorAll("[data-auth-mode]")];
    const loginForm = document.querySelector("#login-form");
    const registerForm = document.querySelector("#register-form");
    const loginFeedback = document.querySelector("#login-feedback");
    const registerFeedback = document.querySelector("#register-feedback");
    const confirmPassword = document.querySelector("#register-confirm");
    const password = document.querySelector("#register-password");
    const menuToggle = document.querySelector(".auth-menu-toggle");
    const mainNav = document.querySelector("#main-nav");
    const loginEmail = document.querySelector("#login-email");
    const rememberEmail = document.querySelector("#remember-email");
    const REMEMBERED_EMAIL_KEY = "netviet_account_remembered_email_v1";

    const getModeFromUrl = () => new URLSearchParams(window.location.search).get("mode") === "register"
        ? "register"
        : "login";

    const clearFeedback = () => {
        [loginFeedback, registerFeedback].forEach((feedback) => {
            if (feedback) feedback.textContent = "";
        });
    };

    const setMode = (mode, updateHistory = false) => {
        const activeMode = mode === "register" ? "register" : "login";
        views.forEach((view) => {
            view.hidden = view.dataset.authView !== activeMode;
        });
        clearFeedback();
        document.title = activeMode === "register"
            ? "Tạo tài khoản | Nét Việt"
            : "Đăng nhập | Nét Việt";

        if (updateHistory) {
            const url = new URL(window.location.href);
            url.searchParams.set("mode", activeMode);
            window.history.pushState({ mode: activeMode }, "", url);
        }
    };

    modeLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
            event.preventDefault();
            setMode(link.dataset.authMode, true);
            document.querySelector(`#${link.dataset.authMode}-title`)?.focus({ preventScroll: true });
        });
    });

    window.addEventListener("popstate", () => setMode(getModeFromUrl()));
    setMode(getModeFromUrl());

    try {
        const rememberedEmail = window.localStorage.getItem(REMEMBERED_EMAIL_KEY);
        if (rememberedEmail && loginEmail && rememberEmail) {
            loginEmail.value = rememberedEmail;
            rememberEmail.checked = true;
        }
    } catch (error) {
        console.error("Không thể đọc tùy chọn ghi nhớ email.", error);
        if (loginFeedback) loginFeedback.textContent = "Không thể đọc email đã ghi nhớ trên thiết bị này.";
    }

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
        window.addEventListener("resize", () => {
            if (window.innerWidth > 680) closeMenu();
        });
    }

    document.querySelectorAll("[data-password-toggle]").forEach((toggle) => {
        toggle.addEventListener("click", () => {
            const input = document.getElementById(toggle.dataset.passwordToggle);
            if (!input) return;
            const shouldShow = input.type === "password";
            input.type = shouldShow ? "text" : "password";
            toggle.setAttribute("aria-pressed", String(shouldShow));
            toggle.setAttribute("aria-label", shouldShow ? "Ẩn mật khẩu" : "Hiện mật khẩu");
        });
    });

    const validatePasswordMatch = () => {
        if (!password || !confirmPassword) return;
        confirmPassword.setCustomValidity(
            confirmPassword.value && confirmPassword.value !== password.value
                ? "Mật khẩu nhập lại chưa khớp."
                : ""
        );
        confirmPassword.toggleAttribute(
            "aria-invalid",
            Boolean(confirmPassword.value && confirmPassword.value !== password.value)
        );
    };

    password?.addEventListener("input", validatePasswordMatch);
    confirmPassword?.addEventListener("input", validatePasswordMatch);

    loginForm?.addEventListener("submit", (event) => {
        event.preventDefault();
        if (!loginForm.reportValidity()) return;

        try {
            if (rememberEmail?.checked && loginEmail?.value.trim()) {
                window.localStorage.setItem(REMEMBERED_EMAIL_KEY, loginEmail.value.trim());
            } else {
                window.localStorage.removeItem(REMEMBERED_EMAIL_KEY);
            }
        } catch (error) {
            console.error("Không thể lưu tùy chọn ghi nhớ email.", error);
            if (loginFeedback) loginFeedback.textContent = "Không thể lưu tùy chọn ghi nhớ email trên thiết bị này.";
            return;
        }

        if (loginFeedback) {
            loginFeedback.textContent = "Chưa thể đăng nhập vì hệ thống tài khoản chưa kết nối máy chủ. Mật khẩu không được gửi đi hoặc lưu lại.";
        }
    });

    document.querySelectorAll("[data-social-provider]").forEach((button) => {
        button.addEventListener("click", () => {
            if (loginFeedback) {
                loginFeedback.textContent = `Đăng nhập với ${button.dataset.socialProvider} chưa khả dụng vì chưa kết nối nhà cung cấp.`;
            }
        });
    });

    document.querySelector("[data-password-reset]")?.addEventListener("click", () => {
        if (loginFeedback) {
            loginFeedback.textContent = "Khôi phục mật khẩu chưa khả dụng vì hệ thống tài khoản chưa kết nối máy chủ.";
        }
    });

    registerForm?.addEventListener("submit", (event) => {
        event.preventDefault();
        validatePasswordMatch();
        if (!registerForm.reportValidity()) return;
        if (registerFeedback) {
            registerFeedback.textContent = "Chưa thể tạo tài khoản vì hệ thống chưa kết nối máy chủ. Thông tin của bạn không được gửi đi hoặc lưu lại.";
        }
    });
})();
