const mongoose = require("mongoose");
const { mongoUri } = require("../config/env.dev");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let db;

const connectToServer = (callback) => {
  mongoose
    .connect(mongoUri, options)
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
