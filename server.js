const express = require("express");
const cors = require("cors");
const path = require("path");
const assert = require("assert");
const taskRoute = require('./route/taskRoute')

const port = 5000;
const app = express();

// body parser Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//  define cors
app.use(cors())
// view engines
app.set('view engine','ejs')
app.set('views' , './views')
//Default route

app.use('/',taskRoute)

//PNF route

app.all('*', (req,res)=>{
    res.render('pnf')
})


// server call
app.listen(port,()=>{
    console.log(`server is live on at http://localhost:${port}`)
})