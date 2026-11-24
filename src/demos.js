/* Add a new demo by appending one object to `demos` and dropping
   images/portfolio-{id}.webp + .jpg (about 960×600) into /images. */

export const categories = [
  { id: "all", fa: "همه", en: "All" },
  { id: "shop", fa: "فروشگاهی", en: "Stores" },
  { id: "service", fa: "خدماتی", en: "Services" },
  { id: "brand", fa: "برند / لوکس", en: "Brand / luxury" },
  { id: "education", fa: "آموزشی", en: "Education" },
  { id: "industry", fa: "صنعتی / B2B", en: "Industrial / B2B" }
];

export const demos = [
  {
    id: "kooche",
    category: "brand",
    url: "https://mmhby6698-dot.github.io/kooche-streetwear-demo/",
    thumb: "portfolio-kooche",
    title: { fa: "کوچه؛ برند کتانی خیابانی", en: "Kooche streetwear sneakers" },
    blurb: { fa: "برند کتانی خیابانی با فضای ادیتوریال.", en: "Streetwear sneakers with an editorial look." },
    alt: { fa: "پیش‌نمایش برند خیابانی کوچه", en: "Preview of the Kooche streetwear brand" }
  },
  {
    id: "toranj",
    category: "brand",
    url: "https://mmhby6698-dot.github.io/toranj-carpet-demo/",
    thumb: "portfolio-toranj",
    title: { fa: "گالری فرش دستباف ترنج", en: "Toranj handmade carpet gallery" },
    blurb: { fa: "گالری فرش دستباف با فضای لوکس.", en: "A luxury handmade carpet gallery." },
    alt: { fa: "پیش‌نمایش گالری فرش ترنج", en: "Preview of the Toranj carpet gallery" }
  },
  {
    id: "kidkade",
    category: "education",
    url: "https://mmhby6698-dot.github.io/kidkade-academy-demo/",
    thumb: "portfolio-kidkade",
    title: { fa: "کدکده؛ آکادمی کدنویسی کودکان", en: "Kidkade kids' coding academy" },
    blurb: { fa: "آکادمی کدنویسی کودکان با فضای تعاملی.", en: "A playful kids' coding academy." },
    alt: { fa: "پیش‌نمایش آکادمی کدنویسی کودکان کدکده", en: "Preview of the Kidkade coding academy" }
  },
  {
    id: "roaste",
    category: "shop",
    url: "https://roaste-demo-68bf.netlify.app",
    thumb: "portfolio-roaste",
    title: { fa: "فروشگاه قهوه ROASTÉ", en: "ROASTÉ coffee shop store" },
    blurb: { fa: "فروشگاه قهوه فارسی؛ پرداخت نمایشی است.", en: "A Persian coffee store; payments are simulated." },
    alt: { fa: "پیش‌نمایش فروشگاه قهوه ROASTÉ", en: "Preview of the ROASTÉ coffee shop" }
  },
  {
    id: "labkhand",
    category: "service",
    url: "https://labkhand-dental-demo.netlify.app",
    thumb: "portfolio-labkhand",
    title: { fa: "کلینیک دندانپزشکی لبخند", en: "Labkhand dental clinic" },
    blurb: { fa: "لندینگ مطب با نوبت نمایشی.", en: "A clinic landing page with demo booking." },
    alt: { fa: "پیش‌نمایش کلینیک دندانپزشکی لبخند", en: "Preview of the Labkhand dental clinic" }
  },
  {
    id: "rose",
    category: "service",
    url: "https://rose-salon-demo.netlify.app",
    thumb: "portfolio-rose",
    title: { fa: "سالن زیبایی رز", en: "Rose beauty salon" },
    blurb: { fa: "سایت سالن زیبایی با نوبت آنلاین نمایشی.", en: "A salon site with demo online booking." },
    alt: { fa: "پیش‌نمایش سالن زیبایی رز", en: "Preview of the Rose beauty salon" }
  },
  {
    id: "roaste-en",
    category: "shop",
    url: "https://acme-coffee-en-demo-9e10.netlify.app",
    thumb: "portfolio-roaste-en",
    lang: "en",
    title: { fa: "نسخه انگلیسی فروشگاه", en: "English store version" },
    blurb: { fa: "نسخه انگلیسی با چیدمان LTR.", en: "An English, LTR store layout." },
    alt: { fa: "پیش‌نمایش نسخه انگلیسی فروشگاه قهوه", en: "Preview of the English ROASTÉ store demo" }
  },
  {
    id: "avaye",
    category: "brand",
    url: "https://mmhby6698-dot.github.io/avaye-khamoush-demo/",
    thumb: "portfolio-avaye",
    title: { fa: "آوای خاموش؛ کارگاه ساز سنتی", en: "Avaye Khamoush traditional instrument workshop" },
    blurb: { fa: "سیم‌ها را لمس کن و صدای ساز را بشنو؛ تجربه‌ی صوتی تعاملی.", en: "Touch the strings and hear the instrument; an interactive sound experience." },
    alt: { fa: "پیش‌نمایش سایت کارگاه ساز سنتی آوای خاموش", en: "Preview of the Avaye Khamoush instrument workshop" }
  },
  {
    id: "zistboom",
    category: "industry",
    url: "https://mmhby6698-dot.github.io/zistboom-demo/",
    thumb: "portfolio-zistboom",
    title: { fa: "زیست‌بوم؛ گلخانه هوشمند", en: "Zistboom smart greenhouse" },
    blurb: { fa: "رشد گیاه با اسکرول و اتاق کنترل اقلیم تعاملی.", en: "A scroll-grown plant and an interactive climate control room." },
    alt: { fa: "پیش‌نمایش سایت گلخانه هوشمند زیست‌بوم", en: "Preview of the Zistboom smart greenhouse" }
  },
  {
    id: "pulse",
    category: "industry",
    url: "https://mmhby6698-dot.github.io/pulse-solar-demo/",
    thumb: "portfolio-pulse",
    title: { fa: "پالس؛ انرژی خورشیدی", en: "Pulse solar energy" },
    blurb: { fa: "شبیه‌ساز تولید برق و محاسبه‌گر بازگشت سرمایه.", en: "A power-output simulator and a payback calculator." },
    alt: { fa: "پیش‌نمایش سایت انرژی خورشیدی پالس", en: "Preview of the Pulse solar energy site" }
  }
];
