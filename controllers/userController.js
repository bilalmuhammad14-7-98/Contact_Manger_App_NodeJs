// const Contact = require("../models/contactModel");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

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

// const loginUser = asyncHandler(async (req, res) => {
//   const { email, password } = req.body;
//   if (!email || !password) {
//     res.status(400);
//     throw new Error("All fields are mandotary");
//   }

//   const user = User.findOne({ email });
//   // compare password with hashedPassword
//   if (user && (await bcrypt.compare(password, user.password))) {
//     const accessToken = jwt.sign(
//       {
//         user: {
//           username: user.username,
//           email: user.email,
//           id: user._id,
//         },
//       },
//       process.env.ACCESS_TOKEN_SECRET,
//       {
//         expiresIn: "1m",
//       }
//     );
//     res.status(200).json({ accessToken });
//   } else {
//     res.status(401);
//     throw new Error("Email or password is not valid");
//   }

//   res.status(200).json({ message: "user logged in successfully" });
// });

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  const user = await User.findOne({ email });
  console.log(user);
  //compare password with hashedpassword
  if (user && (await bcrypt.compare(password, user.password))) {
    console.log(process.env.ACCESS_TOKEN_SECRET, "helo----------------------");
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "15m" }
    );
    res.status(200).json({ token: accessToken });
  } else {
    res.status(401);
    throw new Error("email or password is not valid");
  }
});

// @desc Get Current user Data
// @route get /api/users
// access private

const currentUser = asyncHandler(async (req, res) => {
  // console.log(req, "current user");
  res.status(200).json(req.user);
});

module.exports = {
  registerUser,
  loginUser,
  currentUser,
};
