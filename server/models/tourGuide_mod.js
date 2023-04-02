const mongoose = require('mongoose');
const Schema = mongoose.Schema;



//Creating  Schema 
const tourGuideSchema = new Schema({
    
    name:{
        type: String,
        required: true
    }, 
    email:{
        type: String,
        required: true,
        unique: true
    },
    place:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Place",
        required: true
    },
    phone:{
        type: String,
        required: true,
        unique: true
    },
    place:{
        type:String,
        required:true
    },
    fee:{
        type:Number,
        required:true
    }



    

});

module.exports = mongoose.model("tourGuide",tourGuideSchema);