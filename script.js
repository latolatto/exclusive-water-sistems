const page = document.body.dataset.page || "home";
const phone = "355685908850";
const instagramUrl = "https://www.instagram.com/filtra_uji_company/";
const facebookUrl = "https://www.facebook.com/profile.php?id=61591519091824";
const googleUrl = "https://share.google/O7gCkZ4fCif8CuzUJ";
const navItems = [
  ["home", "Kryefaqja", "index.html"],
  ["products", "Produktet", "produktet.html"],
  ["filters", "Filtrat", "filtrat.html"],
  ["jobs", "Karriera", "karriera.html"],
  ["about", "Rreth nesh", "rreth-nesh.html"],
  ["contact", "Kontakt", "kontakt.html"]
];

const whatsappIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.4a9.4 9.4 0 0 0-8.1 14.2L2.7 21l4.6-1.2A9.4 9.4 0 1 0 12 2.4Zm0 16.9a7.5 7.5 0 0 1-3.8-1l-.3-.2-2.7.7.7-2.6-.2-.3a7.5 7.5 0 1 1 6.3 3.4Zm4.1-5.6c-.2-.1-1.3-.7-1.5-.7-.2-.1-.4-.1-.5.1-.2.2-.6.7-.8.9-.1.1-.3.2-.5.1-.2-.1-.9-.3-1.8-1.1-.7-.6-1.1-1.3-1.3-1.5-.1-.2 0-.4.1-.5l.4-.4.2-.4c.1-.1 0-.3 0-.4s-.5-1.2-.7-1.6c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.3c.1.2 1.6 2.4 3.8 3.3.5.2.9.4 1.2.4.5.2 1 .1 1.4.1.4-.1 1.3-.5 1.5-1 .2-.5.2-.9.1-1-.1-.1-.2-.2-.4-.3Z"/></svg>`;
const instagramIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.2 2.8h9.6a4.4 4.4 0 0 1 4.4 4.4v9.6a4.4 4.4 0 0 1-4.4 4.4H7.2a4.4 4.4 0 0 1-4.4-4.4V7.2a4.4 4.4 0 0 1 4.4-4.4Zm0 1.9a2.5 2.5 0 0 0-2.5 2.5v9.6a2.5 2.5 0 0 0 2.5 2.5h9.6a2.5 2.5 0 0 0 2.5-2.5V7.2a2.5 2.5 0 0 0-2.5-2.5H7.2Zm4.8 2.5a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm0 1.9a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8Zm5-3.2a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z"/></svg>`;

const header = document.querySelector("#site-header");
if (header) header.innerHTML = `<div class="topline"><div class="container topline-inner"><a class="top-addr" href="https://maps.google.com/?q=Rruga+26+Nentori,+Durres" target="_blank" rel="noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"/><circle cx="12" cy="9" r="2.2"/></svg>Rruga 26 Nëntori, Durrës</a><div class="topline-links"><a class="top-social" href="https://wa.me/${phone}" target="_blank" rel="noreferrer" aria-label="WhatsApp">${whatsappIcon}</a><a class="top-social" href="${instagramUrl}" target="_blank" rel="noreferrer" aria-label="Instagram">${instagramIcon}</a><a class="top-social google-icon" href="${googleUrl}" target="_blank" rel="noreferrer" aria-label="Profili në Google">G</a><a class="top-social facebook-icon" href="${facebookUrl}" target="_blank" rel="noreferrer" aria-label="Facebook">f</a><span class="topline-divider"></span><a class="top-phone" href="tel:+${phone}">068 590 8850</a></div></div></div><header class="site-header"><div class="container nav-wrap"><a class="brand" href="index.html" aria-label="Exclusive Water Systems, faqja kryesore"><img src="assets/icon.svg" alt="" class="brand-mark"><span class="brand-copy"><b>EXCLUSIVE</b><small>WATER SYSTEMS</small></span></a><button class="menu-toggle" type="button" aria-expanded="false" aria-controls="main-nav" aria-label="Hap menunë"><span></span><span></span><span></span></button><nav class="main-nav" id="main-nav" aria-label="Navigimi kryesor">${navItems.map(([key, label, url]) => `<a href="${url}" class="${page === key ? "active" : ""}">${label}</a>`).join("")}<a class="nav-cta" href="konsulta-falas.html">Konsultë falas <span>↗︎</span></a></nav></div></header>`;

