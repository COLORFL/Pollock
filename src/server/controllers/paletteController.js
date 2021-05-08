const { NetworkCell } = require('@material-ui/icons')
const db = require('../dbModel.js')

const paletteController = {}

//GET 
paletteController.getPalettes = (req, res, next) => {
    const {email} = req.body;
    const queryStr = `select * from Colors where email_fk = $1;`
    db.query (queryStr, [email])
    .then(data => {
        console.log(data.rows);
        res.locals.getPalettes = data.rows;
        return next();
    })
    .catch(err =>{
        next({
            log:'Error in paletteController.getPalettes: failed to get message',
            status: 400,
            message: {err: 'Failed to get palettes -', err}
        })
    })
}

//POST
paletteController.createPalette = (req, res, next)=>{
    const {palette, email, palette_name } = req.body
    const values = [ palette, email, palette_name]
    const queryStr = `INSERT INTO colors (_id, palette, email_fk, palette_name) 
                        VALUES ( DEFAULT, $1, $2, $3) RETURNING *` 
    db.query(queryStr, values)
      .then(data=>{
          console.log(data.rows)
          res.locals.createPalette = data.rows;
          return next();
      })
      .catch(err=>{
          next({
              log:'Error in paletteController.createPalette: failed to create palette',
              status:400,
              message:{err: 'Failed to create new palette', err}
          })
      })
}



//UPDATE
paletteController.upatePalette = (req, res, next) => {
    const { update, email, pallet_name } = req.body;
    const updateStr = `UPDATE colors SET palette_name = $1 WHERE email_fk = $2 AND pallet_name= $2 RETURNING *;`;
    db.query(updateStr, [update, email, pallet_name])
      .then((data) => {
          res.locals.udate = data.rows
        return next();
      })
      .catch((err) => {
        next({
          log: 'Error in userController.updatePalette: failed to delete message',
          status: 304,
          message: { err: 'Failed to update palette',err },
        });
      });
  };




//DELETE 
paletteController.deletePalette = (req, res, next) => {
    console.log('TESTING: ', req.params)
    const value = [req.params.paletteName];
    const deleteStr = `DELETE FROM colors WHERE palette_name = $1`
    db.query(deleteStr, value)
        .then(data =>{
            // console.log(data.rows)
            res.locals.deletePalette = data.rows;
            return next()
        })
        .catch(err =>{
            next({
                log:'Error in paletteController.deletePalette: failed to delete message',
                status: 400,
                message: {err: 'Failed to delete palette', err}
            })
        })
}

module.exports = paletteController;