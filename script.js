// ===============================
// Back to Top Button Script
// ===============================

(function () {
  // --- Settings ---
  const SCROLL_TRIGGER = 200; // px from top before button appears
  const BUTTON_ID = "backToTop";
  const VISIBLE_CLASS = "back-to-top--visible";
  const ARIA_LABEL = "Back to top";

  // --- Create and inject the button if it doesn't exist ---
  function createBackToTopButton() {
    if (document.getElementById(BUTTON_ID)) return;

    const btn = document.createElement("button");
    btn.id = BUTTON_ID;
    btn.type = "button";
    btn.setAttribute("aria-label", ARIA_LABEL);
    btn.tabIndex = 0; // ensure keyboard focus
    btn.innerHTML = "↑"; // You may replace with an SVG or other icon

    // Minimal inline styles for positioning (actual appearance in CSS)
    btn.style.position = "fixed";
    btn.style.right = "1.5rem";
    btn.style.bottom = "1.5rem";
    btn.style.zIndex = "1000";
    btn.classList.add("back-to-top-btn");

    document.body.appendChild(btn);
    return btn;
  }

  // --- Show/hide button by adding/removing visible class ---
  function toggleButtonVisibility(btn) {
    if (window.scrollY > SCROLL_TRIGGER) {
      btn.classList.add(VISIBLE_CLASS);
    } else {
      btn.classList.remove(VISIBLE_CLASS);
    }
  }

  // --- Scroll to top smoothly on button click ---
  function scrollToTop(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // --- Initialize functionality when DOM is ready ---
  function initBackToTop() {
    const btn = createBackToTopButton();
    if (!btn) return;

    // Scroll event: toggle button visibility
    window.addEventListener("scroll", () => toggleButtonVisibility(btn));

    // Click event: scroll to top
    btn.addEventListener("click", scrollToTop);

    // Also allow "Enter" and "Space" for keyboard users
    btn.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        scrollToTop(e);
      }
    });
  }

  // --- Run init when DOM is ready ---
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initBackToTop);
  } else {
    initBackToTop();
  }
})();
