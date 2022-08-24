const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = (url) =>{
    return mongoose
      .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(console.log("DB connected successfully"))
      .catch((err) => console.log(`DB connection Error`, err)); 
}
module.exports = connectDB
