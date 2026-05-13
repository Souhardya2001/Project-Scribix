const mongoose = require('mongoose')
const config = require('config')
const dbgr = require("debug")("development:mongoose")
mongoose
.connect(`${config.get("MONGODB_URI")}/test_js`)
.then(function(){
    dbgr("Mongodb is connected");
})
.catch(function(err){
    dbgr("Error : ",err);
})

module.exports = mongoose.connection;