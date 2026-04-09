const express =require('express');
const router=express.Router();
const authController=require('../controllers/authController');

router.post('/sign-up',authController.register);
router.post('/login',authController.login);
router.post('/forgotpassword',authController.forgotpassword);

module.exports=router;