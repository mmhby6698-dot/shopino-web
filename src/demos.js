/* Add a new demo by appending one object to `demos` and dropping
   images/portfolio-{id}.webp + .jpg (about 960×600) into /images. */

export const categories = [
  { id: "all", fa: "همه", en: "All" },
  { id: "shop", fa: "فروشگاهی", en: "Stores" },
  { id: "service", fa: "خدماتی", en: "Services" },
  { id: "brand", fa: "برند / لوکس", en: "Brand / luxury" },
  { id: "education", fa: "آموزشی", en: "Education" },
  { id: "industry", fa: "صنعتی / B2B", en: "Industrial / B2B" },
  { id: "identity", fa: "هویت بصری / لوگو", en: "Brand identity / logo" },
  { id: "redesign", fa: "بازطراحی", en: "Redesign" }
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
    },
  {
    id: "madan",
    category: "industry",
    url: "https://mmhby6698-dot.github.io/madan-negar-demo/",
    thumb: "portfolio-madan",
    title: { fa: "معدن‌نگار؛ سنگ تزئینی", en: "Madan-Negar decorative stone" },
    blurb: { fa: "استودیوی اسلب: سنگ، پرداخت و بوک‌مچ را روی دیوار و نما ببین.", en: "A slab studio: preview stone, finish and book-match on walls and facades." },
    alt: { fa: "پیش‌نمایش سایت شرکت سنگ تزئینی معدن‌نگار", en: "Preview of the Madan-Negar decorative stone site" }
  },
  {
    id: "koochrah",
    category: "service",
    url: "https://mmhby6698-dot.github.io/kooch-rah-demo/",
    thumb: "portfolio-koochrah",
    title: { fa: "کوچ‌راه؛ سفر عشایری", en: "Kooch-Rah nomadic journeys" },
    blurb: { fa: "فصل‌ها با اسکرول عوض می‌شوند و مسیر کوچ روی نقشه زنده است.", en: "Seasons change on scroll and the migration route comes alive on a map." },
    alt: { fa: "پیش‌نمایش سایت سفرهای عشایری کوچ‌راه", en: "Preview of the Kooch-Rah nomadic travel site" }
  },
  {
    id: "khatsanj",
    category: "industry",
    url: "https://mmhby6698-dot.github.io/khat-sanj-demo/",
    thumb: "portfolio-khatsanj",
    title: { fa: "خط‌سنج؛ سازه و سوله", en: "Khat-Sanj industrial structures" },
    blurb: { fa: "سوله را سه‌بعدی بکش؛ ابعاد، لایه‌ها و ساخت مرحله‌ای.", en: "Configure a steel shed in 3D: dimensions, layers and step-by-step build." },
    alt: { fa: "پیش‌نمایش سایت شرکت سازه‌ی فلزی خط‌سنج", en: "Preview of the Khat-Sanj steel structures site" }
  },
  {
    id: "brand-tarzar",
    category: "identity",
    url: "./brand/tarzar/",
    internal: true,
    thumb: "portfolio-brand-tarzar",
    title: { fa: "تارزر؛ هویت بصری زعفران (نمونه مفهومی)", en: "Tarzar saffron brand identity (concept sample)" },
    blurb: { fa: "لوگو، پالت، فونت، بسته‌بندی و تابلو برای فروشگاه فرضی زعفران.", en: "Logo, palette, type, packaging and signage for a fictional saffron shop." },
    alt: { fa: "پیش‌نمایش هویت بصری تارزر: کارت ویزیت و لوگو", en: "Preview of the Tarzar identity: business cards and logo" }
  },
  {
    id: "brand-shekarlab",
    category: "identity",
    url: "./brand/shekarlab/",
    internal: true,
    thumb: "portfolio-brand-shekarlab",
    title: { fa: "شکرلب؛ هویت بصری شیرینی‌فروشی (نمونه مفهومی)", en: "Shekarlab patisserie identity (concept sample)" },
    blurb: { fa: "نشان «ش» با سه نقطه‌ی رنگی، جعبه‌ی شیرینی و نمای مغازه.", en: "A Persian sheen monogram with three colour dots, a pastry box and a storefront." },
    alt: { fa: "پیش‌نمایش هویت بصری شکرلب: جعبه و کیسه‌ی شیرینی", en: "Preview of the Shekarlab identity: pastry box and bag" }
  },
  {
    id: "brand-radpa",
    category: "identity",
    url: "./brand/radpa/",
    internal: true,
    thumb: "portfolio-brand-radpa",
    title: { fa: "ردپا؛ هویت بصری اپ رهگیری (نمونه مفهومی)", en: "Radpa parcel-tracking app identity (concept sample)" },
    blurb: { fa: "نماد «ر» و موقعیت، آیکن اپ، برچسب بسته و اینستاگرام.", en: "A reh-letter and location mark, app icon, parcel label and Instagram." },
    alt: { fa: "پیش‌نمایش هویت بصری ردپا: کارت ویزیت بنفش", en: "Preview of the Radpa identity: violet business cards" }
  },
  {
    id: "redesign-rasta",
    category: "redesign",
    url: "./redesign/rasta/",
    internal: true,
    thumb: "portfolio-redesign-rasta",
    title: { fa: "بازطراحی سایت حسابداری؛ قبل و بعد (نمونه مفهومی)", en: "Accounting site redesign: before and after (concept sample)" },
    blurb: { fa: "یک سایت قدیمیِ فرضی در برابر نسخه‌ی مدرن و موبایل‌پسند.", en: "A fictional dated site next to a modern, mobile-friendly rebuild." },
    alt: { fa: "مقایسه‌ی سایت قدیمی و بازطراحی‌شده‌ی حسابداری", en: "Side-by-side of the old and redesigned accounting site" }
  }
];
