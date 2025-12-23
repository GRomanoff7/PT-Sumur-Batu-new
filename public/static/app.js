// Main application JavaScript for PT Sumur Batu website
(function () {
  "use strict";

  // Mobile menu toggle
  function initMobileMenu() {
    const menuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuButton && mobileMenu) {
      menuButton.addEventListener("click", function () {
        mobileMenu.classList.toggle("hidden");
      });
    }
  }

  // CountUp animation for stats
  function animateCountUp() {
    const countupElements = document.querySelectorAll(".countup");

    countupElements.forEach((element) => {
      const target = parseInt(element.getAttribute("data-target"));
      const suffix = element.getAttribute("data-suffix") || "";
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60fps
      let current = 0;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                  element.textContent = target + suffix;
                  clearInterval(timer);
                } else {
                  element.textContent = Math.floor(current) + suffix;
                }
              }, 16);
              observer.unobserve(element);
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(element);
    });
  }

  // Spotlight effect for cards
  function initSpotlightEffect() {
    const cards = document.querySelectorAll(".spotlight-card");

    cards.forEach((card) => {
      card.addEventListener("mousemove", function (e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const overlay = card.querySelector(".spotlight-overlay");
        if (overlay) {
          overlay.style.background = `radial-gradient(circle 200px at ${x}px ${y}px, rgba(59, 130, 246, 0.15), transparent)`;
        }
      });
    });
  }

  // Initialize all features
  function init() {
    initMobileMenu();
    animateCountUp();
    initSpotlightEffect();
  }

  // Run initialization when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
