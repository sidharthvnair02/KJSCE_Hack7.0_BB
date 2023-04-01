const Place = require("../models/tourPlace_mod")

const addPlace = async(req,res,next)=>{
    
    let place
    console.log(req.body);
    try {
        
        const place = new Place(req.body);
        await place.save();
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Unable to add"})
    }
    if(!place){
        return res.status(500).json({message:"Unable to add"})
    }
    if(place){
        
        return res.status(200).json({status: added})
    }
    
}

const viewAllPlace = async(req,res,next)=>{
    
    let place 
    console.log("get allPlace");
    try {
        place = await Place.find();

    } catch (error) {
        console.log(error);
    }
    if(!place){
        return res.status(404).json({message:"No place found"})
    }
    return res.status(200).json({place})
    
}

module.exports = {addPlace,viewAllPlace}
