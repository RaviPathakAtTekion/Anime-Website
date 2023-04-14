import "./AnimeImgAndInfoContainer.scss";
import AnimeSummary from "./AnimeRating/AnimeSummary/AnimeSummary";
import AnimeRating from "./AnimeRating/AnimeRating";
import AnimeTrailerView from "./AnimeTrailerView/AnimeTrailerView.jsx";

function AnimeImgAndInfoContainer({ animeContent }) {

  return (
    <div className="anime_image_anime_info_container">
      <AnimeTrailerView animeContent={animeContent} />
      <div className="anime_info_page">
        <AnimeRating animeContent={animeContent} />
        <AnimeSummary animeContent={animeContent} />
      </div>
    </div>
  );
}

export default AnimeImgAndInfoContainer;
