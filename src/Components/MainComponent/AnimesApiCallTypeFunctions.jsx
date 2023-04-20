import axios from "axios";

export function fetchAnimeDataByType(DetailsAPI, apiType, page) {
  return (dispatch) => {
    dispatch({
      type: "FETCH_ONE_PIECE_DATA_REQUEST",
    });
    axios
      .get(DetailsAPI, { params: { type: apiType, page: page } })
      .then((response) => {
        dispatch({
          type: "FETCH_ANIME_TYPE_DATA",
          payload: response.data,
        });
      })
      .catch((error) =>
        dispatch({
          type: "FETCH_DATA_FAILURE",
          payload: error.message,
        })
      );
  };
}
