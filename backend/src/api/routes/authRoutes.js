const authRoutes = (router) => {
  const authControl = require("../controllers/authController");

  router.post("/users/register", authControl.register_a_user);

  router.post("/users/login", authControl.login_a_user);

  router.get("/users/current", authControl.current_user);
};

module.exports = authRoutes;
