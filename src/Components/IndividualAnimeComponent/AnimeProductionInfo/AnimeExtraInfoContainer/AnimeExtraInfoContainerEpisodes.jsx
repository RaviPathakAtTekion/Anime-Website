import { useState, Fragment } from "react";

import Episodes from "../../Segretations/Episodes.jsx";
import ClassLoaderMini from "../../../ClassLoader/ClassLoaderMini.jsx";
import { GetAnimeSpecificEpisodesData } from "./AnimeSpecificDataFetcher";
import ErrorMessage from "../../../ErrorOccurredComponent/ErrorMessage";
import "./AnimeExtraInfoContainer.scss";

function AnimeExtraInfoContainerEpisodes({ animeId, type }) {
  const [mouseHover, setMouseHover] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const { episodesLoading, episdoesData, episodesError } =
    GetAnimeSpecificEpisodesData(animeId, type);

  const handleMouseHover = () => {
    setMouseHover(true);
  };

  const handleMouseOut = () => {
    setMouseHover(false);
  };

  const handleNextPage = (lastPage) => {
    setCurrentPage((prevPage) => {
      return prevPage === lastPage ? 1 : prevPage + 1;
    });
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => {
      return prevPage === 1 ? 1 : prevPage - 1;
    });
  };

  return (
    <Fragment>
      {episdoesData.length !== 0 &&
      episodesError === null &&
      !episodesLoading ? (
        episdoesData.data.length !== 0 ? (
          <div onMouseOver={handleMouseHover} onMouseOut={handleMouseOut}>
            <div className="anime_extra_info_segment_parts">
              <Episodes
                episodes={episdoesData.data}
                nextPageStatus={episdoesData.pagination.has_next_page}
                nextPage={handleNextPage}
                prevPage={handlePrevPage}
                hoverOver={mouseHover}
                pageNumber={currentPage}
                lastPage={episdoesData.pagination.last_visible_page}
              />
            </div>
          </div>
        ) : (
          ""
        )
      ) : episodesError === null ? (
        <ErrorMessage />
      ) : (
        <ClassLoaderMini />
      )}
    </Fragment>
  );
}

export default AnimeExtraInfoContainerEpisodes;
