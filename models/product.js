var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var product = new Schema({
  name_product: {
    type: String,
  },
  code_product: {
    type: Number,
  },
  short_desc: {
    type: String,
  },
  desc_product: {
    type: String,
  },
  number_product: {
    type: Number,
  },
  created_at: {
    type: Date,
  },
  updated_at: {
    type: Date,
  },
  category_id: {
    type: Schema.Types.ObjectId,
  },
  created_by_user_id: {
    type: Schema.Types.ObjectId,
  },
});
module.exports = mongoose.model("product", product);
