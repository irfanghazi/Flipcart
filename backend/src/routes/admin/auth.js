const express = require("express");
const router = express.Router();
const { signup, signin, signout} = require("../../controller/admin/auth");
const { requireSignin } = require("../../middleware");
const { validateSignupRequest, isRequestValidate, validateSigninRequest } = require("../../validators/auth");


router.post("/admin/signup",validateSignupRequest, isRequestValidate, signup);

router.post("/admin/signin",validateSigninRequest, isRequestValidate, signin)
router.post("/admin/signout", signout )




module.exports = router