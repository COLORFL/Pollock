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
             log: 'Error in userController: failed to create new user',
             status: 400,
             message: {err: 'Failed to create new user'}
         })
     })
    
}


//GET
userController.getUser = (req,res, next) =>{
   const {email, username, fun_fact} = req.body;

   const values = [ email, username, fun_fact]
   
   const getStr = `SELECT * FROM users`

   db.query(getStr, values)
    .then(data => {
        console.log(data.rows)
        res.locals.getUser = data.rows
        return next()
    })
    .catch( err =>{
        .next({
            log: 'Error in userController.getUser: failed to get user information',
            status: 400,
            message: {err: 'Failed to get user information'}
        })
    })


}

//UPDATE
userController.updateUser = (req,res, next) =>{
    const {email, username, fun_fact} = req.body;
 
    const values = [ email, username, fun_fact]
    
    const updateStr = `UPDATE users SET email = $1 WHERE username = $2 AND fun_fact= $3`
 
    db.query(updateStr, values)
     .then(data => {
         return next()
     })
     .catch( err =>{
         .next({
             log: 'Error in userController.updateUser: failed to update user information',
             status: 400,
             message: {err: 'Failed to update user information'}
         })
     })
 
 
 }

//DELETE
userController.deleteUser = (req,res, next) =>{
    const {email, username, fun_fact} = req.params;
 
    const values = [ email, username, fun_fact]
    
    const getStr = `SELECT * FROM users`
 
    db.query(getStr, values)
     .then(data => {
         console.log(data.rows)
         res.locals.getUser = data.rows
         return next()
     })
     .catch( err =>{
         .next({
             log: 'Error in userController.getUser: failed to get user information',
             status: 400,
             message: {err: 'Failed to get user information'}
         })
     })
 
 
 }
