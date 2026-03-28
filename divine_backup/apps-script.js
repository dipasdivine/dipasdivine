function doPost(e) {
  var sheetId = 'YOUR_GOOGLE_SHEET_ID_HERE'; // Replace with your Sheet ID
  var sheet = SpreadsheetApp.openById(sheetId).getActiveSheet();
  
  try {
    // Parse the JSON data from frontend fetch request
    var parseData = JSON.parse(e.postData.contents);
    
    if (parseData.action === "createOrder") {
      var d = parseData.data;
      var timestamp = new Date();
      var orderId = "ORD-" + Math.floor(Math.random() * 10000);
      
      // Append row in order: [Timestamp, OrderID, Name, Phone, Address, Items, Total, Method]
      sheet.appendRow([timestamp, orderId, d.name, d.phone, d.address, d.items, d.total, d.method]);
      
      return ContentService.createTextOutput(JSON.stringify({
        "status": "success",
        "orderId": orderId
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    return ContentService.createTextOutput(JSON.stringify({"status": "unknown_action"}))
                         .setMimeType(ContentService.MimeType.JSON);
    
  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({"status": "error", "message": error.message}))
                         .setMimeType(ContentService.MimeType.JSON);
  }
}

// Add this function if you want to support GET requests for testing
function doGet(e) {
  return ContentService.createTextOutput("Web App is active.").setMimeType(ContentService.MimeType.TEXT);
}
