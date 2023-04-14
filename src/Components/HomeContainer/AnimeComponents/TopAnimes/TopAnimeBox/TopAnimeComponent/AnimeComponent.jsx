import "../AnimeBox.scss";
import SmallerComponentTop from "./SmallerComponentTop";

function AnimeBoxComponent({ animeDetails, InfoImage }) {

  return (
    <div className="component_anime_style">
      <img src={animeDetails.images.webp.image_url} alt={animeDetails.title}>
      </img>
      <SmallerComponentTop animeDetails={animeDetails} InfoImage={InfoImage}/>
    </div>
  );
}

export default AnimeBoxComponent;
