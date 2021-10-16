const mongoose = require("mongoose");


const post = mongoose.Schema({
  kode_produk: { type: String, required: true, unique: true },
  nama: { type: String, required: true },
  qty: { type: Number, required: true },
  unit: { type: String, required: true },
  harga_pokok: { type: Number, required: true },
  harga_jual: { type: Number, required: true },
  created_at: { type: Date, default: new Date() },
  updated_at: { type: Date, default: new Date() }
}, { varianKey: false })

exports.productModels = mongoose.model("produk", post)