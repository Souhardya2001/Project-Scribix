const express = require('express');
const router = express.Router();
// const {registerUser} = require("../controller/authContollers")
router.get('/',(req,res)=>{
    res.render("signup")
})
// router.post('/register',registerUser);
module.exports = router;