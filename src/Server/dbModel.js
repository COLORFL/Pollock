const { Pool } = require('pg');

const uriString = ''

const URI = uriString

const pool = new Pool ({
    connectionString: uriString
})

module.exports = {
    query: (text, params, cb) =>{
        console.log('executed query', text);
        return pool.query(text,params, cb)
    }
}