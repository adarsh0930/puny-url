require("mongodb");
const {writeToDb} = require('./database.js')

async function createShortUrl (url) { 
    const result = await writeToDb(url)
    console.log(result)
    const uniqueID = result.insertedId
    return `http://localhost:4000/${uniqueID}`
}

module.exports = createShortUrl