const express = require('express');
const router = express.Router();

const paletteController = require('../controllers/paletteController.js');

router.post('/getAll', paletteController.getPalettes, (req,res)=>{
    console.log("Response Cookie: ",req.cookies)
    res.status(200).json(res.locals.getPalettes)
})

router.post('/', paletteController.createPalette, (req,res)=>{
    res.status(200).json(res.locals.createPalette)
})

router.delete('/', paletteController.deletePalette, (req,res)=>{
    res.status(200).json(res.locals.deletePalette)
})

router.put('/', paletteController.deletePalette, (req,res)=>{
    res.status(200).json(res.locals.update)
})



module.exports = router;