const express = require("express");
const router = express.Router();
router.get("/",(req,res)=>{
    res.render("draftarticle")
});
module.exports = router
