var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var USER = new Schema({
  FIRST_NAME: {
    type: String,
  },
  MIDLE_NAME: {
    type: String,
  },
  FULL_NAME: {
    type: String,
  },
  LAST_NAME: {
    type: String,
  },
  EMAIL_USER: {
    type: String,
  },
  LIST_ADDRES_USER: [
    {
      PROVINCE: {
        type: String,
      },
      DISTRICT: {
        type: String,
      },
      COMMUNE: {
        type: String,
      },
      DESC: {
        type: String,
      },
      FROM_DATE: {
        type: Date,
      },
      TO_DATE: {
        type: Date,
      },
    },
  ],
  PHONE_NUMBER: {
    type: String,
  },
  CREATED_AT: {
    type: Date,
  },
  GENGER_USER: {
    type: String,
  },
  AVT_URL: {
    type: String,
  },
});
module.exports = mongoose.model("user", USER);
