const mongoose = require("mongoose")
const dotenv = require('dotenv')
dotenv.config({path: './config.env'})
const ProductModel = require("./models/product")

const app = require("./app")




const DB = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD)


mongoose.connect(DB)
  .then(()=>{
    const newProduct = new ProductModel({
      name: "Producto 1",
      category: "Categoria 1", 
      price: 1000000,
      description: "el precio es caro porque tu tia cobra caro"
  })
  
  
  newProduct.save()
      .then(savedProduct => {
          console.log(`Nuevo producto guardado: ${savedProduct}`)
      })
      .catch( error => {
          console.log(`Error al guardar el producto`, error)
      })
  })



const port = process.env.PORT || 3000;


app.listen(3000, ()=>{
    console.log("servidor puerto 3000")
  })