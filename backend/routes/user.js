const express = require("express");
const zod = require('zod');
const jwt  = require("jsonwebtoken");
const { User } = require("../db");
const JWT_SECRET = require("../config");
const router = express.Router();
const signupSchema = zod.Schema({
    username: zod.string(),
    password: zod.string(),
    firstname: zod.string(),
    lastname: zod.string(),

})
router.post('/signup', async(req, res)=>{
const body = req.body;
const success = signupSchema.safeParse(req.body);
if(!success){
    return res.json({
        message: "Email Already Taken/ Incorrect Inputs",
    })
}
const user = User.findOne({username: body.username});
if(user._id){
    return res.json({
        message: "Email Already Taken/ Incorrect Inputs",
    })
}
    const dbUser = await User.create(body);
    return res.json({
        message: "User Created Succesfully",
    })
    const token = jwt.sign({
        userId: dbUser._id,
    }, JWT_SECRET)
    return res.json({
        token: token,
    })
})
module.exports = router;