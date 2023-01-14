const artistRoutes = (router) => {
  //adding passport middleware to protect routes
  const passport = require("passport");
  //end of adding passport middleware to protect routes
  const artistController = require("../controllers/artistController");
  router.get(
    "/artists",
    passport.authenticate("jwt", { session: false }),
    artistController.getAllArtists
  );

  router.get(
    "/artists/:id",
    passport.authenticate("jwt", { session: false }),
    artistController.getArtistById
  );

  router.post(
    "/artists",
    passport.authenticate("jwt", { session: false }),
    artistController.createArtist
  );

  router.put(
    "/artists/:id",
    passport.authenticate("jwt", { session: false }),
    artistController.updateArtistDetail
  );

  router.delete(
    "/artists/:id",
    passport.authenticate("jwt", { session: false }),
    artistController.deleteArtist
  );
};

module.exports = artistRoutes;
