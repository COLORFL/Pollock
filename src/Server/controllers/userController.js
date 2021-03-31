const { NetworkCell } = require('@material-ui/icons')
const db = require('../server/dbModel.js')

export const userController = {}

//POST
userController.createPalette = (req, res, next)=>{
 
    const {palette, email_fk} = req.body

    const values = [ palette, email_fk]

    const str = `INSERT INTO colors (pallete, email_fk) VALUES ($1, $2) RETURNING palette` 


    console.log(values)
    
    db.query(str, values)
      .then(data=>{
          res.locals.createPalette = data.rows
          .next()

      })
      .catch(err=>{
          next({
              log:'Error in userController.createPalette: failed to create palette',
              status:400,
              message:{err: 'Failed to create new palette'}
          })
      })
  
}

// taskController.postTask = (req, res, next) => {
  
//     const {task} = req.params;  
    
//     const queryStr = insert into Task (user_id, task_id, item, created_at) 
//                       values ($1, DEFAULT, $2, CURRENT_TIMESTAMP ) RETURNING item;`
  
//     db.query(queryStr, [req.cookies.uid, task])
//     .then(queryRes => {
//       res.locals.task = queryRes.rows[0].item;
//       next();    
//     })
//     .catch(e=>{
//       console.log('error during login query: ', e)
//     });
//   }
//GET 
userController.getPalette = (req, res, next) => {
    const {username} = req.body;
    const queryStr = `select colors from Colors where email_fk = $1;`
    db.query (query, [username])
    .then(data => {
        res.locals.colors = data.rows[0];
        return next();
    })
    .catch(err => console.log('error  in get palette controller'))
}






//DELETE 
userController.deletePalette = (req, res, next) => {
    const {email_fk} = req.params
    
    const values = [email_fk] 

    const deleteStr = `DELETE FROM colors WHERE email_fk = $1`

    console.log(email_fk)
    
    db.query(deleteStr, values)
    .then(data =>{
        res.locals.deleteStr = data.rows[0]
        return next()
    })
    .catch(err =>{
        next({
            log:'Error in userController.deletePalette: failed to delete message',
            status: 400,
            message: {err: 'Failed to delete palette'}
        })
    })
    
}