const express = require('express');
const router = express.Router();



const userController = require('./controllers/userController.js');

router.get('/', userController.getPalette, (req,res)=>{
    res.status(200).json(res.locals.getPalette)
})

router.post('/', userController.createPalette, (req,res)=>{
    res.status(200).json(res.locals.createPalette)
})

router.delete('/', userController.deletePalette, (req,res)=>{
    res.status(200).json(res.locals.deletePalette)
})

module.export = router;