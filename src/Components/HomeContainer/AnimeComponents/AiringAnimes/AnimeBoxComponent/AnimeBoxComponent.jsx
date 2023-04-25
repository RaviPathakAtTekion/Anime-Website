import { useState } from "react";
// import { CSSTransition } from "react-transition-group";
import AnimeBigBox from "./AnimeBoxStyle/AnimeBigBox.jsx";

import "./AnimeBoxComponent.scss";

// anime box container component
function AnimeBoxComponent({ animesDetails }) {
  // mouse hover status state
  const [mouseHover, setMouseHover] = useState(false);

  // const [stateValue, setStateValue] = useState(false);

  const handleMouseHover = () => {
    setMouseHover(true);
  };

  const handleMouseOut = () => {
    setMouseHover(false);
  };

  return (
    <div
      className="anime_big_box_container_style"
      onMouseOver={handleMouseHover}
      onMouseOut={handleMouseOut}
    >
      {mouseHover ? (
        <h3 className="anime_scroll_message">Scroll to see more...</h3>
      ) : (
        ""
      )}
      <div className="anime_big_box_style">
        {animesDetails.map((anime) => (
          <AnimeBigBox key={anime.mal_id} animeDetail={anime} />
        ))}
      </div>
    </div>
  );
}

export default AnimeBoxComponent;
