const express = require("express");
const router = express.Router();

const {
  getAllBuses,
  createBus,
  getBus,
  updateBus,
  deleteBus,
} = require("../controllers/buses");

router.route("/").get(getAllBuses).post(createBus);
router.route("/:id").get(getBus).patch(updateBus).delete(deleteBus);

module.exports = router;
