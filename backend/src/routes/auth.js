const express = require("express");
const router = express.Router();
const { signup, signin, requireSignin } = require("../controller/auth");
const { validateSigninRequest, isRequestValidate, validateSignupRequest } = require("../validators/auth");


router.post("/signup",validateSignupRequest, isRequestValidate, signup);

router.post("/signin",validateSigninRequest,isRequestValidate, signin)




module.exports = router