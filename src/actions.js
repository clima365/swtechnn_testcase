export const GET_ARTISTS = "GET_ARTISTS";
export const GET_ARTISTS_ASYNC = "GET_ARTISTS_ASYNC";
export const GET_ARTISTS_LOADING = "GET_ARTISTS_LOADING";
export const GET_ARTISTS_ERROR = "GET_ARTISTS_ERROR";
export const GET_CURRENT_ARTIST = "GET_CURRENT_ARTIST";
export const GET_CURRENT_ARTIST_ASYNC = "GET_CURRENT_ARTIST_ASYNC";
export const GET_CURRENT_ARTIST_LOADING = "GET_CURRENT_ARTIST_LOADING";
export const GET_CURRENT_ARTIST_ERROR = "GET_CURRENT_ARTIST_ERROR";
export const GET_CURRENT_ALBUM = "GET_CURRENT_ALBUM";
export const GET_CURRENT_ALBUM_ASYNC = "GET_CURRENT_ALBUM_ASYNC";
export const GET_CURRENT_ALBUM_LOADING = "GET_CURRENT_ALBUM_LOADING";
export const GET_CURRENT_ALBUM_ERROR = "GET_CURRENT_ALBUM_ERROR";

export const getArtists = value => {
  return { type: GET_ARTISTS_ASYNC, value };
};

export const selectCurrentArtist = value => {
  return { type: GET_CURRENT_ARTIST_ASYNC, value };
};

export const selectCurrentAlbum = value => {
  return { type: GET_CURRENT_ALBUM_ASYNC, value };
};
