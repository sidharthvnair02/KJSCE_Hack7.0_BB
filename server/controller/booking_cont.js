const Booking = require("../models/booking_mod");


const book = async(req,res,next)=>{
    let booking
    
    try {
        
        booking = new Booking(req.body);
        await booking.save();
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Unable to book"})
    }
    
    if(booking){
        return res.status(200).json(booking)
    }
}

module.exports = {book};