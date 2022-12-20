const Airtable = require("airtable");

// Initialize a base
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID
);

// Reference a table
const taskAirtable = base(process.env.AIRTABLE_TABLE_NAME);
const profileAirtable = base(process.env.AIRTABLE_PROFILES_TABLE_NAME);
const eventAirtable = base(process.env.AIRTABLE_EVENTS_TABLE_NAME);

// To get minified records array
const minifyItems = (records) =>
  records.map((record) => getMinifiedItem(record));

// to make record meaningful.
const getMinifiedItem = (record) => {
  if (!record.fields.brought) {
    record.fields.brought = false;
  }
  return {
    id: record.id,
    fields: record.fields,
  };
};

export {
  taskAirtable,
  profileAirtable,
  eventAirtable,
  minifyItems,
  getMinifiedItem,
};
