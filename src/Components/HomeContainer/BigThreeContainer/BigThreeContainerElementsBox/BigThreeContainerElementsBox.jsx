import { useNavigate } from "react-router-dom";
import "./BigThreeContainerElementsBox.scss";

function BigThreeContainerElementsBox({ animeData }) {
  const navigate = useNavigate();

  const handleNavigationToAnime = (anime) => {
    navigate(`/anime/${anime.mali_id}`, {
      state: { content: anime, type: "anime" },
    });
  };

  return (
    <div
      className="bigThree_inside_container"
      onClick={() => handleNavigationToAnime(animeData)}
    >
      <div className="bigThree_anime_image_container">
        <img
          src={animeData.images.jpg.large_image_url}
          alt={animeData.title}
        ></img>
      </div>
      <div className="bigThree_anime_details">
        <h2>
          {animeData?.title_english ? animeData.title_english : animeData.title}
        </h2>
        <div className="bigThree_details_innerContainer">
          <div className="bigThree_details_innerContainer_parts">
            <p>
              <span>Popularity -</span>{" "}
              {animeData?.popularity ? animeData.popularity : "NA"}
            </p>
            <p>
              <span>Rank -</span> {animeData?.rank ? animeData.rank : "NA"}
            </p>
            <p>
              <span>Status - </span> {animeData.status}
            </p>
            <p>
              <span>Year - </span> {animeData.year}
            </p>
            <p>
              <span>Score - </span> {animeData.score}
            </p>
            <div className="bigThree_details_innerContainer_parts">
              <p>
                <span>Synopsis - </span> {animeData.synopsis}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BigThreeContainerElementsBox;
