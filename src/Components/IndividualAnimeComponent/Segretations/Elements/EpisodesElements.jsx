import "./EpisodesElements.scss";

function EpisodesElements({ episode, episodeNumber }) {
  return (
    <div className="episode_container">
      <a href={episode.url}>
        <h3 className="episode_number">Ep - {episodeNumber}</h3>
      </a>
      <h3>Title - {episode.title}</h3>
      <p>Air Date - {episode.aired ? episode.aired.substring(0, 10) : ""}</p>
      <p>Score - {episode.score}</p>
      <div className="extra_details_episodes">
        <p>
          Recap Episode - {episode.recap === true ? "true" : "false"}
        </p>
        <p>
          Filler Episode - {episode.filler === true ? "true" : "false"}
        </p>
      </div>
    </div>
  );
}

export default EpisodesElements;
