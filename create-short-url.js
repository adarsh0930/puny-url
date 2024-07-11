const { writeToDb } = require("./database.js");

async function createShortUrl(url) {
  const result = await writeToDb(url);
  const uniqueId = result.uniqueId;
  return `http://localhost:4000/${uniqueId}`;
}

module.exports = createShortUrl;
