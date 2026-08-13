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
 * הודעת הוואטסאפ — הודעה אחת קבועה לכל הכפתורים.
 * שנו כאן פעם אחת כדי לעדכן את כל ה-CTA באתר.
 */
export const WHATSAPP_MESSAGE =
  'היי עידו, קראתי את הפרטים באתר ואשמח לקבוע שיחה לפרטים נוספים ותאריכים.';

/**
 * קישורי ה-CTA — כולם מובילים לאותו מספר ולאותה הודעה.
 * (המפתחות נשמרים כדי לא לגעת בשאר הרכיבים; מעקב ה-GA4 לפי סקשן נשאר.)
 */
export const CTA = {
  primary: wa(WHATSAPP_MESSAGE),
  companies: wa(WHATSAPP_MESSAGE),
  private: wa(WHATSAPP_MESSAGE),
  footer: wa(WHATSAPP_MESSAGE),
};

/** פרטי המקום — משמשים ל-SEO / JSON-LD / פוטר. */
export const VENUE = {
  brand: 'The Golden Hour',
  addressHe: 'כיכר אתרים, טיילת שלמה להט, תל אביב',
  areaHe: 'כיכר אתרים, מעל חוף גורדון, תל אביב',
  contactName: 'עידו',
};

/**
 * רכז/ת הנגישות — מופיע בהצהרת הנגישות (חובה חוקית).
 * ודאו שהפרטים נכונים; אפשר להחליף שם/טלפון/אימייל לפי הצורך.
 */
export const ACCESSIBILITY = {
  coordinatorName: 'עידו',
  phone: PHONE_DISPLAY,
  email: 'idovadya2707@gmail.com',
  /** תאריך עדכון אחרון של ההצהרה. */
  updated: '13 באוגוסט 2026',
};
