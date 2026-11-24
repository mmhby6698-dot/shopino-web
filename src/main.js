import { demos, categories } from "./demos.js";

const translations = {
  fa: {
    metaTitle: "شاپینو | ممد امین — طراحی وب",
    metaDescription: "شاپینو؛ طراحی فروشگاه اینترنتی، لندینگ پیج و سایت شخصی برای کسب‌وکارهایی که از اینستاگرام شروع کرده‌اند.",
    ogTitle: "شاپینو | ممد امین",
    ogDescription: "از پیج اینستا تا فروشگاه اینترنتی خودت؛ سایت سریع، موبایل‌پسند و با پنل فارسی.",
    ogLocale: "fa_IR",
    brandAria: "شاپینو، طراحی وب — بازگشت به ابتدای صفحه",
    navAria: "ناوبری اصلی",
    navToggle: "منو",
    navToggleAria: "باز و بسته کردن منو",
    filterAria: "فیلتر نمونه‌کارها",
    footerNavAria: "پیوندهای پایانی",
    brand: "شاپینو",
    brandTag: "طراحی وب",
    toggle: "EN",
    toggleAria: "EN — Switch to English",
    headerCta: "مشاوره رایگان",
    navPortfolio: "نمونه‌کارها",
    navServices: "خدمات",
    navProcess: "مسیر کار",
    navContact: "تماس",
    heroTitle: "از پیج اینستا تا <span>فروشگاه اینترنتی</span> خودت",
    heroSubtitle: "سایت سریع و موبایل‌پسند، با پنل فارسی که خودت مدیریتش می‌کنی.",
    heroPrimary: "مشاوره رایگان در دایرکت",
    heroSecondary: "دیدن نمونه‌کارها",
    portfolioTitle: "نمونه‌کارها",
    portfolioLead: "دموهای نمایشی‌اند، نه سایت مشتری واقعی. باز کن و کیفیت اجرا را ببین.",
    showMore: "نمایش بیشتر",
    openDemo: "بازدید از دمو",
    servicesTitle: "خدمات",
    service1Title: "فروشگاه اینترنتی",
    service1Text: "محصول، سبد خرید و پنل فارسی.",
    service2Title: "لندینگ پیج",
    service2Text: "یک صفحه متمرکز برای معرفی یا تبلیغ.",
    service3Title: "سایت شخصی و شرکتی",
    service3Text: "معرفی برند، خدمات و نمونه‌کارها.",
    service4Title: "لوگو و هویت بصری",
    service4Text: "رنگ و لوگو هماهنگ با برند.",
    processTitle: "مسیر کار",
    step1Title: "مشاوره",
    step1Text: "نیازت را می‌شنوم و مسیر را مشخص می‌کنیم.",
    step2Title: "طراحی",
    step2Text: "ظاهر و تجربه موبایل با نظر تو پیش می‌رود.",
    step3Title: "تحویل",
    step3Text: "سایت راه‌اندازی می‌شود و آموزش پنل می‌گیری.",
    step4Title: "پشتیبانی",
    step4Text: "برای راهنمایی و رفع اشکال در کنارت هستم.",
    trustLine: "برآورد زمان و هزینه بعد از بررسی اعلام می‌شود. رتبه گوگل تضمینی نیست. مالکیت دامنه و هاست با تو می‌ماند. <a href=\"https://ponisha.ir/profile/Mmhby87\" target=\"_blank\" rel=\"noopener noreferrer\">پروفایل پونیشا</a>",
    faqTitle: "پرسش‌های پرتکرار",
    faq1Q: "زمان تحویل سایت چقدر است؟",
    faq1A: "بسته به حجم کار و آماده بودن محتوا متفاوت است؛ بعد از بررسی نیازت، برآورد اعلام می‌شود.",
    faq2Q: "پنل مدیریت فارسی دارد؟",
    faq2A: "بله؛ پنل فارسی برای مدیریت محتوا و محصولات طراحی می‌شود و بعد از تحویل آموزش کار با آن را می‌گیری.",
    faq3Q: "هاست، دامنه و درگاه پرداخت چطور است؟",
    faq3A: "هزینه هاست، دامنه و درگاه بر عهده خریدار است؛ در انتخاب و راه‌اندازی راهنمایی می‌شوی.",
    faq4Q: "هزینه طراحی چقدر است؟",
    faq4A: "قیمت ثابت و عمومی اعلام نمی‌شود؛ بسته به امکانات و حجم کار متفاوت است. استعلام در دایرکت.",
    contactTitle: "برای <span>مشاوره رایگان</span> پیام بده",
    contactLead: "بگو چه می‌فروشی و چه سایتی می‌خواهی.",
    contactButton: "پیام در دایرکت",
    contactPonisha: "پروفایل پونیشا",
    formNote: "این فرم جایی ارسال نمی‌شود؛ فقط پیامت را آماده می‌کند.",
    formName: "نام",
    formNeed: "چه سایتی می‌خوای؟",
    formNeedPlaceholder: "انتخاب کن",
    formNeedStore: "فروشگاه اینترنتی",
    formNeedLanding: "لندینگ پیج",
    formNeedCompany: "سایت شخصی یا شرکتی",
    formNeedIdentity: "لوگو و هویت بصری",
    formNeedOther: "سایر",
    formMsg: "توضیح کوتاه (اختیاری)",
    formSubmit: "آماده‌سازی پیام",
    formThanks: "پیام آماده شد و جایی ارسال نشد. می‌توانی متن را کپی کنی و در دایرکت یا پونیشا بفرستی.",
    formCopy: "کپی متن",
    formCopied: "کپی شد",
    formMessageLead: "سلام، من {name} هستم و برای {need} پیام می‌دهم.",
    footerCredit: "طراحی و توسعه توسط ممد امین",
    footerInstagram: "اینستاگرام",
    footerPonisha: "پونیشا: Mmhby87",
    footerTop: "بازگشت به بالا",
    stickyCta: "پیام در دایرکت"
  },
  en: {
    metaTitle: "Shopino | Mamad Amin — Web Design",
    metaDescription: "Shopino: online stores, landing pages and personal websites for businesses growing beyond Instagram.",
    ogTitle: "Shopino | Mamad Amin",
    ogDescription: "From an Instagram page to your online store; a fast, mobile-friendly site with a Persian admin panel.",
    ogLocale: "en_US",
    brandAria: "Shopino, Web design — back to top",
    navAria: "Primary navigation",
    navToggle: "Menu",
    navToggleAria: "Open or close the menu",
    filterAria: "Filter work",
    footerNavAria: "Footer links",
    brand: "Shopino",
    brandTag: "Web design",
    toggle: "FA",
    toggleAria: "FA — Switch to Persian",
    headerCta: "Free consult",
    navPortfolio: "Work",
    navServices: "Services",
    navProcess: "Process",
    navContact: "Contact",
    heroTitle: "From Instagram page to <span>your online store</span>",
    heroSubtitle: "A fast, mobile-friendly site with a Persian admin panel you can manage yourself.",
    heroPrimary: "Free consultation in DM",
    heroSecondary: "See the work",
    portfolioTitle: "Selected work",
    portfolioLead: "These are showcase demos, not real client websites. Open one and judge the quality.",
    showMore: "Show more",
    openDemo: "Open demo",
    servicesTitle: "Services",
    service1Title: "Online store",
    service1Text: "Products, cart and a Persian admin panel.",
    service2Title: "Landing page",
    service2Text: "A focused page for a product or campaign.",
    service3Title: "Personal and company site",
    service3Text: "Brand, services and portfolio pages.",
    service4Title: "Logo and visual identity",
    service4Text: "Color and logo aligned with the brand.",
    processTitle: "How we work",
    step1Title: "Consult",
    step1Text: "I listen to your needs and we set the path.",
    step2Title: "Design",
    step2Text: "Look and mobile experience are refined with you.",
    step3Title: "Delivery",
    step3Text: "The site goes live and you get panel training.",
    step4Title: "Support",
    step4Text: "I stay available for guidance and fixes.",
    trustLine: "Time and cost are estimated after a review. A Google ranking is not guaranteed. You keep the domain and hosting. <a href=\"https://ponisha.ir/profile/Mmhby87\" target=\"_blank\" rel=\"noopener noreferrer\">Ponisha profile</a>",
    faqTitle: "Common questions",
    faq1Q: "How long does delivery take?",
    faq1A: "It depends on scope and content readiness; an estimate is shared after reviewing your needs.",
    faq2Q: "Does it include a Persian admin panel?",
    faq2A: "Yes; a Persian panel is designed for managing content and products, and you receive training after delivery.",
    faq3Q: "What about hosting, domain and payments?",
    faq3A: "The buyer pays for hosting, domain and the payment gateway; you will be guided through setup.",
    faq4Q: "How much does the design cost?",
    faq4A: "There is no fixed public price; it varies by features and scope. Ask for a quote in DM.",
    contactTitle: "Message now for a <span>free consultation</span>",
    contactLead: "Tell me what you sell and what kind of website you need.",
    contactButton: "Message in DM",
    contactPonisha: "Ponisha profile",
    formNote: "This form is not sent anywhere; it only prepares your message.",
    formName: "Name",
    formNeed: "What kind of website do you need?",
    formNeedPlaceholder: "Choose one",
    formNeedStore: "Online store",
    formNeedLanding: "Landing page",
    formNeedCompany: "Personal or company website",
    formNeedIdentity: "Logo and visual identity",
    formNeedOther: "Other",
    formMsg: "Short note (optional)",
    formSubmit: "Prepare message",
    formThanks: "Your message is ready and was not sent anywhere. You can copy it and send it in DM or on Ponisha.",
    formCopy: "Copy text",
    formCopied: "Copied",
    formMessageLead: "Hi, my name is {name} and I am writing about {need}.",
    footerCredit: "Designed and developed by Mamad Amin",
    footerInstagram: "Instagram",
    footerPonisha: "Ponisha: Mmhby87",
    footerTop: "Back to top",
    stickyCta: "Message in DM"
  }
};

