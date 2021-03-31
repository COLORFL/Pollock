const { NetworkCell } = require('@material-ui/icons')
const db = require('../dbModel.js')

const paletteController = {}

//POST
paletteController.createPalette = (req, res, next)=>{
 
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
              log:'Error in paletteController.createPalette: failed to create palette',
              status:400,
              message:{err: 'Failed to create new palette'}
          })
      })
  
}

//GET 
paletteController.getPalette = (req, res, next) => {
    const {email} = req.body;
    const queryStr = `select * from Colors where email = $1;`
    db.query (query, [username])
    .then(data => {
        res.locals.colors = data.rows[0];
        return next();
    })
    .catch(err =>{
        next({
            log:'Error in paletteController.getPalette: failed to get message',
            status: 400,
            message: {err: 'Failed to get palette'}
        })
    })
}

//UPDATE
paletteController.upatePalette = (req, res, next) => {
    const { update, email } = req.body;
    const updateStr = `UPDATE colors SET palette = $1 WHERE email_fk = $2;`;
    db.query(updateStr, [update, email])
      .then((data) => {
        return next();
      })
      .catch((err) => {
        next({
          log: 'Error in userController.updatePalette: failed to delete message',
          status: 304,
          message: { err: 'Failed to update palette' },
        });
      });
  };




//DELETE 
paletteController.deletePalette = (req, res, next) => {
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
            log:'Error in paletteController.deletePalette: failed to delete message',
            status: 400,
            message: {err: 'Failed to delete palette'}
        })
    })
    
}

module.exports = paletteController