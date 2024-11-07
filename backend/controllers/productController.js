
const router = require('express').Router();
const ensureAuthenticated = require('../middleware/auth')
const jwt = require('jsonwebtoken')

router.get('/',ensureAuthenticated,(req,res,next)=>{
    const { authToken }   = req.cookies;
    const isVerfiy = jwt.verify(authToken,process.env.jwt_secret)
    if (isVerfiy){
        console.log(isVerfiy)
    }

    res.status(200).json([
        {
            name : "Mobile",
            Price : 10000
        },
        {
            name : "TV",
            Price : 10000
        },
        {
            name : "fridge",
            Price : 50000
        },
        
    ])
})
module.exports = router