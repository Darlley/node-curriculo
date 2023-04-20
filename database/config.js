const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('curriculo.db');

db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS PROFILE (id INTEGER PRIMARY KEY autoincrement, CONTENT TEXT);");
    db.run("INSERT INTO PROFILE VALUES (null,'Meu nome é Darlley 2');");

    // const stmt = db.prepare("INSERT INTO lorem VALUES (?)");
    // stmt.finalize();
    // db.each("SELECT rowid AS id, info FROM lorem", (err, row) => {
    //     console.log(row.id + ": " + row.info);
    // });
});

module.exports = {
    db
}