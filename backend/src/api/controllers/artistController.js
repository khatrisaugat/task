const ArtistService = require("../services/artistService");

exports.createArtist = async (req, res) => {
  try {
    const artist = await ArtistService.create_artist(req.body);
    return res.json(artist);
  } catch (err) {
    console.log(err);
    return res.json({ error: "Something went wrong" });
  }
};

exports.getAllArtists = async (req, res) => {
  try {
    const artists = await ArtistService.get_all_artists();
    return res.json(artists);
  } catch (err) {
    console.log(err);
    return res.json({ error: "Something went wrong" });
  }
};

exports.getArtistById = async (req, res) => {
  try {
    const artist = await ArtistService.get_artist_by_id(req.params.id);
    return res.json(artist);
  } catch (err) {
    console.log(err);
    return res.json({ error: "Something went wrong" });
  }
};

exports.updateArtistDetail = async (req, res) => {
  try {
    const updatedArtist = await ArtistService.update_artist_details(
      req.params.id,
      req.body
    );
    return res.json(updatedArtist);
  } catch (err) {
    console.log(err);
    return res.json({ error: "Something went wrong" });
  }
};

exports.deleteArtist = async (req, res) => {
  try {
    const deletedArtist = await ArtistService.delete_artist(req.params.id);
    return res.json(deletedArtist);
  } catch (err) {
    console.log(err);
    return res.json({ error: "Something went wrong" });
  }
};
