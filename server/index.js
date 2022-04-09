require("dotenv").config({ path: "../.env" });

const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 4000;
const db = require("./db/connection");
const authRoutes = require("./routes/authentication");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);

db.connectToServer((err) => {
  if (err) {
    console.error(err);
    process.exit();
  }

  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
});
