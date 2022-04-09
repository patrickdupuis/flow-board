require("dotenv").config({ path: "../../.env" });

const mongoose = require("mongoose");
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let db;

const connectToServer = (callback) => {
  mongoose
    .connect(MONGO_URI, options)
    .then(() => {
      console.log("Connected to DB");
      db = mongoose.connection;
      db.on("error", console.error.bind(console, "MongoDB connection error:"));
      return callback();
    })
    .catch((err) => {
      return callback(err);
    });
};

const getDb = () => {
  return db;
};

module.exports = { connectToServer, getDb };
