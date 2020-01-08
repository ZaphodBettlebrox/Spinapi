var express = require('express');

var app = express();

const PORT = process.env.PORT ||3000;

app.get('/',(req,res)=>{
    res.send('welcome to myu api!')
})

app.get('/spinach',(req,res)=>{
    res.json({
        name:"spinach",
        health:"over 9000"
    })
})

app.listen(PORT, function(){
    console.log('listening on port: ' + PORT);
    
})