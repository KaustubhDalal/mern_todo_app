const mongoose = require("mongoose");

//Mongoose DB Connection
const connectMongodb = async () => {
  try{
    await mongoose.connect(process.env.CONNECTION_URL).then(() =>{
      console.log('Mongoose DB Connection success')
    })
  }catch(error){
    console.log(error.message);
    process.exit(1);
  }
}

module.exports = connectMongodb;