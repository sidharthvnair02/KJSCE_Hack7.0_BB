const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Creating User Schema 
const PaymentSchema = new Schema({
    booking:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "BookingPlace",
        required: true
    },
    order:Object,
    paymentVerify :Boolean
   

    

});

module.exports = mongoose.model("Payment",PaymentSchema);