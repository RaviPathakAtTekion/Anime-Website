import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAiringAnimes } from "../../BigThreeContainer/BigThreeData";

const AiringAnimesData = () => {
  const airingAnimes = useSelector((state) => state.animeData.airingAnimes.data);
  const loading = useSelector((state) => state.animeData.loading);
  const error = useSelector((state) => state.animeData.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (airingAnimes.length === 0) {
      dispatch(fetchAiringAnimes());
    }
  }, []);
  
  return { loading, airingAnimes, error };
};

export default AiringAnimesData;
