const express = require("express");

const router = express.Router();

router.post("/register", (req, res) => {
  res.status(200).json({ message: "user registered successfully" });
});

router.post("/login", (req, res) => {
  res.status(200).json({ message: "user login successfully" });
});

router.get("/current", (req, res) => {
  res.status(200).json({ message: "user current data fetched successfully" });
});

module.exports = router;
