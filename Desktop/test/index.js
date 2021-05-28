const express = require('express')
const app = express()
let port = 3000;

app.get("/",(req,res) =>{
    res.send("Hello World")
})

app.get("/data",(req,res) =>{
    res.send("you got data")
})

app.listen(port,() =>{
    console.log("Example app run on port 3000")
})
