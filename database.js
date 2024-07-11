require("dotenv").config();
const sqlite3 = require("sqlite3").verbose();
const generateUniqueId = require("./generateUniqueId");

const dbPath = process.env.SQLITE_PATH || "./data.sqlite";
const db = new sqlite3.Database(dbPath);

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS puny_urls (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        UniqueID TEXT,
        OriginalURL TEXT,
        Count INTEGER
    )`);
});

async function writeToDb(url) {
  return new Promise((resolve, reject) => {
    const uniqueId = generateUniqueId();
    db.run(
      `INSERT INTO puny_urls (UniqueID, OriginalURL, Count) VALUES (?, ?, ?)`,
      [uniqueId, url, 0],
      function (err) {
        if (err) {
          reject(err);
        } else {
          resolve({ uniqueId });
        }
      }
    );
  });
}

async function searchInDb(uniqueId) {
  return new Promise((resolve, reject) => {
    db.get(
      `SELECT * FROM puny_urls WHERE UniqueID = ?`,
      [uniqueId],
      (err, row) => {
        if (err) {
          reject(err);
        } else {
          if (row) {
            db.run(
              `UPDATE puny_urls SET Count = Count + 1 WHERE UniqueID = ?`,
              [uniqueId]
            );
          }
          resolve(row);
        }
      }
    );
  });
}

module.exports = { writeToDb, searchInDb };
