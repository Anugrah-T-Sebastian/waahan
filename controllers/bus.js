const Bus = require("../models/bus");

const getAllBuses = async (req, res) => {
  res.send("all available buses");
};
const createBus = async (req, res) => {
  const bus = new Bus(req.body); // Create a new instance of the Bus model with the request body
  await bus.save(); // Save the bu
  res.status(201).json({ bus });
};
const getBus = async (req, res) => {
  res.send("get a bus by id");
};
const updateBus = async (req, res) => {
  res.send("update bus by id");
};
const deleteBus = async (req, res) => {
  res.send("delete bus by id");
};

module.exports = {
  getAllBuses,
  createBus,
  getBus,
  updateBus,
  deleteBus,
};
