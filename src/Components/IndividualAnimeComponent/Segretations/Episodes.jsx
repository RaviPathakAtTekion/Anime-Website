import EpisodesElements from "./Elements/EpisodesElements";
import "../AnimeExtraInfo.scss";

function Episodes({ episodes }) {

  return (
    <div className="anime_episodes_container">
      <h2 className="anime_specific_title">Episodes</h2>
      <div className="anime_episodes_inside_container">
        <h4 className="total_episodes">Total Episodes - {episodes.length}</h4>
        {episodes.map((episode, id) => (
          <EpisodesElements key={id} episode={episode} episodeNumber={id + 1}/>
        ))}
      </div>
    </div>
  );
}

export default Episodes;
