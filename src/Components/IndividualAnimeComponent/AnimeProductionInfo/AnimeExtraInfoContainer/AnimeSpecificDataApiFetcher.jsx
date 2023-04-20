import { BASE_ANIME_API } from "../../../../assets/navItems";
import axios from "axios";

export function fetchAnimeSpecficCharacters(type, animeId) {
  return (dispatch) => {
    dispatch({
      type: "FETCH_DATA_REQUEST",
    });
    axios
      .get(BASE_ANIME_API + `/${type}` + `/${animeId}` + `/characters`)
      .then((response) => {
        dispatch({
          type: "FETCH_CHARACTERS_SUCCESS",
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "FETCH_CHARACTERS_FAILURE",
          payload: error.message,
        });
      });
  };
}

export function fetchAnimeSpecficNews(type, animeId) {
  return (dispatch) => {
    dispatch({
      type: "FETCH_DATA_REQUEST",
    });
    axios
      .get(BASE_ANIME_API + `/${type}` + `/${animeId}` + `/news`)
      .then((response) => {
        dispatch({
          type: "FETCH_NEWS_SUCCESS",
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "FETCH_NEWS_FAILURE",
          payload: error.message,
        });
      });
  };
}

export function fetchAnimeSpecficEpisodes(type, animeId) {
  return (dispatch) => {
    dispatch({
      type: "FETCH_DATA_REQUEST",
    });
    axios
      .get(BASE_ANIME_API + `/${type}` + `/${animeId}` + `/episodes`)
      .then((response) => {
        dispatch({
          type: "FETCH_EPISODES_SUCCESS",
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "FETCH_EPISODES_FAILURE",
          payload: error.message,
        });
      });
  };
}

export function fetchAnimeSpecficRecommendations(type, animeId) {
  return (dispatch) => {
    dispatch({
      type: "FETCH_DATA_REQUEST",
    });
    axios
      .get(BASE_ANIME_API + `/${type}` + `/${animeId}` + `/recommendations`)
      .then((response) => {
        dispatch({
          type: "FETCH_RECOMMENDATIONS_SUCCESS",
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "FETCH_RECOMMENDATIONS_FAILURE",
          payload: error.message,
        });
      });
  };
}