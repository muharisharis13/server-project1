const mongoose = require('mongoose');

const post = mongoose.Schema({
  full_name: { type: String, required: true },
  phone_number: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  created_at: { type: Date, default: new Date(Date.now()) }
})


exports.adminModel = mongoose.model("admin", post)