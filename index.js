const express = require("express");
const bodyParser = require("body-parser");
const user = require("./routes/user"); //new addition
const volunteer = require("./routes/volunteer"); //new addition
const InitiateMongoServer = require("./config/db");
const path = require("path");
var cors = require("cors");

// Initiate Mongo Server
InitiateMongoServer();

/*const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://ouissal:{process.env.mongoPass}@ldiac-k4bt8.mongodb.net/test?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true });
try {
  client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
  });
  console.log("Connected to DB !!");
} catch (e) {
  console.log(e);
  throw e;
}*/



const app = express();

// PORT
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(bodyParser.json());



app.use("/user", user);
app.use("/volunteer", volunteer);

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});
