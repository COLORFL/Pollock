const db = require('../dbModel.js')
const bcrypt = require('bcrypt')
const passport = require('passport')


const authController = {};


// const sqlStr = `INSERT INTO people (name, gender, species_id, birth_year, eye_color, skin_color, hair_color, mass, height, homeworld_id)
// VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`;

authController.validateUser = (req, res, next) => {
    const { email, password } = req.body;
    console.log(email, password)
    const queryStr = `select * from l_users where email_fk = $1 AND password = $2;`
      db.query(queryStr, [email, password])
            .then(result => {
              bcrypt.compare(password, result.rows[0].password);
            console.log('result', result)
            if(!result) {
              return next(err)
            } else {
              console.log('user', password)
              return next();
            }
          })
          .catch(err => {
            return next(err)
          })
  }

authController.createUser = (req, res, next) =>{
    const {email, name, password, funFact} = req.body
    const queryStrUser = `insert into users (firstname, lastname, email, password, funFact) values 
                            ($1, $2, $3);`
  
    const saltRounds = 10
    bcrypt.hash(password, saltRounds)
    .then(hashedPassword =>{
      db.query(queryStrUser, [firstname, lastname, email, password, funFact])
        .then(hashedResult =>{
          res.locals.user = hashedResult;
          return next();
        })    
        .catch(error=>{
          console.error('error with create user middle ', error);
          res.redirect('/auth/register')
        })    
      })      
}

module.exports = authController;
