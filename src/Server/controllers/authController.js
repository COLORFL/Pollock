const db = require('../server/dbModel.js')
const bcrypt = require('bcrypt')
const passport = require('passport')

export const authController = {};

authController.validateUser = () => {
    if (!req.body.email || !req.body.password  || typeof req.body.email !== 'string' || typeof req.body.password !== 'string') {
        return next({
          err: 'Invalid request'
        });
      }
      return next();
};

// const sqlStr = `INSERT INTO people (name, gender, species_id, birth_year, eye_color, skin_color, hair_color, mass, height, homeworld_id)
// VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`;

authController.userCategory = (req, res, next) => {
    const { email, password } = req.body;
    console.log(email, password)
    const queryStr = `select * from Users where email_fk = $1 AND password = $2;`

        bcrypt.compare(password, user.password)
          .then(result => {
            console.log('result', result)
            if(!result) {
              return next(err)
            } else {
              console.log('user', user.password)
              res.locals.user = user;
              return next();
            }
          })
          .catch(err => {
            return next(err)
          })
  }

authController.createUser = (req, res, next) =>{
    const {email, name, email, password, funFact} = req.body
    const queryStrUser = `insert into users (firstname, lastname, email, password, funFact) values 
                            ($1, $2, $3);`
  
    const saltRounds = 10
    bcrypt.hash(password, saltRounds)
    .then(hashedPassword =>{
      db.query(queryStrUser, [firstname, lastname, email, password, funFact])
        .then(hashedResult =>{
          return next();
        })    
        .catch(error=>{
          console.error('error with create user middle ', error);
          res.redirect('/auth/register')
        })    
      })      
}