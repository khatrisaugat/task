const validations = require("../validations");
const musicInputValidate = validations.musicValidate;

const musicService = require("../services/musicService");

exports.createMusic = async (req, res) => {
  // req.body = JSON.parse(req.body);

  const { errors, isValid } = musicInputValidate(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  try {
    const music = await musicService.create_music(req.body);
    return res.json(music);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};
exports.getAllMusics = async (req, res) => {
  try {
    const musics = await musicService.get_all_musics();
    return res.json(musics);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

exports.getMusicById = async (req, res) => {
  try {
    const music = await musicService.get_music_by_id(req.params.id);
    return res.json(music);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

exports.getMusicByArtistId = async (req, res) => {
  try {
    const music = await musicService.get_music_by_artist_id(req.params.id);
    return res.json(music);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

exports.updateMusicDetail = async (req, res) => {
  try {
    const updatedMusic = await musicService.update_music_details(
      req.params.id,
      req.body
    );
    return res.json(updatedMusic);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

exports.deleteMusic = async (req, res) => {
  try {
    const deletedMusic = await musicService.delete_music(req.params.id);
    return res.json(deletedMusic);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};
