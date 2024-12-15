const express = require("express");
const router = express.Router();
const {signUp, logIn} = require("../../controller/users/usersController");

router.route("https://taskmanager-wubw.onrender.com/signup").post(signUp);
router.route("https://taskmanager-wubw.onrender.com/login").post(logIn);


module.exports = router;