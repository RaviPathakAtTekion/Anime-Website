import { useNavigate } from "react-router-dom";
import "./AnimeBoxStyle.scss";

function AnimeBigBox({ animeDetail }) {
  const navigate = useNavigate();

  const handleMoveToAnimePage = (content) => {
    navigate(`/anime/${content.mal_id}`, {
      state: { content: content, type: "anime" },
    });
  };

  return (
    <div
      className="bigBox__style"
      onClick={() => handleMoveToAnimePage(animeDetail)}
    >
      <img
        src={animeDetail.images.webp.image_url}
        alt={animeDetail.title}
      ></img>
      <div className="overlay">
        <h4>
          {animeDetail?.title_english
            ? animeDetail.title_english
            : animeDetail?.title}
        </h4>
        <p>Rank: {animeDetail.rank}</p>
        <p>Score: {animeDetail.score}</p>
        <p>
          {animeDetail?.episodes ? "Episodes: " + animeDetail.episodes : ""}
        </p>
      </div>
    </div>
  );
}

export default AnimeBigBox;
