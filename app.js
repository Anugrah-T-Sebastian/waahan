const express = require("express");
const app = express();

const port = 3000;

// routes
app.get("/", (req, res) => {
  res.send("Waahan app is running...");
});

app.listen(port, console.log(`Server is running on port ${port}...`));
