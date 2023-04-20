import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AnimeContext from "../../../AnimeContext";

import "./EpisodesElements.scss";

function EpisodesElements({ episode, episodeNumber, pageNumber }) {
  const navigate = useNavigate();
  const animeContext = useContext(AnimeContext);

  const handleNavigationToHomePage = () => {
    navigate("/download", { state: { animeContext } });
  };
  return (
    <div className="episode_container">
      <h3 className="episode_number" onClick={handleNavigationToHomePage}>
        Ep -{" "}
        {pageNumber === 1
          ? 0 + episodeNumber
          : (pageNumber - 1) * 100 + episodeNumber}
      </h3>
      <h3>Title - {episode.title}</h3>
      <p>Air Date - {episode.aired ? episode.aired.substring(0, 10) : ""}</p>
      <p>Score - {episode.score}</p>
      <div className="extra_details_episodes">
        <p>Recap Episode - {episode.recap === true ? "true" : "false"}</p>
        <p>Filler Episode - {episode.filler === true ? "true" : "false"}</p>
      </div>
    </div>
  );
}

export default EpisodesElements;
