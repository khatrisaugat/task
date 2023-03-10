const validations = require("../validations");
const validateRegisterInput = validations.registerValidate;
const validateLoginInput = validations.loginValidate;

const authService = require("./../services/authService");
exports.register_a_user = async (req, res) => {
  req.body = JSON.parse(JSON.stringify(req.body));
  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  //exception handling
  try {
    // Check if user exists
    if (await authService.check_if_user_exists(req.body.email)) {
      return res.status(400).json({ message: "Email already exists" });
    } else {
      // Hash password before saving in database
      const newPassword = await authService.hash_password(
        req.body.password,
        10
      );
      // Create a new user
      const newUser = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: newPassword,
        dob: req.body.dob,
        phone: req.body.phone,
        gender: req.body.gender,
        address: req.body.address,
      };
      // Save user in the database
      const user = await authService.save_user(newUser);
      console.log("controller", user[0]);
      const payload = {
        id: user.id,
        email: user.email,
      };
      console.log(payload.email);
      // Sign token
      const token = authService.generate_token(payload);
      return res.json({
        success: true,
        token: "Bearer " + token,
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }
};

exports.login_a_user = async (req, res) => {
  req.body = JSON.parse(JSON.stringify(req.body));
  const email = req.body.email;
  const password = req.body.password;
  // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  //exception handling
  try {
    // Check if user exists
    if (!(await authService.check_if_user_exists(req.body.email))) {
      return res.status(401).json({ message: "Credentials incorrect" });
    }
    const user = await authService.find_user(email);
    // Check password
    const isMatch = await authService.compare_password(password, user.password);
    if (isMatch) {
      // User matched
      // JWT Payload
      const payload = {
        id: user.id,
        email: user.email,
      };
      console.log(payload.email);
      // Sign token
      const token = authService.generate_token(payload);
      return res.json({
        success: true,
        token: "Bearer " + token,
      });
    } else {
      return res.status(401).json({ message: "Credentials incorrect" });
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }
};

exports.current_user = async (req, res, next) => {
  try {
    const user = await authService.verify_token(req, res, next);
    if (user.error) {
      return res.json(user);
    }
    return res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: "Something went wrong" });
  }
};
