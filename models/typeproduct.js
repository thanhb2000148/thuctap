var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var typeproduct = new Schema({
  id_product: {
    type: Schema.Types.ObjectId,
  },
  type_product: {
    type: String,
  },
});
module.exports = mongoose.model("typeproduct", typeproduct);
