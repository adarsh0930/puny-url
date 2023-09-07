// importing mongodb object and destructuring MongoClient out of it
require('dotenv').config()
const { MongoClient , ObjectId } = require("mongodb");
// Storing connection url for mongodb database
const uri = process.env.MONGO_URL;
// creating the mongodb client class using the given connection url
const client = new MongoClient(uri);
// creating an async function

async function writeToDb(url) {
// connecting to the mongodb database using connect method of client class
    await client.connect();
// using db method of client class to access Project database
    const database = client.db("Projects");
    const punyUrls = database.collection("puny_url");
// create a document to be inserted
    const doc = {OriginalURL: url};
    const result = await punyUrls.insertOne(doc);
    return result;
}

async function searchInDb(uniqueId) {
    await client.connect();
    const database = client.db("Projects");
    const punyUrls = database.collection("puny_url");
// searching uniqueId by findOne method from mongodb
    result = await punyUrls.findOne({
        '_id': new ObjectId(uniqueId)
      })
    return result;
}

module.exports = {writeToDb, searchInDb}
