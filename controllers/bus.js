const Bus = require("../models/bus");

const getAllBuses = async (req, res) => {
  try {
    const buses = await Bus.find({}); // Fetch all buses from the database
    const busesRes = buses.map((bus) => {
      const { busId, busType, fuelCost, equipmentCost } = bus;
      return { busId, busType, fuelCost, equipmentCost };
    });
    res.status(200).json([...busesRes]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createBus = async (req, res) => {
  try {
    const bus = new Bus(req.body); // Create a new instance of the Bus model with the request body
    await bus.save(); // Save the bus to the database
    const { busId, busType, fuelCost, equipmentCost } = bus;
    res
      .status(201)
      .json({ busId, busType, fuelCost, equipmentCost, status: "success" });
  } catch (error) {
    res.status(500).json({ message: error.message, status: "failed" });
  }
};

const getBus = async (req, res) => {
  try {
    const { id: busId } = req.params;
    const bus = await Bus.findOne({ busId });
    if (!bus) {
      return res
        .status(404)
        .json({ message: `No bus with id: ${busId}`, status: "failed" });
    }
    const { busType, fuelCost, equipmentCost } = bus;
    res
      .status(200)
      .json({ busId, busType, fuelCost, equipmentCost, status: "success" });
  } catch (error) {
    res.status(500).json({ message: error.message, status: "failed" });
  }
};

const updateBus = async (req, res) => {
  try {
    const { id: busId } = req.params;
    const bus = await Bus.findOneAndUpdate({ busId }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!bus) {
      return res
        .status(404)
        .json({ message: `No bus with id: ${busId}`, status: "failed" });
    }
    const { busType, fuelCost, equipmentCost } = bus;
    res
      .status(200)
      .json({ busId, busType, fuelCost, equipmentCost, status: "success" });
  } catch (error) {
    res.status(500).json({ message: error.message, status: "failed" });
  }
};

const deleteBus = async (req, res) => {
  try {
    const { id: busId } = req.params;
    const bus = await Bus.findOneAndDelete({ busId });
    if (!bus) {
      return res
        .status(404)
        .json({ message: `No bus with id: ${busId}`, status: "failed" });
    }
    res
      .status(200)
      .json({ message: `Bus with id: ${busId} deleted`, status: "success" });
  } catch (error) {
    res.status(500).json({ message: error.message, status: "failed" });
  }
};

module.exports = {
  getAllBuses,
  createBus,
  getBus,
  updateBus,
  deleteBus,
};
