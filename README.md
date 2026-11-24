# شاپینو (Shopino)

سایت معرفی طراحی وب شاپینو.

- آدرس منتشرشده: https://mmhby6698-dot.github.io/shopino-web/
- اینستاگرام: [@shop_.ino](https://instagram.com/shop_.ino)
- پونیشا: [Mmhby87](https://ponisha.ir/profile/Mmhby87)

این مخزن فقط فایل‌های استاتیک را برای GitHub Pages نگه می‌دارد. هزینه‌ای برای انتشار پرداخت نشده است.

## افزودن نمونه‌کار

لیست دموها در یک آرایه است. برای اضافه کردن مورد تازه، فقط همین دو کار کافی است:

1. تصویر پیش‌نمایش را با نام `images/portfolio-ID.webp` و نسخهٔ `images/portfolio-ID.jpg` بگذار (حدود ۹۶۰×۶۰۰، WebP سبک).
2. یک آبجکت به آرایهٔ `demos` در فایل `src/demos.js` اضافه کن:

```js
{
  id: "my-demo",
  category: "shop", // shop | service | brand | education
  url: "https://example.com",
  thumb: "portfolio-my-demo",
  title: { fa: "عنوان فارسی", en: "English title" },
  blurb: { fa: "یک خط کوتاه فارسی", en: "One short English line" },
  alt: { fa: "پیش‌نمایش ...", en: "Preview of ..." }
}
```

اگر دستهٔ تازه‌ای لازم بود، آن را به `categories` در همان فایل اضافه کن. اگر تعداد از ۹ تا بیشتر شود، دکمهٔ «نمایش بیشتر» خودکار ظاهر می‌شود.

صفحه‌های داخلی (مثل `brand/<slug>/` و `redesign/<slug>/`) را هم با `internal: true` و آدرس نسبی (`./brand/<slug>/`) اضافه کن تا در همان تب باز شوند. دسته‌ی «هویت بصری / لوگو» (`identity`) و «بازطراحی» (`redesign`) در `categories` آماده‌اند.
