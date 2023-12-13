const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");

const username = encodeURIComponent("lucaspedrolucio");
const password = encodeURIComponent("EuAmoJesus@1612");

const mongoURI = `mongodb+srv://${username}:${password}@cluster0.acvujpb.mongodb.net/mern-rooms`;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Mongo DB Connection failed"));
db.once("open", () => {
  console.log("Mongo DB Connection successful");
});
module.exports = mongoose;
