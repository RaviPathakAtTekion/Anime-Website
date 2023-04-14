import "./SideBar.scss";

function SideBar({ genres }) {
  return (
    <div>
      <h3 className="genre_title_style">Genres</h3>
      <div className="sideabr_elements">
        {genres.map((genre) => (
          <div key={genre.mal_id} className="sidebar_genres_element">
            <a href={genre.url}>{genre.name}</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
