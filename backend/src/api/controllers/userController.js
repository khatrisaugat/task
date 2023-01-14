const userService = require("../services/userService");
exports.getAllUsers = async (req, res) => {
  try {
    const users = await userService.get_all_users();
    return res.json(users);
  } catch (err) {
    console.log(err);
    return res.json({ error: "Something went wrong" });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await userService.get_user_by_id(req.params.id);
    return res.json(user);
  } catch (err) {
    console.log(err);
    return res.json({ error: "Something went wrong" });
  }
};

exports.updateUserDetail = async (req, res) => {
  try {
    const updatedUser = await userService.update_user_details(
      req.params.id,
      req.body
    );
    return res.json(updatedUser);
  } catch (err) {
    console.log(err);
    return res.json({ error: "Something went wrong" });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await userService.delete_user(req.params.id);
    return res.json(deletedUser);
  } catch (err) {
    console.log(err);
    return res.json({ error: "Something went wrong" });
  }
};
