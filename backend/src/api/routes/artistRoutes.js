const artistRoutes = (router) => {
  const artistController = require("../controllers/artistController");
  router.get("/artists", artistController.getAllArtists);
  router.get("/artists/:id", artistController.getArtistById);
  router.post("/artists", artistController.createArtist);
  router.put("/artists/:id", artistController.updateArtistDetail);
  router.delete("/artists/:id", artistController.deleteArtist);
};

module.exports = artistRoutes;
