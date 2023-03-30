const express = require("express");
const dotenv = require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/api/contacts", (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
