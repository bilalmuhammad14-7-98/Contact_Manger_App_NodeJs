// const Contact = require("../models/contactModel");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

// @desc Register User
// @route POST /api/users/register
// access public

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  console.log(req.body, "request");

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandotary");
  }

  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User already registered");
  }

  // hashed password
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("Updated Password", hashedPassword);

  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  console.log(`User Created: ${user}`);
  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("User data is not valid");
  }
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
