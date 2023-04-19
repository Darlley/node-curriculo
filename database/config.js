const sqlite3 = require('sqlite3')
const {open} = require('sqlite')

// const dbConnection = open('banco.sqlite', { Promise });
async function openDb () {
    return open({
        filename: '/tmp/database.db',
        driver: sqlite3.Database
    })
}

module.exports = {
    openDb: openDb
}