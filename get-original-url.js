require('mongodb')
const {searchInDb} = require('./database.js')


async function getOriginalUrl(uniqueId) {
    const doc = await searchInDb(uniqueId)
    return doc.OriginalURL
}

module.exports = getOriginalUrl