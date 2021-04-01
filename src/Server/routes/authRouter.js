const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController.js');


//in createUser, query db for users, if request is good, send cookie
router.post('/createUser', authController.validateUser, authController.createUser, (req,res)=>{
    res.status(200).json(res.locals.info)
})



//in loginController, bcrypt compare with request body, if request is good, send cookie

router.post('/login', authController.validateUser, (req,res) => {
    // res.cookie('userEmail', 'j@j.com').send('cookie set'); //
    res.status(200).json(res.locals.info)
})

module.exports = router;