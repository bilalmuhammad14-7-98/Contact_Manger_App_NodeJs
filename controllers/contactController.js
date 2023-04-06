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
  console.log(req.params.id, "contact");
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    console.log("no contact");
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
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

  const contact = await Contact.create({
    name,
    email,
    phone,
  });
  res.status(201).json(contact);
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
