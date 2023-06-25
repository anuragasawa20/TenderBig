const express = require("express");
const router = express.Router();
const usersController = require("../controller/userController");
const {isAdmin, verifyToken, isNotUser } = require("../middleware/auth")

//Get user deatils
router.get("/single-user/:userId", verifyToken, usersController.getSingleUser);

//To get all users
router.get("/allusers", verifyToken, isNotUser, usersController.getAllUser);

//To update user role
router.put("/updaterole", verifyToken,isNotUser, usersController.updateUserRole);

//Delete user
router.delete("/delete/:userId", verifyToken, isNotUser, usersController.deleteUser);

//New users
router.get("/created/:weeks", verifyToken, isNotUser, usersController.newUsers);

module.exports = router;
