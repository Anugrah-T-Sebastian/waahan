const mongoose = require("mongoose");

const BusSchema = new mongoose.Schema({
  busId: { type: String, required: true, unique: true },
  busType: { type: String, required: true },
  fuelCost: { type: Number, required: true },
  equipmentCost: { type: Number, required: true },
  createdOn: { type: Date, default: Date.now },
  busImageURL: { type: String },
});

// Middleware to set busId before saving the document
BusSchema.pre("save", (next) => {
  if (!this.busId) {
    this.busId = `bus${this._id}`;
  }
  next();
});

const Bus = mongoose.model("Bus", BusSchema);
module.exports = Bus;
