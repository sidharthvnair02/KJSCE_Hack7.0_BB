const dotenv = require("dotenv");
const crypto =  require("crypto");
const Razorpay=require("razorpay");
const paymentSchema = require("../models/paymentPlace_mod");
const BookingPlaceSchema = require("../models/booking_mod")

dotenv.config();

const instance= new Razorpay({
    key_id: process.env.RAZOR_API,
    key_secret: process.env.RAZOR_SECRET
});

const createorder= async(req,res) =>{
    const params=req.body;
    const payment_capture =1;
    const options = {
		amount: params.amount,
		currency: params.currency,
		receipt: params.receipt,
        payment_capture
	}
    try {
        const data = await instance.orders.create(options, async(err,order)=>{
       
            if(err){
                console.log(err);
                res.json({err})
            }else{
                const payment = paymentSchema({
                    booking: params.booking_id,
                    order: order,
                    paymentVerify:false
                })
                payment.save().then((saved_payment)=>{
                    console.log(saved_payment)
                    res.json(saved_payment)
                }).catch((err)=>{
                    console.log(err)
                })  
                
                
            }})
                
    } catch (error) {
        console.log(error);
        res.json({error})
    }}

    const verifyorder= async(req,res) =>{
        body=req.body.razorpay_order_id + "|" + req.body.razorpay_payment_id;
        var expectedSignature =crypto
        .createHmac("sha256",process.env.RAZOR_SECRET)
        .update(body.toString())
        .digest("hex")
        console.log("sig" + req.body.razorpay_signature)
        console.log("sig"+ expectedSignature)
        var response= {status :"failure"}
        if (expectedSignature === req.body.razorpay_signature){
            response ={status: "success"}
            console.log(req.body.eng_id);
            try {
                const data =await paymentSchema.findOne({booking:req.body.booking_id})
                await paymentSchema.updateOne({booking:req.body.booking_id},{$set:{paymentVerify:true}})  
                
                
                const userdata = await BookingPlaceSchema.updateOne({
                    _id:booking_id},

                
                {
                    $set:{
                        paymentStatus:true
                        
                    }
                }
                )
                // console.log("hello");
                
            } catch (error) {
                console.log(error)
            }
    
    
        }
        res.send(response)
    }
    
    module.exports ={ createorder,verifyorder}