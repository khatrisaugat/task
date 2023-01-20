const express = require("express");
const router = require("./api/routes");
const passport = require("passport");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Passport middleware
app.use(passport.initialize());
// app.use(passport.session());
// Passport config
require("./config/passport")(passport);

app.use("/api", router);
// console.log("router", router);

// const User = require("./api/models/User");
// const Artist = require("./api/models/Artist");
// const Music = require("./api/models/Music");
// connection configurations
app.listen(port, () => console.log("express server running on port " + port));
