const sqlite3 = require('sqlite3').verbose();
const dbName = 'ilunara.db';

const db = new sqlite3.Database(dbName, (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Connected to the SQLite database.');
        db.run(`CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT UNIQUE,
            password TEXT,
            phone TEXT,
            address TEXT
        )`, (err) => {
            if (err) {
                // Table already created or error
                console.error("Error creating table: " + err.message);
            }
        });
    }
});

module.exports = db;
