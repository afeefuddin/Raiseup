const {Router} = require('express');
const createUser = require('../controllers/createUser');
const getUser = require("../controllers/getUser");

const router = Router()


router.post("/adduser", createUser);
router.get("/getuser/:useruid", getUser);

module.exports = {router}