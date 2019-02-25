import axios from "axios";

const URLs = {
  search: "https://itunes.apple.com/search",
  lookup: "https://itunes.apple.com/lookup"
};

export const fetchArtistListAsync = async value => {
  try {
    const params = {
      country: "RU",
      term: value,
      entity: "musicArtist"
    };
    const data = await axios.get(URLs.search, { params });
    return data.data.results;
  } catch (err) {
    console.log("ERROR", err);
  }
};

export const fetchCurrentArtistListAsync = async id => {
  try {
    const params = {
      country: "RU",
      id
    };
    const data = await axios.get(URLs.lookup, { params });
    return data.data.results[0];
  } catch (err) {
    console.log("ERROR", err);
  }
};

export const fetchCurrentArtistMusicAsync = async id => {
  try {
    const params = {
      country: "RU",
      entity: "song",
      id,
      limit: 200
    };
    const data = await axios.get(URLs.lookup, { params });
    const filteredSongs = data.data.results.filter(
      item => item.wrapperType === "track"
    );
    return filteredSongs;
  } catch (err) {
    console.log("ERROR", err);
  }
};

export const fetchCurrentArtistAlbumsAsync = async id => {
  try {
    const params = {
      country: "RU",
      entity: "album",
      id,
      limit: 200
    };
    const data = await axios.get(URLs.lookup, { params });
    const filteredAlbums = data.data.results.filter(
      item => item.wrapperType === "collection"
    );
    return filteredAlbums;
  } catch (err) {
    console.log("ERROR", err);
  }
};

export const fetchCurrentAlbumAsync = async id => {
  try {
    const params = {
      country: "RU",
      id,
      entity: "song"
    };
    const data = await axios.get(URLs.lookup, { params });
    const filteredSongs = data.data.results
      .filter(item => item.wrapperType === "track")
      .filter(item => item.kind === "song");
    return filteredSongs;
  } catch (err) {
    console.log("ERROR", err);
  }
};
