// worksModel.js
const mongoose = require('mongoose');

const worksSchema = new mongoose.Schema({
  title: String,
  classNote: String,
  description: String,
  status: String,
  email: String,
});

module.exports = mongoose.model('Works', worksSchema);