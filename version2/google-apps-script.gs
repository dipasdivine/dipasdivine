/**
 * Google Apps Script backend for Divine Realms.
 *
 * Deployment:
 * 1) Open script.google.com
 * 2) Paste this file into Code.gs
 * 3) Deploy -> New deployment -> Web app
 * 4) Execute as: Me
 * 5) Who has access: Anyone
 * 6) Copy deployment URL and use in frontend CONFIG.sheetsEndpoints
 */

const SPREADSHEET_ID = ""; // Optional. Leave blank if script is bound to the target sheet.

const SHEETS = {
  orders: {
    name: "Orders",
    headers: ["Timestamp", "OrderID", "Name", "Phone", "Address", "PaymentType", "Total", "ItemsJSON", "RawJSON"]
  },
  reviews: {
    name: "Reviews",
    headers: ["Timestamp", "Name", "Rating", "Comment", "Date", "RawJSON"]
  },
  visits: {
    name: "Visits",
    headers: ["Timestamp", "Path", "Referrer", "UserAgent", "RawJSON"]
  }
};

function doPost(e) {
  try {
    const payload = parsePayload_(e);
    const route = getRoute_(e, payload);

    if (route === "orders" || route === "order") {
      saveOrder_(payload);
      return jsonOutput_({ success: true, route: "orders" });
    }

    if (route === "reviews" || route === "review") {
      saveReview_(payload);
      return jsonOutput_({ success: true, route: "reviews" });
    }

    if (route === "visits" || route === "visit") {
      saveVisit_(payload);
      return jsonOutput_({ success: true, route: "visits" });
    }

    return jsonOutput_({ success: false, error: "Unsupported route. Use orders, reviews, or visits." });
  } catch (error) {
    return jsonOutput_({ success: false, error: String(error) });
  }
}

function doGet(e) {
  try {
    const route = String((e && e.parameter && e.parameter.sheet) || "").toLowerCase();

    if (route === "reviews") {
      const limit = Number((e && e.parameter && e.parameter.limit) || 8);
      return jsonOutput_({
        success: true,
        reviews: getRecentReviews_(limit)
      });
    }

    return jsonOutput_({
      success: true,
      message: "Divine Realms Apps Script endpoint is live.",
      date: new Date().toISOString()
    });
  } catch (error) {
    return jsonOutput_({ success: false, error: String(error) });
  }
}

function parsePayload_(e) {
  if (!e || !e.postData || !e.postData.contents) {
    throw new Error("Missing request body");
  }

  const raw = e.postData.contents;
  const payload = JSON.parse(raw);
  if (!payload || typeof payload !== "object") {
    throw new Error("Invalid JSON payload");
  }
  return payload;
}

function getRoute_(e, payload) {
  const fromQuery = String((e && e.parameter && e.parameter.route) || "").toLowerCase();
  const fromType = String(payload.type || "").toLowerCase();
  return fromQuery || fromType;
}

function saveOrder_(payload) {
  const sheet = ensureSheet_(SHEETS.orders);

  const customer = payload.customer || {};
  const row = [
    new Date(),
    payload.orderId || "",
    customer.name || "",
    customer.phone || "",
    customer.address || "",
    payload.paymentType || "",
    payload.total || 0,
    JSON.stringify(payload.items || []),
    JSON.stringify(payload)
  ];

  sheet.appendRow(row);
}

function saveReview_(payload) {
  const sheet = ensureSheet_(SHEETS.reviews);

  const row = [
    new Date(),
    payload.name || "Anonymous",
    Number(payload.rating || 0),
    payload.comment || "",
    payload.date || new Date().toISOString().slice(0, 10),
    JSON.stringify(payload)
  ];

  sheet.appendRow(row);
}

function saveVisit_(payload) {
  const sheet = ensureSheet_(SHEETS.visits);

  const row = [
    new Date(),
    payload.path || "",
    payload.referrer || "",
    payload.ua || payload.userAgent || "",
    JSON.stringify(payload)
  ];

  sheet.appendRow(row);
}

function getRecentReviews_(limit) {
  const sheet = ensureSheet_(SHEETS.reviews);
  const lastRow = sheet.getLastRow();
  if (lastRow <= 1) {
    return [];
  }

  const max = Math.max(1, Math.min(limit || 8, 30));
  const values = sheet.getRange(2, 1, lastRow - 1, SHEETS.reviews.headers.length).getValues();

  return values
    .slice(-max)
    .reverse()
    .map(function (row) {
      return {
        timestamp: row[0],
        name: row[1],
        rating: row[2],
        comment: row[3],
        date: row[4]
      };
    });
}

function ensureSheet_(config) {
  const spreadsheet = getSpreadsheet_();
  let sheet = spreadsheet.getSheetByName(config.name);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(config.name);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(config.headers);
  }

  return sheet;
}

function getSpreadsheet_() {
  if (SPREADSHEET_ID) {
    return SpreadsheetApp.openById(SPREADSHEET_ID);
  }
  return SpreadsheetApp.getActiveSpreadsheet();
}

function jsonOutput_(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
