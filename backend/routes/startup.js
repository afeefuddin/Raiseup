const express = require("express");
const createStartup = require("../controllers/createStartup");

const { uploadFiles } = require("../utils/uploadFile");
const isActiveStartup = require("../controllers/isActiveStartup");
const router = express.Router();

router.post("/create", uploadFiles, createStartup);
router.get("/isactive/:useruid", isActiveStartup);

module.exports = router;
