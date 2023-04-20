const initialAnimesState = {
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
  airingAnimes: {
    data: [],
  },
  animeTypeData: {
    data: [],
  },
  loading: true,
  error: null,
};

const inititalSpecificAnimeState = {
  characters: {
    data: [],
    loading: true,
    error: null,
  },
  episdoes: {
    data: [],
    loading: true,
    error: null,
  },
  news: {
    data: [],
    loading: true,
    error: null,
  },
  recommendations: {
    data: [],
    loading: true,
    error: null,
  },
  apiLoading: true,
  apiError: null,
};

export const AnimeData = (state = initialAnimesState, action) => {
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
      return {
        ...state,
        genres: { ...state.genres, data: action.payload.data },
        loading: false,
      };
    }
    case "FETCH_AIRING_ANIMES_SUCCESS": {
      return {
        ...state,
        airingAnimes: { ...state.airingAnimes, data: action.payload.data },
        loading: false,
      };
    }
    case "FETCH_ANIME_TYPE_DATA": {
      return {
        ...state,
        animeTypeData: { ...state.animeTypeData, data: action.payload },
        loading: false,
      };
    }
    case "FETCH_DATA_FAILURE":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export const animeSpecficData = (
  state = inititalSpecificAnimeState,
  action
) => {
  switch (action.type) {
    case "FETCH_DATA_REQUEST": {
      return { ...state, apiLoading: true };
    }
    case "FETCH_NEWS_SUCCESS": {
      return {
        ...state,
        news: { ...state.news, data: action.payload.data, loading: false },
      };
    }
    case "FETCH_NEWS_FAILURE": {
      return {
        ...state,
        news: { ...state.news, error: action.payload, loading: false },
      };
    }
    case "FETCH_CHARACTERS_SUCCESS": {
      return {
        ...state,
        characters: {
          ...state.characters,
          data: action.payload.data,
          loading: false,
        },
      };
    }
    case "FETCH_CHARACTERS_FAILURE": {
      return {
        ...state,
        characters: {
          ...state.characters,
          error: action.payload,
          loading: false,
        },
      };
    }
    case "FETCH_EPISODES_SUCCESS": {
      return {
        ...state,
        episdoes: { ...state.episdoes, data: action.payload, loading: false },
      };
    }
    case "FETCH_EPISODES_FAILURE": {
      return {
        ...state,
        episdoes: { ...state.episdoes, error: action.payload, loading: false },
      };
    }
    case "FETCH_RECOMMENDATIONS_SUCCESS": {
      return {
        ...state,
        recommendations: {
          ...state.recommendations,
          data: action.payload.data,
          loading: false,
        },
      };
    }
    case "FETCH_RECOMMENDATIONS_FAILURE": {
      return {
        ...state,
        recommendations: {
          ...state.recommendations,
          error: action.payload,
          loading: false,
        },
      };
    }
    case "FETCH_API_FAILURE_REQUEST": {
      return {
        ...state,
        apiError: action.payload,
        apiLoading: false,
      };
    }
    default: {
      return state;
    }
  }
};
