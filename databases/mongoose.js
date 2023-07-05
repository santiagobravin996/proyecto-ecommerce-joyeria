// const mongoose = require('mongoose');

// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://localhost:27017/joyeria_mongo');
//   console.log("base de datos conectada")
  
//   const kittySchema = new mongoose.Schema({
//     name: String
//   });

//   kittySchema.methods.speak = function speak() {
//     const greeting = this.name
//       ? 'Meow name is ' + this.name
//       : 'I don\'t have a name';
//     console.log(greeting);
//   };
  
//   const Kitten = mongoose.model('Kitten', kittySchema);
  
//   const fluffy = new Kitten({ name: 'fluffy' });
//   fluffy.speak(); // "Meow name is fluffy"

//   await fluffy.save();
//   fluffy.speak();
// }




// module.exports = mongoose;