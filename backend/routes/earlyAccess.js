const express=require('express');
const router=express.Router();
const pool=require('../config/db');
require('dotenv').config();
const client=require('twilio')(process.env.ACCOUNT_SID,process.env.AUTH_TOKEN);

router.post('/',async(req,res)=>{
    try {
    const { phone } = req.body;

    await pool.query(
      "INSERT INTO early_access (phone) VALUES ($1)",
      [phone]
    );

    await client.messages.create({
      body: "You got early access 🚀",
      from: process.env.TWILIO_NUMBER,
      to: `+91${phone}`
    });

    res.json({ message: "saved + SMS sent ✅" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error" });
  }
});

module.exports=router;