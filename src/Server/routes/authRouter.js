const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController.js');

router.post('/createUser', authController.createUser, (req,res)=>{
    res.status(200).json(res.locals.info)
})



module.exports = router;