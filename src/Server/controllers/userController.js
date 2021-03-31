const db = require('../dbModel.js');

const userController = {};

//POST
userController.createUser = (req, res, next) =>{
    //set req.body values
    const {email, username, fun_fact} = req.body;

    //create array containing values
    const values = [email, username, fun_fact];

    const queryStr = `INSERT INTO users (email, username, fun_fact) VALUES ($1, $2, $3) RETURNING users` 

    console.log(values)

    dbModel.query(str, values)
     .then(data => {
         res.locals.createUser = data.rows
         .next()
     })
     .catch(err => {
         .next({
             log: 'Error in userController: failed to create new user'
         })
     })
    
}


//GET

//DELETE
