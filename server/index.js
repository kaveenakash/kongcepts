const express = require('express')
const app = express();

app.get('/login',(req,res)=>{
    res.send("Hello world");  
})

app.listen(3001,() =>{
    console.log("running on port 3001");
})