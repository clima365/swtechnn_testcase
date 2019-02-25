import {
  GET_ARTISTS,
  GET_ARTISTS_LOADING,
  GET_ARTISTS_ERROR,
  GET_CURRENT_ARTIST,
  GET_CURRENT_ARTIST_ERROR,
  GET_CURRENT_ARTIST_LOADING,
  GET_CURRENT_ALBUM,
  GET_CURRENT_ALBUM_LOADING,
  GET_CURRENT_ALBUM_ERROR
} from "./actions";

const initialState = {
  currentArtist: {
    data: {},
    songs: [],
    albums: [],
    loading: false,
    error: false
  },
  artistsList: {
    data: [],
    loading: false,
    error: false
  },
  currentAlbum: {
    data: [],
    loading: false,
    error: false
  }
};

export const findSingers = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case GET_ARTISTS:
      return {
        ...state,
        artistsList: {
          data: action.artistsList,
          loading: false,
          error: false
        }
      };
    case GET_ARTISTS_LOADING:
      return {
        ...state,
        artistsList: {
          data: state.artistsList.data,
          loading: true,
          error: false
        }
      };
    case GET_ARTISTS_ERROR:
      return {
        ...state,
        artistsList: {
          data: [],
          loading: false,
          error: true
        }
      };
    case GET_CURRENT_ARTIST:
      return {
        ...state,
        currentAlbum: {
          data: [],
          loading: false,
          error: false
        },
        currentArtist: {
          data: action.currentArtist,
          songs: action.songs,
          albums: action.albums,
          loading: false,
          error: false
        }
      };
    case GET_CURRENT_ARTIST_LOADING:
      return {
        ...state,
        currentAlbum: {
          data: [],
          loading: false,
          error: false
        },
        currentArtist: {
          data: {},
          songs: [],
          albums: [],
          loading: true,
          error: false
        }
      };
    case GET_CURRENT_ARTIST_ERROR:
      return {
        ...state,
        currentAlbum: {
          data: [],
          loading: false,
          error: false
        },
        currentArtist: {
          data: {},
          songs: [],
          albums: [],
          loading: false,
          error: true
        }
      };
    case GET_CURRENT_ALBUM:
      return {
        ...state,
        currentAlbum: {
          data: action.currentAlbum,
          loading: false,
          error: false
        }
      };
    case GET_CURRENT_ALBUM_LOADING:
      return {
        ...state,
        currentAlbum: {
          data: [],
          loading: true,
          error: false
        }
      };
    case GET_CURRENT_ALBUM_ERROR:
      return {
        ...state,
        currentAlbum: {
          data: [],
          loading: false,
          error: true
        }
      };
    default:
      return state;
  }
};
