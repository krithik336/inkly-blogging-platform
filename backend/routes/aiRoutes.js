const express = require("express");

const {
  generateBlog
} = require("../controllers/aiController");

const router = express.Router();

router.post("/generate", generateBlog);

module.exports = router;