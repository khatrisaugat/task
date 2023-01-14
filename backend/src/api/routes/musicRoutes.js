const musicRoutes = (router) => {
  const musicController = require("../controllers/musicController");
  const passport = require("passport");
  router.get(
    "/musics",
    passport.authenticate("jwt", { session: false }),
    musicController.getAllMusics
  );
  router.get(
    "/musics/:id",
    passport.authenticate("jwt", { session: false }),
    musicController.getMusicById
  );
  router.get(
    "/musics/artist/:id",
    passport.authenticate("jwt", { session: false }),
    musicController.getMusicByArtistId
  );
  router.post(
    "/musics",
    passport.authenticate("jwt", { session: false }),
    musicController.createMusic
  );
  router.put(
    "/musics/:id",
    passport.authenticate("jwt", { session: false }),
    musicController.updateMusicDetail
  );
  router.delete(
    "/musics/:id",
    passport.authenticate("jwt", { session: false }),
    musicController.deleteMusic
  );
};

module.exports = musicRoutes;
