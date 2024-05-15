var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var user = new Schema({
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  email_user: {
    type: String,
  },
  address_user: {
    Province: {
      type: String,
    },
    District: {
      type: String,
    },
    Commune: {
      type: String,
    },
    desc: {
      type: String,
    },
  },
  phone_number: {
    type: String,
  },
  created_at: {
    type: Date,
  },
  genger_user: {
    type: String,
  },
  midle_name: {
    type: String,
  },
  full_name: {
    type: String,
  },
  avt: {
    type: String,
  },
});
module.exports = mongoose.model("user", user);
