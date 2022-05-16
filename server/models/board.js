const mongoose = require("mongoose");

const ProjectBoard = new mongoose.Schema({
  user: String,
  data: Array,
});

module.exports = mongoose.model("ProjectBoard", ProjectBoard);
