function appendSalesRow(spreadsheetId, sheetName, row) {
  var ss = SpreadsheetApp.openById(spreadsheetId);
  var sh = ss.getSheetByName(sheetName) || ss.insertSheet(sheetName);
  sh.appendRow(row);
}

function onOpen() {
  SpreadsheetApp.getUi().createMenu('WB Utils')
    .addItem('Тест добавить строку', 'testAppend')
    .addToUi();
}

function testAppend() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  appendSalesRow(ss.getId(), "Sales", ["2025-08-13", 10, 2500]);
}
