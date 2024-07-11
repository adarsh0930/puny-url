const { searchInDb } = require("./database.js");

async function getOriginalUrl(uniqueId) {
  const doc = await searchInDb(uniqueId);
  return doc ? doc.OriginalURL : null;
}

module.exports = getOriginalUrl;
