import { useState, Fragment } from "react";
import BigThreeContainerElementsBox from "./BigThreeContainerElementsBox/BigThreeContainerElementsBox.jsx";
import ClassLoaderMini from "../../ClassLoader/ClassLoaderMini.jsx";
import getData from "./BigThreeDataFetcher.jsx";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import ErrorMessage from "../../ErrorOccurredComponent/ErrorMessage.jsx";

import "./BigThreeContainer.scss";

function BigThreeContainer() {
  const [animeIndex, setAnimeIndex] = useState(1);

  const nextAnime = () => {
    setAnimeIndex((prev) => {
      return prev === 3 ? (prev = 1) : prev + 1;
    });
  };

  const prevAnime = () => {
    setAnimeIndex((prev) => {
      return prev === 1 ? (prev = 1) : prev - 1;
    });
  };

  const { loading, data, error } = getData(animeIndex);

  return (
    <Fragment>
      <div className="BigThreeContainer_title">
        <h2>The Big Three</h2>
      </div>
      {!loading && data.length !== 0 && error === null ? (
        <div className="BigThree_main_container">
          <GrFormPrevious className="anime_button_style" onClick={prevAnime} />
          <BigThreeContainerElementsBox animeData={data} />
          <GrFormNext className="anime_button_style" onClick={nextAnime} />
        </div>
      ) : error !== null ? (
        <ErrorMessage />
      ) : (
        <ClassLoaderMini />
      )}
    </Fragment>
  );
}

export default BigThreeContainer;
