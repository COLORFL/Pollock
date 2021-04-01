const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const authController = require('../controllers/authController.js');
router.use(cookieParser());

router.post(
  '/createUser',
  authController.createUser,
  authController.getInfo,
  (req, res) => {
    res.cookie('email', res.locals.info.email);
    res.status(200).json(res.locals.all);
  }
);

router.use(
  '/getUser',
  authController.validateUser,
  authController.getInfo,
  (req, res) => {
    res.cookie('email', res.locals.info.email)
    console.log('cookie stuff backend----')
    res.redirect('/homeNew')
    // res.send('im here!!!')
   
  }
);

module.exports = router;
