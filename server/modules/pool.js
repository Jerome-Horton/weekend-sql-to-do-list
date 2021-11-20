// Require the pg module:
const pg = require('pg');

// Create a pool object constructor.
const Pool = pg.Pool;

// Create pool object using the above constructor:
const pool = new Pool({
    database: 'Week-end-to-do-app', // the name of database, This can change!
    host: 'localhost' // where is your database?
});

// Check console when our pool object makes a connection:
pool.on('connect', () => {
    console.log('Postgresql connected');
});

// Check console when something makes our pool error out:
pool.on('error', (error) => {
    console.log('Error with postgres pool', error)
});
module.exports = pool;