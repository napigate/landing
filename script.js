const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const revealNodes = document.querySelectorAll("[data-reveal]");
const counters = document.querySelectorAll("[data-count]");
const yearNode = document.getElementById("year");
const previewTabs = document.querySelectorAll("[data-preview-tab]");
const previewPanels = document.querySelectorAll("[data-preview-panel]");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (previewTabs.length && previewPanels.length) {
  previewTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.previewTab;

      previewTabs.forEach((item) => {
        const isActive = item === tab;
        item.classList.toggle("is-active", isActive);
        item.setAttribute("aria-selected", String(isActive));
      });

      previewPanels.forEach((panel) => {
        panel.classList.toggle("is-active", panel.dataset.previewPanel === target);
      });
    });
  });
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

revealNodes.forEach((node) => revealObserver.observe(node));

const animateCounter = (node) => {
  const target = Number(node.dataset.count || 0);
  const startedAt = performance.now();
  const duration = 800;

  const tick = (now) => {
    const progress = Math.min((now - startedAt) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    node.textContent = String(Math.round(target * eased));
    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  };

  requestAnimationFrame(tick);
};

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.7 }
);

counters.forEach((counter) => counterObserver.observe(counter));

if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}
