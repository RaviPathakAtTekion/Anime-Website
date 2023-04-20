import { Fragment } from "react";
// import { useEffect } from "react";
import Characters from "../../Segretations/Characters.jsx";
import ClassLoaderMini from "../../../ClassLoader/ClassLoaderMini.jsx";

import "./AnimeExtraInfoContainer.scss";
import { GetAnimeSpecificCharactersData } from "./AnimeSpecificDataFetcher.jsx";
import ErrorMessage from "../../../ErrorOccurredComponent/ErrorMessage.jsx";

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
      ) : charactersError !== null ? (
        <ErrorMessage />
      ) : charactersData.length === 0 ? (
        ""
      ) : (
        <ClassLoaderMini />
      )}
    </Fragment>
  );
}

export default AnimeExtraInfoContainerCharacter;
