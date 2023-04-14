import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenresData } from "../HomeContainer/BigThreeContainer/BigThreeData";

const GenresData = () => {
  const genres = useSelector((state) => state.genres.data);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (genres.length === 0) {
      dispatch(fetchGenresData());
    }
  }, []);

  return { loading, genres, error };
};

export default GenresData;
