"use strict";

document.documentElement.classList.add("has-js");
const base = document.body.dataset.baseurl || "";
const root = document.documentElement;
const themeToggle = document.getElementById("theme-toggle");
function updateThemeButton() {
  const dark = root.dataset.theme === "dark";
  themeToggle.setAttribute("aria-pressed", String(dark));
  themeToggle.setAttribute(
    "aria-label",
    dark ? "Switch to light theme" : "Switch to dark theme",
  );
}
updateThemeButton();
themeToggle.addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  try {
    localStorage.setItem("maddyzone-blog-theme", root.dataset.theme);
  } catch (_) {}
  updateThemeButton();
});

const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-navigation");
function closeMenu(restoreFocus = false) {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
  mainNav.classList.remove("is-open");
  if (restoreFocus) menuToggle.focus();
}
menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute(
    "aria-label",
    open ? "Close navigation" : "Open navigation",
  );
  mainNav.classList.toggle("is-open", open);
});
mainNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});
document
  .querySelector(".wordmark")
  .addEventListener("click", () => closeMenu());
document.addEventListener("click", (event) => {
  if (!event.target.closest(".site-header")) closeMenu();
});
window.matchMedia("(min-width: 681px)").addEventListener("change", (event) => {
  if (event.matches) closeMenu();
});

// Fetch the Jekyll-generated index once. All article text is inserted safely.
let indexPromise;
function loadIndex() {
  if (!indexPromise) {
    indexPromise = fetch(`${base}/search.json`)
      .then((response) => {
        if (!response.ok) throw new Error("Index unavailable");
        return response.json();
      })
      .then((data) => {
        if (!Array.isArray(data)) throw new Error("Invalid index");
        return data.filter((post) => {
          try {
            return (
              new URL(post.url, location.origin).origin === location.origin
            );
          } catch (_) {
            return false;
          }
        });
      })
      .catch((error) => {
        indexPromise = null;
        throw error;
      });
  }
  return indexPromise;
}
function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}
function findNotes(posts, query, topic = "") {
  const words = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  return posts.filter((post) => {
    const categories = Array.isArray(post.categories) ? post.categories : [];
    const tags = Array.isArray(post.tags) ? post.tags : [];
    const haystack = [post.title, post.excerpt, ...categories, ...tags]
      .join(" ")
      .toLowerCase();
    return (
      (!topic ||
        categories.some(
          (category) => category.toLowerCase() === topic.toLowerCase(),
        )) &&
      words.every((word) => haystack.includes(word))
    );
  });
}

const dialog = document.getElementById("search-dialog");
const searchToggle = document.getElementById("search-toggle");
const globalInput = document.getElementById("global-search");
const searchStatus = document.getElementById("search-status");
const searchResults = document.getElementById("search-results");
let searchVersion = 0;
let searchOpener;
async function renderGlobalSearch() {
  const version = ++searchVersion;
  const query = globalInput.value.trim();
  searchResults.replaceChildren();
  if (!query) {
    searchStatus.textContent =
      "Search the whole notebook. Try JavaScript, Angular, or AI.";
    return;
  }
  searchStatus.textContent = "Looking through the notebook…";
  try {
    const posts = await loadIndex();
    if (version !== searchVersion || !dialog.open) return;
    const matches = findNotes(posts, query);
    searchStatus.textContent = matches.length
      ? `${matches.length} ${matches.length === 1 ? "note" : "notes"} found. Showing ${Math.min(matches.length, 20)}.`
      : `No notes found for “${query}”. Try a shorter phrase or a topic.`;
    const fragment = document.createDocumentFragment();
    matches.slice(0, 20).forEach((post) => {
      const link = element("a", "search-result");
      link.href = post.url;
      link.append(
        element("strong", "", post.title),
        element(
          "small",
          "",
          [post.date, ...(post.categories || []).slice(0, 2)].join(" / "),
        ),
        element("p", "", post.excerpt),
      );
      fragment.append(link);
    });
    if (matches.length > 20) {
      const all = element(
        "a",
        "all-search-results",
        `Explore all ${matches.length} matching notes ↗`,
      );
      all.href = `${base}/?q=${encodeURIComponent(query)}#archive`;
      fragment.append(all);
    }
    searchResults.replaceChildren(fragment);
  } catch (_) {
    if (version === searchVersion)
      searchStatus.textContent =
        "Search is unavailable right now. The notebook can still be browsed normally.";
  }
}
function openSearch() {
  closeMenu();
  searchOpener = document.activeElement;
  dialog.showModal();
  document.body.classList.add("search-open");
  globalInput.value = "";
  globalInput.focus();
  renderGlobalSearch();
}
function closeSearch() {
  dialog.close();
}
searchToggle.addEventListener("click", openSearch);
document.getElementById("search-close").addEventListener("click", closeSearch);
dialog.addEventListener("close", () => {
  ++searchVersion;
  document.body.classList.remove("search-open");
  if (searchOpener && searchOpener.isConnected) searchOpener.focus();
});
dialog.addEventListener("click", (event) => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom
  )
    closeSearch();
});
globalInput.addEventListener("input", renderGlobalSearch);
document.addEventListener("keydown", (event) => {
  const typing = event.target.closest(
    'input,textarea,select,[contenteditable="true"]',
  );
  if (
    ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") ||
    (event.key === "/" && !typing)
  ) {
    event.preventDefault();
    if (dialog.open) closeSearch();
    else openSearch();
  }
  if (
    event.key === "Escape" &&
    menuToggle.getAttribute("aria-expanded") === "true"
  )
    closeMenu(true);
});

