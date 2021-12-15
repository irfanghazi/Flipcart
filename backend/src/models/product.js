const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
name:{
    type:String,
    required:true,
    trim:true
},
slug:{
    type:String,
    required:true,
    unique:true
},
price:{
    type:Number,
    required:true
},
quantity:{
    type:Number,
    required:true
},
description:{
    type:String,
    required:true
},
offer:{type:Number},
productPicture:[
    {
        img:{type:String}
    }
],
reviews:[
    {
        userId :{type:mongoose.Schema.Types.ObjectId, ref:"UserModel"},
        review:String
    }
],
category:{
type:mongoose.Schema.Types.ObjectId, ref:"CategoryModel", required:true
},
createdBy:{
    type:mongoose.Schema.Types.ObjectId, ref:'UserModel'
},
updatedAt:Date
}, {timestamps:true})

const ProductModel = new mongoose.model("ProductModel",productSchema)

module.exports = ProductModel