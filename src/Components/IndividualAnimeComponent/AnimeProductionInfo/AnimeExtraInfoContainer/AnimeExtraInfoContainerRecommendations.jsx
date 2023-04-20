import { Fragment } from "react";
import Recommendations from "../../Segretations/Recommendations.jsx";
import ClassLoaderMini from "../../../ClassLoader/ClassLoaderMini.jsx";
import { GetAnimeSpecificRecommendationsData } from "./AnimeSpecificDataFetcher.jsx";

import "./AnimeExtraInfoContainer.scss";
import ErrorMessage from "../../../ErrorOccurredComponent/ErrorMessage.jsx";

function AnimeExtraInfoContainerRecommendations({ animeId, delay, type }) {
  const { recommendationsLoading, recommendationsData, recommendationsError } =
    GetAnimeSpecificRecommendationsData(animeId, type);
    
  return (
    <Fragment>
      {recommendationsError === null &&
      !recommendationsLoading &&
      recommendationsData.length !== 0 ? (
        <div className="anime_extra_info_segment_parts">
          <Recommendations recommendations={recommendationsData} />
        </div>
      ) : recommendationsError !== null ? (
        <ErrorMessage />
      ) : recommendationsData.length === 0 ? (
        ""
      ) : (
        <ClassLoaderMini />
      )}
    </Fragment>
  );
}

export default AnimeExtraInfoContainerRecommendations;
