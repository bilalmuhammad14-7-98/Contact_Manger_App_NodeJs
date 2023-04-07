// const Contact = require("../models/contactModel");
const asyncHandler = require("express-async-handler");

// @desc Register User
// @route POST /api/users/register
// access public

const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "user registered successfully" });
});

// @desc Login User
// @route POST /api/users/login
// access public

const loginUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "user logged in successfully" });
});

// @desc Get Current user Data
// @route get /api/users
// access private

const currentUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "fetched data successfully" });
});

module.exports = {
  registerUser,
  loginUser,
  currentUser,
};
