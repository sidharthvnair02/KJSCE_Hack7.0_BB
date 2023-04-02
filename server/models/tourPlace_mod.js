const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Creating User Schema 
const placeSchema = new Schema({
    name:{
        type: String,
        required: true
    }, 
    desc:{
        type: String,
        required: true
    }, 
    address:{
        type: String,
        required: true
    }, 
    location:{
        type: String
    }, 
    img:{
        type: String,
        required: true,
        
    },
    entry_fee:{
        type: Number,
        required: true
    },
    city:{
        type:String,
        required:true
    }

    

});

module.exports = mongoose.model("Place",placeSchema);