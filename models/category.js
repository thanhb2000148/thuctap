var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var category = new Schema({
  category_name: {
    type: String,
  },
  created_at: {
    type: Date,
  },
  updated_at: {
    type: Date,
  },
});
module.exports = mongoose.model("category", category);
