const musicRoutes = (router) => {
  const musicController = require("../controllers/musicController");
  router.get("/musics", musicController.getAllMusics);
  router.get("/musics/:id", musicController.getMusicById);
  router.get("/musics/artist/:id", musicController.getMusicByArtistId);
  router.post("/musics", musicController.createMusic);
  router.put("/musics/:id", musicController.updateMusicDetail);
  router.delete("/musics/:id", musicController.deleteMusic);
};

module.exports = musicRoutes;
