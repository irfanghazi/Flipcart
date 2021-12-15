const express = require("express");
const router = express.Router();
const { signup, signin, requireSignin } = require("../../controller/admin/auth");
const { validateSignupRequest, isRequestValidate, validateSigninRequest } = require("../../validators/auth");


router.post("/admin/signup",validateSignupRequest, isRequestValidate, signup);

router.post("/admin/signin",validateSigninRequest, isRequestValidate, signin)




module.exports = router