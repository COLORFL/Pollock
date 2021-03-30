const { Pool } = require('pg');

const uriString = 'postgres://avhmbimk:CACxY9J_5T7PZSj_MtTu6iH0go160sMf@queenie.db.elephantsql.com:5432/avhmbimk'

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