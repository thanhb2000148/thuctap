var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var price = new Schema({
  id_product: {
    type: Schema.Types.ObjectId,
  },
  list_price: [
    {
      status_name: {
        type: String,
      },
      status_code: {
        type: Number,
      },
      from_date: {
        type: Date,
      },
      to_date: {
        type: Date,
      },
    },
  ],
  total_unit_price: {
    type: Number,
  },
});
module.exports = mongoose.model("price", price);
