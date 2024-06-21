const express = require("express");
const app = express();
const buses = require("./routes/bus");
const connectDB = require("./db/connect");
require("dotenv").config();

// model import
const BusModel = require("./models/bus");

// middleware
app.use(express.static("./public"));
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("Waahan app is running...");
});

app.use("/api/v1/bus", buses);

const port = 3000;

// connect to DB and start server
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("Connected to DB...");
    await BusModel.init(); // Ensure indexes for bus are created
    app.listen(port, console.log(`Server is running on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
