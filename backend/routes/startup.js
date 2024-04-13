const express = require("express");
const createStartup = require("../controllers/createStartup");

const { uploadFiles } = require("../utils/uploadFile");
const router = express.Router();

router.post("/create", uploadFiles, createStartup);

module.exports = router;
