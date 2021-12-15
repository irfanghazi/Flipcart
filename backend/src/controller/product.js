const ProductModel = require('../models/product')
const shortid = require("shortid")
const slug = require("slugify")
const { default: slugify } = require('slugify')

exports.createProduct = (req,res)=>{

    const{name, price, description,category,quantity,createdBy} =req.body
   
    let productPicture =[]

    if(req.files.length >0 ){
        productPicture = req.files.map(file=>{
            return {img:file.filename}
        })
    }

    

    const product = new ProductModel({
        name,
        slug:slugify(name),
        price,
        description,
        productPicture,
        category,
        quantity,
        createdBy
    })
    product.save(((error,product)=>{
        if(error) return res.status(400).json({error})

        if(product){
            res.status(200).json({product})
        }
    }))
}

