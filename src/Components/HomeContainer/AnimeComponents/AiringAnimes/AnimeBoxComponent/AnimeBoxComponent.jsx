import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import AnimeBigBox from "./AnimeBoxStyle/AnimeBigBox.jsx";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

import "./AnimeBoxComponent.scss";

// anime box container component
function AnimeBoxComponent({ animesDetails }) {

  // page naviagtion and mouse hover status state
  const [pageCount, setPageCount] = useState(5);
  const [mouseHover, setMouseHover] = useState(false);

  // const [stateValue, setStateValue] = useState(false);

  const handleMouseHover = () => {
    setMouseHover(true);
  };

  const handleMouseOut = () => {
    setMouseHover(false);
  };

  const handlePrevButton = () => {
    // setStateValue(true);
    setPageCount((prevPage) => {
      return prevPage === 5 ? (prevPage = 25) : prevPage - 5;
    });
  };

  const handleNextButton = () => {
    // setStateValue(true);
    setPageCount((prevPage) => {
      return prevPage === 25 ? (prevPage = 5) : prevPage + 5;
    });
  };

  return (
    <div
      className="anime_big_box_container_style"
      onMouseOver={handleMouseHover}
      onMouseOut={handleMouseOut}
    >
      {mouseHover && (
        <GrFormPrevious
          className="nav_button_style prev"
          onClick={handlePrevButton}
          title="previous button"
        />
      )}
      {/* <CSSTransition
        in={stateValue}
        timeout={200}
        classNames={"component_rendering_style"}
      > */}
      <div className="anime_big_box_style">
        <AnimeBigBox animeDetail={animesDetails[pageCount - 5]} />
        <AnimeBigBox animeDetail={animesDetails[pageCount - 4]} />
        <AnimeBigBox animeDetail={animesDetails[pageCount - 3]} />
        <AnimeBigBox animeDetail={animesDetails[pageCount - 2]} />
        <AnimeBigBox animeDetail={animesDetails[pageCount - 1]} />
      </div>
      {/* </CSSTransition> */}
      {mouseHover && (
        <GrFormNext
          className="nav_button_style next"
          onClick={handleNextButton}
          title="next button"
        />
      )}
    </div>
  );
}

export default AnimeBoxComponent;
