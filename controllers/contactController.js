const Contact = require("../models/contactModel");
const asyncHandler = require("express-async-handler");

// @desc Get all contacts
// @route GET /api/contacts
// access public

const getContact = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

// @desc Get Single contact
// @route GET /api/contacts/:id
// access public

const getContactById = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get Contact for ${req.params.id}` });
});

// @desc Create Contact contact
// @route POST /api/contacts
// access public

const createContact = asyncHandler(async (req, res) => {
  console.log("Request body is", req.body);

  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandotary");
  }
  res.status(201).json({ message: "Contact Created Successfully" });
});

// @desc Update Contact
// @route PUT /api/contacts/:id
// access public

const updateContact = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json({ message: `Contacts Updated Successfully for ${req.params.id}` });
});

// @desc Delete Contact
// @route DELETE /api/contacts/:id
// access public

const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Deleted Successfully ${req.params.id}` });
});

module.exports = {
  getContact,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
};
