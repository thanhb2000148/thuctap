const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const cloudinary = require("./config/cloudinary.js").v2;

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
// MongoDB connection
const password = encodeURIComponent("tttt2024group1#@");
const mongoConnect = `mongodb://internship_group_1:${password}@dtuct.ddns.net:6969/STORE_MANGAGER`;
mongoose
  .connect(mongoConnect, {})
  .then(() => {
    console.log("Connected to MongoDB");
    // Sau khi kết nối MongoDB, tiến hành upload ảnh lên Cloudinary
    cloudinary.uploader.upload("assets/images/1.jpg", { resource_type: "image" })
      .then((result) => {
        console.log("Upload success", JSON.stringify(result, null, 2));
      })
      .catch((error) => {
        console.error("Upload error", JSON.stringify(error, null, 2));
      });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});



