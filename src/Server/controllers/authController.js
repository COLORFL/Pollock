const db = require('../dbModel.js');
const bcrypt = require('bcrypt');
const { resolveModuleName } = require('typescript');

const authController = {};

authController.validateUser = (req, res, next) => {
  // const { email, password } = req.body;
  // console.log(email, password);
  // const queryStr = `select * from l_users where email_fk = $1 AND password = $2;`;
  // db.query(queryStr, [email, password])
  //   .then((result) => {
  //     bcrypt.compare(password, result.rows[0].password);
  //     console.log('result', result.rows[0], '*****whew thats a lot');
  //     if (!result) {
  //       console.log('no res', result, err);
  //       return next(err);
  //     } else {
  //       console.log('user', password);
  //       return next();
  //     }
  //   })
  //   .catch((err) => {
  //     return next(err);
  //   });

  // destructure request body
  const { email, password } = req.body;

  // query local users db
  const queryStr = `SELECT email_fk from l_users WHERE email_fk = $1 AND password = $2`

  const value = [email,password]

  db.query(queryStr, value)
  .then(data => {
    console.log("Local Users Hash Results: ", data.rows);
    res.locals.info = {isLocal: (data.rows)}
    return next();
  })
  .catch(err=>{
    next({
      log:'Error in local users query: failed to query local users hash',
      status:400,
      message:{err: 'Failed to get user hash', err}
    })
  });

};

authController.createUser = async (req, res, next) => {
  const { email, firstName, lastName, password, funFact } = req.body;


  const queryStrUsers = `insert into Users (email, username, fun_fact) values 
  ($1, $2, $3) RETURNING * ;`;
  
  const queryStrLocalUsers = `insert into l_users ( _id, first_name,last_name, password, email_fk ) values 
  (DEFAULT, $1, $2, $3, $4) RETURNING * ;`

  const userValues = [email, email, funFact];

  const localUserValues = [ firstName, lastName, password, email ]

  // if (res.locals.info.isLocal.length !== 0){
  //   console.log('User already exists!')
  //   return next()
  // }

  bcrypt
  .hash(password, 10)
  .then((hashedPassword) => {
    // db.query(queryStr, [firstName, lastName, hashedPassword, email, funFact]);
    console.log('hashed password', hashedPassword)
    db.query(queryStrLocalUsers, localUserValues)
    .then(data=>{
      console.log(data)
      res.locals.info = {
        ...res.locals.info,
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
};


module.exports = authController;
