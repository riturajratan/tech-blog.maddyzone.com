/* Deliberate article placements; Google CMP owns regional consent decisions. */
(function () {
  "use strict";
  const preferenceKey = "maddyzone-blog-hide-ads-v1";
  function wordCount(text) {
    return (text.trim().match(/\S+/g) || []).length;
  }
  function placementPlan(blocks) {
    const words = blocks.map((block) =>
      /^(P|H[1-6]|UL|OL|BLOCKQUOTE)$/.test(block.tag)
        ? wordCount(block.text)
        : 0,
    );
    const total = words.reduce((sum, value) => sum + value, 0);
    let midAfter = -1;
    let consumed = 0;
    let distance = Infinity;
    blocks.forEach((block, index) => {
      consumed += words[index];
      const next = blocks[index + 1];
      // Never split a code example, list, image, or the sentence introducing it.
      if (
        total >= 1000 &&
        block.tag === "P" &&
        words[index] >= 15 &&
        !/[:：]\s*$/.test(block.text) &&
        next &&
        /^(P|H[1-6])$/.test(next.tag) &&
        consumed >= 400 &&
        total - consumed >= 300 &&
        Math.abs(consumed - total / 2) < distance
      ) {
        distance = Math.abs(consumed - total / 2);
        midAfter = index;
      }
    });
    return { end: total >= 250, midAfter };
  }
  function productionHost(host) {
    return host === "tech-blog.maddyzone.com";
  }
  // The small pure functions are also exercised by the Node placement tests.
  if (typeof module !== "undefined" && module.exports) {
    module.exports = { placementPlan, productionHost };
    return;
  }
  const local = ["localhost", "127.0.0.1"].includes(location.hostname);
  const preview =
    local && new URLSearchParams(location.search).get("ad-preview") === "1";
  const production =
    productionHost(location.hostname) &&
    document.body.dataset.adsEnabled === "true";
  let hidden = false;
  try {
    hidden = localStorage.getItem(preferenceKey) === "true";
  } catch (_) {}
  const status = document.getElementById("ad-preference-status");
  if (status)
    status.textContent = hidden
      ? "Ads are off in this browser."
      : "Ads are allowed in this browser, subject to your Google consent choices and ad availability.";
  function chooseAds(hide) {
    try {
      localStorage.setItem(preferenceKey, String(hide));
      location.reload();
    } catch (_) {
      if (status)
        status.textContent =
          "Your browser could not save this choice. Use its site-data or content-blocking controls to manage advertising.";
    }
  }
  document
    .getElementById("hide-blog-ads")
    ?.addEventListener("click", () => chooseAds(true));
  document
    .getElementById("allow-blog-ads")
    ?.addEventListener("click", () => chooseAds(false));
  if ((!production && !preview) || hidden) return;

  const client = document.body.dataset.adClient;
  const slot = document.body.dataset.adSlot;
  if (!/^ca-pub-\d{16}$/.test(client || "") || !/^\d+$/.test(slot || ""))
    return;
  let loader;
  function loadGoogle() {
    if (loader) return loader;
    loader = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.async = true;
      script.crossOrigin = "anonymous";
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`;
      script.onload = resolve;
      script.onerror = reject;
      document.head.append(script);
    });
    return loader;
  }

  // The certified Google message exposes a revocation entry point where it applies.
  if (production) {
    window.googlefc = window.googlefc || {};
    window.googlefc.callbackQueue = window.googlefc.callbackQueue || [];
    window.googlefc.callbackQueue.push({
      CONSENT_API_READY: () => {
        if (typeof window.__tcfapi !== "function") return;
        window.__tcfapi("addEventListener", 0, (data, success) => {
          if (!success || !data?.gdprApplies) return;
          document
            .querySelectorAll("[data-google-privacy]")
            .forEach((button) => {
              button.hidden = false;
              button.onclick = () =>
                window.googlefc.callbackQueue.push({
                  CONSENT_API_READY: () =>
                    window.googlefc.showRevocationMessage(),
                });
            });
        });
      },
    });
    // Privacy settings must work when reached directly from any article.
    if (status) loadGoogle().catch(() => {});
  }

  const article = document.querySelector("article#article-body");
  if (!article) return;
  const children = Array.from(article.children);
  const plan = placementPlan(
    children.map((node) => ({
      tag: node.tagName,
      text: node.textContent || "",
    })),
  );
  if (!plan.end) return;
  const slots = [];
  const units = new Map();
  function makePlacement(position) {
    const area = document.createElement("aside");
    area.className = "article-ad";
    area.setAttribute("aria-label", "Advertisement");
    area.dataset.adPosition = position;
    area.hidden = true;
    const label = document.createElement("span");
    label.className = "article-ad-label";
    label.textContent = preview
      ? "AD PLACEMENT PREVIEW · NO LIVE AD"
      : "Advertisement";
    area.append(label);
    if (preview) {
      area.hidden = false;
      const sample = document.createElement("div");
      sample.className = "article-ad-preview";
      sample.textContent = "Responsive advertising space";
      area.append(sample);
    } else {
      const unit = document.createElement("ins");
      unit.className = "adsbygoogle";
      // Google's supported expandable-width/fixed-height responsive variant.
      unit.style.cssText = "display:block;width:100%;height:100px";
      unit.dataset.adClient = client;
      unit.dataset.adSlot = slot;
      // Append the ins only when requesting it: AdSense processes pending ins
      // elements in document order, regardless of which observer entry fired.
      units.set(area, unit);
      new MutationObserver(() => {
        if (unit.dataset.adStatus === "unfilled") area.hidden = true;
      }).observe(unit, {
        attributes: true,
        attributeFilter: ["data-ad-status"],
      });
    }
    slots.push(area);
    return area;
  }
  if (plan.midAfter >= 0)
    children[plan.midAfter].after(makePlacement("mid-article"));
  article.append(makePlacement("article-end"));
  if (preview) return;
  // Load the consent/ad tag once. Request each manual unit only near the viewport.
  loadGoogle()
    .then(() => {
      function request(area) {
        area.hidden = false;
        if (area.clientWidth < 280) {
          area.hidden = true;
          return;
        }
        area.append(units.get(area));
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (_) {
          area.hidden = true;
        }
      }
      if (!("IntersectionObserver" in window)) {
        slots.forEach(request);
        return;
      }
      // Hidden nodes have no intersection box, so reserve the small banner space first.
      slots.forEach((area) => {
        area.hidden = false;
      });
      const observer = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              observer.unobserve(entry.target);
              request(entry.target);
            }
          }),
        { rootMargin: "400px" },
      );
      slots.forEach((area) => observer.observe(area));
    })
    .catch(() =>
      slots.forEach((area) => {
        area.hidden = true;
      }),
    );
})();
