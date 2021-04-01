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
  // const values = [email, email, funFact]
  const queryStr = `insert into Users (email, username, fun_fact) values 
  ($1, $2, $3) RETURNING * ;`;
  // ` insert into l_users (first_name, last_name, password) values
  //                           ($1, $2, $3); `;
  bcrypt
    .hash(password, 10)
    .then((hashedPassword) => {
      // db.query(queryStr, [firstName, lastName, hashedPassword, email, funFact]);
      console.log('hashed password', hashedPassword)
      db.query(queryStr, [email, email, funFact])
      .then(data=>{
        console.log(data)
        res.locals.info = {
          email,
          firstName,
          lastName,
          funFact,
          hashed: hashedPassword,
        };
        console.log(res.locals.info)
        return next();
    })
    .catch(err=>{
        next({
            log:'Error in createUser query: failed to create User',
            status:400,
            message:{err: 'Failed to create new user', err}
        })
    });
    })
    // .catch((error) => {
    //   console.error('error with create user middle -----', error);
    //   // res.redirect('/auth/register');
    // });
};
//     );
// };


// .catch( err => {
//   next({
//       log:'Error in nameOfController.authenticateUser: failed to authenticate
//       status:400,
//       message:{err: 'Failed to create new palette', err}
//   })
// })

module.exports = authController;
