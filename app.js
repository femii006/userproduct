var express = require('express');
var dotenv = require('dotenv')

var userRoutes=require('./routes/userRout')
var productRoute=require('./routes/productRout')
var app = express();
dotenv.config();
require('./db');   
var port = process.env.port;
app.use(express.json());

app.use('/api',userRoutes)
app.use('/api1',productRoute)

app.listen(port,(req,res)=>{
    console.log(`server is up and running in ${port}`)
})