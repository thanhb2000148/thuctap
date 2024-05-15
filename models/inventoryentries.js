var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var inventoryentries = new Schema({
  created_date: {
    type: Date,
  },
  created_by_id_user: {
    type: Schema.Types.ObjectId,
  },
  list_product_created: [
    {
      id_product: {
        type: Schema.Types.ObjectId,
      },
      unitprices: {
        type: Number,
      },
    },
  ],
  id_ncc: {
    type: Schema.Types.ObjectId,
  },
});
module.exports = mongoose.model("inventoryentries", inventoryentries);
