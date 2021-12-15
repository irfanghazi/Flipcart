const mongoose = require("mongoose")

const cartSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId, ref:'UserModel', required:true
    },
    cartItems:[
        {
            product:{type:mongoose.Schema.Types.ObjectId, ref:'ProductModel', required:true},
            quantity:{type:Number, default:1},
            price:{type:Number, required:true}
        }
    ]

}, {timestamps:true})

const CartModel = new mongoose.model("CartModel", cartSchema)

module.exports = CartModel