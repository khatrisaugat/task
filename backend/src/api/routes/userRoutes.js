const userRoutes = (router) => {
  const userControl = require("../controllers/userController");
  router.get("/users", userControl.getAllUsers);
  router.get("/users/:id", userControl.getUserById);
  router.put("/users/:id", userControl.updateUserDetail);
  router.delete("/users/:id", userControl.deleteUser);
};
module.exports = userRoutes;
