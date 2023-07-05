const mongoose = require("mongoose")
const {Schema} = mongoose

const productSchema = new Schema({
    name: String,
    category: String,
    price: Number,
    description: String, 

})

const ProductModel = mongoose.model("Product", productSchema)

module.exports =  ProductModel