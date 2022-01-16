const Admin = require("../model/adminSchema");
const cookieParser = require("cookie-parser");
const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
app.use(cookieParser());

const Authenticate = async(req,res,next)=>{
    // try{
        
    //     const token = req.cookies.jwt;
    //     const verifytoken = jwt.verify(token,process.env.SECREAT_KEY);

    //     const rootUser = await Admin.findOne({_id:verifytoken._id, "tokens.token":token});

    //     if(!rootUser){
    //         throw new Error("User Not Found");
    //     }
    //     req.token= token;
    //     req.rootUser = rootUser;
    //     req.userId = rootUser._id;
    //     next();

    // }catch(err){
    //     res.status(401).send("Unautheticate: No token provided");
    //     console.log(err);
    // }

    try{
        const token = req.header('authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, 'thisisuserverification');
        const user = await Admin.findOne({ _id: decoded._id, 'tokens.token': token });
        if(!user) {
            throw new Error('Please Authenticate');
        }
        req.user = user;
        req.token = token;
        next();
    } catch(e){
        res.status(400).send({error: 'Please Authenticate'});
    }
}

module.exports = Authenticate;