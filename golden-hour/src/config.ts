/**
 * ------------------------------------------------------------------
 *  מרכז ההגדרות של הדף — כאן משנים טלפון, לינקים ומזהה אנליטיקס.
 *  ONE PLACE to edit the phone number, WhatsApp links and GA4 id.
 * ------------------------------------------------------------------
 */

/** מספר הוואטסאפ בפורמט בינלאומי, בלי + ובלי רווחים. */
export const WHATSAPP_NUMBER = '972506380503';

/** הטלפון כפי שמוצג לגולש (עברית / מקומי). */
export const PHONE_DISPLAY = '050-638-0503';

/** מזהה Google Analytics 4 — החליפו ב-ID האמיתי (מתחיל ב-G-). */
export const GA4_MEASUREMENT_ID = 'G-XXXXXXXXXX';

/** בונה קישור wa.me עם הודעה מוכנה מראש (מקודדת אוטומטית). */
export function wa(text: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

/**
 * הודעות ה-CTA — נעולות לפי הבריף. אין לשנות ניסוח.
 * The pre-filled WhatsApp messages, verbatim from the brief.
 */
export const CTA = {
  primary: wa('היי, אשמח לבדוק תאריכים פנויים'),
  companies: wa('היי, מעוניין באירוע חברה'),
  private: wa('היי, מעוניין באירוע פרטי'),
  footer: wa('היי, אשמח לקבל פרטים ותאריכים'),
};

/** פרטי המקום — משמשים ל-SEO / JSON-LD / פוטר. */
export const VENUE = {
  brand: 'The Golden Hour',
  addressHe: 'כיכר אתרים, טיילת שלמה להט, תל אביב',
  areaHe: 'כיכר אתרים, מעל חוף גורדון, תל אביב',
  contactName: 'עידו',
};
