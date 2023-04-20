import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAnimeDataByType } from "./AnimesApiCallTypeFunctions.jsx";

function AnimeApiCallByType(DetailsAPI, apiType, page) {
  const contentData = useSelector((state) => state.animeData.animeTypeData.data);
  const animeLoading = useSelector((state) => state.animeData.loading);
  const animeError = useSelector((state) => state.animeData.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAnimeDataByType(DetailsAPI, apiType, page));
  }, [page]);

  return { animeLoading, contentData, animeError };
}

export default AnimeApiCallByType;
