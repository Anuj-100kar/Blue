const express =require('express');
const router=express.Router();
const userController=require("../controllers/userController");

router.post('/sign-up',userController.register);
router.post('/login',userController.login);
router.post('/forgotpassword',userController.forgotpassword);

module.exports=router;