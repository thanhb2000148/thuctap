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
    },
    is_employe_manager: {
      type: Boolean,
    },
    is_staff: {
      type: Boolean,
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
