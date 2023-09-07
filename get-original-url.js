require('mongodb')
const {searchInDb} = require('./db')


async function getOriginalUrl(uniqueId) {
    const doc = await searchInDb(uniqueId)
    return doc.OriginalURL
}

module.exports = getOriginalUrl