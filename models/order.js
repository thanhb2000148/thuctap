var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var order = new Schema({
  order_code: {
    type: String
  },
  name_user: {
    type: String
  },
  address_user: {
    type: String
  },
  phone_user: {
    type: Number
  },
  email_user: {
    type: String
  },
  id_user: {
    type: Schema.Types.ObjectId
  },
  id_product: {
    type: Schema.Types.ObjectId
  },
  list_status: [{
    status_name: {
      type: String
    },
    status_code: {
      type: Number
    },
    from_date: {
      type: Date
    },
    to_date: {
      type: Date
    }
  }]
});