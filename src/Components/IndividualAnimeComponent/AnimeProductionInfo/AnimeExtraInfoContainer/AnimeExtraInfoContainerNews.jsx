import { Fragment } from "react";
import { GetAnimeSpecificNewsData } from "./AnimeSpecificDataFetcher.jsx";
import News from "../../Segretations/News.jsx";
import ClassLoaderMini from "../../../ClassLoader/ClassLoaderMini.jsx";

import "./AnimeExtraInfoContainer.scss";
import ErrorMessage from "../../../ErrorOccurredComponent/ErrorMessage.jsx";

function AnimeExtraInfoContainerNews({ animeId, type }) {
  const { newsLoading, newsData, newsError } = GetAnimeSpecificNewsData(
    animeId,
    type
  );

  return (
    <Fragment>
      {newsData.length !== 0 && newsError === null && !newsLoading ? (
        <div className="anime_extra_info_segment_parts">
          <News news={newsData} />
        </div>
      ) : newsLoading ? (
        <ClassLoaderMini />
      ) : newsData.length === 0 ? (
        ""
      ) : (
        <ErrorMessage />
      )}
    </Fragment>
  );
}

export default AnimeExtraInfoContainerNews;
