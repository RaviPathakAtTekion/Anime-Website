import { useNavigate } from "react-router-dom";
import SmallerComponentTop from "./SmallerComponentTop";
import "../AnimeBox.scss";

function AnimeBoxComponent({ animeDetails, InfoImage }) {
  const navigate = useNavigate();

  const handleNavigationToAnime = () => {
    navigate(`/anime/${animeDetails.mal_id}`, {
      state: { content: animeDetails, type: "anime" },
    });
  };

  return (
    <div className="component_anime_style" onClick={handleNavigationToAnime}>
      <img
        src={animeDetails.images.webp.image_url}
        alt={animeDetails.title}
      ></img>
      <SmallerComponentTop animeDetails={animeDetails} InfoImage={InfoImage} />
    </div>
  );
}

export default AnimeBoxComponent;
