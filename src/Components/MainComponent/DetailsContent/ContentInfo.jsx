import "../DetailsContent/DetailsContent.scss";
import { useNavigate } from "react-router-dom";

function ContentInfo({ content, type }) {
  const navigate = useNavigate();

  const handleNavigateToInfoPage = (content) => {
    let typeContent = type;
    if (type === "Anime") {
      typeContent = type.toLowerCase();
    } else if (type === "Manga") {
      typeContent = type.toLowerCase();
    } else {
      typeContent = "anime";
    }

    navigate(`/anime/${content.mal_id}`, {
      state: { content: content, type: typeContent },
    });
  };

  return (
    <div
      className="container_element_style"
      onClick={() => handleNavigateToInfoPage(content)}
    >
      <img src={content.images.webp.image_url} alt={content.title} />
      <div className="overlay">
        <h5>{content.title_english ? content.title_english : content.title}</h5>
        {content.rank !== null ? (
          <p>Rank: {content.rank}</p>
        ) : (
          <p>Popularity: {content.popularity}</p>
        )}

        {content.score !== null ? (
          <p>Score: {content.score}</p>
        ) : (
          <p>Type: {content.type}</p>
        )}
      </div>
    </div>
  );
}

export default ContentInfo;
