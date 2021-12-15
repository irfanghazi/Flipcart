const express = require("express")
const { addToCart } = require("../controller/cart")
const router = express.Router()

const { requireSignin, userMiddleware } = require("../middleware")



router.post("/user/cart/add-to-cart",requireSignin,userMiddleware,addToCart )


module.exports = router

