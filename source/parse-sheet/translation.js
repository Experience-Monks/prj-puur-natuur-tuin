const { set, toPath } = require('lodash');
const fs = require('fs');
const {google} = require('googleapis');

const { authorize, createOutput, lowercaseFirst, parseRowValue, getTabs } = require('./index');

const parsedData = {};

/**
 *
 * Set the Correct Sheet ID and Tab Ranges
 *
 */
const SHEET_ID = '192qZmlAErNh_1CHwipgq7why2IAjcdo3WU7H0bVw7e8';
const OUTPUT_PATH = '../frontend/src/translations/';
// Set to true if you want to split the tabs into separate files
const SPLIT_TABS_INTO_FILES = true;

const tabNames = [];

// Load client secrets from a local file.
fs.readFile('credentials.json', (err, content) => {
  if (err) return console.log('Error loading client secret file:', err);
  // Authorize a client with credentials, then call the Google Sheets API.
  authorize(JSON.parse(content), parseSheet);
});

async function parseSheet(auth) {
  const sheets = google.sheets({version: 'v4', auth});

  const tabs = await getTabs(sheets, SHEET_ID);
  const ranges = tabs
    .filter(name => name.toLowerCase().indexOf('ignore') < 0)
    .map(name => new Promise(resolve => {
      tabNames.push(lowercaseFirst(name));
      parseTab(name, sheets, SHEET_ID, parsedData).then(() => resolve());
    }));

  const list = [...ranges];
  for (const fn of list) {
    await fn;
  }

  Object.keys(parsedData).forEach(locale => {
    const ordered = {};
    Object.keys(parsedData[locale]).sort(sortTabs).forEach(key => {
      ordered[key] = parsedData[locale][key];
    });
    parsedData[locale] = ordered;
  });

  createOutput(OUTPUT_PATH, parsedData, SPLIT_TABS_INTO_FILES);
}

const parseTab = (name, sheets, sheetId, store) => {
  return new Promise(resolve => {
    sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: name,
    }, (err, res) => {
      if (err) return console.log('The API returned an error: ' + err);
      const rows = res.data.values;
      if (rows.length) {
        const titleRow = rows.splice(0, 1)[0];
        const locales = titleRow.filter((locale, index) => index > 0);

        const parsedName = lowercaseFirst(name);

        // Store Global Object in ParsedData
        locales.forEach(locale => {
          if (!store[locale]) {
            store[locale] = {
              [parsedName]: {},
            };
          } else if (!store[locale][parsedName]) {
            store[locale][parsedName] = {};
          }
        });

        const keyLengths = {};
        rows.forEach(row => parseRow(row, keyLengths, locales, parsedName, store));

        resolve();
      } else {
        resolve(null);
      }
    });
  });
};

const parseRow = (row, keyLengths, locales, parsedName, store) => {
  const pathArray = toPath(row.splice(0, 1)[0]);

  // Convert empty paths, used in keyName[], to an Array
  pathArray.forEach((path, index) => {
    if (path === '') {
      const keyName = pathArray[index - 1];
      if (typeof keyLengths[keyName] === 'undefined') {
        keyLengths[keyName] = -1;
      }

      keyLengths[keyName] = keyLengths[keyName] + 1;
      pathArray[index] = keyLengths[keyName];
    }
  });

  locales.forEach((locale, localeIndex) => {
    set(store[locale][parsedName], pathArray, parseRowValue(row[localeIndex] || row[0]));
  });
};

function sortTabs(a, b) {
  return tabNames.indexOf(a) - tabNames.indexOf(b);
}