const PAGE_SIZE = 9;
const root = document.documentElement;
const header = document.querySelector(".site-header");
const langToggle = document.querySelector("#langToggle");
const navToggle = document.querySelector("#navToggle");
const siteNav = document.querySelector("#siteNav");
const grid = document.querySelector("#portfolioGrid");
const filtersEl = document.querySelector("#portfolioFilters");
const moreBtn = document.querySelector("#portfolioMore");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let currentLanguage = "fa";
let activeFilter = "all";
let visibleCount = PAGE_SIZE;

function setMeta(selector, attr, value) {
  const el = document.querySelector(selector);
  if (el && typeof value === "string") el.setAttribute(attr, value);
}

function applyTextTranslations() {
  const dict = translations[currentLanguage];
  if (!dict) return;
  document.title = dict.metaTitle;
  setMeta('meta[name="description"]', "content", dict.metaDescription);
  setMeta('meta[property="og:title"]', "content", dict.ogTitle);
  setMeta('meta[property="og:description"]', "content", dict.ogDescription);
  setMeta('meta[property="og:locale"]', "content", dict.ogLocale);
  setMeta('meta[name="twitter:title"]', "content", dict.ogTitle);
  setMeta('meta[name="twitter:description"]', "content", dict.ogDescription);
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = dict[element.dataset.i18n];
    if (typeof value === "string") element.textContent = value;
  });
  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const value = dict[element.dataset.i18nHtml];
    if (typeof value === "string") element.innerHTML = value;
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const value = dict[element.dataset.i18nAria];
    if (typeof value === "string") element.setAttribute("aria-label", value);
  });
}

