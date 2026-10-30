/**
 * Lead capture web app for idovadya.com
 * Receives a POST from the landing page form and appends a row to the sheet.
 *
 * Setup (one time):
 * 1. Create a new Google Sheet (e.g. "לידים - עידו עובדיה").
 * 2. In that sheet: Extensions → Apps Script.
 * 3. Delete the default code, paste this whole file, Save.
 * 4. Deploy → New deployment → type: Web app.
 *    - Execute as: Me
 *    - Who has access: Anyone
 *    - Deploy → authorize → copy the Web app URL (ends with /exec).
 * 5. Paste that URL into LEAD_ENDPOINT in index.html.
 *
 * To test: open the /exec URL in a browser — should say "Lead webhook is live".
 */

const SHEET_NAME = 'לידים';
const HEADERS = ['תאריך', 'שם', 'טלפון', 'מייל', 'הודעה', 'סטטוס'];

function doPost(e) {
  try {
    const lock = LockService.getScriptLock();
    lock.waitLock(20000);

    const p = (e && e.parameter) || {};

    // Honeypot: real users never fill the hidden "company" field. If it's
    // populated, the request is a bot — accept silently without saving.
    if (p.company && String(p.company).trim() !== '') {
      lock.releaseLock();
      return json_({ ok: true });
    }

    const sheet = getSheet_();

    sheet.appendRow([
      new Date(),
      p.name || '',
      p.phone || '',
      p.email || '',
      p.message || '',
      'חדש'
    ]);

    lock.releaseLock();
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

function doGet() {
  return ContentService.createTextOutput('Lead webhook is live');
}

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
  }
  return sheet;
}

function json_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
