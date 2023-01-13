const express = require("express");
const router = express.Router();

const authRoutes = require("./authRoutes");
authRoutes(router);

module.exports = router;
