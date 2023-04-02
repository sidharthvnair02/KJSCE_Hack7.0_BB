const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Creating User Schema 
const BookingPlaceSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    place:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Place",
        required: true
    } ,
    ts:{
        type: Date,
        required: true,
        default: (new Date()).getTime(),
    }, 
    time:{
        type: Date,
        default: (new Date()).getTime(),
        required: true
    }, 
    total_person:{
        type: Number,
        required:true
    },
    cost:{
        type:Number,
        required:true
    },
    paymentStatus:{
        type:Boolean,
        required:true
    },
    tourGuideCheck:{
        type:Boolean,
        required:true
    },
    tourGuide:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "tourGuide"
    } 



    

});

module.exports = mongoose.model("BookingPlace",BookingPlaceSchema);