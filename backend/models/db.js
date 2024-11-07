const mongoose = require('mongoose')
const URL = process.env.URL

mongoose.connect(URL)
.then(()=>{
    console.log('MongoDB Connected')
}).catch((err)=>{
    console.log('Connection Failed',err)
})