function setLanguage(lang, { persist = true } = {}) {
  const dict = translations[lang];
  if (!dict) return;
  currentLanguage = lang;
  root.lang = lang;
  root.dir = lang === "fa" ? "rtl" : "ltr";
  root.dataset.lang = lang;
  applyTextTranslations();
  renderFilters();
  renderPortfolio();
  if (persist) {
    try { localStorage.setItem("shopino-lang", lang); } catch {}
    const url = new URL(location.href);
    url.searchParams.set("lang", lang);
    history.replaceState({}, "", url);
  }
}

function getInitialLang() {
  const params = new URLSearchParams(location.search);
  const fromUrl = params.get("lang");
  if (fromUrl === "en" || fromUrl === "fa") return fromUrl;
  try {
    const stored = localStorage.getItem("shopino-lang");
    if (stored === "en" || stored === "fa") return stored;
  } catch {}
  return "fa";
}

function filteredDemos() {
  return activeFilter === "all" ? demos : demos.filter((item) => item.category === activeFilter);
}

function categoryLabel(id) {
  const item = categories.find((cat) => cat.id === id);
  return item ? item[currentLanguage] || item.fa : id;
}

function renderFilters() {
  if (!filtersEl) return;
  filtersEl.replaceChildren();
  categories.forEach((cat) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "filter-chip";
    button.dataset.filter = cat.id;
    button.textContent = cat[currentLanguage] || cat.fa;
    button.setAttribute("aria-pressed", String(cat.id === activeFilter));
    button.addEventListener("click", () => {
      activeFilter = cat.id;
      visibleCount = PAGE_SIZE;
      renderFilters();
      renderPortfolio();
    });
    filtersEl.append(button);
  });
}

