import { useState } from "react";
import AnimeBoxComponent from "./TopAnimeComponent/AnimeComponent.jsx";
import { PrevButton, NextButton } from "../../../../../assets/navItems.js";
import "./AnimeBox.scss";

function AnimeBox({animesDetails, InfoImage}) {

  const [topAnimepageCount, setTopAnimepageCoount] = useState(0);

  const handlePrevClick = () => {
    setTopAnimepageCoount((prevPage) => {
        return prevPage === 0 ? prevPage = 0 : prevPage - 1;
    })
  }

  const handleNextClick = () => {
    setTopAnimepageCoount((prevPage) => {
        return prevPage > 23 ? prevPage = 0 : prevPage + 1;
    })
  }

  return (
    <div className="anime_box_style">
      <PrevButton className="anime_button_style" onClick={handlePrevClick}/>
      <AnimeBoxComponent animeDetails={animesDetails[topAnimepageCount]} InfoImage={InfoImage}/>
      <NextButton className="anime_button_style" onClick={handleNextClick}/>
    </div>
  );
}

export default AnimeBox;
