// @desc Get all contacts
// @route GET /api/contacts
// access public

const getContact = (req, res) => {
  res.status(200).json({ message: "Get All Contacts" });
};

// @desc Get Single contact
// @route GET /api/contacts/:id
// access public

const getContactById = (req, res) => {
  res.status(200).json({ message: `Get Contact for ${req.params.id}` });
};

// @desc Create Contact contact
// @route POST /api/contacts
// access public

const createContact = (req, res) => {
  res.status(201).json({ message: "Contact Created Successfully" });
};

// @desc Update Contact
// @route PUT /api/contacts/:id
// access public

const updateContact = (req, res) => {
  res
    .status(200)
    .json({ message: `Contacts Updated Successfully for ${req.params.id}` });
};

// @desc Delete Contact
// @route DELETE /api/contacts/:id
// access public

const deleteContact = (req, res) => {
  res.status(200).json({ message: `Deleted Successfully ${req.params.id}` });
};

module.exports = {
  getContact,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
};
