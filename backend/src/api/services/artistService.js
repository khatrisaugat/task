const Artist = require("../models/Artist");

exports.create_artist = async (data) => {
  try {
    const artist = await Artist.create(data);
    return artist;
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong" };
  }
};

exports.get_all_artists = async () => {
  try {
    const artists = await Artist.find();
    return artists;
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong" };
  }
};

exports.get_artist_by_id = async (id) => {
  try {
    const artist = await Artist.find({
      where: { id: id },
    });
    return artist[0];
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong" };
  }
};

exports.update_artist_details = async (id, data) => {
  try {
    const updatedArtist = await Artist.update(data, {
      where: { id: id },
    });
    return updatedArtist;
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong" };
  }
};

exports.delete_artist = async (id) => {
  try {
    const deletedArtist = await Artist.delete({
      where: { id: id },
    });
    return deletedArtist;
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong" };
  }
};
