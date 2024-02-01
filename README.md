# csv-collector
CSV parser that handles broken input.

## Requirements
The CSV content must have a header with field names.

## Installing
```js
npm install csv-collector --save
```

## Usage
```js
const collectCSV = require("csv-collector");
result = collectCSV(csvBody);
```
