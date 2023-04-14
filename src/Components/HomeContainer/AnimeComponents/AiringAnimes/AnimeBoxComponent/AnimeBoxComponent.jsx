import { useEffect, useState } from "react";
import AnimeBigBox from "./AnimeBoxStyle/AnimeBigBox.jsx";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

import "./AnimeBoxComponent.scss";

function AnimeBoxComponent({ animesDetails }) {
  const [pageCount, setPageCount] = useState(5);
  const [mouseHover, setMouseHover] = useState(false);

  const changePageCount = () => {
    setInterval(() => {
      setPageCount((prevPage) => {
        return prevPage === 25 ? (prevPage = 5) : prevPage + 5;
      });
    }, 10000);
  };

  const handleMouseHover = () => {
    setMouseHover(true);
  };

  const handleMouseOut = () => {
    setMouseHover(false);
  };

  const handlePrevButton = () => {
    setPageCount((prevPage) => {
      return prevPage === 5 ? (prevPage = 5) : prevPage - 5;
    });
  };

  const handleNextButton = () => {
    setPageCount((prevPage) => {
      return prevPage === 25 ? (prevPage = 5) : prevPage + 5;
    });
  };

  useEffect(() => {
    changePageCount();
  }, []);

  return (
    <div
      className="anime_big_box_style"
      onMouseOver={handleMouseHover}
      onMouseOut={handleMouseOut}
    >
      {mouseHover && (
        <GrFormPrevious
          className="nav_button_style"
          onClick={handlePrevButton}
          title="previous button"
        />
      )}
      <AnimeBigBox animeDetail={animesDetails.data[pageCount - 5]} />
      <AnimeBigBox animeDetail={animesDetails.data[pageCount - 4]} />
      <AnimeBigBox animeDetail={animesDetails.data[pageCount - 3]} />
      <AnimeBigBox animeDetail={animesDetails.data[pageCount - 2]} />
      <AnimeBigBox animeDetail={animesDetails.data[pageCount - 1]} />
      {mouseHover && (
        <GrFormNext
          className="nav_button_style"
          onClick={handleNextButton}
          title="next button"
        />
      )}
    </div>
  );
}

export default AnimeBoxComponent;
