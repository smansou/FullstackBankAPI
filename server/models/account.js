const mongoose = require("mongoose");
const Schema = mongoose.Schema;

 const accountSchema = new Schema({
    accountId: {
    type: String,
  },
  isActive: {
    type: Boolean,
    required: true,
    default: true
  },
  balance: {
    type: Number,
    required: true,
    default: 0
  },
  credit: {
    type: Number,
    required: true,
    default: 0
  },
  owner: {
     type: Schema.Types.ObjectId,
     ref: 'Client',
    required: true,
  }
  
});

module.exports = mongoose.model("Account", accountSchema);
