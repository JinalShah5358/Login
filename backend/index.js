const express = require('express');
const app = express()
const bodyparser = require('body-parser')
const cors = require('cors')
const cookiParser = require('cookie-parser')

require('dotenv').config()
require('./models/db')
const PORT = process.env.PORT || 5000
const userRoute = require('./routes/userRoute')
const productRoute = require('./controllers/productController')

app.use(bodyparser.json())
app.use(cookiParser())




app.use('/auth',userRoute)
app.use('/products',productRoute)

// app.use((req,res)=>{
    

//     res.redirect('/auth/login')


    
// })

app.listen(PORT,()=> {
    console.log(`Server is running on ${PORT}`)
})
