/**
 * Weekly leads digest for idovadya.com / CoachMind
 * Sends a short email every week with the number of new leads and their details,
 * pulled from the "לידים" sheet that the landing-page form writes to.
 *
 * ── Setup (one time, ~5 min) ──────────────────────────────────────────────
 * 1. Open the SAME Google Sheet that stores your leads (the one with the "לידים" tab).
 * 2. Extensions → Apps Script.
 * 3. Add a new script file (the + next to "Files"), paste this whole file, Save.
 * 4. Set REPORT_TO below to the email you want the summary sent to.
 * 5. Run "weeklyLeadsReport" once (Run button) → authorize when asked.
 *    You should receive a test email immediately.
 * 6. Left sidebar → Triggers (the clock icon) → Add Trigger:
 *      - Function to run:      weeklyLeadsReport
 *      - Deployment:           Head
 *      - Event source:         Time-driven
 *      - Type of time based:   Week timer
 *      - Day of week:          Sunday
 *      - Time of day:          11am to noon
 *    Save. Done — it now emails you every Sunday.
 * ──────────────────────────────────────────────────────────────────────────
 */

// >>> CHANGE THIS to your email <<<
const REPORT_TO = 'your-email@gmail.com';

const LEADS_SHEET = 'לידים';
const DAYS_BACK   = 7;
// Open Clarity straight from the email to see traffic / heatmaps / recordings:
const CLARITY_URL = 'https://clarity.microsoft.com/projects/view/xnvp5j5o99/dashboard';

function weeklyLeadsReport() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(LEADS_SHEET);
  if (!sheet) {
    MailApp.sendEmail(REPORT_TO, 'סיכום שבועי — שגיאה', 'לא נמצאה לשונית בשם "' + LEADS_SHEET + '".');
    return;
  }

  const values = sheet.getDataRange().getValues(); // row 0 = headers
  const now = new Date();
  const since = new Date(now.getTime() - DAYS_BACK * 24 * 60 * 60 * 1000);

  const weekLeads = [];
  for (let i = 1; i < values.length; i++) {
    const row = values[i];
    const d = (row[0] instanceof Date) ? row[0] : new Date(row[0]);
    if (!isNaN(d) && d >= since && d <= now) {
      weekLeads.push({ date: d, name: row[1], phone: row[2], email: row[3] });
    }
  }

  const total = Math.max(0, sheet.getLastRow() - 1); // all-time leads (minus header)
  const count = weekLeads.length;
  const tz = Session.getScriptTimeZone();

  let body = 'סיכום שבועי — CoachMind\n';
  body += '(' + Utilities.formatDate(since, tz, 'dd/MM') + ' – ' + Utilities.formatDate(now, tz, 'dd/MM') + ')\n';
  body += '================================\n\n';
  body += '🟢 לידים חדשים השבוע: ' + count + '\n';
  body += '📊 סה"כ לידים מאז ומעולם: ' + total + '\n\n';

  if (count > 0) {
    body += 'הנרשמים החדשים:\n';
    weekLeads.forEach(function (l) {
      const dateStr = Utilities.formatDate(l.date, tz, 'dd/MM HH:mm');
      body += '• ' + dateStr + ' — ' + l.name + ' | ' + l.phone + ' | ' + l.email + '\n';
    });
  } else {
    body += 'אין לידים חדשים השבוע.\n';
  }

  body += '\nלנתוני תנועה, מפות חום והקלטות גולשים (Clarity):\n' + CLARITY_URL + '\n';
  body += '\n— נשלח אוטומטית מגיליון הלידים.';

  MailApp.sendEmail({
    to: REPORT_TO,
    subject: 'סיכום שבועי — ' + count + ' לידים חדשים (CoachMind)',
    body: body
  });
}
