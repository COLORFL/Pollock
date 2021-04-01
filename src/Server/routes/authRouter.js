const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController.js');


//in createUser, query db for users, if request is good, send cookie
router.post('/createUser', authController.createUser, (req,res)=>{
    res.status(200).json(res.locals.info)
})

//in loginController, bcrypt compare with request body, if request is good, send cookie

router.post('/login', (req,res) => {
    res.cookie('userEmail', 'j@j.com').send('cookie set'); //
    // res.staus(200).json(res.locals.login)
})

module.exports = router;