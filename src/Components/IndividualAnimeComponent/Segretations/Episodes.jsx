import { PrevButton, NextButton } from "../../../assets/navItems";
import EpisodesElements from "./Elements/EpisodesElements";
import "../AnimeExtraInfo.scss";

function Episodes({
  episodes,
  nextPageStatus,
  nextPage,
  prevPage,
  hoverOver,
  pageNumber,
  lastPage,
}) {
  
  return (
    <div className="anime_episodes_container">
      <h2 className="anime_specific_title">Episodes</h2>
      <div className="anime_episodes_inside_container">
        <div className="title_button_ep_style">
          {hoverOver && (pageNumber === lastPage || nextPageStatus) && pageNumber !== 1 ? (
            <PrevButton onClick={prevPage} className="ep_navigation_button" />
          ) : (
            ""
          )}
          <h4 className="total_episodes">
            Total Episodes - {episodes.length} in This Page
          </h4>
          {hoverOver && nextPageStatus && pageNumber !== lastPage ? (
            <NextButton
              onClick={() => nextPage(lastPage)}
              className="ep_navigation_button"
            />
          ) : (
            ""
          )}
        </div>
        {episodes.map((episode, id) => (
          <EpisodesElements
            key={id}
            episode={episode}
            episodeNumber={id + 1}
            pageNumber={pageNumber}
          />
        ))}
      </div>
    </div>
  );
}

export default Episodes;