function renderCard(item) {
  const lang = currentLanguage;
  const link = document.createElement("a");
  link.className = "portfolio-card";
  link.href = item.url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";

  const art = document.createElement("span");
  art.className = "portfolio-art";
  const picture = document.createElement("picture");
  const source = document.createElement("source");
  source.srcset = `./images/${item.thumb}.webp`;
  source.type = "image/webp";
  const img = document.createElement("img");
  img.src = `./images/${item.thumb}.jpg`;
  img.alt = (item.alt && (item.alt[lang] || item.alt.fa)) || item.title[lang] || item.title.fa;
  img.width = 960;
  img.height = 600;
  img.loading = "lazy";
  img.decoding = "async";
  picture.append(source, img);
  art.append(picture);

  const copy = document.createElement("span");
  copy.className = "portfolio-copy";
  const badge = document.createElement("span");
  badge.className = "badge";
  badge.textContent = item.lang === "en" && lang === "fa"
    ? `${categoryLabel(item.category)} · EN`
    : categoryLabel(item.category);
  const title = document.createElement("strong");
  title.textContent = item.title[lang] || item.title.fa;
  const blurb = document.createElement("small");
  blurb.textContent = item.blurb[lang] || item.blurb.fa;
  copy.append(badge, title, blurb);

  link.append(art, copy);
  return link;
}

function renderPortfolio() {
  if (!grid) return;
  const list = filteredDemos();
  const visible = list.slice(0, visibleCount);
  grid.replaceChildren(...visible.map(renderCard));
  if (moreBtn) {
    const leftover = list.length - visible.length;
    moreBtn.hidden = leftover <= 0;
    moreBtn.disabled = leftover <= 0;
  }
}

if (moreBtn) {
  moreBtn.addEventListener("click", () => {
    visibleCount += PAGE_SIZE;
    renderPortfolio();
  });
}

currentLanguage = getInitialLang();
setLanguage(currentLanguage, { persist: false });

if (langToggle) {
  langToggle.addEventListener("click", () => {
    setLanguage(currentLanguage === "fa" ? "en" : "fa");
  });
}

function closeNav() {
  if (!navToggle || !siteNav) return;
  navToggle.setAttribute("aria-expanded", "false");
  siteNav.classList.remove("is-open");
  if (header) header.classList.remove("is-nav-open");
}

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const open = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!open));
    siteNav.classList.toggle("is-open", !open);
    if (header) header.classList.toggle("is-nav-open", !open);
  });
  siteNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeNav));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeNav();
  });
}

const contactForm = document.querySelector("#contactForm");
const formResult = document.querySelector("#formResult");
const formPreview = document.querySelector("#formPreview");
const copyButton = document.querySelector("#copyMessage");

function buildPreparedMessage() {
  const dict = translations[currentLanguage] || translations.fa;
  const name = (document.querySelector("#contactName")?.value || "").trim();
  const needSelect = document.querySelector("#contactNeed");
  const needText = needSelect?.selectedOptions?.[0]?.textContent?.trim() || "";
  const note = (document.querySelector("#contactMsg")?.value || "").trim();
  const lead = (dict.formMessageLead || "").replace("{name}", name).replace("{need}", needText);
  return note ? `${lead}\n${note}` : lead;
}

if (contactForm && formResult && formPreview) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formPreview.textContent = buildPreparedMessage();
    formResult.hidden = false;
    formResult.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "nearest" });
  });
}

if (copyButton && formPreview) {
  copyButton.addEventListener("click", async () => {
    const text = formPreview.textContent;
    if (!text) return;
    const dict = translations[currentLanguage] || translations.fa;
    try {
      await navigator.clipboard.writeText(text);
      copyButton.textContent = dict.formCopied;
    } catch {
      const range = document.createRange();
      range.selectNodeContents(formPreview);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    }
  });
}

let headerFrame = 0;
function updateHeader() {
  headerFrame = 0;
  if (!header) return;
  const scrolled = window.scrollY > 10;
  header.classList.toggle("is-scrolled", scrolled);
}
function queueHeader() {
  if (!headerFrame) headerFrame = requestAnimationFrame(updateHeader);
}
window.addEventListener("scroll", queueHeader, { passive: true });
queueHeader();

document.querySelectorAll(".logo-shell").forEach((shell) => {
  const logoImage = shell.querySelector("img");
  const logoFallback = shell.querySelector(".logo-fallback");
  if (!logoImage || !logoFallback) return;
  logoImage.addEventListener("error", () => {
    shell.classList.add("is-fallback");
    logoImage.hidden = true;
  });
});
