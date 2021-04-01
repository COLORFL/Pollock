const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController.js');


router.post('/userInfo', userController.getUser, (req,res)=>{
    res.status(200).json(res.locals.getUsers)
})


router.delete('/', userController.deleteUser, (req,res)=>{
    res.status(200).json(res.locals.deleteUser)
})

router.put('/', userController.updateUser, (req,res)=>{
    res.status(200).json(res.locals.update)
})