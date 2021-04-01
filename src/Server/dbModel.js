const { Pool } = require('pg');

require('dotenv').config()

const uriString = `${process.env.DATABASE_URL_MAIN}`

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