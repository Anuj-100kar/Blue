
const bcrypt =require('bcryptjs');
const jwt=require('jsonwebtoken');
const pool=require('../config/db');

const register=async(req,res)=>{
    const {name,email,password}=req.body;

    try {
        const hashpassword=await bcrypt.hash(password,10);
        const result=await pool.query('INSERT INTO admins (name,email,password) VALUES ($1,$2,$3) RETURNING *',
            [name,email,hashpassword]
        );
        res.status(201).json({message:'Admin registered',admin:result.rows[0]});
    } catch (error) {
        res.status(500).json({message:'registration failed'});
    }
};

const login=async(req,res)=>{
    const {email,password}=req.body;

    try {
        const result=await pool.query('SELECT * FROM admins WHERE email=$1',[email]);
        const admin=result.rows[0];
        if(!admin)
            return res.status(404).json({error:'admin not found'});

        const valid=await bcrypt.compare(password,admin.password);
        if(!valid) 
            return res.status(401).json({error:'invalid password'});

        const token=jwt.sign({id:admin.id},'SECRET_KEY',{expiresIn:'1d'});

        res.json({message:'login successful',token})
    } catch (error) {
        res.status(500).json({error:'login failed'});
    }
}

const forgotpassword=async(req,res)=>{
    const {email}=req.body;

    res.json({message:`password reset link sent to ${email}`});
}


module.exports={login,register,forgotpassword};