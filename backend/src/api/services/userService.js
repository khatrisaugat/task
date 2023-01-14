const User = require("../models/User");

exports.get_all_users = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    return err;
  }
};

exports.get_user_by_id = async (id) => {
  try {
    const user = await User.find({ where: { id: id } });
    return user[0];
  } catch (err) {
    console.log(err);
    return err;
  }
};

exports.update_user_details = async (id, data) => {
  try {
    const updatedUser = await User.update(data, { where: { id: id } });
    return updatedUser;
  } catch (err) {
    console.log(err);
    return err;
  }
};

exports.delete_user = async (id) => {
  try {
    const deletedUser = await User.delete({ where: { id: id } });
    return deletedUser;
  } catch (err) {
    console.log(err);
    return err;
  }
};
