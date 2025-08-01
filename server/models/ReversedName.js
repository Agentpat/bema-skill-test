const mongoose = require('mongoose');

const reversedNameSchema = new mongoose.Schema({
  name: String,
  reversed: String,
});

module.exports = mongoose.model('ReversedName', reversedNameSchema);
