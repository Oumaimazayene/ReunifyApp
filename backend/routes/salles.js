const express = require("express");
const router = express.Router();
const salleController = require("../controllers/salleController");
const userAuth = require("../middlewars/auth");
const adminAuth = require("../middlewars/adminAuth");

router.get("/salles", userAuth, salleController.getSalles);
router.get("/salles/:id", userAuth, salleController.getSalleById);
router.post("/salles", adminAuth, salleController.createSalle);
router.put("/salles/:id", adminAuth, salleController.updateSalle);
router.delete("/salles/:id", adminAuth, salleController.deleteSalle);

module.exports = router;
