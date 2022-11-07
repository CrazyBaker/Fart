const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "sfers009",
    host: "localhost",
    port: 5432,
    database: "fart"
});

module.exports = pool;
