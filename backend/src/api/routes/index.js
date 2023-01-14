const express = require("express");
const router = express.Router();

const authRoutes = require("./authRoutes");
authRoutes(router);

const userRoutes = require("./userRoutes");
userRoutes(router);

const artistRoutes = require("./artistRoutes");
artistRoutes(router);

const musicRoutes = require("./musicRoutes");
musicRoutes(router);

module.exports = router;
