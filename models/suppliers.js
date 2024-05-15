var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var suppliers = new Schema({
  name_suppliers: {
    type: String,
  },
  name_product: {
    type: String,
  },
  address_suppliers: {
    type: String,
  },
  code_suppliers: {
    type: Number,
  },
});
