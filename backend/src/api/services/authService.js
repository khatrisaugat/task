const bcrypt = require("bcryptjs");
const User = require("../models/User");
var empty = require("is-empty");
require("dotenv").config();
const jwt = require("jsonwebtoken");

exports.hash_password = (password, salt) => bcrypt.hash(password, salt);

exports.save_user = async (user) => {
  try {
    const id = await User.create(user);
    const savedUser = await User.find({ where: { id: id } });
    console.log("savedUser", savedUser);
    return savedUser;
  } catch (err) {
    console.log(err);
    return err;
  }
};

exports.check_if_user_exists = async (email) => {
  try {
    const user = await User.find({ where: { email: email } });
    console.log("user", user);
    // return user;
    if (empty(user[0])) {
      return false;
    } else {
      return true;
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};

exports.find_user = async (email) => {
  try {
    const user = await User.find({ where: { email: email } });
    console.log("user", user);
    return user[0];
  } catch (err) {
    console.log(err);
    return err;
  }
};

exports.compare_password = async (password, userPassword) => {
  try {
    const isMatch = await bcrypt.compare(password, userPassword);
    return isMatch;
  } catch (err) {
    console.log(err);
    return err;
  }
};

exports.generate_token = (user) => {
  const payload = {
    id: user.id,
    email: user.email,
  };
  try {
    return jwt.sign(payload, process.env.JWT_SECRET, {
      // expiresIn: 31556926, // 1 year in seconds
      expiresIn: 86400, // 1 day in seconds
    });
  } catch (err) {
    console.log(err);
  }
};

exports.decode_token = (token) => {
  try {
    const newToken = token.replace("Bearer ", "");
    console.log(jwt.verify(newToken, process.env.JWT_SECRET));
    return jwt.verify(newToken, process.env.JWT_SECRET);
  } catch (err) {
    console.log(err);
  }
};

exports.verify_token = async (req, res, next) => {
  const self = require("./authService");
  const token = req.header("Authorization");
  console.log(token);
  if (!token) {
    return { error: "Unauthorized" };
  }
  try {
    const decoded = self.decode_token(token);
    console.log(decoded);
    if (decoded === undefined || !decoded.email) {
      return { error: "Incorrect or expired token" };
    }
    // console.log(decoded.payload);
    const user = await self.find_user(decoded.email);
    if (!user) {
      return { error: "Something went worng" };
    }
    return user;
  } catch (err) {
    console.log(err);
    return { error: "Token expired" };
  }
};
