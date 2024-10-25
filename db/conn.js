const mongoose=require('mongoose');
mongoose.connect("mongodb://0.0.0.0/data",{})
.then(()=>{
    console.log('conection successfully');
}).catch((e)=>{
    console.log('no connection');
})