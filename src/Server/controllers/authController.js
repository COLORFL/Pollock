const db = require('../dbModel.js');
const bcrypt = require('bcrypt');
const passport = require('passport');

const authController = {};

authController.validateUser = (req, res, next) => {
  const { email, password } = req.body;
  console.log(email, password);
  const queryStr = `select * from l_users where email_fk = $1 AND password = $2;`;
  db.query(queryStr, [email, password])
    .then((result) => {
      bcrypt.compare(password, result.rows[0].password);
      console.log('result', result.rows[0], '*****whew thats a lot');
      if (!result) {
        console.log('no res', result, err);
        return next(err);
      } else {
        console.log('user', password);
        return next();
      }
    })
    .catch((err) => {
      return next(err);
    });
};
//UPDATE Customers
// SET ContactName = 'Alfred Schmidt', City= 'Frankfurt'
// WHERE CustomerID = 1;

authController.createUser = async (req, res, next) => {
  const { email, firstName, lastName, password, funFact } = req.body;
  console.log('pass', password);
  const queryStr = `insert into Users (email, username, fun_fact) values 
  ($1, 'person123', $2);`;
  // ` insert into l_users (first_name, last_name, password) values
  //                           ($1, $2, $3); `;
  bcrypt
    .hash(password, 10)
    .then((hashedPassword) => {
      // db.query(queryStr, [firstName, lastName, hashedPassword, email, funFact]);
      db.query(queryStr, [email, funFact]);
      res.locals.info = {
        email,
        firstName,
        lastName,
        funFact,
        password,
        hashed: hashedPassword,
      };
      return next();
    })
    .catch((error) => {
      console.error('error with create user middle -----', error);
      // res.redirect('/auth/register');
    });
};

module.exports = authController;
