const UserModel = require("../models/user")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const signup =  async (req, res)=>{
    try {
        const {name, email, password} = req.body;
     
        const user = await UserModel.findOne({email})
        if(user){
            return res.status(409)
                    .json({message : 'user is already exsit, you can log in',success: false})
        }
        const userModel = new UserModel({name, email, password})
        userModel.password = await bcrypt.hash(password,10)
        await userModel.save();
        res.status(201)
            .json({message : 'Signup Successfully',success: true})
    } catch (error) {
        res.status(500)
        .json({message : `internal server error ${error}`,success: false})
    }
}

const login =  async (req, res)=>{
    try {
        const {email, password} = req.body;
       
        const user = await UserModel.findOne({email})
        if(!user){
            return res.status(403)
                    .json({message : 'User not Found with given email Id',success: false})
        }

        const isPassEqual = bcrypt.compare(password,user.password)
        if(!isPassEqual){
            return res.status(403)
                    .json({message : 'given password is wrong for given id',success: false})
        }
        const payload = {email : user.email, _id : user._id}
const jwtToken = jwt.sign(payload,process.env.jwt_secret,{expiresIn : '1h'}

    
)
let cookieOptions = {
    expires: new Date(Date.now() + 0.5 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };
    
        res.status(201).cookie("authToken", jwtToken, cookieOptions).cookie("email","abc@gmail.com",cookieOptions)
            .json({message : 'login Success',success: true,jwtToken});
    } catch (error) {
        res.status(500)
        .json({message : `internal server error ${error}`,success: false})
    }
}
module.exports = {
    signup,
    login
}