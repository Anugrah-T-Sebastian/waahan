const express = require("express");
const app = express();
const buses = require("./routes/buses");
const port = 3000;

// middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("Waahan app is running...");
});

app.use("/api/v1/bus", buses);

app.listen(port, console.log(`Server is running on port ${port}...`));
