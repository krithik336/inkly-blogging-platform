const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

// Routes
const authRoutes = require("./routes/authRoutes");
const blogRoutes = require("./routes/blogRoutes");
const aiRoutes = require("./routes/aiRoutes");

const app = express();

// Middleware
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000"
  })
);

app.use(express.json());

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/ai", aiRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB Connected");
})
.catch((err) => {
  console.log(err);
});

// Home Route
app.get("/", (req, res) => {
  res.send("API Running...");
});

// Test API Key Route
app.get("/test-api", (req, res) => {

  res.json({
    key: process.env.GROQ_API_KEY
  });

});

// Server Port
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});