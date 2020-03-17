const mongoose = require("mongoose");


// Replace this with your MONGOURI.
const MONGOURI = "mongodb+srv://ouissal:${process.env.MONGO_PASS}@ldiac-k4bt8.mongodb.net/test?retryWrites=true&w=majority";

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true
    });
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};




module.exports = InitiateMongoServer;