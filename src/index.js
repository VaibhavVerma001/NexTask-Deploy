import app from './app.js'
import path from 'path';
import express from 'express';



import {connectDB} from './db.js'


connectDB();

app.use(express.static(path.join(__dirname, "../client/dist")))

app.get("*", function(req,res){
    res.sendFile(path.join(__dirname, "../client/dist/index.html"))
})
 
app.listen(4000);
console.log('Server on port', 4000);
