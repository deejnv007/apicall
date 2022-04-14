const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Bajaj",{
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then( () => {
    console.log("Connection successfull...");
}).catch((err) => {
    console.log(err);
})

const detailSchema = new mongoose.Schema({
    name: {
         type : String,
         required : true
    },

   email: {
       type : String,
       required : true
   },

password : {
       type : String,
       required : true
   }
})

const Detail = new mongoose.model("Detail", detailSchema);
module.exports = Detail;
