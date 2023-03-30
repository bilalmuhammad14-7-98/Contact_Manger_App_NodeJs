const express = require("express");
const router = express.Router();

// router.route("/").get((req, res) => {
//   res.status(200).json({ message: "Get all contacts" });
// });

router.route("/").get((req, res) => {
  res.status(200).json({ message: "Get All Contacts" });
});

router.route("/:id").get((req, res) => {
  res.status(200).json({ message: `Get Contact for ${req.params.id}` });
});

router.route("/").post((req, res) => {
  res.status(200).json({ message: "Contact Created Successfully" });
});

router.route("/:id").put((req, res) => {
  res
    .status(200)
    .json({ message: `Contacts Updated Successfully for ${req.params.id}` });
});

router.route("/:id").delete((req, res) => {
  res.status(200).json({ message: `Deleted Successfully ${req.params.id}` });
});

module.exports = router;
