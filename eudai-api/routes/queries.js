
const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'eudai',
    host: 'localhost',
    database: 'eudai',
    password: 'testdbpw',
    port: 5432,
});

const getTestContent = (request, response) => {
    pool.query('SELECT * FROM testing', (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
};


module.exports = {
    getTestContent,
};
