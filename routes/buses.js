const express = require("express");
const router = express.Router();

const {
  getAllBuses,
  createBus,
  getBus,
  updateBus,
  deleteBus,
} = require("../controllers/buses");

router.route("/").get(getAllBuses);

module.exports = router;
