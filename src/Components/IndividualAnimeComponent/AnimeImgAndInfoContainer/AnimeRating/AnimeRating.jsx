import "./AnimeRating.scss";

function AnimeRating({ animeContent }) {
  const width = animeContent.score * 10;

  return (
    <div className="anime-basic_details">
      <div className="anime_details_style">
        <div>
          <span>Rank </span>
          <p>- {animeContent.rank ? animeContent.rank : "NA"}</p>
        </div>
        <div>
          <span>Popularity </span>
          <p>- {animeContent.popularity}</p>
        </div>
        <div>
          <span>Type </span>
          <p> - {animeContent.type}</p>
        </div>
        <div>
          <span>{animeContent.source ? "Source" : "Chapters"} </span>
          <p>
            {" "}
            -{" "}
            {animeContent?.source
              ? animeContent.source
              : animeContent.chapters === null
              ? "On Going"
              : animeContent.chapters}
          </p>
        </div>
        <div>
          <span>Themes </span>
          <p>
            -{" "}
            {animeContent?.themes.length !== 0 ? (
              animeContent.themes.map((theme, id) => (
                <span className="themes_style" key={id}>
                  {theme.name}
                </span>
              ))
            ) : (
              <span>NA</span>
            )}
          </p>
        </div>
        <div>
          <span>Score </span>
          <p>- {animeContent.score ? animeContent.score : "NA"}</p>
          {animeContent.score !== null ? (
            <div className="anime_score_main_div">
              <div
                style={{ width: width + "%" }}
                className="anime_score_inner_div"
              ></div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="anime_details_style">
        <div>
          <span>Status </span>
          <p>- {animeContent.status}</p>
        </div>
        <div>
          <span>{animeContent?.broadcast ? "Air Time" : "Published"} </span>
          <p>
            -{" "}
            {animeContent?.broadcast
              ? animeContent.broadcast.string +
                " " +
                animeContent.broadcast.timezone
              : animeContent.published.string}
          </p>
        </div>
        <div>
          <span>Genres </span>
          <p>
            {" "}
            -
            {animeContent.genres.map((genre, id) => (
              <span className="genres_style" key={id}>
                {genre.name}
              </span>
            ))}
          </p>
        </div>
        <div>
          <span>Favorites </span>
          <p>- {animeContent.favorites}</p>
        </div>
        <div>
          <span>Japanese Title </span>
          <p> - {animeContent.title}</p>
        </div>
        <div>
          <span>{animeContent?.rating ? "Rating" : "Volumes"} </span>
          <p>
            {" "}
            -{" "}
            {animeContent.rating
              ? animeContent.rating
              : animeContent.volumes === null
              ? "On Going"
              : animeContent.volumes}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AnimeRating;
