const express = require("express");
const cors = require("cors");
const userRoutes = require("./userRoutes");
const mongoose = require("mongoose");
require("dotenv").config({ path: "../.env" });
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const port = 4000;

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(MONGO_URI, options)
  .then(() => console.log("Connected to DB"))
  .catch(console.error);

app.use("/auth", userRoutes);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
