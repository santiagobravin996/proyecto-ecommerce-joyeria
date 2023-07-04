const dbUrl = '';

// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/joyeria_mongo');
  console.log("base de datos conectada")
}



module.exports = mongoose;