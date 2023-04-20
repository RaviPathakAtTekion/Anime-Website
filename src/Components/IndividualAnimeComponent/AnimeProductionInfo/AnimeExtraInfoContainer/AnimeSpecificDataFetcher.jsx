import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAnimeSpecficCharacters,
  fetchAnimeSpecficNews,
  fetchAnimeSpecficEpisodes,
  fetchAnimeSpecficRecommendations,
} from "./AnimeSpecificDataApiFetcher";

function GetAnimeSpecificCharactersData(animeId, type) {
  const charactersData = useSelector(
    (state) => state.specificAnimeData.characters.data
  );
  const charactersLoading = useSelector(
    (state) => state.specificAnimeData.characters.loading
  );
  const charactersError = useSelector(
    (state) => state.specificAnimeData.characters.error
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAnimeSpecficCharacters(type, animeId));
  }, [animeId]);

  return { charactersLoading, charactersData, charactersError };
}

function GetAnimeSpecificNewsData(animeId, type) {
  const newsData = useSelector((state) => state.specificAnimeData.news.data);
  const newsLoading = useSelector(
    (state) => state.specificAnimeData.news.loading
  );
  const newsError = useSelector((state) => state.specificAnimeData.news.error);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchAnimeSpecficNews(type, animeId));
    }, 500);
  }, [animeId]);

  return { newsLoading, newsData, newsError };
}

function GetAnimeSpecificEpisodesData(animeId, type) {
  const episdoesData = useSelector(
    (state) => state.specificAnimeData.episdoes.data
  );
  const episodesLoading = useSelector(
    (state) => state.specificAnimeData.episdoes.loading
  );
  const episodesError = useSelector(
    (state) => state.specificAnimeData.episdoes.error
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchAnimeSpecficEpisodes(type, animeId));
    }, 1000);
  }, [animeId]);

  return { episodesLoading, episdoesData, episodesError };
}

function GetAnimeSpecificRecommendationsData(animeId, type) {
  const recommendationsData = useSelector(
    (state) => state.specificAnimeData.recommendations.data
  );
  const recommendationsLoading = useSelector(
    (state) => state.specificAnimeData.recommendations.loading
  );
  const recommendationsError = useSelector(
    (state) => state.specificAnimeData.recommendations.error
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchAnimeSpecficRecommendations(type, animeId));
    }, 1500);
  }, [animeId]);

  return { recommendationsLoading, recommendationsData, recommendationsError };
}

export {
  GetAnimeSpecificCharactersData,
  GetAnimeSpecificNewsData,
  GetAnimeSpecificEpisodesData,
  GetAnimeSpecificRecommendationsData,
};
