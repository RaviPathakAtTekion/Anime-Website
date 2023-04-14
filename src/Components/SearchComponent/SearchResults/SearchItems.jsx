import { useNavigate } from "react-router-dom";
import "./SearchResults.scss";

function SearchItems({ item, type }) {
  const navigate = useNavigate();
  const navigateToAnime = (item) => {
    navigate(`/anime/${item.mal_id}`, { state: { content: item, type: type } });
  };

  return (
    <div
      className="search_each_item_container"
      onClick={() => navigateToAnime(item)}
    >
      <div className="each_item_inner_style">
        <div className="search_content_image">
          <img src={item.images.jpg.image_url}></img>
        </div>
        <div className="search_anime_details">
          <h5>
            Title -{" "}
            {item?.title_english !== null ? item.title_english : item.title}
          </h5>
          <p>
            {item.episodes ? "Episodes - " : ""}
            {item.episodes ? item.episodes : ""}
          </p>
          <p>Status - {item.status}</p>
          <p>Type - {item.type}</p>
        </div>
      </div>
    </div>
  );
}

export default SearchItems;
