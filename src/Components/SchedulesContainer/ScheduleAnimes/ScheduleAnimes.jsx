import { useNavigate } from "react-router-dom";
import "./ScheduleAnimes.scss";

function ScheduleAnimes({ scheduleAnime }) {
  const navigate = useNavigate();

  const navigateToAnimePage = (anime) => {
    navigate(`/anime/${anime.mal_id}`, {
      state: { content: anime, type: "anime" },
    });
  };

  return (
    <div className="schedule_animes_container">
      {scheduleAnime.map((anime) => (
        <div
          className="schedule_anime_element"
          key={anime.mal_id}
          onClick={() => navigateToAnimePage(anime)}
        >
          <div className="schedule_anime_image_container">
            <img src={anime.images.webp.image_url} alt={anime.title}></img>
          </div>
          <div className="overlay_schedule">
            <h5>{anime.title_english ? anime.title_english : anime.title}</h5>
            <p>Score: {anime.rank}</p>
            <p>Status: {anime.status}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ScheduleAnimes;
