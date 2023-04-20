import { BASE_ANIME_API } from "../../../assets/navItems.js";
import axios from "axios";

export const fetchOnePieceData = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_DATA_REQUEST" });
    axios
      .get(BASE_ANIME_API + "/anime/21")
      .then((response) => {
        dispatch({
          type: "FETCH_ONE_PIECE_DATA_SUCCESS",
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "FETCH_DATA_FAILURE",
          payload: error.message,
        });
      });
  };
};

export const fetchNarutoData = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_DATA_REQUEST" });
    axios
      .get(BASE_ANIME_API + "/anime/1735")
      .then((response) => {
        dispatch({
          type: "FETCH_NARUTO_DATA_SUCCESS",
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "FETCH_DATA_FAILURE",
          payload: error.message,
        });
      });
  };
};

export const fetchBleachData = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_DATA_REQUEST" });
    axios
      .get(BASE_ANIME_API + "/anime/269")
      .then((response) => {
        dispatch({
          type: "FETCH_BLEACH_DATA_SUCCESS",
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "FETCH_DATA_FAILURE",
          payload: error.message,
        });
      });
  };
};

export const fetchGenresData = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_DATA_REQUEST" });
    axios
      .get(BASE_ANIME_API + "/genres/anime")
      .then((response) => {
        dispatch({
          type: "FETCH_GENRES_DATA_SUCCESS",
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "FETCH_DATA_FAILURE",
          payload: error.message,
        });
      });
  };
};

const AIRING_ANIME_API = BASE_ANIME_API + "/top/anime";

export const fetchAiringAnimes = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_DATA_REQUEST" });
    axios
      .get(AIRING_ANIME_API, { params: { filter: "airing" } })
      .then((response) => {
        dispatch({
          type: "FETCH_AIRING_ANIMES_SUCCESS",
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "FETCH_DATA_FAILURE",
          payload: error.message,
        });
      });
  };
};
