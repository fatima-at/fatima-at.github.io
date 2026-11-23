/* Site links: edit them here once, every page picks them up.
   An empty value hides that link everywhere. */
const LINKS = {
  hal: "https://hal.science/hal-05860566",
  project: "https://fatima-at.github.io/H12-SNN/",
  linkedin: "https://www.linkedin.com/in/fatima-atwi-7340752b4/",       
  github: "https://github.com/fatima-at",
  email: "fatimaatwi.010@gmail.com"
};

(() => {
  for (const a of document.querySelectorAll("[data-link]")) {
    const key = a.dataset.link;
    const url = LINKS[key];
    if (!url) {
      (a.closest("[data-link-item]") || a).remove();
      continue;
    }
    if (key === "email") {
      a.href = "mailto:" + url;
      if (!a.textContent.trim()) a.textContent = url;
    } else {
      a.href = url;
      a.target = "_blank";
      a.rel = "noopener";
    }
  }

  // Respect reduced motion: no autoplaying loops.
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    for (const v of document.querySelectorAll("video[autoplay]")) {
      v.removeAttribute("autoplay");
      v.pause();
      v.controls = true;
    }
  }

  // BibTeX toggle and copy.
  for (const btn of document.querySelectorAll("[data-bib]")) {
    const box = document.getElementById(btn.dataset.bib);
    btn.addEventListener("click", () => {
      const open = box.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
    });
  }
  for (const btn of document.querySelectorAll("[data-copy]")) {
    btn.addEventListener("click", async () => {
      const text = document.getElementById(btn.dataset.copy).textContent;
      try {
        await navigator.clipboard.writeText(text);
        btn.textContent = "Copied";
      } catch (e) {
        btn.textContent = "Select the text to copy";
      }
      setTimeout(() => { btn.textContent = "Copy BibTeX"; }, 1800);
    });
  }

  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
