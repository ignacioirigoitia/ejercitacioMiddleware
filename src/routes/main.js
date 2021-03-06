const express = require("express");
const router = express.Router();
const {index, admin} = require("../controllers/mainController")
const adminMiddleware = require("../middlewares/adminMiddleware");

router.get("/", index);
router.get("/admin", adminMiddleware, admin);

module.exports = router;