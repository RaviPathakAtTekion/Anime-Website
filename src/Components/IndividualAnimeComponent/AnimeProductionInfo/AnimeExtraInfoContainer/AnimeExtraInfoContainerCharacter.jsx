import { Fragment } from "react";
// import { useEffect } from "react";
import Characters from "../../Segretations/Characters.jsx";
import ClassLoaderMini from "../../../ClassLoader/ClassLoaderMini.jsx";
import { GetAnimeSpecificCharactersData } from "./AnimeSpecificDataFetcher.jsx";
import ErrorMessage from "../../../ErrorOccurredComponent/ErrorMessage.jsx";

import "./AnimeExtraInfoContainer.scss";

function AnimeExtraInfoContainerCharacter({ animeId, type }) {
  const { charactersLoading, charactersData, charactersError } =
    GetAnimeSpecificCharactersData(animeId, type);

  return (
    <Fragment>
      {charactersData.length !== 0 &&
      charactersError === null &&
      !charactersLoading ? (
        <div className="anime_extra_info_segment_parts">
          <Characters characters={charactersData} />
        </div>
      ) : charactersLoading ? (
        <ClassLoaderMini />
      ) : charactersData.length === 0 ? (
        ""
      ) : (
        <ErrorMessage />
      )}
    </Fragment>
  );
}

export default AnimeExtraInfoContainerCharacter;
