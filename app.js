var express = require('express');
require('./db')
var userRoutes=require('./routes/userRout')
var productRoute=require('./routes/productRout')
var app = express();
var port =2000;
app.use(express.json());

app.use('/api',userRoutes)
app.use('/api1',productRoute)

app.listen(port,(req,res)=>{
    console.log(`server is up and running in ${port}`)
})