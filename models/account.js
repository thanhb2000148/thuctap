var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var account = new Schema({
  user_name: {
    type: String,
  },
  password: {
    type: String,
  },
  object_role: {
    is_admin: {
      type: Boolean,
      default: false,
    },
    is_employe_manager: {
      type: Boolean,
      default: false,
    },
    is_staff: {
      type: Boolean,
      default: false,
    },
  },
  list_code_active: [
    {
      code: {
        type: String,
      },
      is_used: {
        type: Boolean,
      },
      created_at: {
        type: Date,
      },
      time_used: {
        type: Date,
      },
      type: {
        type: String,
        enum: ["ACTIVE", "PASSWORD"],
      },
    },
  ],
  is_active: {
    type: Boolean,
  },
  is_lock: {
    type: Boolean,
  },
  user_id: {
    type: Schema.Types.ObjectId,
  },
});
module.exports = mongoose.model("account", account);
