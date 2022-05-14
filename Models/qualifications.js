const mongoose = require ('mongoose');

const qualificationSchema = new mongoose.Schema({
    qualificationname:{type:String , required:true, unique:false},
    date:{type:String},
    matricule:{type:String , required:true, unique:true},
    c:{type:Number , required:true, unique:false},
   b:{type:Number , required:true, unique:false}, 
    p:{type:Number , required:true, unique:false},
    m:{type:Number , required:true, unique:false},
    ch:{type:Number , required:true, unique:false},
    g:{type:Number , rsequired:true, unique:false},
    ba:{type:Number , required:true, unique:false},
    ma:{type:Number , required:true, unique:false},
    a:{type:Number , required:true, unique:false},
    o:{type:Number , required:true, unique:false},
    po:{type:Number , required:true, unique:false},
    r:{type:Number , required:true, unique:false},
    ro:{type:Number , required:true, unique:false},
    pr:{type:Number , required:true, unique:false},
    pou:{type:Number , required:true, unique:false},

    },
    {timestamps:true}
    
    );
    module.exports = mongoose.model("qualification",qualificationSchema);