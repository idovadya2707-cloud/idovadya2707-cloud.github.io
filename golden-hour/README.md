# The Golden Hour — דף נחיתה

דף נחיתה בעברית (RTL), עמוד יחיד, למתחם אירועים על הגג בכיכר אתרים, תל אביב.
בנוי ב-[Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com). אתר סטטי לחלוטין — בלי שרת, בלי טפסים. **כל ה-CTA מובילים לוואטסאפ.**

---

## הרצה מקומית

צריך [Node.js](https://nodejs.org) 20 ומעלה.

```bash
npm install       # התקנת תלויות (פעם אחת)
npm run dev       # שרת פיתוח בכתובת http://localhost:4321
npm run build     # בניית האתר לתיקיית dist/
npm run preview   # תצוגה מקדימה של הבנייה
```

---

## איפה משנים טקסט ומספר טלפון

### מספר טלפון, לינקים של וואטסאפ ומזהה אנליטיקס — קובץ אחד

`src/config.ts` — כל ההגדרות במקום אחד:

| מה | היכן |
|---|---|
| מספר וואטסאפ | `WHATSAPP_NUMBER` (פורמט בינלאומי, בלי + ובלי רווחים) |
| טלפון לתצוגה | `PHONE_DISPLAY` |
| מזהה Google Analytics 4 | `GA4_MEASUREMENT_ID` (החליפו את ה-placeholder ב-ID אמיתי שמתחיל ב-`G-`) |
| הודעות הוואטסאפ המוכנות מראש | האובייקט `CTA` |

> האנליטיקס נטען **רק** כשמוגדר Measurement ID אמיתי. עד אז הכפתורים עובדים כרגיל.

### הטקסט של הסקשנים

הקופי יושב ישירות בתוך רכיבי הסקשנים תחת `src/components/`:

| סקשן | קובץ |
|---|---|
| Hero | `Hero.astro` |
| למה כאן | `WhyHere.astro` |
| פיצול קהלים | `Audiences.astro` |
| גלריה | `Gallery.astro` |
| מה כלול | `Included.astro` |
| איך זה עובד | `HowItWorks.astro` |
| שאלות נפוצות | `Faq.astro` |
| פוטר / CTA | `FooterCta.astro` |

כותרות ה-SEO (title/description) — בקובץ `src/pages/index.astro`.

---

## תמונות

התמונות יושבות ב-`public/images/`. כרגע יש שם **מציני מיקום** (placeholders) — יש להחליף בתמונות האמיתיות **באותם שמות קבצים**:

| קובץ | שימוש | מידות מומלצות |
|---|---|---|
| `hero.webp` | תמונת ה-Hero מלאת המסך (השקיעה הרחבה) | ~1920×1280 |
| `gallery-1.webp` | גלריה — "הבר, רגע לפני השקיעה" | ~900×1125 (יחס 4:5) |
| `gallery-2.webp` | גלריה — "המתחם בשעת האירוע" | ~900×1125 |
| `gallery-3.webp` | גלריה — "ישיבה ואירוח לקבוצות" | ~900×1125 |
| `og-image.jpg` | תמונת שיתוף (Open Graph / Twitter) | 1200×630 |

**המלצות:** פורמט WebP לתמונות הדף (דחיסה טובה). תמונת ה-Hero נטענת עם `preload`; שאר התמונות עם `loading="lazy"`. שמרו על שמות הקבצים כדי שלא צריך לגעת בקוד.

> להמרת תמונה ל-WebP: `npx @squoosh/cli --webp auto image.jpg` או כלי אונליין.

---

## פריסה (Deploy)

אתר סטטי — הפלט הוא תיקיית `dist/`.

### Netlify
מחובר לריפו, Netlify יזהה את `netlify.toml`:
- Build command: `npm run build`
- Publish directory: `dist`

### Cloudflare Pages
- Framework preset: **Astro**
- Build command: `npm run build`
- Build output directory: `dist`

לאחר החיבור, כל דחיפה ל-branch הראשי מפעילה בנייה ופריסה אוטומטית.

> אחרי חיבור דומיין, עדכנו את `SITE` בקובץ `astro.config.mjs` (משפיע על sitemap, canonical, Open Graph ו-JSON-LD).

---

## מבנה

```
src/
  config.ts            הגדרות: טלפון, לינקים, אנליטיקס
  layouts/Base.astro   <head>: SEO, OG, Twitter, JSON-LD, פונטים, GA4, מעקב לחיצות
  components/           רכיבי הסקשנים + כפתור וואטסאפ + סרגל דביק + לוגו
  pages/index.astro    הרכבת הדף
  styles/global.css    טוקנים של עיצוב (פלטה, פונטים) + עזרי RTL
public/
  images/              תמונות (להחלפה)
  favicon.svg, robots.txt, ...
```

---

## אנליטיקס

Google Analytics 4 עם אירוע מותאם `whatsapp_click` על **כל** כפתורי הוואטסאפ. לכל אירוע פרמטר `section` שמזהה מאיפה הגיעה הלחיצה (`hero_primary`, `card_companies`, `sticky_mobile`, `footer` וכו').
