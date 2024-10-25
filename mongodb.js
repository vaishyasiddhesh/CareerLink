const mongoose=require('mongoose');
mongoose.connect("mongodb://0.0.0.0/data",{
    
    
}).then(()=>{
    console.log('conection successfully');
}).catch((e)=>{
    console.log('no connection');
})

const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    
    
});


const collection=new mongoose.model("Collection1",userSchema)
module.exports=collection