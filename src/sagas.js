import { put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  GET_ARTISTS_ASYNC,
  GET_ARTISTS,
  GET_ARTISTS_LOADING,
  GET_ARTISTS_ERROR,
  GET_CURRENT_ARTIST,
  GET_CURRENT_ARTIST_ASYNC,
  GET_CURRENT_ARTIST_ERROR,
  GET_CURRENT_ARTIST_LOADING,
  GET_CURRENT_ALBUM,
  GET_CURRENT_ALBUM_LOADING,
  GET_CURRENT_ALBUM_ERROR,
  GET_CURRENT_ALBUM_ASYNC
} from "./actions";
import {
  fetchArtistListAsync,
  fetchCurrentArtistListAsync,
  fetchCurrentArtistMusicAsync,
  fetchCurrentArtistAlbumsAsync,
  fetchCurrentAlbumAsync
} from "./api";

function* getArtistsAsync({ value }) {
  try {
    yield put({
      type: GET_ARTISTS_LOADING
    });
    const data = yield fetchArtistListAsync(value);
    yield put({
      type: GET_ARTISTS,
      artistsList: data
    });
  } catch (err) {
    yield put({
      type: GET_ARTISTS_ERROR
    });
    console.log("ERROR", err);
  }
}

function* getCurrentArtistAsync({ value }) {
  try {
    yield put({
      type: GET_CURRENT_ARTIST_LOADING
    });
    const data = yield fetchCurrentArtistListAsync(value);
    const songs = yield fetchCurrentArtistMusicAsync(value);
    const albums = yield fetchCurrentArtistAlbumsAsync(value);
    yield put({
      type: GET_CURRENT_ARTIST,
      currentArtist: data,
      songs,
      albums
    });
  } catch (err) {
    yield put({
      type: GET_CURRENT_ARTIST_ERROR
    });
    console.log("ERROR", err);
  }
}

function* getCurrentAlbumAsync({ value }) {
  try {
    yield put({ type: GET_CURRENT_ALBUM_LOADING });
    const data = yield fetchCurrentAlbumAsync(value);
    yield put({
      type: GET_CURRENT_ALBUM,
      currentAlbum: data
    });
  } catch (err) {
    yield put({
      type: GET_CURRENT_ALBUM_ERROR
    });
    console.log("ERROR", err);
  }
}

function* mySaga() {
  yield takeLatest(GET_ARTISTS_ASYNC, getArtistsAsync);
  yield takeEvery(GET_CURRENT_ARTIST_ASYNC, getCurrentArtistAsync);
  yield takeEvery(GET_CURRENT_ALBUM_ASYNC, getCurrentAlbumAsync);
}

export default mySaga;
