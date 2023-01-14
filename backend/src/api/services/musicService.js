const Music = require("../models/Music");

exports.create_music = async (data) => {
  try {
    const music = await Music.create(data);
    return music;
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong" };
  }
};

exports.get_all_musics = async () => {
  try {
    const musics = await Music.find();
    return musics;
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong" };
  }
};

exports.get_music_by_id = async (id) => {
  try {
    const music = await Music.find({
      where: { id: id },
    });
    return music[0];
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong" };
  }
};

exports.get_music_by_artist_id = async (id) => {
  try {
    const music = await Music.find({ where: { artist_id: id } });
    return music;
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong" };
  }
};

exports.update_music_details = async (id, data) => {
  try {
    const updatedMusic = await Music.update(data, {
      where: { id: id },
    });
    return updatedMusic;
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong" };
  }
};

exports.delete_music = async (id) => {
  try {
    const deletedMusic = await Music.delete({
      where: { id: id },
    });
    return deletedMusic;
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong" };
  }
};
