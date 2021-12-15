const CartModel = require("../models/cart");
exports.addToCart = (req, res) => {
  // finding the user for adding items in cart
  CartModel.findOne({ user: req.user._id }).exec((error, cart) => {
    if (error) return res.status(400).json({ error });

    // Updating the cart for the existing user
    if (cart) {
      const product = req.body.cartItems.product;

      // if product already exist in
      const item = cart.cartItems.find(c => c.product == product);

      if (item) {
        CartModel.findOneAndUpdate(
          { user: req.user._id, "cartItems.product" : product },
          {
            $set: {
              "cartItems.$": {
                ...req.body.cartItems,
                quantity: item.quantity + req.body.cartItems.quantity,
              },
            },
          }
        ).exec((error, _cart)=>{
          if(error) return res.status(400).json({error})
          if(_cart){
            return res.status(200).json({_cart})
          }
        })
      } else {
        CartModel.findOneAndUpdate(
          { user: req.user._id },
          {
            $push: {
              cartItems: req.body.cartItems,
            },
          }
        ).exec((error, _cart) => {
          if (error) return res.status(400).json({ error });
          if (_cart) {
            return res.status(200).json({ cart: _cart });
          }
        });
      }
    } else {
      // If cart not exist then create new cart
      const cart = CartModel({
        user: req.user._id,
        cartItems: [req.body.cartItems],
      });

      cart.save((error, cart) => {
        if (error) return res.status(400).json({ error });

        if (cart) {
          return res.status(200).json({ cart });
        }
      });
    }
  });
};
