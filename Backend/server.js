const express = require("express");
const mongoose = require("mongoose");
const router = require("./router");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000; // Use the port from the environment variable

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", router);

// Database connection
mongoose
  .connect(
    "mongodb+srv://abhay:abhay12345@cluster0.l8ty0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    //"mongodb+srv://abhay:sjdd3rtet8dsuh@cluster0.l8ty0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
