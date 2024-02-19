const Database = require("better-sqlite3");

const data = new Database("foobar.db", {
    readonly: false
})
console.log(row)
