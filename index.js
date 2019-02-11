var express = require('express');
var app = express();

app.get('/api', (req,res)=>{
    res.send('welcome to vue + express bro')
})

app.listen(9500, ()=>{
    console.log('API listening on port 9500')
})