const footer = document.querySelector("#site-footer");
if (footer) footer.innerHTML = `<footer class="site-footer"><div class="container footer-main"><div class="footer-brand-block"><a class="brand brand-footer" href="index.html"><img src="assets/icon.svg" alt="" class="brand-mark"><span class="brand-copy"><b>EXCLUSIVE</b><small>WATER SYSTEMS</small></span></a><p>Zgjidhje profesionale për trajtimin e ujit. Konsultë falas dhe analizë uji në Durrës.</p><div class="footer-social"><a href="${instagramUrl}" target="_blank" rel="noreferrer" aria-label="Instagram">IG</a><a href="${facebookUrl}" target="_blank" rel="noreferrer" aria-label="Facebook">f</a><a href="https://wa.me/${phone}" target="_blank" rel="noreferrer" aria-label="WhatsApp">WA</a></div></div><div class="footer-links"><b>Eksploro</b><a href="produktet.html">Produktet</a><a href="filtrat.html">Filtrat</a><a href="konsulta-falas.html">Konsultë falas</a><a href="karriera.html">Karriera</a><a href="rreth-nesh.html">Rreth nesh</a></div><div class="footer-contact"><b>Na kontakto</b><a href="tel:+${phone}">068 590 8850</a><a href="mailto:Exclusivewater12@gmail.com">Exclusivewater12@gmail.com</a><a href="https://maps.google.com/?q=Rruga+26+Nentori,+Durres" target="_blank" rel="noreferrer">Rruga 26 Nëntori, Durrës <span>↗︎</span></a><a href="${googleUrl}" target="_blank" rel="noreferrer">Vlerësimet në Google · 5.0/5 <span>↗︎</span></a></div></div><div class="container footer-bottom"><span>© ${new Date().getFullYear()} Exclusive Water Systems</span><span>Ujë i filtruar, në shtëpinë tënde.</span></div></footer>`;

const menuButton = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
menuButton?.addEventListener("click", () => {
  const expanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!expanded));
  menuButton.setAttribute("aria-label", expanded ? "Hap menunë" : "Mbyll menunë");
  mainNav?.classList.toggle("open", !expanded);
});
mainNav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  menuButton?.setAttribute("aria-expanded", "false");
  menuButton?.setAttribute("aria-label", "Hap menunë");
  mainNav.classList.remove("open");
}));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuButton?.getAttribute("aria-expanded") === "true") {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Hap menunë");
    mainNav?.classList.remove("open");
    menuButton.focus();
  }
});

document.querySelectorAll(".faq-list details").forEach((item) => item.addEventListener("toggle", () => {
  if (item.open) document.querySelectorAll(".faq-list details").forEach((other) => { if (other !== item) other.open = false; });
}));

const waterForm = document.querySelector("#water-form");
const problemBoxes = [...document.querySelectorAll('#water-form input[name="probleme"]')];
const problemError = document.querySelector("#problem-error");
problemBoxes.forEach((box) => box.addEventListener("change", () => {
  if (problemBoxes.some((item) => item.checked) && problemError) problemError.hidden = true;
}));
waterForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const checked = problemBoxes.filter((input) => input.checked);
  if (problemBoxes.length && !checked.length) {
    if (problemError) problemError.hidden = false;
    problemBoxes[0]?.focus();
    return;
  }
  if (problemError) problemError.hidden = true;
  if (!waterForm.reportValidity()) return;
  const data = new FormData(waterForm);
  const lines = ["Përshëndetje Exclusive Water Systems, dua të kërkoj një konsultë dhe analizë falas të ujit.", "", "TË DHËNAT PERSONALE", `Emri: ${data.get("emri")}`, `Telefoni: ${data.get("telefoni")}`, `Qyteti / zona: ${data.get("qyteti")}`, `Grupmosha: ${data.get("grupmosha")}`, `Statusi familjar: ${data.get("statusi")}`, `Banesa: ${data.get("banesa")}`, `Punësimi: ${data.get("punesimi")}`, "", "INFORMACION PËR UJIN", `Burimi: ${data.get("burimi")}`, `Pi direkt nga çezma: ${data.get("pi-uje")}`, `Cilësia e vlerësuar: ${data.get("cilesia")}`, `Problemet e vërejtura: ${checked.map((input) => input.value).join(", ") || "Pa përgjigje"}`, `Përdor filtër: ${data.get("filter-aktual")}`, "", "TAKIMI", `Disponueshmëria: ${data.get("takimi")}`, `Adresa: ${data.get("adresa")}`, `Sugjeruar nga: ${data.get("referuesi")}`];
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener,noreferrer");
});

const contactForm = document.querySelector("#contact-form");
contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;
  const data = new FormData(contactForm);
  const message = ["Përshëndetje Exclusive Water Systems, kam një kërkesë.", "", `Emri: ${data.get("emri")}`, `Telefoni: ${data.get("telefoni")}`, `Tema: ${data.get("tema")}`, `Mesazhi: ${data.get("mesazhi")}`].join("\n");
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
});

if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const revealSelector = ["main section:not(.hero):not(.page-hero) .section-heading", ".intro-heading", ".solution-card", ".catalog-card", ".story-grid > *", ".consultation-intro > *", ".service-tile", ".quote-inner > *", ".home-cta-inner > *", ".solution-detail > *", ".product-note", ".accessory-card", ".maintenance-inner > *", ".job-card", ".contact-grid > *", ".contact-form-layout > *", ".faq-grid > *", ".faq-list details", ".bottom-cta-inner > *"].join(",");
  const revealItems = [...document.querySelectorAll(revealSelector)];
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -30px 0px" });
  revealItems.forEach((element, index) => {
    element.classList.add("scroll-reveal");
    element.style.setProperty("--reveal-delay", `${(index % 4) * 75}ms`);
    revealObserver.observe(element);
  });
}
document.addEventListener("click", function menuOutside(event) {
  if (menuButton?.getAttribute("aria-expanded") !== "true") return;
  if (mainNav?.contains(event.target) || menuButton.contains(event.target)) return;
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Hap menunë");
  mainNav?.classList.remove("open");
});
