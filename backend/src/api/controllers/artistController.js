const validations = require("../validations");
const artistInputValidate = validations.artistValidate;

const ArtistService = require("../services/artistService");

exports.createArtist = async (req, res) => {
  // req.body = JSON.parse(req.body);
  // console.log(req.body);
  const { errors, isValid } = artistInputValidate(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  try {
    const artist = await ArtistService.create_artist(req.body);
    return res.json(artist);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

exports.getAllArtists = async (req, res) => {
  try {
    const artists = await ArtistService.get_all_artists();
    return res.json(artists);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

exports.getArtistById = async (req, res) => {
  try {
    const artist = await ArtistService.get_artist_by_id(req.params.id);
    return res.json(artist);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

exports.updateArtistDetail = async (req, res) => {
  req.body = JSON.parse(req.body);
  const { error, isValid } = artistInputValidate(req.body);
  if (!isValid) {
    return res.status(400).json(error);
  }
  try {
    const updatedArtist = await ArtistService.update_artist_details(
      req.params.id,
      req.body
    );
    return res.json(updatedArtist);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

exports.deleteArtist = async (req, res) => {
  try {
    const deletedArtist = await ArtistService.delete_artist(req.params.id);
    return res.json(deletedArtist);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Something went wrong" });
  }
};
