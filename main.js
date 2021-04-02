const Airtable = require('airtable');
require('dotenv').config();

const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID } = process.env;
const base = new Airtable({ apiKey: AIRTABLE_API_KEY}).base(AIRTABLE_BASE_ID);

base('Contacts').create([
  {
    "fields": {
      "Phone #": "(123) 456-789",
      "Name": "John Doe",
      "Email Address": "jd@example.com",
    }
  },
  {
    "fields": {
      "Phone #": "(987) 654-321",
      "Name": "jane Doe",
      "Email Address": "jane_doe@example.com"
    }
  }
], function(err, records) {
  if (err) {
    console.error(err);
    return;
  }
  records.forEach(function (record) {
    console.log(record.getId());
  });
});