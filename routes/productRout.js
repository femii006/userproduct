var express = require('express');
var router = express.Router();
var pModel = require('../model/product');

// to add
router.post('/',(req,res)=>{
    try {
        pModel(req.body).save();
        res.send("product added")
    } catch (error) {
        res.send(error)
    }
})
// to get
router.get('/',async(req,res)=>{
    try{
        var data = await pModel.find()
        res.send(data)
    } catch (error) {
        res.send(error)
    }

})
// to delete data
router.delete('/:id',async(req,res)=>{
    try {
        console.log(req.params.id)
        await pModel.findByIdAndDelete(req.params.id)
        res.send("data deleted")
    } catch (error) {
        res.send(error)
        
    }
})
// to update
router.put('/:id',async(req,res)=>{
    try {
        await pModel.findByIdAndUpdate(req.params.id,req.body);
        res.send("edited")
    } catch (error) {
        res.send(error)
    }
})
module.exports=router