import { Fragment } from "react";
import Recommendations from "../../Segretations/Recommendations.jsx";
import ClassLoaderMini from "../../../ClassLoader/ClassLoaderMini.jsx";
import { GetAnimeSpecificRecommendationsData } from "./AnimeSpecificDataFetcher.jsx";
import ErrorMessage from "../../../ErrorOccurredComponent/ErrorMessage.jsx";

import "./AnimeExtraInfoContainer.scss";

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
      ) : recommendationsLoading ? (
        <ClassLoaderMini />
      ) : recommendationsData.length === 0 ? (
        ""
      ) : (
        <ErrorMessage />
      )}
    </Fragment>
  );
}

export default AnimeExtraInfoContainerRecommendations;
