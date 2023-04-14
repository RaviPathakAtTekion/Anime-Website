const initialOnePieceState = {
  onePieceData: {
    data: [],
  },
  narutoData: {
    data: [],
  },
  bleachData: {
    data: [],
  },
  genres: {
    data: [],
  },
  loading: false,
  error: null,
};

export const DataReducer = (state = initialOnePieceState, action) => {
  switch (action.type) {
    case "FETCH_ONE_PIECE_DATA_REQUEST":
      return { ...state, loading: true };
    case "FETCH_ONE_PIECE_DATA_SUCCESS":
      return {
        ...state,
        onePieceData: { ...state.onePieceData, data: action.payload.data },
        loading: false,
      };
    case "FETCH_NARUTO_DATA_SUCCESS":
      return {
        ...state,
        narutoData: { ...state.narutoData, data: action.payload.data },
        loading: false,
      };
    case "FETCH_BLEACH_DATA_SUCCESS":
      return {
        ...state,
        bleachData: { ...state.bleachData, data: action.payload.data },
        loading: false,
      };
    case "FETCH_GENRES_DATA_SUCCESS": {
      console.log(action.payload);
      return {
        ...state,
        genres: { ...state.genres, data: action.payload.data },
        loading: false,
      };
    }
    case "FETCH_ONE_PIECE_DATA_FAILURE":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
