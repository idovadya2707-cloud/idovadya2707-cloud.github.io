/**
 * CoachMind — full weekly digest (leads + GA4 traffic) in one email.
 * This replaces the plain leads email (weekly-report.gs) and does what a
 * Looker Studio report would: traffic, sources, devices and leads, every Sunday.
 *
 * ── Activate (one time) ───────────────────────────────────────────────────
 * 1. In the Apps Script editor: left sidebar → "Services" (the + icon) →
 *    find "Google Analytics Data API" → Add.
 * 2. Fill in REPORT_TO and GA4_PROPERTY_ID below.
 *      Find the Property ID: GA4 → Admin (⚙️) → Property settings →
 *      "Property ID" — a NUMBER like 123456789 (NOT the G-XXXX id).
 * 3. Run "weeklyFullReport" once → authorize.
 * 4. Point your Sunday-11:00 trigger to weeklyFullReport
 *    (Triggers → edit the existing one → function: weeklyFullReport).
 *
 * Needs a few days of GA4 data before the traffic numbers are meaningful.
 * Until GA4_PROPERTY_ID is filled in, it still sends the leads part only.
 * ──────────────────────────────────────────────────────────────────────────
 */

const REPORT_TO       = 'idovadya2707@gmail.com';
const GA4_PROPERTY_ID = 'PUT_PROPERTY_ID_HERE'; // numeric, from GA4 Admin → Property settings
const LEADS_SHEET     = 'לידים';
const CLARITY_URL     = 'https://clarity.microsoft.com/projects/view/xnvp5j5o99/dashboard';

function weeklyFullReport() {
  const leads = countLeads_();
  const ga = fetchGa_();
  MailApp.sendEmail({
    to: REPORT_TO,
    subject: 'סיכום שבועי — ' + leads.count + ' לידים' + (ga ? ' · ' + ga.users + ' מבקרים' : '') + ' (CoachMind)',
    htmlBody: buildHtml_(leads, ga)
  });
}

function countLeads_() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(LEADS_SHEET);
  const values = sheet.getDataRange().getValues();
  const now = new Date();
  const since = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  const list = [];
  for (let i = 1; i < values.length; i++) {
    const d = values[i][0] instanceof Date ? values[i][0] : new Date(values[i][0]);
    if (!isNaN(d) && d >= since && d <= now) {
      list.push({ date: d, name: values[i][1], phone: values[i][2], email: values[i][3] });
    }
  }
  return { count: list.length, list: list, total: Math.max(0, sheet.getLastRow() - 1) };
}

function fetchGa_() {
  if (GA4_PROPERTY_ID === 'PUT_PROPERTY_ID_HERE') return null;
  try {
    const prop = 'properties/' + GA4_PROPERTY_ID;
    const totals = AnalyticsData.Properties.runReport({
      dateRanges: [{ startDate: '7daysAgo', endDate: 'today' }],
      metrics: [{ name: 'totalUsers' }, { name: 'sessions' }]
    }, prop);
    const users = num_(totals, 0, 0);
    const sessions = num_(totals, 0, 1);

    const channels = AnalyticsData.Properties.runReport({
      dateRanges: [{ startDate: '7daysAgo', endDate: 'today' }],
      dimensions: [{ name: 'sessionDefaultChannelGroup' }],
      metrics: [{ name: 'sessions' }],
      orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
      limit: 5
    }, prop);

    const devices = AnalyticsData.Properties.runReport({
      dateRanges: [{ startDate: '7daysAgo', endDate: 'today' }],
      dimensions: [{ name: 'deviceCategory' }],
      metrics: [{ name: 'totalUsers' }],
      orderBys: [{ metric: { metricName: 'totalUsers' }, desc: true }]
    }, prop);

    let convs = 0;
    try {
      const c = AnalyticsData.Properties.runReport({
        dateRanges: [{ startDate: '7daysAgo', endDate: 'today' }],
        dimensions: [{ name: 'eventName' }],
        metrics: [{ name: 'eventCount' }],
        dimensionFilter: { filter: { fieldName: 'eventName', stringFilter: { value: 'generate_lead' } } }
      }, prop);
      convs = num_(c, 0, 0);
    } catch (e) {}

    return { users: users, sessions: sessions, conversions: convs, channels: rows_(channels), devices: rows_(devices) };
  } catch (err) {
    return null;
  }
}

function num_(r, row, col) {
  try { return Math.round(Number(r.rows[row].metricValues[col].value)); } catch (e) { return 0; }
}
function rows_(r) {
  const out = [];
  if (r && r.rows) r.rows.forEach(function (x) {
    out.push({ label: x.dimensionValues[0].value, value: Math.round(Number(x.metricValues[0].value)) });
  });
  return out;
}

function buildHtml_(leads, ga) {
  const tz = Session.getScriptTimeZone();
  const S = 'font-family:Arial,sans-serif;direction:rtl;text-align:right';
  let h = '<div style="' + S + ';max-width:600px;margin:auto;color:#0f1930">';
  h += '<h2 style="color:#04285e">סיכום שבועי — CoachMind</h2>';

  h += '<h3 style="color:#0153d0;margin:18px 0 6px">לידים</h3>';
  h += '<p>🟢 חדשים השבוע: <b>' + leads.count + '</b> &nbsp;|&nbsp; 📊 סה"כ: <b>' + leads.total + '</b></p>';
  if (leads.count) {
    h += '<ul>';
    leads.list.forEach(function (l) {
      h += '<li>' + Utilities.formatDate(l.date, tz, 'dd/MM') + ' — ' + l.name + ' | ' + l.phone + ' | ' + l.email + '</li>';
    });
    h += '</ul>';
  }

  if (ga) {
    h += '<h3 style="color:#0153d0;margin:18px 0 6px">תנועה (7 ימים)</h3>';
    h += '<p>👥 מבקרים: <b>' + ga.users + '</b> &nbsp;|&nbsp; 🔁 סשנים: <b>' + ga.sessions + '</b> &nbsp;|&nbsp; 🎯 השארות פרטים: <b>' + ga.conversions + '</b></p>';
    if (ga.channels.length) {
      h += '<p style="margin-bottom:2px"><b>מאיפה הגיעו:</b></p><ul>';
      ga.channels.forEach(function (c) { h += '<li>' + c.label + ' — ' + c.value + '</li>'; });
      h += '</ul>';
    }
    if (ga.devices.length) {
      h += '<p style="margin-bottom:2px"><b>מכשירים:</b></p><ul>';
      ga.devices.forEach(function (d) { h += '<li>' + d.label + ' — ' + d.value + '</li>'; });
      h += '</ul>';
    }
  } else {
    h += '<p style="color:#59637f">(נתוני התנועה יתווספו אחרי שתמלא GA4_PROPERTY_ID ותפעיל את שירות Google Analytics Data API.)</p>';
  }

  h += '<p style="margin-top:18px"><a href="' + CLARITY_URL + '" style="color:#0153d0">מפות חום והקלטות גולשים (Clarity)</a></p>';
  h += '<p style="color:#59637f;font-size:12px">נשלח אוטומטית מגיליון הלידים.</p></div>';
  return h;
}
