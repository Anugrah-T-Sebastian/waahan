const getAllBuses = async (req, res) => {
  res.send("all available buses");
};
const createBus = async (req, res) => {
  res.send(req.body);
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
