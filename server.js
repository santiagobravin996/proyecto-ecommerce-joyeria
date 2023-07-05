const mongoose = require("mongoose")
const dotenv = require('dotenv')
dotenv.config({path: './config.env'})


const app = require("./app")




const DB = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD)


mongoose.connect(DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(connection => {
  console.log(connection.connections)
})



const port = process.env.PORT || 3000;


app.listen(3000, ()=>{
    console.log("servidor puerto 3000")
  })