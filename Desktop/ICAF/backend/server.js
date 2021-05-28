//Import Packages
const express = require('express') 
const cors = require('cors') 
const dotenv = require('dotenv')

//Use Packages
const app =express()
dotenv.config()
app.use(express.json())
app.use(cors())

//Import Database Connection

require('./db/connectDB')

//Import Routing File
const apiRoutes = require('./routes/apiRoutes')
app.use('/api',apiRoutes)



//start server
const port = process.env.PORT
app.listen(port,(req,res) =>{

    console.log(`Server started port ${port}`)
})
