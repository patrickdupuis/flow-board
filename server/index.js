"use strict";

require("dotenv").config({ path: "../.env" });

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const PORT = process.env.PORT || 4000;
const db = require("./db/connection");
const authRoutes = require("./routes/authentication");

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

app.use("/auth", authRoutes);

app.get("*", (req, res) => {
  res.status(404).json({
    status: 404,
    message: "Not found.",
  });
});

db.connectToServer((err) => {
  if (err) {
    console.error(err);
    process.exit();
  }

  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
});
