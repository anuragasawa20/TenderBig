const express = require("express");
const router = express.Router();
const contactController = require("../controller/contactController");
const {verifyToken , isNotUser} = require("../middleware/auth")

router.post("/post-contactform", contactController.postContactForm);
router.get("/get-allcontactforms",verifyToken,isNotUser, contactController.getContactForms);

module.exports = router;
