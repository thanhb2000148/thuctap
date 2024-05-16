const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const authRouter = require("./router/authRouter");
const userRouter = require("./router/userRouter");
// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// MongoDB connection
const mongoURI = process.env.MONGODB_URI;

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

// Routes
app.use("/v1/auth", authRouter);
app.use("/v1/user", userRouter);
// Start server
app.listen(8000, () => {
  console.log(`Server is running on port 8000`);
});

// 