const express = require('express');
const router = express.Router();



const userController = require('../controllers/paletteController.js');

router.get('/', paletteController.getPalette, (req,res)=>{
    res.status(200).json(res.locals.getPalette)
})

router.post('/', paletteController.createPalette, (req,res)=>{
    res.status(200).json(res.locals.createPalette)
})

router.delete('/', paletteController.deletePalette, (req,res)=>{
    res.status(200).json(res.locals.deletePalette)
})

module.exports = router;