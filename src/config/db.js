const mongoose = require("mongoose");

const mongoDbUrl =
  "mongodb+srv://ecommerce:ecommerce@cluster0.t3zjeuz.mongodb.net/ecommerce";
const connectDb = () => {
  return mongoose.connect(mongoDbUrl);
};

module.exports = { connectDb };
