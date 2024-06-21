const mongoose = require("mongoose");

const BusSchema = new mongoose.Schema({
  busId: { type: String, required: true, unique: true },
  busType: { type: String, required: true, unique: true, trim: true },
  fuelCost: { type: Number, required: true },
  equipmentCost: { type: Number, required: true },
  createdOn: { type: Date, default: Date.now },
  busImageURL: { type: String, trim: true },
});

// Middleware to set busId before validating the document
BusSchema.pre("validate", function (next) {
  if (!this.busId) {
    this.busId = `bus${this._id}`;
  }
  next();
});

// Ensure indexes are created
BusSchema.index({ busType: 1 }, { unique: true });

const Bus = mongoose.model("Bus", BusSchema);
module.exports = Bus;