// Server pagination stays available without scripting. Filtering covers all posts.
const archiveInput = document.getElementById("archive-search");
if (archiveInput) {
  const grid = document.getElementById("notes-grid");
  const status = document.getElementById("archive-status");
  const pagination = document.getElementById("pagination");
  const topicButtons = [...document.querySelectorAll("[data-topic]")];
  const moreTopics = document.getElementById("more-topics");
  const params = new URLSearchParams(location.search);
  let query = params.get("q") || "";
  let topic = params.get("topic") || "";
  let currentPage = 1;
  let requestVersion = 0;
  let debounce;
  archiveInput.value = query;
  function syncTopics() {
    topicButtons.forEach((button) => {
      const active = button.dataset.topic === topic;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    moreTopics.value = [...moreTopics.options].some(
      (option) => option.value === topic,
    )
      ? topic
      : "";
  }
  function noteCard(post, index) {
    const card = element("article", "note-card");
    const top = element("div", "note-top");
    top.append(
      element(
        "span",
        "note-category",
        (post.categories || [])[0] || "Field notes",
      ),
      element("span", "note-number", String(index + 1).padStart(2, "0")),
    );
    const heading = element("h3");
    const link = element("a", "", post.title);
    link.href = post.url;
    heading.append(link);
    const bottom = element("div", "note-bottom");
    const date = element("time", "", post.date);
    if (post.dateISO) date.dateTime = post.dateISO;
    const read = element("a", "", "↗");
    read.href = post.url;
    read.setAttribute("aria-label", `Read ${post.title}`);
    bottom.append(
      date,
      element("span", "", `${post.minutes || 1} min read`),
      read,
    );
    card.append(top, heading, element("p", "", post.excerpt), bottom);
    return card;
  }
  async function renderArchive() {
    const version = ++requestVersion;
    syncTopics();
    grid.setAttribute("aria-busy", "true");
    status.textContent = "Finding your notes…";
    try {
      const posts = await loadIndex();
      if (version !== requestVersion) return;
      const matches = findNotes(posts, query, topic);
      const pages = Math.max(1, Math.ceil(matches.length / 10));
      currentPage = Math.max(1, Math.min(currentPage, pages));
      const start = (currentPage - 1) * 10;
      grid.replaceChildren(
        ...matches
          .slice(start, start + 10)
          .map((post, index) => noteCard(post, start + index)),
      );
      if (!matches.length) {
        const empty = element("div", "empty-results");
        empty.append(
          element("h3", "", "A blank page, for now."),
          element("p", "", "Try another topic or a shorter search."),
        );
        grid.append(empty);
      }
      status.textContent = `${matches.length} ${matches.length === 1 ? "note" : "notes"}${topic ? ` in ${topic}` : ""}${query ? ` matching “${query}”` : ""} · Page ${currentPage} of ${pages}`;
      pagination.replaceChildren();
      function pageButton(text, step) {
        const button = element("button", "", text);
        button.type = "button";
        button.addEventListener("click", async () => {
          currentPage += step;
          await renderArchive();
          document
            .getElementById("archive-title")
            .scrollIntoView({ behavior: "auto", block: "start" });
        });
        return button;
      }
      pagination.append(
        currentPage > 1 ? pageButton("← Previous notes", -1) : element("span"),
        element("span", "", `PAGE ${currentPage} / ${pages}`),
        currentPage < pages
          ? pageButton("More discoveries →", 1)
          : element("span"),
      );
      const url = new URL(location.href);
      if (query) url.searchParams.set("q", query);
      else url.searchParams.delete("q");
      if (topic) url.searchParams.set("topic", topic);
      else url.searchParams.delete("topic");
      history.replaceState(null, "", url);
    } catch (_) {
      if (version === requestVersion)
        status.textContent =
          "Filtering is unavailable right now. Your current notes and page links are still here.";
    } finally {
      if (version === requestVersion) grid.removeAttribute("aria-busy");
    }
  }
  archiveInput.addEventListener("input", () => {
    query = archiveInput.value.trim();
    currentPage = 1;
    ++requestVersion;
    clearTimeout(debounce);
    debounce = setTimeout(renderArchive, 150);
  });
  archiveInput.addEventListener("focus", () => {
    loadIndex().catch(() => {});
  });
  topicButtons.forEach((button) =>
    button.addEventListener("click", () => {
      clearTimeout(debounce);
      topic = button.dataset.topic;
      currentPage = 1;
      renderArchive();
    }),
  );
  moreTopics.addEventListener("change", () => {
    if (!moreTopics.value) return;
    clearTimeout(debounce);
    topic = moreTopics.value;
    currentPage = 1;
    renderArchive();
  });
  if (query || topic) renderArchive();
}

const article = document.getElementById("article-body");
if (article) {
  // The page title is the sole H1; preserve the author's internal headings as H2s.
  article.querySelectorAll("h1").forEach((heading) => {
    const replacement = document.createElement("h2");
    [...heading.attributes].forEach((attribute) =>
      replacement.setAttribute(attribute.name, attribute.value),
    );
    replacement.append(...heading.childNodes);
    heading.replaceWith(replacement);
  });
  const headings = [...article.querySelectorAll("h2,h3")];
  const tocLinks = document.getElementById("toc-links");
  headings.forEach((heading, index) => {
    if (!heading.id) heading.id = `note-section-${index + 1}`;
    const link = element(
      "a",
      heading.tagName === "H3" ? "toc-sub" : "",
      heading.textContent,
    );
    link.href = `#${heading.id}`;
    tocLinks.append(link);
  });
  document.getElementById("table-of-contents").hidden = !headings.length;
  if ("IntersectionObserver" in window && headings.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          [...tocLinks.children].forEach((link) => {
            const active = link.hash.slice(1) === entry.target.id;
            link.classList.toggle("is-active", active);
            if (active) link.setAttribute("aria-current", "location");
            else link.removeAttribute("aria-current");
          });
        });
      },
      { rootMargin: "-15% 0px -65% 0px" },
    );
    headings.forEach((heading) => observer.observe(heading));
  }
  article.querySelectorAll("pre").forEach((pre) => {
    const wrap = element("div", "code-wrap");
    pre.replaceWith(wrap);
    wrap.append(pre);
    const copy = element("button", "copy-code", "Copy code");
    copy.type = "button";
    copy.setAttribute("aria-label", "Copy this code block");
    copy.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(pre.textContent);
        copy.textContent = "Copied ✓";
      } catch (_) {
        copy.textContent = "Select & copy";
      }
      setTimeout(() => {
        copy.textContent = "Copy code";
      }, 1800);
    });
    wrap.append(copy);
  });
  const progress = document.getElementById("reading-progress");
  let frame;
  function updateProgress() {
    frame = null;
    const rect = article.getBoundingClientRect();
    const available = Math.max(
      1,
      article.offsetHeight - window.innerHeight + 100,
    );
    const percentage = Math.max(
      0,
      Math.min(100, ((100 - rect.top) / available) * 100),
    );
    progress.style.width = `${percentage}%`;
  }
  window.addEventListener(
    "scroll",
    () => {
      if (!frame) frame = requestAnimationFrame(updateProgress);
    },
    { passive: true },
  );
  window.addEventListener("resize", updateProgress);
  updateProgress();
}
