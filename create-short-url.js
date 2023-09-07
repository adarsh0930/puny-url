require("mongodb");
const {writeToDb} = require('./db')

async function createShortUrl (url) { 
    const result = await writeToDb(url)
    const uniqueID = result.insertedId
    return `http://localhost:4000/${uniqueID}`
}

module.exports = createShortUrl