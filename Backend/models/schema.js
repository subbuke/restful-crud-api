const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
     name:{
        type: String,
        required: true
     },
     price:{
        type: Number,
        required: true
     },
     rating:{
        type: Number,
        default: 4.9
     },
     createdAt:{
        type: Date,
        default: Date.now()
     },
     company:{
        type: String,
        required: true
     }
})

module.exports = mongoose.model("product", productSchema);