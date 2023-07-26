const express = require("express");
const user_router = express.Router();
const userController = require("../controllers/UserController");
const adminAuth = require("../middlewars/adminAuth");
const userAuth = require("../middlewars/auth");

user_router.get("/users", adminAuth, userController.getAllUsers);
user_router.get("/users/:id", userAuth, userController.getUserProfile);
user_router.put("/user/:id", adminAuth, userController.updateUserProfile);

module.exports = user_router;
