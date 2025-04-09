var mongoose     =require('mongoose');
    mongoose.connect("mongodb+srv://feminafathima886:femina@cluster0.0me0zcx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=>{
        console.log("CONNECTED TO DB")
    })
    .catch((err)=>{console.log(err)})