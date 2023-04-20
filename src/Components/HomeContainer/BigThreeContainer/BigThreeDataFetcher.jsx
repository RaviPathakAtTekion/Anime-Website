import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  fetchBleachData,
  fetchNarutoData,
  fetchOnePieceData,
} from "./BigThreeData";

const getData = (animeIndex) => {
  const onePieceData = useSelector((state) => state.animeData.onePieceData.data);
  const narutoData = useSelector((state) => state.animeData.narutoData.data);
  const bleachData = useSelector((state) => state.animeData.bleachData.data);
  const loading = useSelector((state) => state.animeData.loading);
  const error = useSelector((state) => state.animeData.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (animeIndex === 1) {
      if (!onePieceData?.mal_id) {
        dispatch(fetchOnePieceData());
      }
    } else if (animeIndex === 2) {
      if (!narutoData?.mal_id) {
        dispatch(fetchNarutoData());
      }
    } else {
      if (!bleachData?.mal_id) {
        dispatch(fetchBleachData());
      }
    }
  }, [dispatch, animeIndex]);

  if (animeIndex === 1) {
    return { loading, data: onePieceData, error };
  } else if (animeIndex === 2) {
    return { loading, data: narutoData, error };
  } else {
    return { loading, data: bleachData, error };
  }
};

export default getData;
