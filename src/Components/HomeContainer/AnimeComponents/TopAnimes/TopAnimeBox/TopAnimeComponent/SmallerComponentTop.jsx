import "../AnimeBox.scss";

function SmallerComponentTop({ animeDetails, InfoImage }) {
  // console.log(animeDetails);

  return (
    <div className="anime_info">
      <h4>
        {animeDetails?.title_english
          ? animeDetails?.title_english
          : animeDetails?.title}
      </h4>
      <h5 className="anime_p">
        Popularity: {animeDetails?.popularity ? animeDetails.popularity : ""}
      </h5>
      <p>Type: {animeDetails?.type}</p>
      <p>
        Year:
        <InfoImage className="icon_styling" />
        {animeDetails?.year ? animeDetails?.year : "NA"}
      </p>
      <p>Anime Status: {animeDetails.status}</p>
      <p>
        Genres:{" "}
        {animeDetails.genres.map((genre) => (
          <span key={genre.mal_id}>{genre.name + " "}</span>
        ))}
      </p>
    </div>
  );
}

export default SmallerComponentTop;
