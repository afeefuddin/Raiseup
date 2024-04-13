const express = require("express");
const createStartup = require("../controllers/createStartup");

const router = express.Router();

router.post("/create", createStartup);

module.exports = router;
