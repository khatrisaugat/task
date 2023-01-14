const express = require("express");
const router = express.Router();

const authRoutes = require("./authRoutes");
authRoutes(router);

const userRoutes = require("./userRoutes");
userRoutes(router);

module.exports = router;
