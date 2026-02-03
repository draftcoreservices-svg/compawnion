\
(() => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Mobile nav
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.getAttribute("data-open") === "true";
      nav.setAttribute("data-open", (!open).toString());
      toggle.setAttribute("aria-expanded", (!open).toString());
    });

    // Close on outside click
    document.addEventListener("click", (e) => {
      const within = nav.contains(e.target) || toggle.contains(e.target);
      if (!within) {
        nav.setAttribute("data-open", "false");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // FAQ accordions
  document.querySelectorAll(".faq-item").forEach(item => {
    const btn = item.querySelector(".faq-q");
    if (!btn) return;
    btn.addEventListener("click", () => {
      const open = item.getAttribute("data-open") === "true";
      item.setAttribute("data-open", (!open).toString());
    });
  });

  // Pricing toggle
  const sw = document.querySelector(".switch");
  const priceEls = document.querySelectorAll("[data-monthly][data-yearly]");
  const billedEls = document.querySelectorAll("[data-billed]");
  const label = document.querySelector("[data-toggle-label]");
  function renderPricing(onYearly){
    priceEls.forEach(el => {
      el.textContent = onYearly ? el.getAttribute("data-yearly") : el.getAttribute("data-monthly");
    });
    billedEls.forEach(el => {
      el.textContent = onYearly ? "billed yearly" : "billed monthly";
    });
    if (label) label.textContent = onYearly ? "Yearly (2 months free)" : "Monthly";
  }
  if (sw) {
    let onYearly = sw.getAttribute("data-on") === "true";
    renderPricing(onYearly);
    sw.addEventListener("click", () => {
      onYearly = !onYearly;
      sw.setAttribute("data-on", onYearly.toString());
      renderPricing(onYearly);
    });
  }

  // Fake form submit (static site friendly)
  document.querySelectorAll("form[data-static]").forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const out = form.querySelector("[data-form-status]");
      if (out) {
        out.textContent = "Thanks! This demo site doesn’t submit anywhere yet — wire it up to Formspree/Netlify when you’re ready.";
        out.classList.add("notice");
      }
      form.reset();
    });
  });
})();
