const { NetworkCell } = require('@material-ui/icons')
const db = require('../dbModel.js')

const userController = {}

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


//GET 
userController.getPalette = (req, res, next) => {
    const {email} = req.body;
    const queryStr = `select * from Colors where email = $1;`
    db.query (query, [username])
    .then(data => {
        res.locals.colors = data.rows[0];
        return next();
    })
    .catch(err =>{
        next({
            log:'Error in userController.getPalette: failed to get message',
            status: 400,
            message: {err: 'Failed to get palette'}
        })
    })
}

//DELETE 
userController.deletePalette = (req, res, next) => {
    const {email_fk} = req.params
    
    const values = [email_fk] 

    const deleteStr = `DELETE FROM colors WHERE email = $1`

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

module.exports = userController
