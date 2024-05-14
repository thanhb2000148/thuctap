const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(8000, () => {
  console.log(`Server is running on port 8000`);
});
