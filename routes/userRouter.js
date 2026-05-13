const express = require('express');
const router = express.Router();
// const {registerUser,loginUser,logout} = require("../controller/authContollers");
router.get('/',(req,res)=>{
    res.send('User details will be visible here')
})
module.exports = router;