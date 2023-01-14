const { session } = require("passport");

const userRoutes = (router) => {
  const passport = require("passport");
  const userControl = require("../controllers/userController");
  router.get(
    "/users",
    passport.authenticate("jwt", { session: false }),
    userControl.getAllUsers
  );

  router.get(
    "/users/:id",
    passport.authenticate("jwt", { session: false }),
    userControl.getUserById
  );

  router.put(
    "/users/:id",
    passport.authenticate("jwt", { session: false }),
    userControl.updateUserDetail
  );

  router.delete(
    "/users/:id",
    passport.authenticate("jwt", { session: false }),
    userControl.deleteUser
  );
};
module.exports = userRoutes;
