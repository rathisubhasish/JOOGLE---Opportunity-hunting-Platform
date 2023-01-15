//import modules
const express = require("express");
const router = express.Router();

// import controllers
const {signup, login, logout, getLoggedInUser} = require("../controllers/user");


//import middlewares
const {userRegisterValidator, userById } = require("../middlewares/user");
const {verifyToken} = require("../middlewares/auth");

//api route
router.post("/signup",userRegisterValidator, signup);
router.post("/login", login);
router.get("/logout", logout);
router.get("/user", verifyToken,userById,getLoggedInUser);

module.exports = router;
