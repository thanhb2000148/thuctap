var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var PRODUCT = new Schema({
  NAME_PRODUCT: {
    type: String,
  },
  CODE_PRODUCT: {
    type: Number,
  },
  SHORT_DESC: {
    type: String,
  },
  DESC_PRODUCT: {
    type: String,
  },
  NUMBER_INVENTORY_PRODUCT: {
    type: Number,
  },
  CREATED_AT: {
    type: Date,
  },
  UPDATED_AT: {
    type: Date,
  },
  CATEGORY_ID: {
    type: Schema.Types.ObjectId,
  },
  LIST_PRODUCT_METADATA: [
    {
      KEY: {
        type: String,
      },
      VALUE: {
        type: String,
      },
    },
  ],
  LIST_FILE_ATTACHMENT: {
    FILE_URL: {
      type: String,
    },
    FILE_TYPE: {
      type: String,
    },
    FROM_DATE: {
      type: Date,
    },
    TO_DATE: {
      type: Date,
    },
  },
  ACCOUNT__ID: {
    type: Schema.Types.ObjectId,
    required: true,
  },
});
